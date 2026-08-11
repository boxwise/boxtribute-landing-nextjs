import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/index.css";
// Only solution I found to overwrite the background color of the map is to overwrite some css classes in this file.
// ToDo: find a better solution
import "leaflet/dist/leaflet.css";
import "../styles/map.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    cookieless_mode: "always",
    capture_pageview: false, // we capture manually on route change
  });
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => posthog.capture("$pageview");
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <PostHogProvider client={posthog}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PostHogProvider>
  );
}
