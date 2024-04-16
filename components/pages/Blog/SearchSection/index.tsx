import {useTranslation} from "next-i18next";
import React, {useState} from "react";

import SearchInput from "./SearchInput";
import ApiService from "../../../../utils/api";
import {IPost} from "../LatestArticles";
import PostItem from "../PostItem";
import Loading from "../../../shared/Loading";


const SearchSection = () => {
  const {t} = useTranslation("blog_page", {
    keyPrefix: "search_section",
  });
  const placeholder = t("placeholder");
  const searchResult = t("search_result");
  const noResult = t("no_result");
  
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  
  const handleSearchText = async (text: string) => {
    setSearchText(text);
    await getPostsBySearchTerm(text);
  };
  
  const getPostsBySearchTerm = async (searchText: string) => {
    setLoading(true);
    setPosts([]);
    setTimeout(async () => {
      const postsBySearchTerm = await ApiService.getPostsByQuery(`search=${searchText}`);
      setPosts(postsBySearchTerm);
      setLoading(false);
    }, 2000);
  }
  
  return (
    <div className="blog-section">
      <section className="search-section pt-20 pt-sm-25 pt-md-25 pb-20 pb-sm-25 pb-md-25 col-12 m-auto search-section basic-container-lg p-x-default">
        <div className="text-center mb-26 mb-sm-42">
          <h1 className="mb-4 text-center h3">{t("heading")}</h1>
          <div className="d-flex justify-content-center search-input-wrapper">
            <SearchInput onSearchResult={handleSearchText} placeholder={placeholder} name="search-article"/>
          </div>
        </div>
      </section>
      {searchText ? (<section className="col-12 pb-20 m-auto mb-sm-18 mb-8 latest-articles-section position-relative basic-container-lg p-x-default">
        {loading ? (<Loading/>) : (<>
          <h3 className="main_title">
            {posts.length ? searchResult : noResult}
          </h3>
          <div className="posts-block">
            {(posts.map((post, index) => {
              return (<PostItem key={post.id} {...post} type="medium"/>)
            }))}
          </div>
        </>)}
      </section>) : null}
    </div>
  );
}

export default SearchSection;