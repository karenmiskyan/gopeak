import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <meta
        name="description"
        content="Improve your online presence, build contextual backlinks, optimize your website, and create engaging content to go up in search rankings and reach the digital peak."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      {/* {Favicon defeault} */}
      <link
        rel="shortcut icon"
        type="image/png"
        href="/favicon.png"
        sizes="16x16 32x32 48x48 64x64 128x128"
      />
      <link rel="manifest" href="/manifest.json" />
      {/* {<!-- For iOS devices -->} */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      {/* {<!-- For Android devices -->} */}
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default Meta;
