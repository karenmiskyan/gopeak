import React from 'react';

const structuredData1 = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Gopeak link building agency",
  "description": "Expert SaaS backlink building agency with over 5 years of experience building high-quality links and enhancing website traffic.",
  "telephone": "+37493846504",
  "url": "https://www.gopeak.io/",
  "founders": "Armen Tevikyan , Dmitri Sahakyan",
  "foundingDate": "2023-02-01",
  "address": "Hakob Hakobyan",
  "foundingLocation": "Yerevan, Armenia",
  "logo": "https://www.gopeak.io/assets/images/png/Logo.png",//inspect anem logo-i linky dnem header-i meji
  "image": "https://www.gopeak.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhat-we-do.1779ea96.png&w=640&q=75",
  "department":
    []
};

const structuredData2 = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gopeak",
  "url": "https://www.gopeak.io/",
  "logo": "https://www.gopeak.io/assets/images/png/Logo.png"
};

const structuredData3 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is link building?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Link building is the process of getting other websites to link to your website. It plays a crucial role as a ranking factor for search engines, determining the authority of a domain. Additionally, it helps search engines efficiently index your website."
      }
    }, {
      "@type": "Question",
      "name": "Does link building still work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The answer is yes! Link building for search rankings plays a significant role in differentiating the authority website from the non-authority one. Quality and authority backlinks help to get top paces in SERP."
      }
    }, {
      "@type": "Question",
      "name": "When should I start link building?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Before you begin building links, make sure your website's Technical SEO meets the minimum requirements of search engines like Google and Bing. Also, clarify keywords for each page and prioritize which pages you want to rank. If you feel it's time to boost online traffic, then start your link building experience today. Book a call now to get a free consultation with us."
      }
    }, {
      "@type": "Question",
      "name": "How many backlinks does my website need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Optimal link-building varies by niche, but generally, aim for 30-40 monthly links for 3-4 target pages to stay competitive. To secure the top spot on SERP for your target keyword, you must have over 400 high-quality backlinks."
      }
    }, {
      "@type": "Question",
      "name": "How long does it take to see results from link building?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Link building is a long-term strategy that can take several months to see significant results. It depends on how many links you get, for which pages, and the importance of the technical SEO condition of your website. However, the benefits of link building, such as improved search engine rankings and increased traffic, can continue to grow over time."
      }
    }, {
      "@type": "Question",
      "name": "What are the risks of link building?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Link building has the power to either boost or harm your online presence. When executed correctly, it can significantly increase your website's traffic and visibility. However, if done improperly, it can lead to penalties, damaging your online reputation and ranking."
      }
    }, {
      "@type": "Question",
      "name": "Is link building expensive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Link building pricing is flexible and depends on your goals, with costs influenced by specific requirements. Reputable link-building agencies don't buy links; they earn them, and you pay for their services. Currently, the minimum accepted price for a link-building service is somewhere around $180 to $500 per link."
      }
    }, {
      "@type": "Question",
      "name": "Why should I consider outsourcing link building services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Link building requires full concentration, strategies, and expertise, which the GoPeak.io link building agency offers. A link building agency can help you acquire Authority backlinks from authoritative websites, improving your website's search engine rankings and increasing its visibility and credibility, overcoming your competitors"
      }
    }, {
      "@type": "Question",
      "name": "What types of backlinks will you acquire from our link building services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We focus on acquiring high-quality, relevant authority backlinks from authoritative websites in your industry. We do not engage in any unethical or black hat link building practices. In GoPeak, our link building experts evaluate each website before appearing there."
      }
    }, {
      "@type": "Question",
      "name": "How many links does our link building service include for each month ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The number of links we build per month depends on various factors, including the size of your website, the competitiveness of your industry, and the number of links you wish to acquire. We offer a safe volume of backlinks for each website. Depending on the project's scope and your budget, we finalize the number of links needed for each month. We require a minimum of 10 links for an accepted project, and we can deliver a maximum of up to 50 backlinks per month."
      }
    }, {
      "@type": "Question",
      "name": "What separates you from other link building services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At GoPeak, we take a data-driven approach to link building and prioritize quality over quantity. We focus on acquiring high-quality backlinks from authoritative websites in your industry, and we use only ethical and white hat link building practices to ensure your website's safety and long-term success. We offer affordable prices with the highest quality. We provide flexibility when working with us. Accepting link cancellation and getting paid after approving results"
      }
    }]
};

const breadCrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.gopeak.io"
    }
  ]
}

const structuredData = [structuredData1,structuredData2,structuredData3,breadCrumb];

const HomeScripts: React.FC = () => {
  return (
    <>
      {structuredData.map((data,index) => <script
        key={`structured-data-${index}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
      />)}
    </>
  );
  
};

export default HomeScripts;
