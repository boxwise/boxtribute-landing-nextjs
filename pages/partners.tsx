import React from "react";
import PageTitle from "../components/PageTitle";
import TextBlock from "../components/TextBlock";
import Link from "next/link";
import Image from "next/image";
import { getDataBySlug } from "../lib/api";
import DynamicMap, { ILatLng, IBaseMarker } from "../components/Map";
import { Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";
import Footer, { IFooterData } from "../components/Footer";

interface IMapData {
  center: ILatLng;
  base_markers: IBaseMarker;
}

interface IProps {
  mapData: IMapData;
  footerData: I;
}

export const Partners = ({ mapData, footerData }: IProps) => {
  return (
    <>
      <section className="bg-navy">
        <div className="pt-8 md:pt-12 text-white">
          <PageTitle title="Partner With Us" />
        </div>
        <div className="container pb-8 md:pb-12 pt-4 md:pb-6 mx-auto px-4 md:px-16 md:text-2xl bg-navy">
          <TextBlock
            text="Together we are stronger."
            color="white"
            bg_color="inherit"
            align="center"
          />
        </div>
      </section>
      <DynamicMap
        center={[mapData.center.lat, mapData.center.long]}
        baseMarkers={mapData.base_markers}
      />
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
