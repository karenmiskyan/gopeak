import { IconCheckboxInCircle } from "../../../shared/icons/home-icons";

export interface InfoCardProps {
  headingText: string;
  subText: string;
  className?: string;
}

const InfoCard = ({ headingText, subText, className }: InfoCardProps) => {

  return (
    <div
      className={`col-8 col-sm-5 col-md-4 me-sm-5 me-md-0 pb-2 ${
        className ?? "mb-sm-24"
      }`}
    >
      <IconCheckboxInCircle className="mb-8" />
      <h6 className="mb-8">{headingText}</h6>
      <p className="text-xs pe-4">{subText}</p>
    </div>
  );
};

export default InfoCard;
