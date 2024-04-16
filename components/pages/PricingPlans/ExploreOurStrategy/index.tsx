import {useTranslation} from "next-i18next";
import {
    IStrategyCardText,
    IStrategyCardToShow,
    StrategyCardIcons,
} from "./interfaces";
import {
    ArrowRight,
    ArrowLeft,
    X,
    V,
    Revenue,
    Glob,
    Star,
    StarLogo,
    Contact
} from "../../../../shared/icons/common-icons";
import Type from "public/assets/images/png/type.png";
import Image1 from "public/assets/images/png/Better-Outreach-Bg.png";
import Image2 from "public/assets/images/png/Better-Outreach-Bg-2.png";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import BacklinkStatisticItem, {
    BacklinkStatisticItemProps
} from "../BacklinkStatistics/components/BacklinkStatisticItem";

import Reviewer1 from "../../../../public/assets/images/png/yellow-1.png";
import Reviewer2 from "../../../../public/assets/images/png/yellow-2.png";
import Reviewer3 from "../../../../public/assets/images/png/blue-1.png";
import Reviewer4 from "../../../../public/assets/images/png/blue-2.png";
import React from "react";
import Typewriter from 'typewriter-effect';


const statisticItems1: BacklinkStatisticItemProps[] = [
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

]

const statisticItems2: BacklinkStatisticItemProps[] = [
    {
        websiteUrl: 'myhours.com',
        websiteTitle: 'Project time tracking software for teams',
        page: 1,
        checkBoxes: ['Unique anchor links from SAAS websites', '35 links each month', 'Keyword strategy planning', '50+ DR'],
        image: Reviewer3
    },
    {
        websiteUrl: 'simpu.co',
        websiteTitle: 'Communication platform',
        page: 2,
        checkBoxes: ['Unique anchor links from SAAS websites', '20 links each month', 'Keyword strategy planning', '45+ DR'],
        image: Reviewer4
    },
]
const ExploreOurStrategy = () => {
    const {t} = useTranslation("pricing_page", {
        keyPrefix: "explore_our_strategy",
    });

    const strategyCardsTexts: IStrategyCardText[] = t("strategy_cards", {
        returnObjects: true,
    });

    const strategyCardsToShow: IStrategyCardToShow[] = strategyCardsTexts.map(
        (el, i) => {
            const {content, heading} = el;
            const icon = StrategyCardIcons[i];
            return {
                heading,
                content,
                icon,
            };
        }
    );
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        nextArrow: <button><ArrowLeft/></button>,
        prevArrow: <button><ArrowLeft/></button>
    };

    return (
        <>
            <section
                className="prices-explor-strategy col-11 pt-sm-32 pt-20 px-sm-43 px-4 pb-sm-50 pb-20 m-auto rounded-4 mb-sm-18 mb-8 basic-container">
                <div className="d-flex flex-column align-items-center text-center pb-sm-22  pb-8">
                    <h2 className="explore-our-strategy-heading col-11 mb-4 h3">What You Can Expect?</h2>
                    <p className="col-md-8 col-11 text-sm fw-400 ">You must know that we prioritize quality then
                        quantity</p>
                </div>
                <div className="row justify-content-around ">

                    {/*{strategyCardsToShow.map((el, i) => {*/}
                    {/*  const Icon = el.icon;*/}
                    {/*  return (*/}
                    {/*    <div*/}
                    {/*      key={i}*/}
                    {/*      className={`d-flex flex-column align-items-sm-start col-sm-4 col-11 d-flex align-items-center ${i !== 2?'pe-sm-30':'pe-sm-12'}`}*/}
                    {/*    >*/}
                    {/*      <Icon className="mb-8" />*/}
                    {/*      <h6 className="fw-600">{el.heading}</h6>*/}
                    {/*      <p className="text-xs text-sm-start text-center mb-15 pe-4">*/}
                    {/*        {el.content}*/}
                    {/*      </p>*/}
                    {/*    </div>*/}
                    {/*  );*/}
                    {/*})}*/}

                    <div
                        className={`d-flex flex-column align-items-sm-end col-sm-6 col-11 d-flex align-items-center `}
                    >
                        <div className="expect-div">
                            <h6>Do’s</h6>

                            <div className="all">
                                <div>
                                    <V/>
                                    <p>Relevant-niche websites</p>
                                </div>
                                <div>
                                    <V/>
                                    <p>Natural anchor text</p>
                                </div>

                                <div>
                                    <V/>
                                    <p>Websites with growing organic traffic</p>
                                </div>

                                <div>
                                    <V/>
                                    <p>SAAS, service , business websites</p>
                                </div>
                                <div>
                                    <V/>
                                    <p>Do-follow and permanent links</p>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div
                        className={`d-flex flex-column align-items-sm-start col-sm-6 col-11 d-flex align-items-center`}
                    >
                        <div className="expect-div red">
                            <h6>Dont’s</h6>

                            <div className="all">
                                <div>
                                    <X/>
                                    <p>No PBN& link Farms</p>
                                </div>
                                <div>
                                    <X/>
                                    <p>No Casino/CBD websites</p>
                                </div>

                                <div>
                                    <X/>
                                    <p>No duplicated domains</p>
                                </div>

                                <div>
                                    <X/>
                                    <p>No Spammy & duplicated anchors</p>
                                </div>
                                <div>
                                    <X/>
                                    <p>No no-follow links</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section
                className="prices-explor-strategy col-11 pt-sm-32 pt-20 px-sm-43 px-4 pb-sm-50 pb-0 m-auto rounded-4 mb-sm-18 mb-0 basic-container">
                <div className="d-flex flex-column align-items-center text-center pb-sm-22  pb-8">
                    <h2 className="explore-our-strategy-heading col-11 mb-4 h3">What We Can Do?</h2>
                    <p className="col-md-8 col-11 text-sm fw-400 ">Search your ranking keyword and appear on the first
                        page of Google SERP</p>
                </div>
                <div className="row justify-content-around ">

                    <div
                        className={`d-flex  col-sm-5 col-11 d-flex align-items-center`}
                    >
                        <div className="can-do">
                            <h4>Get to the top of Google SERP with our agency</h4>
                            <div className="all">
                                <div>
                                    <ArrowRight/>
                                    <p>Higher rankings for more website traffic</p>
                                </div>
                                <div>
                                    <ArrowRight/>
                                    <p>More traffic leads to more leads</p>
                                </div>
                                <div>
                                    <ArrowRight/>
                                    <p>More leads, more conversions</p>
                                </div>
                                <div>
                                    <ArrowRight/>
                                    <p>And more conversions?</p>
                                </div>
                            </div>
                            <div className="revenue">
                                <Revenue/>
                                <p>More revenue for your business!</p>
                            </div>
                        </div>

                    </div>
                    <div
                        className={`d-flex flex-column align-items-sm-end col-sm-7 col-12 d-flex align-items-center`}
                    >
                        <div className="type-div">
                            <Image height="394" width="580" src={Type} loading="lazy" alt="type"/>

                            <Typewriter
                                options={{
                                    strings: ['Your Keyword'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>

                    </div>
                </div>
            </section>
            <section
                className="prices-explor-strategy col-11 pt-sm-32 pt-20 px-sm-43 px-4 pb-sm-50 pb-0 m-auto rounded-4 mb-sm-18 mb-8 basic-container">
                <div className="d-flex flex-column align-items-center text-center pb-sm-22  pb-8">
                    <h2 className="explore-our-strategy-heading col-11 mb-4 h3">Link Building Case Studies</h2>
                    <p className="col-md-8 col-11 text-sm fw-400 link-building-p">{`Be as successful as our clients. With
                        GoPeak's backlinks, you will search for your keyword and find it at the top of Google SERP.`}</p>
                    <div className="star-div">
                        {/*<StarLogo/>*/}
                        {/*<div>*/}
                        {/*    <Star/>*/}
                        {/*    <Star/>*/}
                        {/*    <Star/>*/}
                        {/*    <Star/>*/}
                        {/*    <Star/>*/}
                        {/*</div>*/}
                        {/*<span>10 reviews</span>*/}

                        <div className="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="1"
                             data-height="40" data-nofollow="true" data-expandifr="true" data-scale="100"
                             data-clutchcompany-id="2292200"></div>
                    </div>
                </div>
                <div className="row justify-content-around ">

                    <div
                        className={`d-flex flex-column align-items-sm-end col-sm-6 col-12 d-flex align-items-center`}
                    >
                        <div className="link-building">
                            <Image height="318" width="400" src={Image1} loading="lazy" alt="img 1"/>
                            <div className="all">
                                <div className="justify-content-between">
                                    <div>
                                        <Glob/>
                                        <h5>Referral Rock</h5>
                                    </div>
                                    <span># referral program</span>
                                </div>
                                <p>{`With 30 high-quality monthly backlinks, the website has only improved visibility and
                                    reached Google's first page in five months!`}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`d-flex flex-column align-items-sm-start col-sm-6 col-12 d-flex align-items-center two`}
                    >
                        <div className="link-building">
                            <Image height="318" width="400" src={Image2} loading="lazy" alt="img 2"/>
                            <div className="all">
                                <div className="justify-content-between">
                                    <div>
                                        <Glob/>
                                        <h5>My Hours</h5>
                                    </div>
                                    <span># time tracking</span>
                                </div>
                                <p>{`The website has improved visibility with 25 high-quality monthly backlinks and
                                    reached Google's first page in 8 months!`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className=" notable-section prices-explor-strategy col-11 pt-sm-32 pt-20 px-sm-43 px-4 pb-sm-50 pb-20 m-auto rounded-4 mb-sm-18 mb-8 basic-container">
                <div className="d-flex flex-column align-items-center text-center pb-sm-22  pb-8">
                    <h2 className="explore-our-strategy-heading col-11 mb-4 h3">Notable Metric Changes</h2>

                </div>
                <div className="row justify-content-around ">
                    <div
                        className={`d-flex col-sm-6 col-11 d-flex align-items-center justify-content-md-start justify-content-center`}
                    >
                        <div className="notable-div">
                            <h4>Organic Traffic Increase</h4>
                            <p>{`By receiving authoritative backlinks, Your website can reach the top of Google's search
                                results page. Did you know that the top-ranking result on a search engine results page
                                (SERP) generally receives approximately 31.7% of the total organic traffic?`}</p>

                            <Link href="/booking"><Contact/>Talk to an Expert</Link>
                        </div>
                    </div>
                    <div
                        className={`d-flex flex-column align-items-sm-end col-sm-6 col-11 d-flex align-items-center`}
                    >
                        <Slider {...settings}>
                            {statisticItems1.map((item, index) => (
                                // <BacklinkStatisticItem key={index} {...item}/>
                                <Image key={index} src={item.image} alt={item.websiteTitle} />
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className="row justify-content-around mt-45">
                    <div
                        className={`d-flex flex-column align-items-sm-end col-sm-6 col-11 d-flex align-items-center order-2 order-sm-1`}
                    >
                        <Slider {...settings}>
                            {statisticItems2.map((item, index) => (
                                // <BacklinkStatisticItem key={index} {...item}/>
                                <Image key={index} src={item.image} alt={item.websiteTitle} />
                            ))}
                        </Slider>
                    </div>
                    <div
                        className={`d-flex col-sm-6 col-11 d-flex align-items-center justify-content-center order-1 order-sm-2`}
                    >
                        <div className="notable-div">
                            <h4>Domain Rating Increase</h4>
                            <p>{`We obtain authority backlinks from reputable sources, enriching the link profile and
                                boosting content visibility. Our link-building strategies allow us to mention our
                                client's websites in authority sources.`}</p>

                            <Link href="/booking"><Contact/>Talk to an Expert</Link>
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
};

export default ExploreOurStrategy;
