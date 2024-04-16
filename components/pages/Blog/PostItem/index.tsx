import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import Loading from "../../../shared/Loading";

export interface IPostCategory {
    id: string;
    name: string;
}

export interface IPostItemProps {
    id?: string | number;
    title: string;
    excerpt: string;
    categories: IPostCategory[];
    date: string;
    img?: string;
    slug: string;
    readMinute: string;
    type: 'big' | 'medium' | 'small';
};

const PostItem = (props: IPostItemProps) => {
  const {title, excerpt, categories, date, img, readMinute, type, id, slug} = props;
  const [loading, setLoading] = useState(false);
  
  return (
    <>
      {loading && (<Loading/>)}
        <div className={`post-item d-flex ${type}`}>
        <div className={`post-content d-flex align-items-center ${type === 'small' ? 'w-50' : 'w-100'}`}>
          <div className="post-content-container">
            {categories[0].name &&
                <div className="cat">
                    <a href="#" style={{'pointerEvents': 'none'}}>
                      {categories[0].name}
                    </a>
                </div>
            }
            <div className="post-title">
              <Link href={`/blog/${slug}`} onClick={()=> {setLoading(true)}}>
                <h3>{title}</h3>
              </Link>
            </div>
            {/*{type !== 'small' ?*/}
              <div className="post-excerpt">{excerpt
              }</div>
              {/*: null}*/}
            <div className="post-footer d-flex">
              <div className="date">
                {date}
              </div>
              <div className="read">
                {readMinute}
              </div>
            </div>
          </div>
        </div>
        {(img) ? (<div className={`post-image-block ${type === 'small' ? 'w-50' : 'w-100'}`}>
          <a className="img cursor-pointer" href={`/blog/${slug}`}>
            <Image unoptimized={true} quality={100} width={400} height={400} alt={title} src={img}/>
          </a>
        </div>) : null}
      </div></>

  );
};

export default PostItem;