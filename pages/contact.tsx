import Layout from "components/shared/Layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RoutingPath from "components/shared/RoutingPath";
import ContactUsForm from "components/pages/ContactUs/CotactUsForm";
import ReadyToTalkBusiness from "components/pages/ContactUs/ReadyToTalkBusiness";
import HeadTrackingScripts, {HeadTrackingScriptsProps} from "../components/shared/HeadTrackingScripts";
import {useRouter} from "next/router";
import React from "react";
import Config from "../utils/config";
import AddScripts from "../components/shared/AddScripts";

interface ContactUsProps {}

const pageSEOScripts = Config.SEO.scripts.pages.contact;

const ContactUs = () => {
  const { t: commonT } = useTranslation("common");
  const { t: ContactUsT } = useTranslation("contact_us_page");
  const metaDescription = ContactUsT("meta_desc");
  const metaTitle = ContactUsT("meta_title");
  const title = ContactUsT("title");
  const router = useRouter();
  const siteUrl = process.env.SITE_FRONT_URL + router.asPath;
  
  const headProps:HeadTrackingScriptsProps = {
    siteUrl,
    metaTitle,
    metaDescription
  }
  return (
    <Layout t={commonT}>
      <Head>
        <title>{metaTitle}</title>
        <HeadTrackingScripts {...headProps}/>
        <meta title={metaTitle} />
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://www.gopeak.io/contact" />
      </Head>
      <AddScripts items={[pageSEOScripts]}/>
      <RoutingPath paths={[{text:"Home", path: '/'},{text:"Contact Us", path: '/contact'}]} />
      <ContactUsForm />
      <ReadyToTalkBusiness />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<ContactUsProps> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "contact_us_page",
      ])),
      // Will be passed to the page component as props
    },
  };
};

export default ContactUs;
