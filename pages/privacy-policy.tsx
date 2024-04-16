import Layout from "components/shared/Layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import PrivacyOrTerms from "components/shared/PrivacyOrTerms";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "components/shared/Container";
import RoutingPath from "components/shared/RoutingPath";
import HeadTrackingScripts, {HeadTrackingScriptsProps} from "../components/shared/HeadTrackingScripts";
import React from "react";
import {useRouter} from "next/router";
import Config from "../utils/config";
import AddScripts from "../components/shared/AddScripts";

interface IPrivacyPolicyProps {}

const pageSEOScripts = Config.SEO.scripts.pages.privacyPolicy;

const PrivacyPolicy = () => {
  const { t: commonT } = useTranslation("common");
  const { t: privacyPolicyT } = useTranslation("privacy-policy");
  
  const metaDescription = privacyPolicyT("meta_desc");
  const metaTitle = privacyPolicyT("meta_title");
  const router = useRouter();
  const siteUrl = process.env.SITE_FRONT_URL + router.asPath;
  
  const headProps:HeadTrackingScriptsProps = {
    siteUrl,
    metaTitle,
    metaDescription
  }
  
  return (
    <Layout t={commonT} headerBorder={true}>
      <Head>
        <title>{metaTitle}</title>
        <HeadTrackingScripts {...headProps}/>
        <meta title={metaTitle} />
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://www.gopeak.io/privacy-policy" />
      </Head>
      <AddScripts items={[pageSEOScripts]}/>
      <Container className="d-flex flex-wrap flex-column flex-md-row  position-relative basic-container-lg pb-40">
        <RoutingPath paths={[{text:"Home", path: '/'},{text:"Privacy Policy", path: '/privacy-policy'}]} />
        {/*<Container className="d-flex flex-column flex-md-row pt-35 pt-sm-50 pt-md-45 ps-5 ps-sm-15 ps-md-45 pb-35 pb-sm-49 pb-md-45 pe-15 pe-sm-15 pe-md-89 position-relative">*/}
        <PrivacyOrTerms
          title={privacyPolicyT('title')}
          main_content={privacyPolicyT('main_content', { returnObjects: true })}
          sidebar={privacyPolicyT('sidebar', { returnObjects: true })}
          ordered={false}
        />
      </Container>
      <RoutingPath paths={[{text:"Home", path: '/'},{text:"Privacy Policy", path: '/privacy-policy'}]} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<IPrivacyPolicyProps> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "privacy-policy",
      ])),
      // Will be passed to the page component as props
    },
  };
};


export default PrivacyPolicy;
