import { useTranslation } from "next-i18next";
import { useId } from "react";
import {
  IWhatMakeUsBetterItems,
  whatMakeUsBetterItemsIcons,
} from "./interfaces";

const WhatMakesUsBetter = () => {
  const uniqID = useId();
  const { t } = useTranslation("about_page", {
    keyPrefix: "what_makes_us_better",
  });

  const items: IWhatMakeUsBetterItems[] = t("items", { returnObjects: true });
  const itemsToShow = items.map((item, i) => {
    return {
      ...item,
      icon: whatMakeUsBetterItemsIcons[i],
    };
  });

  return (
    <section className="container col-12 col-md-11 m-auto d-flex flex-column align-items-center mb-28 mb-sm-32 basic-container-lg p-x-default">
      <div className="d-flex flex-column align-items-center text-center mb-md-15 mb-sm-35 mb-25">
        <h2 className="section-title col-12 mb-0 h3">{t("title")}</h2>
      </div>
      <div className="d-flex row justify-content-center justify-content-sm-between align-items-center text-sm-start text-center col-10 col-md-12">
        {itemsToShow.map((item, i) => (
          <div
            key={uniqID + i}
            className={`col-md-3 col-sm-6 col-11 mb-17 mb-sm-25`}
          >
            <div className="mb-8">{item.icon}</div>
            <h6>{item.title}</h6>
            <p className="mb-0 text-xs">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatMakesUsBetter;
