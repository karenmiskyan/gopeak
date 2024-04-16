import React from 'react';

export interface HeadTrackingScriptsProps {
  siteUrl?: string;
  siteDomain?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: string;
  canonical?: string;
  title?: string;
  show?: boolean;
}

const HeadTrackingScripts = ({siteUrl = '',metaTitle = '',metaDescription = '',metaImage = '', title = '', show = true}: HeadTrackingScriptsProps) => {
  return (
    <>
      
        {show ?(<>
        <meta property="og:local" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={metaTitle}/>
        {metaDescription && <meta property="og:description" content={metaDescription}/>}
        <meta property="og:url" content={siteUrl}/>
        {metaImage && <meta property="og:image" content={metaImage}/>}
        <meta name="twitter:card" content={title || metaTitle} />
        <meta name="twitter:site" content={siteUrl} />
        <meta name="twitter:title" content={metaTitle} />
        {metaDescription && <meta name="twitter:description" content={metaDescription} />}
        {metaImage && <meta name="twitter:image" content={metaImage} />}</>): null}
      
      <meta name="google-site-verification" content="x7C4BU_U3YZBZnu89Ju9QUdAROG-LYNbW5OhV55cUSs"/>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-045LR6RMHT"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-045LR6RMHT');
  `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3635190,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `,
        }}
      />
    </>
  );
};

export default HeadTrackingScripts;
