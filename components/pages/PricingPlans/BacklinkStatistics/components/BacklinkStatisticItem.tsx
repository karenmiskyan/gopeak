import Reviewer1 from "../../../../../public/assets/images/png/statistics1.png";
import Reviewer2 from "../../../../../public/assets/images/png/statistics2.png";
import Reviewer3 from "../../../../../public/assets/images/png/statistics3.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, {FC} from "react";
import Image, {StaticImageData} from "next/image";
import CheckBox from "../../../../shared/Checkbox";


export interface BacklinkStatisticItemProps {
  websiteUrl: string;
  websiteTitle: string;
  checkBoxes: string[];
  page: number;
  image: StaticImageData;
}

const items = [Reviewer1, Reviewer2, Reviewer3];

const BacklinkStatisticItem: FC<BacklinkStatisticItemProps> = ({websiteUrl, websiteTitle, checkBoxes, page, image}) => {
  
  
  return (
    <div className="statistic-item-wrapper-container">
      <div className="statistic-item-wrapper">
        <div className="statistic-item">
          <div className="statistic-header d-flex justify-content-between">
            <div className="website">
              <div className="link">{websiteUrl}</div>
              <div className="title d-flex align-items-center">{websiteTitle}</div>
            </div>
            <div className="number">{page}/3</div>
          </div>
          <div className="checkbox-container d-flex">
            {checkBoxes.map((item, index) => <div key={index} className="fake-checkbox">
              <CheckBox id={index.toString()} name={index.toString()} checked={true} onChange={() => {
              }}/>
              <label className="fake-checkbox-label">
                {item}
              </label>
            </div>)}
          </div>
          <div className="chart-statistics">
            <Image src={image} alt={websiteTitle} quality={100}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BacklinkStatisticItem;

