import Link from "next/link";

interface CustomPricingPlanCardProps {}

const CustomPricingPlanCard = ({}: CustomPricingPlanCardProps) => {
  return (
    <div
      className={`pricing-card pt-14 ps-12 pe-18 pb-27 bg-white rounded-20-px d-flex flex-column justify-content-between mx-6`}
    >
      <div>
        <p className="text-md fw-600 mb-12">Custom</p>
        <p className="h7 fw-600 mb-35">Build your plan by yourself</p>
        <p className="text-xs text-midnight-90">Order now and discuss your preferences with our Co-founders</p>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Link
        href={"/order?plan=custom"}
         className={`btn btn-lg btn-lg-text-md btn-secondary`}>Order Now</Link>
      </div>
    </div>
  );
};

export default CustomPricingPlanCard;
