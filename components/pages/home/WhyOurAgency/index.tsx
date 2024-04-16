import InfoCard, { InfoCardProps } from "../../../shared/InfoCard";
import { useTranslation } from "next-i18next";
import { useMemo } from "react";

const WhyOurAgencySection = () => {
  const { t } = useTranslation("home_page", { keyPrefix: "why_our_agency" });

  const infoCards: InfoCardProps[] = useMemo(
    () => [
      {
        headingText: t("sub_heading_1"),
        subText: t("sub_text_1"),
        className: "agency-item mb-sm-24",
      },
      {
        headingText: t("sub_heading_2"),
        subText: t("sub_text_2"),
        className: "agency-item mb-sm-24",
      },
      {
        headingText: t("sub_heading_3"),
        subText: t("sub_text_3"),
        className: "agency-item mb-sm-24",
      },
      {
        headingText: t("sub_heading_4"),
        subText: t("sub_text_4"),
        className: "agency-item mb-sm-24",
      },
      {
        headingText: t("sub_heading_5"),
        subText: t("sub_text_5"),
        className: "agency-item mb-sm-24",
      },
      {
        headingText: t("sub_heading_6"),
        subText: t("sub_text_6"),
        className: "mb-24 agency-item",
      },
    ],
    [t]
  );

  return (
    <section className="home-why-our-agency basic-container-md col-11 col-sm-9 m-auto mt-sm-15 pt-sm-30 pt-17 px-10 mb-6 mb-sm-37 mb-md-41">
      <h2 className="mb-20 mb-sm-27 text-center text-sm-xs h4">{t("heading")}</h2>
      <div className="row justify-content-md-center justify-content-around">
        {infoCards.map((item, i) => (
          <InfoCard
            key={i}
            headingText={item.headingText}
            subText={item.subText}
            className={item.className}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyOurAgencySection;
