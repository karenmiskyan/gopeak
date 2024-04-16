import Image, { StaticImageData } from "next/image";
import { IconFiveStars } from "shared/icons/common-icons";

interface SlideShowItemProps {
  onClick: () => void;
  labelID: string;
  htmlFor: string;
  mainText: string;
  personImage: StaticImageData;
  personName: string;
  personPosition: string;
  imageOnly?: boolean;
}

const SlideShowItem = ({
  onClick,
  labelID,
  htmlFor,
  mainText,
  personImage,
  personName,
  personPosition,
  imageOnly
}: SlideShowItemProps) => {
  
  if(imageOnly) {
    return (
      <label
        className="info-card position-absolute col-12 col-sm-7 m-auto cursor-pointer rounded-3"
        htmlFor={htmlFor}
        id={labelID}
        onClick={onClick}
      >
      <Image alt="Person face" src={personImage}/>
    </label>)
  }
  
  return (
    <label
      className="info-card position-absolute col-12 col-sm-7 m-auto cursor-pointer rounded-3"
      htmlFor={htmlFor}
      id={labelID}
      onClick={onClick}
    >
      <div className="card-heading-banner col-12 py-2 bg-purple rounded-top-3"></div>
      <div className="py-30 ps-24 pe-13">
        <IconFiveStars className="mb-10" />
        <p className="text-lg mb-35 font-sans">{mainText}</p>
        <div className="d-flex">
          <div className="slide-avatar-image-container">
            <Image alt="Person face" src={personImage}/>
          </div>
          <div className="d-flex flex-column ms-10 justify-content-center">
            <p className="fw-600 text-lg mb-1">{personName}</p>
            <p className="text-md mb-0">{personPosition}</p>
          </div>
        </div>
      </div>
    </label>
  );
};

export default SlideShowItem;
