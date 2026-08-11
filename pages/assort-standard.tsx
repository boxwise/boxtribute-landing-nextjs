import React, { useMemo, useState, useCallback } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  SortingState,
  ColumnFiltersState,
  FilterFn,
} from "@tanstack/react-table";
import Select, { MultiValue, StylesConfig, components, OptionProps } from "react-select";
import Image from "next/image";
import Footer, { IFooterData } from "../components/Footer";
import PageTitle from "../components/PageTitle";
import { getDataBySlug } from "../lib/api";
import standardProductsData from "../data/assort/standard_products.json";

interface IStandardProduct {
  id: string;
  name: string;
  categoryName: string;
  sizeRangeName: string;
  gender: string;
  version: number;
}

interface ISelectOption {
  value: string;
  label: string;
}

interface IProps {
  footerData: IFooterData;
}

const multiSelectFilterFn: FilterFn<IStandardProduct> = (row, columnId, filterValue) => {
  if (!filterValue || filterValue.length === 0) return true;
  const cellValue = row.getValue<string>(columnId);
  return (filterValue as string[]).includes(cellValue);
};

const nameFilterFn: FilterFn<IStandardProduct> = (row, columnId, filterValue) => {
  if (!filterValue) return true;
  const cellValue = row.getValue<string>(columnId).toLowerCase();
  return cellValue.includes((filterValue as string).toLowerCase());
};

const CheckOption = (props: OptionProps<ISelectOption, true>) => {
  return (
    <components.Option {...props}>
      <div className="flex items-center justify-between">
        <span>{props.label}</span>
        {props.isSelected && (
          <svg
            className="w-4 h-4 text-navy ml-2 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d={
                "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414" +
                "L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              }
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </components.Option>
  );
};

const multiSelectStyles: StylesConfig<ISelectOption, true> = {
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#AACFE3",
    borderRadius: "9999px",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#000",
    fontSize: "0.85em",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "#000",
    borderRadius: "9999px",
    ":hover": { backgroundColor: "#29335F", color: "#fff" },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#f0f7fc" : "#fff",
    color: "#000",
    cursor: "pointer",
    fontSize: "0.85em",
  }),
  control: (base) => ({
    ...base,
    minHeight: "42px",
    borderColor: "#d1d5db",
    boxShadow: "none",
    "&:hover": { borderColor: "#9ca3af" },
    fontSize: "0.85em",
  }),
};

const AssortTable = ({ products }: { products: IStandardProduct[] }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [nameFilter, setNameFilter] = useState("");

  const getUniqueValues = useCallback(
    (key: keyof IStandardProduct): ISelectOption[] => {
      const vals = Array.from(new Set(products.map((p) => p[key] as string))).sort();
      return vals.map((v) => ({ value: v, label: v }));
    },
    [products],
  );

  const categoryOptions = useMemo(() => getUniqueValues("categoryName"), [getUniqueValues]);
  const sizeOptions = useMemo(() => getUniqueValues("sizeRangeName"), [getUniqueValues]);
  const genderOptions = useMemo(() => getUniqueValues("gender"), [getUniqueValues]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        enableSorting: true,
        sortingFn: (a: { original: IStandardProduct }, b: { original: IStandardProduct }) =>
          parseInt(a.original.id, 10) - parseInt(b.original.id, 10),
      },
      {
        accessorKey: "name",
        header: "Name",
        enableSorting: true,
        filterFn: nameFilterFn,
      },
      {
        accessorKey: "categoryName",
        header: "Category",
        enableSorting: true,
        filterFn: multiSelectFilterFn,
      },
      {
        accessorKey: "sizeRangeName",
        header: "Size range",
        enableSorting: true,
        filterFn: multiSelectFilterFn,
      },
      {
        accessorKey: "gender",
        header: "Gender",
        enableSorting: true,
        filterFn: multiSelectFilterFn,
      },
    ],
    [],
  );

  const table = useReactTable({
    data: products,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const handleNameFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setNameFilter(val);
    table.getColumn("name")?.setFilterValue(val || undefined);
  };

  const handleMultiFilter = (
    selectedOptions: MultiValue<ISelectOption>,
    columnId: string,
  ) => {
    const values = selectedOptions.map((o) => o.value);
    table.getColumn(columnId)?.setFilterValue(values.length > 0 ? values : undefined);
  };

  const exportCsv = () => {
    const rows = table.getFilteredRowModel().rows;
    const headers = ["ID", "Name", "Category", "Size range", "Gender"];
    const csvRows = [
      headers.join(","),
      ...rows.map((row) => {
        const p = row.original;
        return [p.id, `"${p.name}"`, `"${p.categoryName}"`, `"${p.sizeRangeName}"`, p.gender].join(
          ",",
        );
      }),
    ];
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "assort-data.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by name</label>
          <input
            type="text"
            value={nameFilter}
            onChange={handleNameFilter}
            placeholder="Search by name"
            className={
              "w-full border border-gray-300 rounded px-3 " +
              "hover:border-gray-400 focus:outline-none focus:border-gray-400"
            }
            style={{ minHeight: "42px", fontSize: "0.85em" }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by category
          </label>
          <Select<ISelectOption, true>
            isMulti
            options={categoryOptions}
            onChange={(sel) => handleMultiFilter(sel, "categoryName")}
            placeholder="Select"
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{ Option: CheckOption }}
            styles={multiSelectStyles}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by size range
          </label>
          <Select<ISelectOption, true>
            isMulti
            options={sizeOptions}
            onChange={(sel) => handleMultiFilter(sel, "sizeRangeName")}
            placeholder="Select"
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{ Option: CheckOption }}
            styles={multiSelectStyles}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by gender
          </label>
          <Select<ISelectOption, true>
            isMulti
            options={genderOptions}
            onChange={(sel) => handleMultiFilter(sel, "gender")}
            placeholder="Select"
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{ Option: CheckOption }}
            styles={multiSelectStyles}
          />
        </div>
      </div>

      <div className="flex justify-end mt-4 mb-4">
        <button
          onClick={exportCsv}
          className={
            "bg-red text-white px-6 py-2 rounded-md text-sm " +
            "font-medium hover:bg-opacity-90 transition-colors"
          }
        >
          Export data
        </button>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-lightgray">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={
                      "px-4 py-3 text-left font-bold text-gray-900 " +
                      "cursor-pointer select-none border-b border-gray-200"
                    }
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      <span className="text-gray-400">
                        {header.column.getIsSorted() === "asc"
                          ? " ▲"
                          : header.column.getIsSorted() === "desc"
                            ? " ▼"
                            : " ▼"}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const AssortStandard = ({ footerData }: IProps) => {
  const products = standardProductsData.standardProducts as IStandardProduct[];

  return (
    <>
      <section className="my-8 md:my-12">
        <PageTitle title="ASSORT Standard" />
      </section>

      <section className="bg-lightblue">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-12 lg:p-16">
            <h3 className="mb-6">What is ASSORT and its benefits?</h3>
            <ul className="list-disc pl-5 space-y-4 text-base md:text-lg">
              <li>
                ASSORT is a standardized inventory classification system developed in partnership
                with{" "}
                <a
                  href="https://www.iha.help"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  IHA
                </a>
                ,{" "}
                <a
                  href="https://hermine.global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  HERMINE
                </a>{" "}
                and{" "}
                <a
                  href="https://distributeaid.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  DistributeAid
                </a>{" "}
                in full compliance with SPHERE and CHS standards for easy and effective use even by
                small volunteer teams.
              </li>
              <li>
                The Boxtribute platform allows partners a one-click set up for products under the
                ASSORT standard as well as custom setup for their own products classifications!
              </li>
              <li>
                Using ASSORT as an inventory standard streamlines cooperation between humanitarian
                logistics teams, making sure that material aid can be processed quickly and reach
                people in need faster.
              </li>
            </ul>
          </div>
          <div className="relative min-h-[320px] lg:min-h-[480px]">
            <Image
              src="/uploads/sorting_clothes.png"
              alt="Sorting clothes"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4">Explore ASSORT</h3>
              <p className="text-base md:text-lg">
                Look through the items below to see if the ASSORT standard might work for you. We
                recommend also using the Guide and Sizing Chart for those actively implementing
                ASSORT in their warehouse.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <a
                href="/uploads/assort-guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red text-lg md:text-xl font-bold hover:underline"
                data-umami-event="PDF Download - ASSORT Guide"
              >
                ASSORT Guide <span aria-hidden="true">→</span>
              </a>
              <a
                href="/uploads/assort-sizing-chart.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red text-lg md:text-xl font-bold hover:underline"
                data-umami-event="PDF Download - ASSORT Sizing Chart"
              >
                Sizing Chart <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-gray-100">
        <div className="p-8 md:p-12 lg:p-16">
          <AssortTable products={products} />
        </div>
      </section>

      <Footer footerData={footerData} />
    </>
  );
};

export default AssortStandard;

export const getStaticProps = async () => {
  const footerData = getDataBySlug("footer/footer");
  return {
    props: { footerData },
  };
};
