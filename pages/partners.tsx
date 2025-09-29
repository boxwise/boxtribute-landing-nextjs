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
