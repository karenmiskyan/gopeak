import useResizer from "hooks/useResizer";
import React, { useEffect, useState } from "react";
import Layout from "components/shared/Layout";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import ErrorPageLayout from "components/shared/ErrorPageLayout";
import Image404 from "public/assets/images/png/404_Image.png";
import Image404Mobile from "public/assets/images/png/404_image_Mobile.png";
import Image404Tablet from "public/assets/images/png/404_Image_Tablet.png";
import HeadTrackingScripts from "../components/shared/HeadTrackingScripts";
interface NotFoundProps {}

const NotFound = () => {
  const { t: commonT } = useTranslation("common");
  const { t: ErrorPagesT } = useTranslation("error_pages");
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth >= 400 && window.innerWidth <= 800) {
      setIsTablet(true);
      setIsMobile(false);
    } else if (window.innerWidth <= 400) {
      setIsTablet(false);
      setIsMobile(true);
    } else {
      setIsTablet(false);
      setIsMobile(false);
    }
  };

  useResizer(handleWindowResize);

  useEffect(() => {
    handleWindowResize();
  }, []);

  return (
    <Layout t={commonT}>
      <Head>
        <title>{"404"}</title>
        <meta title="404" />
        <link rel="canonical" href="https://www.gopeak.io/404" />
        <HeadTrackingScripts/>
      </Head>
      <ErrorPageLayout
        t={ErrorPagesT}
        imgSrc={
          isMobile ? Image404Mobile : isTablet ? Image404Tablet : Image404
        }
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<NotFoundProps> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "error_pages",
      ])),
      // Will be passed to the page component as props
    },
  };
};

export default NotFound;
