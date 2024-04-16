import useResizer from "hooks/useResizer";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useState } from "react";
import WhoWeAreImage from "../../../../public/assets/images/png/who_we_are_intro.png";

const WhoWeAre = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const { t } = useTranslation("about_page", { keyPrefix: "who_we_are" });
  const paragraphs: string[] = t("paragraphs", { returnObjects: true });

  const handleImageVisibility = () => {
    if (window.innerWidth <= 768) {
      setIsImageVisible(false);
    } else {
      setIsImageVisible(true);
    }
  };

  useResizer(handleImageVisibility);

  useEffect(() => {
    handleImageVisibility();
  }, []);

  return (
    <section className="row m-auto pt-45 pt-sm-55 pt-md-62 justify-content-between px-7 px-sm-40 px-md-46">
      <div className="col-10 col-md-5 col-lg-4 pt-7 m-auto mb-35">
        <h2 className="who-we-are-heading">{t("heading")}</h2>
        {paragraphs.map((paragraph, index) => {
          return (
            <p
              key={index}
              className="text-sm mb-4 fw-400 text-color-midnight-90"
            >
              {paragraph}
            </p>
          );
        })}
      </div>
      {isImageVisible && (
        <div className="col-12 col-md-7 col-lg-8 m-auto d-flex justify-content-center mw-min-content">
          <Image quality={100} alt="Who we are" src={WhoWeAreImage} />
        </div>
      )}
    </section>
  );
};

export default WhoWeAre;
