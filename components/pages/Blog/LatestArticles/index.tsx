import React, {useEffect, useState} from 'react';
import PostItem from "../PostItem";
import {IPostCategory} from "../PopularArticles";
import LoadMore from "../LoadMore";
import {useTranslation} from "next-i18next";
import ApiService from "../../../../utils/api";
import Loading from "../../../shared/Loading";

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

export interface ILatestPosts {
  total: number;
  limit: number;
  offset: number;
  posts: IPost[]
}

export interface ILatestArticlesProps {
  latestPostsData: ILatestPosts;
  title?: string;
}


const LatestArticles = ({latestPostsData}: ILatestArticlesProps) => {
  const {t} = useTranslation("blog_page", {
    keyPrefix: "latest_articles_section",
  });
  const title = t("title");
  const buttonText = t("load_more");
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState<number>(6);
  const totalCount = latestPostsData.total;
  const [posts, setPosts] = useState<IPost[]>( [...latestPostsData.posts]);
  const [offset, setOffset] = useState<number>(posts.length);
  const loadMorePosts = async () => {
    setOffset(offset + limit);
    setLoading(true);
    setTimeout(async ()=>{
      const newPosts = await ApiService.getPosts(limit,offset);
      setPosts([...posts,...newPosts.posts]);
      setLoading(false);
    },2000);
  }
  
  return (
    <>
      <section className="col-12 pb-20 m-auto mb-sm-18 mb-8 latest-articles-section basic-container-lg p-x-default">
        <hr/>
        <h3 className="main_title">
          {title}
        </h3>
        <div className="posts-block">
          {posts.map((post,index) => {
            return (<PostItem key={post.id} {...post} type="medium"/>)
          })}
        </div>
        {loading?<Loading/>:null}
        <div className={`load-more-block ${totalCount<=posts.length?' d-none ':''}`}>
          <LoadMore loadMore={buttonText} disabled={totalCount<=posts.length} onClick={loadMorePosts}/>
        </div>
      </section>
    </>
  );
};

export default LatestArticles;