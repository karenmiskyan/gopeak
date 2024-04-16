import Image from "next/image";
import {useTranslation} from "next-i18next";
import DmitryAndArmen from "../../../../public/assets/images/png/dmitry-and-armen.png";

const CoFounderStory = () => {
  const {t} = useTranslation("about_page", {
    keyPrefix: "co_founder_story",
  });
  
  const aboutCoFounders: string[] = t("about_co_founders", {
    returnObjects: true,
  });
  
  return (
    <section className="co-fonder-section">
      <div className="co-fonder-section-wrapper basic-container-lg p-x-default pt-35 pt-md-30 ps-10 pe-10 pb-20 pb-sm-35 pb-md-50">
        <p className="subtitle text-uppercase" style={{color: '#6374FF', fontSize: '13px'}}>
          {t("subtitle")}
        </p>
        <h3 className="fw-700 mb-20 mb-md-27 text-md-start text-sm-center text-start section-title h4">
          {t("title")}
        </h3>
        <div className="row col-12 justify-content-center co-founder-image-wrapper">
          <div
            className="text-md-start text-sm-center text-start col-md-6 col-sm-7 col-12">
            <Image quality={100} src={DmitryAndArmen} alt="Dmitry and Armen Co-founders"/>
            <p className="mt-8 text-xs text-color-midnight-44 mb-md-0 mb-sm-20 mb-10">
              {t("image_sub_text")}
            </p>
          </div>
          <div className="col-md-6 col-sm-7 col-12">
            {aboutCoFounders.map((text, index) => {
              const isLast = index === aboutCoFounders.length - 1;
              return (
                <p
                  key={index}
                  className={`text-sm fw-400 text-color-midnight-90 ${
                    isLast ? "mb-28" : "mb-6"
                  }`}
                  dangerouslySetInnerHTML={{ __html: text }}
                >

                </p>
              );
            })}
            <p className="co-founders-pitch mb-0 text-sm fw-400 text-color-midnight-90">
              {t("co_founders_text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoFounderStory;
