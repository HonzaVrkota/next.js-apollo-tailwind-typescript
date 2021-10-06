import _ from "lodash";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { Fragment } from "react";
import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      /**
       * ! TODO Přidat nastavení jazyka podle url adresy
       */
      <Html lang="cs">
        <Head>
          {/* <meta name="wedos-online" content="8Mt6oUkQLlNXWIZfybe1" /> */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            href="/fonts/Cormorant/CormorantGaramond-SemiBold.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Cormorant/CormorantGaramond-Light.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Cormorant/CormorantGaramond-BoldItalic.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Cormorant/CormorantGaramond-Bold.otf"
            as="font"
            crossOrigin=""
          /> */}
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {!_.isEmpty(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) ? (
            <Fragment>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
                }}
              />
            </Fragment>
          ) : null}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
