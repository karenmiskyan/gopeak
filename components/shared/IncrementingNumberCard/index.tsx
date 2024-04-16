import useResizer from "hooks/useResizer";
import { useEffect, useRef, useState } from "react";
import { IEnumerates } from "./interfaces";

export interface IncrementingNumberCardProps {
  className: string;
  isRotated?: boolean;
  enumerates: IEnumerates;
  subtext: string;
}

const IncrementingNumberCard = ({
  subtext,
  className,
  isRotated,
  enumerates,
}: IncrementingNumberCardProps) => {
  const [isSmallSize, setIsSmallSize] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);

  const handleSmallSizeChange = () => {
    if (window.innerWidth <= 768) {
      setIsSmallSize(true);
    } else {
      setIsSmallSize(false);
    }
  };

  useResizer(handleSmallSizeChange);

  useEffect(() => {
    handleSmallSizeChange();
  }, []);

  useEffect(() => {
    const currentRef = ref.current;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && count < enumerates.maxCount) {
          setCount((prevCount) => {
            const nextCount = prevCount + enumerates.step;
            return nextCount > enumerates.maxCount
              ? enumerates.maxCount
              : Math.ceil(nextCount);
          });
        }
      });
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [count, ref, enumerates]);

  return (
    <div
      className={`incrementing-number-block ${className} ${
        isRotated ? "rotate-3-15-n" : ""
      } px-22 py-24 rounded-20-px flex-1 me-5 mb-12`}
    >
      <p className={`${isSmallSize ? "h3" : "h2"} m-0`} ref={ref}>
        {count}
        <span>+</span>
      </p>
      <p className="text-md mb-0">{subtext}</p>
    </div>
  );
};

export default IncrementingNumberCard;
