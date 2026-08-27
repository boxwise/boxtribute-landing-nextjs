import { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";
import Layout from "../components/Layout";
import "../styles/index.css";
// Only solution I found to overwrite the background color of the map is to overwrite some css classes in this file.
// ToDo: find a better solution
import "leaflet/dist/leaflet.css";
import "../styles/map.css";

const plausibleScriptId = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_ID;

export default function MyApp({ Component, pageProps }: AppProps) {
  const content = (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

  if (plausibleScriptId) {
    return (
      <PlausibleProvider
        src={`https://plausible.io/js/pa-${plausibleScriptId}.js`}
      >
        {content}
      </PlausibleProvider>
    );
  }

  return content;
}
