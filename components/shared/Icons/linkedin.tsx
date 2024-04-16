import Link from "next/link";
import React, {useEffect, useState} from "react";
import LinkedinSvgIcon from "../IconsImages/linkedin";

const LinkedinIcon = () => {
  const [currentURL,setCurrentUrl] = useState('');
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  
  return (
    <Link
      target="_blank"
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        currentURL
      )}`}
      rel="noopener noreferrer"
    >
      <LinkedinSvgIcon/>
    </Link>
  );
};

export default LinkedinIcon;
