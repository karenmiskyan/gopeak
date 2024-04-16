import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import ImageReadyToIncreaseRevenueChart from "../../../../public/assets/images/png/ready-to-increase-revenue-chart.png";
import useResizer from "hooks/useResizer";
import Link from "next/link";

const ReadyToIncreaseRevenue = () => {
  const [showChart, setShowChart] = useState(false);
  const { t: pricingT } = useTranslation("pricing_page", {
    keyPrefix: "increase_revenue",
  });
  const { t: commonT } = useTranslation("common", { keyPrefix: "btn" });

  const handleShowChartImage = () => {
    if (window.innerWidth <= 768) {
      setShowChart(false);
    } else {
      setShowChart(true);
    }
  };

  useResizer(handleShowChartImage);

  return (
    <section className="basic-container-lg ready-to-increase-revenue-section col-11 m-auto rounded-20-px d-flex flex-column flex-md-row justify-content-between align-items-center mb-35 mb-sm-20 mb-10">
      <div
        className={`pt-20 pt-sm-60 pt-md-66 pb-20 pb-sm-72 pb-md-60 ps-md-42 ${
          showChart ? "" : "d-flex flex-column text-center align-items-center"
        }`}
      >
        <h3 className="mb-sm-25 mb-20 h4">{pricingT("heading")}</h3>
        <Link href="/booking" className="btn btn-lg btn-primary">
          {commonT("get_started")}
        </Link>
      </div>
      {showChart && (
        <Image
          quality={100}
          className="mt-md-21 me-md-37 mb-20 mb-md-0"
          alt="Ready to increase revenue chart image"
          src={ImageReadyToIncreaseRevenueChart}
        />
      )}
    </section>
  );
};

export default ReadyToIncreaseRevenue;
