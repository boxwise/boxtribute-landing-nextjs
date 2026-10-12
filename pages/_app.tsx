import { AppProps } from "next/app";
import { useRouter } from "next/router";
import PlausibleProvider from "next-plausible";
import { MatomoProvider } from "matomo-tracker-for-react";
import Layout from "../components/Layout";
import "../styles/index.css";
// Only solution I found to overwrite the background color of the map is to overwrite some css classes in this file.
// ToDo: find a better solution
import "leaflet/dist/leaflet.css";
import "../styles/map.css";

const plausibleScriptId = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_ID;
const matomoUrlBase = "https://boxtribute.matomo.cloud";
const matomoSiteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  let content = (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

  // Always render MatomoProvider so useMatomo() never throws,
  // even when env vars are missing (e.g. during build/prerender)
  // or when tracking should be off (e.g. local dev).
  content = (
    <MatomoProvider
      urlBase={matomoUrlBase}
      siteId={matomoSiteId ?? ""}
      path={router.asPath}
      trackCookies={false}
      disabled={!matomoSiteId}
    >
      {content}
    </MatomoProvider>
  );

  if (plausibleScriptId) {
    content = (
      <PlausibleProvider src={`https://plausible.io/js/pa-${plausibleScriptId}.js`}>
        {content}
      </PlausibleProvider>
    );
  }

  return content;
}
