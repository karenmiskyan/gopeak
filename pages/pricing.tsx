import {GetStaticProps} from "next";
import Head from "next/head";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "../components/shared/Layout";
import RoutingPath from "../components/shared/RoutingPath";
import Prices from "../components/pages/PricingPlans/Prices";
import ExploreOurStrategy from "../components/pages/PricingPlans/ExploreOurStrategy";
import FAQ from "../components/shared/FAQ";
import {IDialogFAQ} from "../components/shared/FAQ/interfaces";
import ReadyToIncreaseRevenue from "../components/pages/PricingPlans/ReadyToIncreaseRevenue";
import HeadTrackingScripts, {HeadTrackingScriptsProps} from "../components/shared/HeadTrackingScripts";
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import HowWeWorkIntroImage from "../public/assets/images/png/how_we_work_intro.png";
import AddScripts from "../components/shared/AddScripts";
import Config from "../utils/config";
import BacklinkStatistics from "../components/pages/PricingPlans/BacklinkStatistics";

interface PlansAndPricingProps {
}

const pageSEOScripts = Config.SEO.scripts.pages.pricing;

const PlansAndPricing = () => {
    const {t} = useTranslation("pricing_page");
    const {t: FAQt} = useTranslation("pricing_page", {keyPrefix: "FAQ"});
    const {t: commonT} = useTranslation("common");

    const metaDescription = t("meta_desc");
    const metaTitle = t("meta_title");

    const linkBuildingPricingFAQ = FAQt("link_building_pricing_items", {
        returnObjects: true,
    }) as IDialogFAQ[];
    const paymentsFAQ = FAQt("payments_items", {
        returnObjects: true,
    }) as IDialogFAQ[];


    useEffect(() => {
        // Load Clutch widget script
        const script = document.createElement("script");
        script.src = "https://widget.clutch.co/static/js/widget.js";
        script.async = true;
        document.body.appendChild(script);

        // Cleanup function to remove script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);


    const title = t("title");
    const router = useRouter();
    const siteUrl = process.env.SITE_FRONT_URL + router.asPath;
    const metaImage = process.env.SITE_FRONT_URL + HowWeWorkIntroImage.src;
    const headProps: HeadTrackingScriptsProps = {
        siteUrl,
        metaTitle,
        metaDescription,
        metaImage,
        title
    };

    return (
        <Layout t={commonT}>
            <Head>
                <title>{metaTitle}</title>
                <HeadTrackingScripts {...headProps}/>
                <link rel="canonical" href="https://www.gopeak.io/pricing"/>
                <meta title={metaTitle}/>
                <meta name="description" content={metaDescription}/>
            </Head>
            <AddScripts items={[pageSEOScripts]}/>
            <RoutingPath paths={[{text: "Home", path: '/'}, {text: "Plans & Pricing", path: '/pricing'}]}/>
            <Prices/>
            <ExploreOurStrategy/>
            {/* // TODO: Chart logic */}
            <BacklinkStatistics/>
            <FAQ
                t={FAQt}
                allFAQs={[
                    {
                        faqs: linkBuildingPricingFAQ,
                        faqSelector: FAQt("link_building_pricing_category"),
                    },
                    {
                        faqs: paymentsFAQ,
                        faqSelector: FAQt("payments_category"),
                    },
                ]}
            />
            <ReadyToIncreaseRevenue/>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<PlansAndPricingProps> = async ({
                                                                               locale,
                                                                           }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "en", [
                "common",
                "pricing_page",
            ])),
            // Will be passed to the page component as props
        },
    };
};

export default PlansAndPricing;
