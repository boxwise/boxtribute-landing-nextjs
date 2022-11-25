import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/index.css";
// Only solution I found to overwrite the background color of the map is to overwrite some css classes in this file.
// ToDo: find a better solution
import "leaflet/dist/leaflet.css";
import "../styles/map.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
