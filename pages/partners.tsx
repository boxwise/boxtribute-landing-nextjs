import React from "react";
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
