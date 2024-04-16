import { useTranslation } from "next-i18next";
import {
  AMZ,
  CloudTalk,
  HeySurvey,
  LRNKEY,
  MyHours,
  Packwire,
  Polllack,
  Sixthreezero,
  Virtalent,
} from "../../../../shared/icons/home-icons";

const CoopCompaniesSlider = () => {
  const { t } = useTranslation("home_page");

  return (
    <div className="coop-companies-slider-wrapper d-flex flex-column align-items-center mt-17 pt-23 pb-25">
      <p className="fw-600 text-fs-24 mb-15">{t("company_that_trust_us")}</p>
      <div className="coop-companies-slider-slider rounded-4 col-lg-11 col-md-10 col-sm-10 col-11 pt-31 pb-27 d-flex">
        <div className="logo me-15">
          <AMZ />
        </div>
        <div className="logo me-15">
          <CloudTalk />
        </div>
        <div className="logo me-15">
          <HeySurvey />
        </div>
        <div className="logo me-15">
          <LRNKEY />
        </div>
        <div className="logo me-15">
          <MyHours />
        </div>
        <div className="logo me-15">
          <Packwire />
        </div>
        <div className="logo me-15">
          <Polllack />
        </div>
        <div className="logo me-15">
          <Sixthreezero />
        </div>
        <div className="logo me-15">
          <Virtalent />
        </div>

        <div className="logo me-15">
          <AMZ />
        </div>
        <div className="logo me-15">
          <CloudTalk />
        </div>
        <div className="logo me-15">
          <HeySurvey />
        </div>
        <div className="logo me-15">
          <LRNKEY />
        </div>
        <div className="logo me-15">
          <MyHours />
        </div>
        <div className="logo me-15">
          <Packwire />
        </div>
        <div className="logo me-15">
          <Polllack />
        </div>
        <div className="logo me-15">
          <Sixthreezero />
        </div>
        <div className="logo me-15">
          <Virtalent />
        </div>

        <div className="logo me-15">
          <AMZ />
        </div>
        <div className="logo me-15">
          <CloudTalk />
        </div>
        <div className="logo me-15">
          <HeySurvey />
        </div>
        <div className="logo me-15">
          <LRNKEY />
        </div>
        <div className="logo me-15">
          <MyHours />
        </div>
        <div className="logo me-15">
          <Packwire />
        </div>
        <div className="logo me-15">
          <Polllack />
        </div>
        <div className="logo me-15">
          <Sixthreezero />
        </div>
        <div className="logo me-15">
          <Virtalent />
        </div>
      </div>
    </div>
  );
};

export default CoopCompaniesSlider;
