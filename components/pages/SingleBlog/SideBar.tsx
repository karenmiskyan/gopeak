import React from 'react';
import Link from "next/link";
import Image from "next/image";
import LinkedinSvgIcon from "../../../components/shared/IconsImages/linkedin";

export interface SideBarProps {
  avatar: string;
  url: string;
  name: string;
  social_icon: string;
  description: string;
  banner: string;
}

const SideBar = ({avatar, url, name, social_icon, description, banner}: SideBarProps) => {
  return (
    <div className="single-post-sidebar">
      {name ? <div className="author-block">
          <div className="avatar-block">
            {avatar && (<div className="img">
              <Image quality={100} width={300} height={300} alt={name} src={avatar}/>
            </div>)}
          </div>
          <div className="link-block">
            {name && (
              <div style={{'textDecoration': 'underline'}} className="link">
                {name || ''}
              </div>)}
            {social_icon ?
              (
                <Link
                  className="img"
                  target='_blank'
                  href={url || '#'}>
                  <Image quality={100} width={300} height={300} alt={name} src={social_icon}/>
                </Link>
              ) : <Link
                className="img"
                target='_blank'
                href={url || '#'}><LinkedinSvgIcon color={'#fff'} width={30} height={30}/></Link>}
          </div>
          {description && <div className="content-block" dangerouslySetInnerHTML={{__html: description}}></div>}
        </div>
        : null}
      {banner && <div className="banner-block">
          <div dangerouslySetInnerHTML={{__html: banner}}></div>
      </div>}
    </div>
  );
};

export default SideBar;