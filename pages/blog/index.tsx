import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Layout from "components/shared/Layout";
import RoutingPath from "components/shared/RoutingPath";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import SearchSection from "../../components/pages/Blog/SearchSection";
import PopularArticles from "../../components/pages/Blog/PopularArticles";
import LatestArticles, {ILatestPosts} from "../../components/pages/Blog/LatestArticles";
import GetInterestingStaff from "../../components/pages/Blog/GetInterestingStaff";
import {BACKEND_API_URL} from "../../utils/api";
import React from "react";
import HeadTrackingScripts, {HeadTrackingScriptsProps} from "../../components/shared/HeadTrackingScripts";
import { useRouter } from 'next/router';
import Config from "../../utils/config";
import AddScripts from "../../components/shared/AddScripts";

const pageSEOScripts = Config.SEO.scripts.pages.blog;

export default function Page({posts, latestPosts}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { t: commonT } = useTranslation("common");
    const { t: blogT } = useTranslation("blog_page");

    const metaDescription = blogT("meta_desc");
    const metaTitle = blogT("meta_title");
    const title = blogT("title");
    const router = useRouter();
    const siteUrl = process.env.SITE_FRONT_URL + router.asPath;
    const metaImage = posts[0]?.img ?? '';
    const headProps:HeadTrackingScriptsProps = {
        siteUrl,
        metaTitle,
        metaDescription,
        metaImage,
        title
    }

    return (
        <Layout t={commonT} headerBorder={true} pageClass={'blog-page'}>
            <Head>
                <title>{title}</title>
                <HeadTrackingScripts {...headProps}/>
                <meta title={metaTitle} />
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href="https://www.gopeak.io/blog" />
            </Head>
            <AddScripts items={[pageSEOScripts]}/>
            <>
                <RoutingPath paths={[{text:"Home", path: '/'},{text:"Blog", path: '/blog'}]}/>
                <SearchSection/>
                <PopularArticles popularPosts={posts}/>
                <LatestArticles latestPostsData={latestPosts}/>
                <GetInterestingStaff/>
            </>
        </Layout>
    );
}

export const getServerSideProps = (async (context: any) => {
    context.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    
    
    const translations = await serverSideTranslations( 'en', [
        'common',
        'blog_page',
    ]);
    
    const response = await fetch(`${BACKEND_API_URL}/popular-posts`);
    const articles = await response.json();
    const responseLatestPosts = await fetch(
      `${BACKEND_API_URL}/latest-posts?per_page=6&limit=6&offset=0`
    );
    const latestPosts = await responseLatestPosts.json();
    
    return {
        props: {
            posts: articles,
            latestPosts,
            ...translations,
            // Will be passed to the page component as props
        },
    };
});
