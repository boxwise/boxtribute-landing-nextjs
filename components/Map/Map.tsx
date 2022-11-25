import Link from "next/link";
import { MapContainer, GeoJSON, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";
import { GeoJsonObject } from "geojson";
import { ILatLng, IBaseMarker } from "../../interfaces/global";
import _earthLands10Km from "./earth-lands-10km.json";
const earthLands10Km = _earthLands10Km as GeoJsonObject;

interface IMapContainerData {
  center: ILatLng;
  baseMarkers: IBaseMarker[];
}

const Map = ({ center, baseMarkers }: IMapContainerData) => {
  const mapSize = {
    width: "100vw",
    height: "80vh",
  };
  const landStyle = {
    fillOpacity: 0,
    color: "#AACFE3",
    weight: 4,
  };

  const markerIcon = icon({
    iconUrl: "/assets/svg/logo_inverse_03.webp",
    iconSize: [32, 46],
    iconAnchor: [16, 46],
  });

  return (
    <MapContainer
      center={[center.lat, center.long]}
      zoom={5}
      minZoom={3}
      maxZoom={9}
      scrollWheelZoom={false}
      style={mapSize}
    >
      <GeoJSON
        style={landStyle}
        data={earthLands10Km}
        attribution='GeoJSON earth-lands from <a ref="https://github.com/simonepri/geo-maps">Geo-Maps</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {baseMarkers.map((marker, i) => (
        <Marker key={i} icon={markerIcon} position={[marker.position.lat, marker.position.long]}>
          <Popup>
            <Link href={marker.url}>
              <>
                <img src={marker.logo} className="h-32" />
                <h3>{marker.base_name}</h3>
                <h4 className="bg-lightblue">{marker.organisation}</h4>
              </>
            </Link>
            <p>{marker.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
