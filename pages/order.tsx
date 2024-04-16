import Layout from "components/shared/Layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RoutingPath from "components/shared/RoutingPath";
import OrderNowForm from "components/pages/Order/OrderNowForm";
import HeadTrackingScripts from "../components/shared/HeadTrackingScripts";
import React from "react";

interface OrderNowProps {}

const OrderNow = () => {
  const { t: commonT } = useTranslation("common");
  const { t: orderT } = useTranslation("order");
  const metaDescription = orderT("meta_desc");
  const metaTitle = orderT("meta_title");
  
  
  const title = orderT("title");

  return (
    <Layout t={commonT}>
      <Head>
        <title>{metaTitle}</title>
        <HeadTrackingScripts show = {false}/>
        <meta title={metaTitle} />
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://www.gopeak.io/order" />
      </Head>
      <RoutingPath paths={[{text:"Home", path: '/'},{text:"Order now", path: '/order'}]} />
      <OrderNowForm t={orderT} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<OrderNowProps> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common", "order"])),
      // Will be passed to the page component as props
    },
  };
};

export default OrderNow;
