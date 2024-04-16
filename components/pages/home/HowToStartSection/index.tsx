import { useTranslation } from "next-i18next";
import {
  IconDragWindowWithCursor,
  IconCalendarWithShadow,
  IconArrowInGlob,
} from "shared/icons/common-icons";

const HowToStartSection = () => {
  const { t } = useTranslation("home_page", { keyPrefix: "how_to_start" });

  return (
    <section className="basic-container col-11 pt-sm-32 pt-20 px-sm-43 px-4 pb-sm-50 pb-20 bg-violet m-auto rounded-4 mb-sm-18 mb-8 w-calc-30">
      <div className="d-flex flex-column align-items-center text-center pb-sm-22  pb-8">
        <h2 className="how-to-start-heading col-11 mb-4">{t("heading")}</h2>
        <p className="col-md-8 col-11 text-sm fw-400 ">
          {t("heading_sub_text")}
        </p>
      </div>
      <div className="row justify-content-around ">
        <div className="d-flex flex-column align-items-sm-start col-sm-4 col-7 d-flex align-items-center">
          <IconCalendarWithShadow className="mb-8" />
          <h6 className="fw-600">{t("first_card_heading")}</h6>
          <p className="text-xs text-sm-start text-center mb-15 pe-4">
            {t("first_card_text")}
          </p>
        </div>
        <div className="d-flex flex-column align-items-sm-start col-sm-4 col-7 d-flex align-items-center">
          <IconDragWindowWithCursor className="mb-8" />
          <h6 className="fw-600">{t("second_card_heading")}</h6>
          <p className="text-xs text-sm-start text-center mb-15 pe-4">
            {t("second_card_text")}
          </p>
        </div>
        <div className="d-flex flex-column align-items-sm-start col-sm-4 col-7 d-flex align-items-center">
          <IconArrowInGlob className="mb-8" />
          <h6 className="fw-600">{t("third_card_heading")}</h6>
          <p className="text-xs text-sm-start text-center mb-15 pe-4">
            {t("third_card_text")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToStartSection;
