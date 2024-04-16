import Link from "next/link";

interface PageBottomGetStartedProps {
  heading: string;
  btnText: string;
  hasArrow?: boolean;
  subHeading?: string;
  sectionClassName?: string;
}

const PageBottomGetStarted = ({
  btnText,
  heading,
  subHeading,
  sectionClassName,
  hasArrow = true,
}: PageBottomGetStartedProps) => {
  return (
    <section
      className={`col-12 col-sm-11 m-auto contact-us-bottom-section ${sectionClassName}`}
    >
      <div className="d-flex flex-column align-items-center text-center pb-8 pb-sm-20 basic-container-md">
        <h3 className="stars-before-and-after section-title-mobile col-9 mb-4">
          {heading}
        </h3>
        {subHeading && (
          <p className="mxw-max-content col-md-8 col-11 text-sm fw-400 mb-0">
            {subHeading}
          </p>
        )}
      </div>
      <div className="text-center pb-52 pb-sm-76 pb-md-65">
        <Link
          href="/booking"
          className={`${
            hasArrow ? "curly-arrow-after" : ""
          } btn btn-primary btn-lg mt-4 mt-sm-8`}
        >
          {btnText}
        </Link>
      </div>
    </section>
  );
};

export default PageBottomGetStarted;
