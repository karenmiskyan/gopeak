import React, {useState} from 'react';
import {GetServerSideProps, GetStaticPaths} from "next";
import Link from "next/link";
import Head from "next/head";
import {useTranslation} from "next-i18next";
import ScrollToTop from "react-scroll-to-top";
import {BACKEND_API_URL, BACKEND_API_URL_BASE} from "../../utils/api";
import Layout from "../../components/shared/Layout";
import RoutingPath from "../../components/shared/RoutingPath";
import LatestArticles, {IPost} from "../../components/pages/Blog/LatestArticles";
import GetInterestingStaff from "../../components/pages/Blog/GetInterestingStaff";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {IconCaret} from "shared/icons/common-icons";
import PostItem from "../../components/pages/Blog/PostItem";
import {IconScrollTop} from "shared/icons/common-icons";
import LastBLock from "../../components/pages/SingleBlog/LastBLock";
import SectionFinal from "../../components/pages/SingleBlog/SectionFinal";
import SideBar from "../../components/pages/SingleBlog/SideBar";
import TableContent from "../../components/pages/SingleBlog/TableContent";
import TableTypes from "../../components/pages/SingleBlog/TableTypes";
import Image from "next/image";
import FacebookIcon from "../../components/shared/Icons/facebook";
import LinkedinIcon from "../../components/shared/Icons/linkedin";

import {useRouter} from "next/router";
import HeadTrackingScripts, {HeadTrackingScriptsProps} from "../../components/shared/HeadTrackingScripts";
import Config from "../../utils/config";
import {dateFormatter} from "../../utils/helpers";
import AddScripts from "../../components/shared/AddScripts";
import LinkedinSvgIcon from "../../components/shared/IconsImages/linkedin";


const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.gopeak.io/blog/main-reasons-to-outsource-your-seo"
    },
    "headline": "Main Reasons to Outsource Your SEO",
    "description": "Learn why outsourcing your SEO is a game-changer for your business and how to start outsourcing your SEO.",
    "image": "https://www.gopeak.io/_next/image?url=https%3A%2F%2Fapi5.codexg.com%2Fwp-content%2Fuploads%2F2023%2F09%2Foutsource-seo-gopeak-1024x694.jpg&w=640&q=75",
    "author": {
        "@type": "Person",
        "name": "Varduhi Stepanyan",
        "url": "https://www.linkedin.com/in/varduhi-stepanyan-86188110b/"
    },
    "publisher": {
        "@type": "Organization",
        "name": "",
        "logo": {
            "@type": "ImageObject",
            "url": ""
        }
    },
    "datePublished": "2023-11-24"
};

const breadCrumbSEOData = Config.SEO.scripts.pages.blogPages.breadCrumb;
const mainSEOData = Config.SEO.scripts.pages.blogPages.main;

const Blog = ({post}: any) => {
    const {t: commonT} = useTranslation("common");
    const {t: blogT} = useTranslation("blog_page");
    const {t: singleBlogT} = useTranslation("blog_page", {
        keyPrefix: "single",
    });
    const similarTitle = singleBlogT("similar");
    const {acf} = post;
    const similars = post.similars as IPost[];
    const tableContent: any[] = [];
    const sectionContents: any[] = [];
    let types: any = {};
    let showContentIndex = 0;

    if (acf?.content_item) {
        acf?.content_item?.forEach((item: any, index: number) => {
            const mainIndex = index + 1;
            tableContent.push({
                'title': item.title_in_table,
                'id': 'content_item_' + mainIndex,
                type: 'item',
                num: mainIndex
            });
            sectionContents.push({
                'title': item.title,
                'html_id': 'content_item_' + mainIndex,
                type: 'item',
                num: index,
                content: item.content
            });
            if (item.content_subitem) {
                item.content_subitem.forEach((subItem: any, index: number) => {
                    tableContent.push({
                        'title': subItem.title,
                        'id': 'content_item_' + mainIndex + '_' + (index + 1),
                        type: 'subitem',
                        num: mainIndex + '.' + (index + 1)
                    });
                    sectionContents.push({
                        'title': subItem.title,
                        'html_id': 'content_item_' + mainIndex + '_' + (index + 1),
                        type: 'subitem',
                        num: index,
                        content: subItem.content
                    });
                });
            }
        });
    }

    types = acf?.types;
    const title = blogT("title");
    const router = useRouter();
    const siteUrl = process.env.SITE_FRONT_URL + router.asPath;
    const metaDescription = post.meta_desc;
    const metaTitle = post.meta_title;
    const canonical = 'https://www.gopeak.io/' + post.canonical;

    mainSEOData.mainEntityOfPage["@id"] = siteUrl;
    mainSEOData.headline = metaTitle;
    mainSEOData.description = metaDescription;
    mainSEOData.image = process.env.SITE_FRONT_URL + '/_next/image?url=' + post.img + '&w=640&q=75';
    mainSEOData.author.name = post?.acf?.author?.name || '';
    mainSEOData.author.url = post?.acf?.author?.url || '';
    mainSEOData.datePublished = dateFormatter(post.date);

    breadCrumbSEOData.itemListElement.push({
        "@type": "ListItem",
        "position": 3,
        "name": metaTitle,
        "item": siteUrl
    });


    const structuredSEOData = [mainSEOData, breadCrumbSEOData];

    const headProps: HeadTrackingScriptsProps = {
        siteUrl,
        metaTitle,
        metaDescription,
        canonical,
        metaImage: post?.img || '',
        title
    }

    return (

        <Layout t={commonT} headerBorder={true} pageClass={'single-blog-page'}>
            <Head>
                <title>{metaTitle}</title>
                <HeadTrackingScripts {...headProps}/>
                <meta name="description" content={metaDescription}/>
                <link rel="canonical" href={canonical}/>
            </Head>
            <AddScripts items={structuredSEOData}/>
            <RoutingPath paths={[{text: "Home", path: '/'}, {text: "Blog", path: '/blog'}, {
                text: metaTitle,
                path: '/' + router.asPath
            }]}/>
            <>
                {(!post.id) ?
                    (<section className="pt-35 pt-sm-50 pt-md-45 pb-30 pb-sm-40 pb-md-45 col-12 m-auto">
                        Post not found
                    </section>) : (
                        <>
                            <div className="class-blog">
                                <div
                                    className="pt-20 pt-sm-25 pt-md-30 pb-20 pb-sm-25 pb-md-30 col-12 m-auto single-post basic-container p-x-default">
                                    <div className="single-post-title">
                                        <h1>{post.title}</h1>
                                        <div className="post-date">
                                            <div className="date">
                                                {post.date}
                                            </div>
                                            <span className="dot"></span>
                                            <div className="read">
                                                {post.readMinute}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="pt-10 pt-sm-15 pt-md-20 pb-30 pb-sm-40 pb-md-45 col-12 m-auto single-post basic-container p-x-default">

                                <div className="single-post-wrapper">
                                    <section className="head-content">



                                        <div className="post-description"
                                             dangerouslySetInnerHTML={{__html: post.content}}>
                                        </div>

                                    </section>
                                    {tableContent?.length ? <TableContent tableContent={tableContent}/> : null}
                                    {types?.items?.length ? <TableTypes types={types}/> : null}
                                    <section className="section-contents">
                                        <div className="content">
                                            {
                                                sectionContents.map((item: any, index: number) => {
                                                    if (item.type === 'item') showContentIndex++;
                                                    return (<div key={index} className={`content-item ${item.type}`}>
                                                        {item.type === 'item' ? (
                                                            <h2 id={item.html_id} className='h2'>{item.title}</h2>) : (
                                                            <h2 id={item.html_id} className='h3'>{item.title}</h2>)}
                                                        <div className="content-description"
                                                             dangerouslySetInnerHTML={{__html: item.content}}>
                                                        </div>
                                                    </div>)
                                                })}
                                        </div>
                                    </section>
                                    {types?.items?.length || types?.last_block ? <section className="section-types">
                                        <h3>{types.title}</h3>
                                        <p>{types.small_content}</p>
                                        <div className="content">
                                            {
                                                types?.items?.length && types.items.map((item: any, index: number) => {
                                                    return (
                                                        <div key={index} className="content-item">
                                                            <div className="content-item-title">
                                <span className="icon">
                                  <IconCaret/>
                                </span>
                                                                <h4 id={item.html_id}>{item.title}</h4>
                                                            </div>
                                                            <div className="content-item-description"
                                                                 dangerouslySetInnerHTML={{__html: item.content}}>
                                                            </div>
                                                        </div>)
                                                })}
                                            {(types?.last_block?.title || types?.last_block?.description) &&
                                                <LastBLock types={types}/>}
                                        </div>
                                    </section> : null}
                                    {acf?.author?.name ? <div className="author-block acf-mobile">
                                            <div className="avatar-block">
                                                {acf?.author?.avatar && (<div className="img">
                                                    <Image quality={100} width={400} height={400}
                                                           src={acf?.author?.avatar} alt={''}/>
                                                </div>)}
                                            </div>
                                            <div className="link-block">
                                                {acf?.author?.name && (
                                                    <div style={{'textDecoration': 'underline'}} className="link">
                                                        {acf?.author?.name || ''}
                                                    </div>)}
                                                {acf?.author?.social_icon ?
                                                    (<Link className="img" target='_blank'
                                                           href={acf?.author?.url || '#'}>
                                                        <Image quality={100} width={400} height={400}
                                                               src={acf?.author?.social_icon}
                                                               alt={''}/>
                                                    </Link>) : <Link className="img" target='_blank'
                                                                     href={acf?.author?.url || '#'}><LinkedinSvgIcon
                                                        color={'#fff'} width={30} height={30}/></Link>
                                                }
                                            </div>
                                            {acf?.author?.description && <div className="content-block"
                                                                              dangerouslySetInnerHTML={{__html: acf?.author?.description}}></div>}
                                        </div>
                                        : null}
                                    {acf?.final && <SectionFinal final={acf?.final}/>}
                                    {acf?.social_button?.length || true ? (
                                        <div className="social-buttons">
                                            <span>Share article</span>
                                            <LinkedinIcon/>
                                            <FacebookIcon/>
                                        </div>) : null}
                                </div>
                                <SideBar {...acf?.author} banner={acf?.banner}/>
                            </div>
                            <div className="similar-posts basic-container-lg p-x-default">
                                <h4>{similarTitle}</h4>
                                <div className="posts-block">
                                    {(similars.map((post, index) => {
                                        return (<PostItem key={post.id} {...post} type="medium"/>)
                                    }))}
                                </div>
                            </div>
                            <GetInterestingStaff/>
                        </>
                    )}
                <ScrollToTop smooth component={<IconScrollTop/>}/>
            </>
        </Layout>
    );
};

export default Blog;

async function getAllPosts(): Promise<{ slug: string }[]> {
    try {
        const allPosts = [];
        let page = 1;

        // Fetch each page of posts until there are no more pages
        while (true) {
            const response = await fetch(`${BACKEND_API_URL_BASE}/posts?page=${page}&_fields=slug,link`);
            if (response.statusText !== 'OK') {
                break;
            }

            const posts = await response.json();

            if (posts.length === 0) {
                break;
            }

            allPosts.push(...posts);
            page++;
        }

        return allPosts;
    } catch (error) {
        return [];
    }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const postId = context.params?.id;
    const translations = (await serverSideTranslations(context.locale ?? "en", [
        "common",
        "blog_page",
    ]));
    let post: any = {};

    // Fetch data from the server using postId
    // Replace this with your actual data fetching logic
    if (postId) {
        const res = await fetch(`${BACKEND_API_URL}/single/${postId}`);
        post = await res.json();
        console.log(post.acf?.types);
    }
    // Pass the fetched data as props to the component
    return {
        props: {
            post,
            ...translations,
        },
    };
}