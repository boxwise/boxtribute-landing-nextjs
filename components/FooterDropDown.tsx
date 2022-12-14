import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { IReport } from "./Footer";
import Link from "next/link";

export interface IFooterDropDownData {
  title: string;
  reports: IReport[];
}

const FooterDropDown = ({ title, reports }: IFooterDropDownData) => {
  return (
    <div className="bg-navy text-white">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          {/* <Menu.Button className="inline-flex w-full justify-center lg:px-4 lg:py-2 cursor-pointer"> */}
          <Menu.Button className="inline-flex w-full justify-center cursor-pointer">
            {title}
            {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute origin-top-right right-0 z-20 mt-2 bg-navy border-2 border-white">
            <div className="p-2">
              {reports.map((e, i) => (
                <Menu.Item key={i}>
                  {() => (
                    <a target="_blank" href={e.report} rel="noopener noreferrer" className="block px-4 py-2">
                      {e.year}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
export default FooterDropDown;
