// !!! IMPORTANT !!!
import { Inter } from "next/font/google";

import Head from "next/head";
import Layout from "../components/shared/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import CoopCompaniesSlider from "components/pages/home/CoopCompaniesSlider/index";
import WhatWeDoSection from "components/pages/home/WhatWeDoSection/index";
import HowToStartSection from "components/pages/home/HowToStartSection/index";
import IntroductionSection from "components/pages/home/IntroductionSection/index";
import WhyOurAgencySection from "components/pages/home/WhyOurAgency/index";
import StrategyAndWorkflowSection from "components/pages/home/StrategyAndWorkflowSection/index";
import WhatOurClientsSay from "components/pages/home/WhatOurClientsSay";
import FAQ from "components/shared/FAQ";
import BottomGetStarted from "components/pages/home/BottomGetStarted";
import { IDialogFAQ } from "components/shared/FAQ/interfaces";
import HeadTrackingScripts, {HeadTrackingScriptsProps} from "../components/shared/HeadTrackingScripts";
import React from "react";
import whatWeDoImage from "../public/assets/images/png/what-we-do.png";
import HomeScript from "../components/pages/home/HomeScript";
import {useRouter} from "next/router";

interface IHomeProps {}

const Home = () => {
  const { t: homePageT } = useTranslation("home_page");
  const { t: commonT } = useTranslation("common");
  const { t: FAQt } = useTranslation("home_page", { keyPrefix: "FAQ" });

  const metaDescription = homePageT("meta_desc");
  const metaTitle = homePageT("meta_title");
  const title = homePageT("title");

  const generalFAQ = FAQt("general", { returnObjects: true }) as IDialogFAQ[];
  const backLinkFAQ = FAQt("back_link_reporting", {
    returnObjects: true,
  }) as IDialogFAQ[];
  
  const router = useRouter();
  const siteUrl = process.env.SITE_FRONT_URL + router.asPath;
  const metaImage = process.env.SITE_FRONT_URL + whatWeDoImage.src;
  const headProps:HeadTrackingScriptsProps = {
    siteUrl,
    metaTitle,
    metaDescription,
    metaImage,
    title
  }

  return (
    <Layout t={commonT}>
      <Head>
        <title>{metaTitle}</title>
        <HeadTrackingScripts {...headProps} />
        <meta title={metaTitle} />
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://www.gopeak.io/" />
      </Head>
      <HomeScript/>
      <IntroductionSection />
      <CoopCompaniesSlider />
      <WhatWeDoSection />
      <HowToStartSection />
      <WhyOurAgencySection />
      <StrategyAndWorkflowSection />
      <WhatOurClientsSay />
      <FAQ
        t={FAQt}
        allFAQs={[
          {
            faqs: generalFAQ,
            faqSelector: FAQt("general_category"),
          },
          {
            faqs: backLinkFAQ,
            faqSelector: FAQt("back_link_reporting_category"),
          },
        ]}
      />
      <BottomGetStarted />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<IHomeProps> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "home_page",
      ])),
      // Will be passed to the page component as props
    },
  };
};

export default Home;
