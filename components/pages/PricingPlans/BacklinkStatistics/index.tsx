import SlideShow, {
    ISlideCard,
} from "../../../shared/SlideShow/SlideShow";
import {useTranslation} from "next-i18next";
import {SlideCard} from "../../../shared/SlideShow/interfaces";
import TempPersonFace from "../../../../public/assets/images/png/tempPersonFace.png";
import Reviewer1 from "../../../../public/assets/images/png/statistics1.png";
import Reviewer2 from "../../../../public/assets/images/png/statistics2.png";
import Reviewer3 from "../../../../public/assets/images/png/statistics3.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, {FC} from "react";
import Image from "next/image";
import BacklinkStatisticItem, {BacklinkStatisticItemProps} from "./components/BacklinkStatisticItem";
import CheckBox from "../../../shared/Checkbox";


// interface CarouselProps {
//   items: React.ReactNode[];
// }

const items = [Reviewer1, Reviewer2, Reviewer3];

const statisticItems: BacklinkStatisticItemProps[] = [
    {
        websiteUrl: 'myhours.com',
        websiteTitle: 'Project time tracking software for teams',
        page: 1,
        checkBoxes: ['Unique anchor links from SAAS websites', '35 links each month', 'Keyword strategy planning', '50+ DR'],
        image: Reviewer1
    },
    {
        websiteUrl: 'simpu.co',
        websiteTitle: 'Communication platform',
        page: 2,
        checkBoxes: ['Unique anchor links from SAAS websites', '20 links each month', 'Keyword strategy planning', '45+ DR'],
        image: Reviewer2
    },
    {
        websiteUrl: 'Virtalent.com',
        websiteTitle: 'Business Assistants',
        page: 3,
        checkBoxes: ['Unique anchor links from SAAS websites', '30 links each month', 'Keyword strategy planning', '40+ DR'],
        image: Reviewer3
    }
]

interface CustomDotsProps {
    onClick: (index: number) => void;
    activeIndex: number;
    slideCount: number;
}

const CustomDots: React.FC<CustomDotsProps> = ({onClick, activeIndex, slideCount}) => {
    const handleDotClick = (index: number) => {
        onClick(index);
    };

    return (
        <div style={{textAlign: 'center'}}>
            {Array.from({length: slideCount}, (_, index) => (
                <span
                    key={index}
                    onClick={() => handleDotClick(index)}
                    style={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        margin: '0 5px',
                        cursor: 'pointer',
                        borderRadius: '50%',
                        backgroundColor: index === activeIndex ? 'red' : 'gray', // Change dot color
                    }}
                />
            ))}
        </div>
    );
};

const BacklinkStatistics = () => {
    const {t} = useTranslation("pricing_page");

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false
    };

    return (
        <section className="d-none backlink-statistics-section col-11 m-auto basic-container-md w-calc-lg-15 w-calc-md-30">
            <p className="mb-20 text-center m-auto text-fs-30 fw-700">{t("backlink_statistics")}</p>
            <Slider {...settings}>
                {statisticItems.map((item, index) => (
                    <BacklinkStatisticItem key={index} {...item}/>
                ))}
            </Slider>
        </section>
    );
};

export default BacklinkStatistics;
