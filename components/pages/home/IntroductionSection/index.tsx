
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import {
  HomePageBGAmplitude,
  HomePageBGArrowUp,
  HomePageBGDr,
} from "shared/backgroundImages/home/backgrounds";

const IntroductionSection = () => {
  const { t: homePageT } = useTranslation("home_page");
  const { t: commonT } = useTranslation("common", { keyPrefix: "btn" });

  return (
    <section
      id="homepage-main-layout"
      className="d-flex justify-content-center"
    >
      <div className="text-center d-flex flex-column" id="main-introduction">
        <h1 className="m-auto col-lg-9 col-md-8 col-sm-9 col-9">
          {homePageT("main_text_part_1")}{" "}
          <span className="text-color-secondary">
            {homePageT("main_text_outlined_word")}
          </span>{" "}
          {homePageT("main_text_part_2")}
        </h1>
        <p className="text-md m-auto col-lg-6 col-md-6 col-sm-7 col-10 mt-10 mb-20">
          {homePageT("main_text_subtext")}
        </p>
        <div>
          <Link href="/booking" className="btn btn-primary btn-lg">
            {commonT("get_started")}
          </Link>
        </div>
        <div className="position-relative flex-grow-1">
          <HomePageBGArrowUp className="position-absolute" />
          <HomePageBGAmplitude className="position-absolute" />
          <HomePageBGDr className="position-absolute" />
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
