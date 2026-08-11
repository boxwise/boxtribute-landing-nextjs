import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@300;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            async
            src="https://cloud.umami.is/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </Head>
      <body>
        <div className="max-w-[1920px] m-auto">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
