import {useState} from "react";
import {useTranslation} from "next-i18next";
import PricingPlanCard from "../../../shared/PricingPlanCards/PricingPlanCard";
import {BenefitInfoProps} from "../../../shared/BenfitInfo";
import CustomPricingPlanCard from "../../../shared/PricingPlanCards/CustomPricingPlanCard";
import {IconSliderArrow, IconSuccessInCircle, Success} from "../../../../shared/icons/common-icons";
import useResizer from "hooks/useResizer";
import Carousel from "components/shared/Carousel";
import Link from "next/link";


interface IPlanCard {
    name: string;
    price: string;
    monthly_or_yearly: string;
    benefits: string[];
    isCustom?: boolean;
    query: string;
}

const Prices = () => {
        const [showOne, setShowOne] = useState(false);
        const [showTwo, setShowTwo] = useState(false);
        const [showFrom, setShowFrom] = useState(0);
        const {t} = useTranslation("pricing_page", {
            keyPrefix: "plans_and_pricing",
        });

        const handleWindowResize = () => {
            if (window.innerWidth <= 768) {
                setShowOne(true);
                setShowTwo(false);
            } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
                setShowOne(false);
                setShowTwo(true);
            } else {
                setShowOne(false);
                setShowTwo(false);
            }
        };

        useResizer(handleWindowResize);

        const planCards: IPlanCard[] = [
            ...(t("plans", {returnObjects: true}) as IPlanCard[])
        ];

        const forShowTwo = planCards.slice(showFrom, 2 + showFrom);

        const planCardsToShow = showOne
            ? planCards.slice(showFrom, 1 + showFrom)
            : showTwo
                ? forShowTwo.length > 1
                    ? forShowTwo
                    : [...forShowTwo, ...planCards.slice(0, 1)]
                : planCards;

        const changeVisibleCards = (changeBy: number) => {
            setShowFrom((prevNum) => {
                const newValue = prevNum + changeBy;
                if (newValue === planCards.length) return 0;
                if (newValue < 0) return planCards.length - 1;
                return newValue;
            });
        };

        const content = planCardsToShow.map((plan, i) => {
            const isRecommended = plan.name === "Growth";
            const isLast = i === planCardsToShow.length - 1;
            const benefits: BenefitInfoProps[] = plan.benefits.map((el) => ({
                text: el,
            }));

            return (
                <PricingPlanCard
                    key={i}
                    isLast={isLast}
                    benefits={benefits}
                    planName={plan.name}
                    planPrice={plan.price}
                    isRecommended={isRecommended}
                    monthlyOrYearly={plan.monthly_or_yearly}
                    planQuery={plan.query}
                />
            )
        });
        // console.log(content)
        return (
            <section
                className="section-prices pt-35 pt-sm-50 pt-md-45 pb-10 col-12 m-auto pricing-background">
                <div className="text-center mb-26 mb-sm-42">
                    <h1 className="mb-4 h3">{t("heading")}</h1>
                    <p className="text-md">{t("sub_heading")}</p>
                </div>
                {/*<Carousel*/}
                {/*  content={content}*/}
                {/*  wrapperClassName="col-11"*/}
                {/*  contentClassName="col-md-12 prices-carousel"*/}
                {/*  showArrows={showOne || showTwo}*/}
                {/*  changeVisibleCards={changeVisibleCards}*/}
                {/*/>*/}
                <div className="container">


                    <div className="plane-div">
                        <div className="first-div">
                            <h5>Basic</h5>
                            <h2>$150</h2>
                            <h6>per backlink</h6>
                            <div className="w-100">
                                <Link
                                    href={`/booking?plan=Basic`}
                                    className={`btn pricing-button btn-lg btn-primary`}
                                >
                                    Book a Demo
                                </Link>
                            </div>

                        </div>
                        <div className="second-div">
                            <div><Success/><p>Do follow & permanent</p></div>
                            <div><Success/><p>DR 40+</p></div>
                            <div><Success/><p>1000+ traffic   traffic value</p></div>
                            <div><Success/><p>Niche Relevant</p></div>
                            <div><Success/><p>SAAS websites</p></div>
                            <div><Success/><p>Blog | Service pages</p></div>
                            <div><Success/><p>Minimum 10 links</p></div>
                        </div>
                    </div>
                    <div className="plane-div">
                        <div className="first-div">
                            <h5>Pro</h5>
                            <h2>$200</h2>
                            <h6>per backlink</h6>
                            <div className="w-100">
                                <Link
                                    href={`/booking?plan=Pro`}
                                    className={`btn pricing-button btn-lg btn-primary`}
                                >
                                    Book a Demo
                                </Link>
                            </div>

                        </div>
                        <div className="second-div">
                            <div><Success/><p>Do follow & permanent</p></div>
                            <div><Success/><p>DR 60+</p></div>
                            <div><Success/><p>5000+ traffic   traffic value</p></div>
                            <div><Success/><p>Niche Relevant</p></div>
                            <div><Success/><p>SAAS websites</p></div>
                            <div><Success/><p>Home page | Service pages</p></div>
                            <div><Success/><p>Minimum 10 links</p></div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
;

export default Prices;
