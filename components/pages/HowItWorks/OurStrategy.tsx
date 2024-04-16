import InfoList from "components/shared/InfoList";
import useResizer from "hooks/useResizer";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface IStrategy {
  name: string;
  tools: string[];
}

const OurStrategy = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const { t: commonT } = useTranslation("common", {
    keyPrefix: "btn",
  });
  const { t: howWeWorkT } = useTranslation("how_we_work_page", {
    keyPrefix: "our_strategy",
  });

  const handleImageVisibility = useCallback(() => {
    if (window.innerWidth <= 768) {
      setIsButtonVisible(false);
    } else {
      setIsButtonVisible(true);
    }
  }, []);

  useResizer(handleImageVisibility);

  useEffect(() => {
    handleImageVisibility();
  }, [handleImageVisibility]);

  const ourStrategyHeading = howWeWorkT("heading");
  const strategies: IStrategy[] = howWeWorkT("strategies", {
    returnObjects: true,
  });

  return (
    <section className="how-we-work-2-section container col-12 pt-md-65 pt-sm-40 pt-25 pb-sm-50 pb-20 m-auto">
      <div className="d-flex flex-column align-items-center text-center pb-sm-22  pb-8">
        <h2 className="explore-our-strategy-heading col-11 mb-4 h3">
          {ourStrategyHeading}
        </h2>
      </div>
      <div className="row justify-content-around key-phrases-how-we-work">
        {strategies.map((strategy, i) => (
          <InfoList key={i} headingText={strategy.name} list={strategy.tools} />
        ))}
      </div>
      {isButtonVisible && (
        <div className="d-flex justify-content-center">
          <Link href="/booking" className="btn btn-primary btn-lg">
            {commonT("get_started")}
          </Link>
        </div>
      )}
    </section>
  );
};

export default OurStrategy;
