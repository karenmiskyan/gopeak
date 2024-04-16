import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  HomePageArrowPointer,
  HomePageStar,
} from "../../../../shared/backgroundImages/home/backgrounds";
import useResizer from "hooks/useResizer";
import Link from "next/link";

const BottomGetStarted = () => {
  const [hideMovableElements, setHideMovableElements] = useState(false);
  const { t: homePageT } = useTranslation("home_page", {
    keyPrefix: "bottom_section",
  });
  const { t: commonT } = useTranslation("common", { keyPrefix: "btn" });

  const handleWindowResize = () => {
    if (window.innerWidth <= 770) {
      setHideMovableElements(true);
    } else {
      setHideMovableElements(false);
    }
  };

  useResizer(handleWindowResize);

  return (
    <div className="home-page bottom-get-started d-flex align-items-center justify-content-center col-12 position-relative pt-35 pt-sm-67 pt-md-87 pb-30 pb-sm-50 pb-md-80">
      <div className="d-flex flex-column align-items-center justify-content-center col-12 col-sm-10 col-md-7 position-relative">
        <p className="mb-33 text-center fw-600 h3">
          {homePageT("ready_to_increase_ranking")}
        </p>
        <Link href="/booking" className="btn btn-primary btn-lg">
          {commonT("get_started")}
        </Link>
        {!hideMovableElements && (
          <>
            <HomePageStar className="left-star position-absolute top-0 l-0" />
            <HomePageStar className="right-star position-absolute bottom-0 r-0" />
          </>
        )}
      </div>
      {!hideMovableElements && (
        <HomePageArrowPointer className="bottom-arrow-pointer position-absolute" />
      )}
    </div>
  );
};

export default BottomGetStarted;
