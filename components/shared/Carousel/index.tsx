import { IconSliderArrow } from "shared/icons/common-icons";

interface CarouselProps {
  showArrows: boolean;
  contentClassName?: string;
  wrapperClassName?: string;
  content: (JSX.Element | null)[];
  changeVisibleCards: (num: number) => void;
}

const Carousel = ({
  content,
  showArrows,
  contentClassName,
  wrapperClassName,
  changeVisibleCards,
}: CarouselProps) => {
  return (
    <div className="d-flex col-12 justify-content-center">
      <div
        className={`d-flex align-items-center ${wrapperClassName} justify-content-center`}
      >
        {showArrows && (
          <IconSliderArrow
            className="cursor-pointer me-3"
            onClick={() => changeVisibleCards(-1)}
          />
        )}
        <div
          className={`d-flex align-items-end justify-content-center ${contentClassName}`}
        >
          {content}
        </div>
        {showArrows && (
          <IconSliderArrow
            className="reveres cursor-pointer ms-3"
            onClick={() => changeVisibleCards(1)}
          />
        )}
      </div>
    </div>
  );
};

export default Carousel;
