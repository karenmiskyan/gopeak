import Layout from "components/shared/Layout";
import RoutingPath from "components/shared/RoutingPath";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import WhoWeAre from "components/pages/About/WhoWeAre";
import NumbersSection from "components/pages/About/NumbersSection";
import OurMissionAndVision from "components/pages/About/OurMissionAndVision";
import WhatMakesUsBetter from "components/pages/About/WhatMakesUsBetter";
import CoFounderStory from "components/pages/About/CoFounderStory";
import MeetOurTeam from "components/pages/About/MeetOurTeam";
import PageBottomGetStarted from "components/shared/PageBottomGetStarted";
import TextWithImageSection from "components/shared/TextWithImageSection/TextWithImageSection";
import WhoWeAreImage from "../public/assets/images/png/who_we_are_intro.png";
import Script from "next/script";
import HeadTrackingScripts, {HeadTrackingScriptsProps} from "../components/shared/HeadTrackingScripts";
import React from "react";
import {useRouter} from "next/router";
import Config from "../utils/config";
import AddScripts from "../components/shared/AddScripts";

interface AboutUsProps {}

const pageSEOScripts = Config.SEO.scripts.pages.about;

const AboutUs = () => {
  const { t: commonT } = useTranslation("common");
  const { t: aboutUsT } = useTranslation("about_page");
  
  const metaDescription = aboutUsT("meta_desc");
  const metaTitle = aboutUsT("meta_title");
  const title = aboutUsT("title");
  const whoWeAreHeading = aboutUsT("who_we_are.heading");
  const paragraphs: string[] = aboutUsT("who_we_are.paragraphs", {
    returnObjects: true,
  });
  
  const router = useRouter();
  const siteUrl = process.env.SITE_FRONT_URL + router.asPath;
  const metaImage = process.env.SITE_FRONT_URL + WhoWeAreImage.src;
  const headProps:HeadTrackingScriptsProps = {
    siteUrl,
    metaTitle,
    metaDescription,
    metaImage,
    title
  }

  return (
    <Layout t={commonT} headerBorder={true}>
      <Head>
        <title>{metaTitle}</title>
        <HeadTrackingScripts {...headProps}/>
        <meta title={metaTitle} />
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://www.gopeak.io/about" />
      </Head>
      <AddScripts items={[pageSEOScripts]}/>
      <RoutingPath paths={[{text:"Home", path: '/'},{text:"About Us", path: '/about'}]} />
      <TextWithImageSection
        imageAlt="Who we are"
        image={WhoWeAreImage}
        paragraphs={paragraphs}
        heading={whoWeAreHeading}
      />
      <NumbersSection />
      <OurMissionAndVision />
      <WhatMakesUsBetter />
      <CoFounderStory />
      <MeetOurTeam />
      <PageBottomGetStarted
        btnText={commonT("btn.get_started")}
        sectionClassName="mt-65 about"
        heading={aboutUsT("bottom_part.heading")}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<AboutUsProps> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "about_page",
      ])),
      // Will be passed to the page component as props
    },
  };
};

export default AboutUs;
