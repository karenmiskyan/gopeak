import { TFunction } from "next-i18next";
import Image, { StaticImageData } from "next/image";

interface ErrorPageLayoutProps {
  t: TFunction;
  imgSrc: StaticImageData;
}

const ErrorPageLayout = ({ t, imgSrc }: ErrorPageLayoutProps) => {
  return (
    <section className="container">
      <Image className="error-pages-cover" alt="Error image" src={imgSrc} />
      <div
        className={`d-flex flex-column align-items-center text-center w-100 pt-20 pt-sm-25 pt-md-35 pe-5`}
      >
        <h3 className="section-title section-title-mobile col-11 mb-4">
          {t("oops_heading")}
        </h3>
        <p className="col-md-8 col-11 text-sm fw-400 mb-17">
          {t("oops_sub_heading")}
        </p>
        <button className="btn btn-primary btn-lg mb-25">
          {t("btn_back_to_home")}
        </button>
      </div>
    </section>
  );
};

export default ErrorPageLayout;
