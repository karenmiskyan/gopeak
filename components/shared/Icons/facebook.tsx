import Link from "next/link";
import React, {useEffect, useState} from "react";
import FacebookSvgIcon from "../IconsImages/facebook";

const FacebookIcon = () => {
  const [currentURL,setCurrentUrl] = useState('');
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  
  return (
    <Link
      target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              currentURL
            )}`}
      rel="noopener noreferrer"
    >
      <FacebookSvgIcon/>
    </Link>
  );
};

export default FacebookIcon;
