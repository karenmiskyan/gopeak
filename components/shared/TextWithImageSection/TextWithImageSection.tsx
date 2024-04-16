import useResizer from "hooks/useResizer";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";

interface TextWithImageSectionProps {
  heading: string;
  paragraphs: string[];
  showImageInMobile?: boolean;
  image: string | StaticImageData;
  imageAlt: string;
}

const TextWithImageSection = ({
  image,
  heading,
  imageAlt,
  paragraphs,
  showImageInMobile,
}: TextWithImageSectionProps) => {
  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleImageVisibility = useCallback(() => {
    if (showImageInMobile) {
      return;
    }

    if (window.innerWidth <= 768) {
      setIsImageVisible(false);
    } else {
      setIsImageVisible(true);
    }
  }, [showImageInMobile]);

  useResizer(handleImageVisibility);

  useEffect(() => {
    handleImageVisibility();
  }, [handleImageVisibility]);

  return (
    <section className="how-we-work-1-section pt-45 pt-sm-55 pt-md-62 justify-content-between d-flex basic-container-lg p-x-default p-xs-x-default-15 row">
      <div className="col-12 col-md-5 col-lg-5 pt-7 mt-0 m-auto mb-35">
        <h1 className="who-we-are-heading h2">{heading}</h1>
        {paragraphs.map((paragraph, index) => {
          return (
            <p
              key={index}
              className="text-sm mb-4 fw-400 text-color-midnight-90"
            >
              {paragraph}
            </p>
          );
        })}
      </div>
      {isImageVisible && (
        <div className="col-12 col-md-7 col-lg-7 m-auto d-flex justify-end-from-sm justify-content-center mw-min-content">
          <Image className="text-with-image-section-image" alt={imageAlt} src={image} />
        </div>
      )}
    </section>
  );
};

export default TextWithImageSection;
