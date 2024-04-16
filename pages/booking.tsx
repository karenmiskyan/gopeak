import Layout from "components/shared/Layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RoutingPath from "components/shared/RoutingPath";
import HeadTrackingScripts, {HeadTrackingScriptsProps} from "../components/shared/HeadTrackingScripts";
import React from "react";
import {useRouter} from "next/router";
import CalendlyWidget from "../components/shared/CalendlyWidget";
import Config from "../utils/config";
import AddScripts from "../components/shared/AddScripts";

interface OrderNowProps {}

const pageSEOScripts = Config.SEO.scripts.pages.booking;

const BookingDemo = () => {
  const { t: commonT } = useTranslation("common");
  const { t: bookingT } = useTranslation("booking");
  const metaDescription = bookingT("meta_desc");
  const metaTitle = bookingT("meta_title");
  const router = useRouter();
  const siteUrl = process.env.SITE_FRONT_URL + router.asPath;
  
  const title = bookingT("title");
  const headProps:HeadTrackingScriptsProps = {
    siteUrl,
    metaTitle,
    metaDescription
  }
  const { query } = router;
  
  
  // Access individual query parameters
  const selectedPlan = query?.plan || '';
  
  return (
    <Layout t={commonT} pageClass='booking-demo-wrapper'>
      <Head>
        <title>{metaTitle}</title>
        <HeadTrackingScripts {...headProps}/>
        <meta title={metaTitle} />
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://www.gopeak.io/booking" />
      </Head>
      <AddScripts items={[pageSEOScripts]}/>
      <RoutingPath paths={[{text:"Home", path: '/'},{text:"Order now", path: '/booking'}]} />
      <section className="row m-auto pt-28 pt-sm-30 pt-md-36 justify-content-between px-7 px-sm-40 px-md-46">
      <h1 className="h3 mt-5 text-center">{title}</h1>
      <p className="text-sm mb-4 fw-400 text-color-midnight-90 text-center">{selectedPlan ? `You selected ${selectedPlan} plan`: 'Choose your plan now and get free consultation'}</p>
      <CalendlyWidget/>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<OrderNowProps> = async ({
                                                                      locale,
                                                                    }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common", "booking"])),
      // Will be passed to the page component as props
    },
  };
};

export default BookingDemo;
