import useResizer from "hooks/useResizer";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useState } from "react";
import ImageWeWorkWith from "../../../public/assets/images/png/we_work_with_efficient_tools_bg.png";
import ImageWeWorkWithMobile from "../../../public/assets/images/png/we_work_with_efficient_tools_bg_mobile.png";

const WeWorkWith = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hideImage, setHideImage] = useState(false);
  const { t } = useTranslation("how_we_work_page", {
    keyPrefix: "we_work_with",
  });

  const handleWindowResize = () => {
    if (window.innerWidth <= 400) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    if (window.innerWidth <= 800) {
      setHideImage(true);
    } else {
      setHideImage(false);
    }
  };

  useResizer(handleWindowResize);

  return (
    <section className="container we-work-with-container col-11 m-auto position-relative rounded-20-px basic-container-lg w-calc-30">
      <Image
        quality={100}
        className="visibility-hidden"
        alt="We work with efficient tools image"
        src={hideImage ? ImageWeWorkWithMobile : ImageWeWorkWith}
      />
      <div
        className={`d-flex flex-column align-items-center text-center position-absolute w-100 pt-20 pt-sm-25 pt-md-35 pe-5 ${
          isMobile ? "t-20" : "t-0"
        }`}
      >
        <h3 className="section-title section-title-mobile how-to-start-heading col-11 mb-4">
          {t("heading")}
        </h3>
        <p className="col-md-8 col-11 text-sm fw-400 ">{t("sub_heading")}</p>
      </div>
    </section>
  );
};

export default WeWorkWith;
