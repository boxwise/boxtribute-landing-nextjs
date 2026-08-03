import React from "react";
import PageTitle from "../components/PageTitle";
import TextBlock from "../components/TextBlock";
import { getDataBySlug } from "../lib/api";
import DynamicMap from "../components/Map";
import HeadingText3366 from "../components/HeadingText3366";
import Footer, { IFooterData } from "../components/Footer";
import { ILatLng, IBaseMarker } from "../interfaces/global";

interface IMapData {
  center: ILatLng;
  base_markers: IBaseMarker[];
}

interface IProps {
  mapData: IMapData;
  footerData: IFooterData;
}

export const Partners = ({ mapData, footerData }: IProps) => {
  return (
    <>
      <section className="bg-navy">
        <div className="pt-8 md:pt-12 text-white">
          <PageTitle title="Partner With Us" />
        </div>
        <div className="container pb-8 md:pb-12 pt-4 md:pt-6 mx-auto px-4 md:px-16 bg-navy">
          <TextBlock
            text="Together we are stronger."
            color="white"
            bg_color="inherit"
            align="center"
            htmlTag="h6"
          />
        </div>
      </section>
      <section className="bg-white">
        <div className="container py-4 md:py-6 mx-auto px-4 md:px-16 ">
          <TextBlock
            text="Find out where our partners use us!"
            color="black"
            bg_color="inherit"
            align="left"
            htmlTag="h3"
          />
        </div>
        <DynamicMap center={mapData.center} baseMarkers={mapData.base_markers} />
      </section>
      <section className="bg-lightgray">
        <HeadingText3366 />
      </section>
      <section className="bg-white">
        <div className="container mx-auto py-4 md:py-12">
          <TextBlock
            text="<p>Interested in implementing Boxtribute’s solutions and partnering with us?</p>
            <p>Contact us at <a href='mailto:hello@boxtribute.org'><strong>hello@boxtribute.org</strong></a></p>"
            color="black"
            bg_color="inherit"
            align="center"
            className="lg-text"
          />
        </div>
      </section>
      <section className="bg-lightblue">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-14">
          <h3 className="mb-4">Partner Resources</h3>
          <p className="text-base md:text-lg mb-10 max-w-2xl">
            As part of our work, we have developed some resources to support current and future
            partners in their planning and field operations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <a
                href="https://sheets.boxtribute.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-red text-lg md:text-xl font-bold hover:underline mb-3"
              >
                Boxtribute Sheets <span aria-hidden="true">→</span>
              </a>
              <p className="text-sm md:text-base">
                For current users, our browser add-on allows for easy bulk registration of new
                beneficiaries or incoming stock.
              </p>
            </div>
            <div>
              <a
                href="https://docs.google.com/spreadsheets/d/1GYFSQ4WbRfgODo4SoDzUGph8PdyTzHLhEOIxT24XvTo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-red text-lg md:text-xl font-bold hover:underline mb-3"
              >
                Boxtribute onboarding template <span aria-hidden="true">→</span>
              </a>
              <p className="text-sm md:text-base">
                New and potential partners can check out our onboarding template, which we would use
                work with the implementing field team to get you started!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lightgray">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold">ASSORT Standard</h3>
            </div>
            <div>
              <p className="text-base md:text-lg mb-6">
                A robust but easy way to deploy inventory classification system for all! Current and
                future partners can enable this in part or in full for their warehouse.
              </p>
              <a
                href="/assort-standard"
                className="inline-flex items-center gap-3 text-red text-lg font-bold hover:underline"
              >
                Explore ASSORT <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer footerData={footerData} />
    </>
  );
};

export default Partners;

export const getStaticProps = async () => {
  const mapData = getDataBySlug("map/map");
  const footerData = getDataBySlug("footer/footer");

  return {
    props: { mapData, footerData },
  };
};
