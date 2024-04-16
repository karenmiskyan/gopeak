import SlideShow, {
  ISlideCard,
} from "../../../shared/SlideShow/SlideShow";
import { useTranslation } from "next-i18next";
import { SlideCard } from "../../../shared/SlideShow/interfaces";
import TempPersonFace from "../../../../public/assets/images/png/tempPersonFace.png";
import Reviewer1 from "../../../../public/assets/images/png/reviewer1.jpeg";
import Reviewer2 from "../../../../public/assets/images/png/reviewer2.jpeg";
import Reviewer3 from "../../../../public/assets/images/png/reviewer3.jpeg";

const WhatOurClientsSay = () => {
  const { t } = useTranslation("home_page", {
    keyPrefix: "what_our_clients_say",
  });

  const slidesInfo: ISlideCard[] = [
    {
      feedback: t("slides.feedback_1.feedback"),
      feedbackOwner: t("slides.feedback_1.feedback_owner"),
      ownerPosition: t("slides.feedback_1.position"),
      value: SlideCard.FIRST_ONE,
      htmlFor: "item-1",
      labelID: "card-1",
      image: Reviewer1,
    },
    {
      feedback: t("slides.feedback_2.feedback"),
      feedbackOwner: t("slides.feedback_2.feedback_owner"),
      ownerPosition: t("slides.feedback_2.position"),
      value: SlideCard.SECOND_ONE,
      htmlFor: "item-2",
      labelID: "card-2",
      image: Reviewer2,
    },
    {
      feedback: t("slides.feedback_3.feedback"),
      feedbackOwner: t("slides.feedback_3.feedback_owner"),
      ownerPosition: t("slides.feedback_3.position"),
      value: SlideCard.THIRD_ONE,
      htmlFor: "item-3",
      labelID: "card-3",
      image: Reviewer3,
    },
  ];

  return (
    <section className="what-clients-say col-11 m-auto basic-container-md">
      <div className="text-center">
        <p className="mb-4 text-center m-auto text-fs-30 fw-700">{t("heading")}</p>
        <p className="text-sm">{t("heading_sub_text")}</p>
      </div>
      <SlideShow slideCards={slidesInfo} />
    </section>
  );
};

export default WhatOurClientsSay;
