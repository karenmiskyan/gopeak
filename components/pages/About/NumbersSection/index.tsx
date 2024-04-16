import IncrementingNumberCard, {
  IncrementingNumberCardProps,
} from "components/shared/IncrementingNumberCard";
import { useMemo } from "react";

const NumbersSection = () => {
  const IncrementingNumberCardProps: IncrementingNumberCardProps[] = useMemo(
    () => [
      {
        className: "bg-gray-rgb-80",
        enumerates: { maxCount: 4500, step: 10 },
        isRotated: true,
        subtext: "Total links",
      },
      {
        className: "bg-orange-350",
        enumerates: { maxCount: 500, step: 1.5 },
        subtext: "Guest Posts",
      },
      {
        className: "bg-green-light-80",
        enumerates: { maxCount: 50, step: 0.1 },
        subtext: "Happy Clients",
      },
    ],
    []
  );

  return (
    <section className="container mt-sm-86 m-auto mb-25 mb-sm-22 mb-md-70 col-11 col-md-11 col-lg-9 d-flex flex-column flex-md-row align-items-center justify-content-md-between">
      {IncrementingNumberCardProps.map((props, index) => (
        <IncrementingNumberCard key={index} {...props} />
      ))}
    </section>
  );
};

export default NumbersSection;
