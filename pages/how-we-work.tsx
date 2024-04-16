import Layout from "components/shared/Layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RoutingPath from "components/shared/RoutingPath";
import TextWithImageSection from "components/shared/TextWithImageSection/TextWithImageSection";
import HowWeWorkIntroImage from "../public/assets/images/png/how_we_work_intro.png";
import OurStrategy from "components/pages/HowItWorks/OurStrategy";
import WeWorkWith from "components/pages/HowItWorks/WeWorkWith";
import PageBottomGetStarted from "components/shared/PageBottomGetStarted";
import HeadTrackingScripts, {HeadTrackingScriptsProps} from "../components/shared/HeadTrackingScripts";
import React from "react";
import {useRouter} from "next/router";
import Config from "../utils/config";
import AddScripts from "../components/shared/AddScripts";

interface HowWeWorkProps {}

const pageSEOScripts = Config.SEO.scripts.pages.howWeWork;

const HowWeWork = () => {
  const { t: commonT } = useTranslation("common");
  const { t: howWeWorkT } = useTranslation("how_we_work_page");
  const metaDescription = howWeWorkT("meta_desc");
  const metaTitle = howWeWorkT("meta_title");

  const title = howWeWorkT("title");
  const introHeading = howWeWorkT("intro.heading");
  const paragraphs: string[] = howWeWorkT("intro.paragraphs", {
    returnObjects: true,
  });
  
  const router = useRouter();
  const siteUrl = process.env.SITE_FRONT_URL + router.asPath;
  const metaImage = process.env.SITE_FRONT_URL + HowWeWorkIntroImage.src;
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
        <link rel="canonical" href="https://www.gopeak.io/how-we-work" />
      </Head>
      <AddScripts items={[pageSEOScripts]}/>
      <RoutingPath paths={[{text:"Home", path: '/'},{text:"How it Works", path: '/how-we-work'}]} />
      <TextWithImageSection
        heading={introHeading}
        paragraphs={paragraphs}
        showImageInMobile={true}
        image={HowWeWorkIntroImage}
        imageAlt="Work process image"
      />
      <OurStrategy />
      <WeWorkWith />
      <PageBottomGetStarted
        btnText={commonT("btn.get_started")}
        sectionClassName="mt-65"
        heading={howWeWorkT("bottom_part.heading")}
        subHeading={howWeWorkT("bottom_part.sub_heading") ?? ""}
        hasArrow={false}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HowWeWorkProps> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "how_we_work_page",
      ])),
      // Will be passed to the page component as props
    },
  };
};

export default HowWeWork;
