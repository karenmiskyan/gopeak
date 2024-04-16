import { useTranslation } from "next-i18next";
import OurMissionAndVisionCard from "./OurMissionAndVisionCard";

const OurMissionAndVision = () => {
  const { t } = useTranslation("about_page", {
    keyPrefix: "our_mission_and_vision",
  });
  const title_1 = t("title_1");
  const content_1 = t("content_1");
  const title_2 = t("title_2");
  const content_2 = t("content_2");
  
  
  return (
    <section className="m-auto row col-lg-8 align-items-center justify-content-center flex-md-row flex-column container mb-25 mb-sm-30 mb-md-68">
      <OurMissionAndVisionCard
        title={title_1}
        text={content_1}
      />
      <OurMissionAndVisionCard
        isActive
        title={title_2}
        text={content_2}
      />
    </section>
  );
};

export default OurMissionAndVision;
