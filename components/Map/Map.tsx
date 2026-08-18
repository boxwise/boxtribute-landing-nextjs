import TextBlock from "../TextBlock";
import { useMediaQuery } from "../MediaQuery";
import L from "leaflet";
import { MapContainer, GeoJSON, Marker, Popup, useMap } from "react-leaflet";
import type { GeoJsonObject } from "geojson";
import { ILatLng, IBaseMarker } from "../../interfaces/global";
import _earthLands10Km from "./earth-lands-10km.json";
const earthLands10Km = _earthLands10Km as GeoJsonObject;

interface IMapContainerData {
  center: ILatLng;
  baseMarkers: IBaseMarker[];
}

const PIN_SVG_PATH =
  "M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.683 2.282 16.975 16.975 0 0 0 1.144.742zM12 13.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z";

function makeMarkerIcon(color: string) {
  return L.divIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="36" height="36" aria-hidden="true">
      <path fill-rule="evenodd" d="${PIN_SVG_PATH}" clip-rule="evenodd" />
    </svg>`,
    className: "",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
  });
}

const activeColor = "#EF4049";
const inactiveColor = "#F4E6A0";
const activeMarkerIcon = makeMarkerIcon(activeColor);
const endedMarkerIcon = makeMarkerIcon(inactiveColor);

function MapLegend() {
  useMap(); // ensures this component is rendered inside MapContainer context

  return (
    <div
      style={{
        position: "absolute",
        bottom: "24px",
        left: "12px",
        zIndex: 1000,
        background: "white",
        borderRadius: "6px",
        padding: "10px 14px",
        boxShadow: "0 1px 5px rgba(0,0,0,0.3)",
        fontFamily: '"Open Sans", sans-serif',
        fontSize: "13px",
        lineHeight: "1.5",
        pointerEvents: "none",
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: "6px" }}>Deployments</div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={activeColor} width="20" height="20" aria-hidden="true">
          <path fillRule="evenodd" d={PIN_SVG_PATH} clipRule="evenodd" />
        </svg>
        <span>active</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={inactiveColor} width="20" height="20" aria-hidden="true">
          <path fillRule="evenodd" d={PIN_SVG_PATH} clipRule="evenodd" />
        </svg>
        <span>ended</span>
      </div>
    </div>
  );
}

const Map = ({ center, baseMarkers }: IMapContainerData) => {
  const mapSize = {
    width: "100%",
    height: "80vh",
  };
  const landStyle = {
    fillOpacity: 0,
    color: "#AACFE3",
    weight: 4,
  };

  const isBreakpoint = useMediaQuery(768);

  return (
    <MapContainer
      center={[center.lat, center.long]}
      zoom={5}
      minZoom={3}
      maxZoom={9}
      scrollWheelZoom={false}
      style={mapSize}
      maxBounds={
        new L.LatLngBounds(L.latLng(73.259487, -24.909804), L.latLng(23.724612, 62.836341))
      }
    >
      <GeoJSON
        style={landStyle}
        data={earthLands10Km}
        attribution={
          "GeoJSON earth-lands from <a ref=\"https://github.com/simonepri/geo-maps\">" +
          "Geo-Maps</a> " +
          "&mdash; Map data &copy; <a href=\"https://www.openstreetmap.org/copyright\">" +
          "OpenStreetMap</a> contributors"
        }
      />
      {baseMarkers.map((marker, i) => (
        <Marker
          key={i}
          icon={marker.status === "inactive" ? endedMarkerIcon : activeMarkerIcon}
          position={[marker.position.lat, marker.position.long]}
        >
          <Popup
            maxWidth={isBreakpoint ? 200 : 400}
            maxHeight={400}
            autoPanPadding={L.point(50, 50)}
          >
            <a
              href={marker.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "inherit",
                color: "inherit",
              }}
            >
              <img src={marker.logo} className="h-32" />
              {marker.status === "inactive" && (<h5><em>Ended deployment</em></h5>)}
              <h3>{marker.base_name}</h3>
              <h4 className="bg-lightblue">{marker.organisation}</h4>
            </a>
            <TextBlock text={marker.description} htmlTag="p" className="sm-text" />
          </Popup>
        </Marker>
      ))}
      <MapLegend />
    </MapContainer>
  );
};

export default Map;
