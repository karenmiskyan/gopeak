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

const pageSEOScripts = Config.SEO.scripts.pages.termsConditions;

const TermsAndConditions = () => {
  const { t: commonT } = useTranslation("common");
  const { t: termsAndConditionsT } = useTranslation("terms-and-conditions");
  
  const metaDescription = termsAndConditionsT("meta_desc");
  const metaTitle = termsAndConditionsT("meta_title");
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
        <link rel="canonical" href="https://www.gopeak.io/terms-conditions" />
      </Head>
      <AddScripts items={[pageSEOScripts]}/>
      <Container className="d-flex flex-wrap flex-column flex-md-row  position-relative basic-container-lg pb-40">
        <RoutingPath paths={[{text:"Home", path: '/'},{text:"Terms & Conditions", path: '/terms-conditions'}]} />
        <PrivacyOrTerms
          title={termsAndConditionsT('title')}
          main_content={termsAndConditionsT('main_content', { returnObjects: true })}
          sidebar={termsAndConditionsT('sidebar', { returnObjects: true })}
          ordered={true}
        />
      </Container>
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
        "terms-and-conditions",
      ])),
      // Will be passed to the page component as props
    },
  };
};


export default TermsAndConditions;
