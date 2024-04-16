import React, {useEffect, useState} from 'react';
import PostItem from "../PostItem";
import {useTranslation} from "next-i18next";
import ApiService from "../../../../utils/api";
import Loading from "../../../shared/Loading";

export interface IPostCategory {
    id: string;
    name: string;
}

export interface IPost {
    id: string | number;
    title: string;
    excerpt: string;
    categories: IPostCategory[];
    date: string;
    img: string;
    readMinute: string;
    slug: string;
};

export interface IPopularArticlesProps {
    popularPosts: IPost[];
    title?: string;
}


const PopularArticles = ({popularPosts}: IPopularArticlesProps) => {
    const {t} = useTranslation("blog_page", {
        keyPrefix: "popular_articles_section",
    });
    const title = t("title");
    let categoriesSet: Set<string> = new Set();
    let categories: Array<{ name: string, value: string, active?: boolean }> = [];
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(popularPosts);
    const [activeLink, setActiveLink] = useState<string>('view_all');

    const initCategories = () => {
        popularPosts.map(post => {
            post.categories.forEach((category) => {
                categoriesSet.add(JSON.stringify(category));
            });
        });
        categories = Array.from(categoriesSet).map((category) => ({
            name: JSON.parse(category).name,
            value: JSON.parse(category).id,
        }));
        categories.unshift({name: 'View All', value: 'view_all', active: true});
    };

    initCategories();

    useEffect(() => {
        let categoryId: string;
        setLoading(true);
        const getPostsByCategory = async () => {
            if (activeLink === 'view_all') {
                console.log(categories, "categories")
                categoryId = categories.slice(1).map((cat, index) => cat.value).toString();
            } else {
                categoryId = activeLink;
            }

            // setTimeout(async () =>{
            const postsByCategory = await ApiService.getPostsByQuery(`categories=${categoryId}&limit=4`);
            setPosts(postsByCategory);
            setLoading(false);
            // },2000);
        }

        getPostsByCategory();

    }, [activeLink]);

    const mainPost = posts[0];

    const handleCategoryLinkClick = async (categoryId: string) => {
        setActiveLink(categoryId);
    };


    return (
        <>
            <section
                className="col-12 pb-sm-2 pb-1 m-auto rounded-4 mb-sm-18 mb-8 popular-articles-section basic-container-lg p-x-default">
                <div className="article-categories w-100">
                    <ul className="no-list-style w-100 d-flex">
                        {categories.map((category, index) => <li key={Date.now() + index} className="category-item">
                            <a href="#" className={activeLink === category.value ? 'active' : ''}
                               onClick={(e) => {
                                   e.preventDefault();
                                   handleCategoryLinkClick(category.value)
                               }}
                            >
                                {category.name}
                            </a>
                        </li>)}
                    </ul>
                </div>
                <h3 className="main_title">
                    {title}
                </h3>
                {loading ? (<Loading/>) : (
                    <div className="d-flex flex-wrap">
                        <div className="main-block block w-50">
                            {mainPost && <PostItem  {...mainPost} type="big"/>}
                        </div>
                        <div className="posts-block block w-50">
                            {posts.map((post, index) => {
                                if (index === 0) return null;
                                return (<PostItem key={post.id} {...post} type="small"/>)
                            })}
                        </div>
                    </div>)}
            </section>
        </>
    );
};

export default PopularArticles;