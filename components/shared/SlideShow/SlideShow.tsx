import { useState } from "react";
import { SlideCard } from "./interfaces";
import SlideShowItem from "./SldieShowItem";
import { StaticImageData } from "next/image";

export interface ISlideCard {
  feedback: string;
  feedbackOwner: string;
  ownerPosition: string;
  value: SlideCard;
  htmlFor: string;
  labelID: string;
  image: StaticImageData;
  imageOnly?: boolean;
}

interface SlideShowProps {
  slideCards: ISlideCard[];
}

const SlideShow = ({ slideCards }: SlideShowProps) => {
  const [inputChecked, setInputChecked] = useState(SlideCard.FIRST_ONE);

  const onClick = (state: SlideCard) => setInputChecked(state);

  return (
    <div className="slider-container d-flex align-items-center px-5 py-15 flex-column justify-content-between">
      <div className="slide-show-cards-wrapper col-12 d-flex flex-column align-items-center justify-content-center">
        <input
          type="radio"
          className="d-none"
          name="slider"
          id="item-1"
          checked={inputChecked === SlideCard.FIRST_ONE}
          onChange={() => null}
        />
        <input
          type="radio"
          className="d-none"
          name="slider"
          id="item-2"
          checked={inputChecked === SlideCard.SECOND_ONE}
          onChange={() => null}
        />
        <input
          type="radio"
          className="d-none"
          name="slider"
          id="item-3"
          checked={inputChecked === SlideCard.THIRD_ONE}
          onChange={() => null}
        />
        <div className="cards position-relative mb-10 col-12">
          {slideCards.map((item, i) => (
            <SlideShowItem
              key={i}
              htmlFor={item.htmlFor}
              labelID={item.labelID}
              personName={item.feedbackOwner}
              personImage={item.image}
              personPosition={item.ownerPosition}
              onClick={() => onClick(item.value)}
              mainText={item.feedback}
            />
          ))}
        </div>
      </div>
      <div className="d-flex">
        <div
          onClick={() => onClick(SlideCard.FIRST_ONE)}
          className={`slide-selector py-2 ms-4 cursor-pointer ${
            inputChecked === SlideCard.FIRST_ONE
              ? "active px-20 bg-purple"
              : "px-13 bg-gray-500-40"
          }`}
        ></div>
        <div
          onClick={() => onClick(SlideCard.SECOND_ONE)}
          className={`slide-selector py-2 ms-4 cursor-pointer ${
            inputChecked === SlideCard.SECOND_ONE
              ? "active px-20 bg-purple"
              : "px-13 bg-gray-500-40"
          }`}
        ></div>
        <div
          onClick={() => onClick(SlideCard.THIRD_ONE)}
          className={`slide-selector py-2 ms-4 cursor-pointer ${
            inputChecked === SlideCard.THIRD_ONE
              ? "active px-20 bg-purple"
              : "px-13 bg-gray-500-40"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default SlideShow;
