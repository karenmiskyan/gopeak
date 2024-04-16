import { BenefitCheckMark } from "../../../shared/icons/home-icons";

export interface BenefitInfoProps {
  text: string;
  className?: string;
  textClassName?: string;
}

const BenefitInfo = ({ className, text, textClassName }: BenefitInfoProps) => {
  return (
    <div className={`d-flex ${className}`}>
      <div>
        <BenefitCheckMark />
      </div>
      <p className={`fw-500 pt-2 ${textClassName || "text-sm"}`}>{text}</p>
    </div>
  );
};

export default BenefitInfo;
