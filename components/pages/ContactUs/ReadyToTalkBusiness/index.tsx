import { useTranslation } from "next-i18next";
import Link from "next/link";

const ReadyToTalkBusiness = () => {
  const { t } = useTranslation("contact_us_page", {
    keyPrefix: "ready_to_talk_business",
  });
  const calendlyLink = process.env.CALENDLY_LINK || '';

  return (
    <section className="col-12 col-sm-11 m-auto contact-us-bottom-section">
      <div className="d-flex flex-column align-items-center text-center pb-8 pb-sm-20">
        <h3 className="ready-to-talk-business-heading col-11 mb-4">
          {t("heading")}
        </h3>
        <p className="stars-before-and-after mxw-max-content col-md-8 col-11 text-sm fw-400 mb-0">
          {t("sub_heading")}
        </p>
      </div>
      <div className="text-center pb-52 pb-sm-76 pb-md-65">
        <Link href={calendlyLink} className="btn btn-primary btn-lg mt-4 mt-sm-8">
          {t("btn_book_a_demo")}
        </Link>
      </div>
    </section>
  );
};

export default ReadyToTalkBusiness;
