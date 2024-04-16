import "../scss/app.scss";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

//TODO: Add images for various sizings
//TODO: Check preact part which is in next.config.js

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
