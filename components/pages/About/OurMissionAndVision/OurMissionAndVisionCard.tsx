import { IconStar } from "shared/icons/about-icons";

interface OurMissionAndVisionCardProps {
  text: string;
  title: string;
  isActive?: boolean;
}

const OurMissionAndVisionCard = ({
  isActive,
  text,
  title,
}: OurMissionAndVisionCardProps) => {
  return (
    <div
      className={`vision-and-mission-card p-18 bg-purple-350-07 rounded-20-px mb-15 ${
        isActive
          ? "border-1-px border-solid border-primary-47 "
          : "mt-22 me-md-20"
      }`}
    >
      <IconStar className="mb-7" />
      <h5 className="mb-15">{title}</h5>
      <p className="text-sm mb-0">{text}</p>
    </div>
  );
};

export default OurMissionAndVisionCard;
