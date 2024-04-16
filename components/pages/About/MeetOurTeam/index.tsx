import {useState} from "react";
import Image from "next/image";
import {useTranslation} from "next-i18next";

import Carousel from "components/shared/Carousel";
import useResizer from "hooks/useResizer";
import {ITeamMembersInfo} from "./interfaces";
import TeamMemberImage from "../../../../public/assets/images/png/team-member.png";

const MeetOurTeam = () => {
    const [isMobile, setMobile] = useState(false);
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showFrom, setShowFrom] = useState(0);
    const {t} = useTranslation("about_page", {
        keyPrefix: "meet_our_team",
    });

    const handleWindowResize = () => {
        if (window.innerWidth <= 768) {
            setMobile(true);
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

    const teamMembersInfo: ITeamMembersInfo[] = t("team_members_info", {
        returnObjects: true,
    });

    const changeVisibleCards = (changeBy: number) => {
        setShowFrom((prevNum) => {
            const newValue = prevNum + changeBy;
            if (newValue === teamMembersInfo.length) return 0;
            if (newValue < 0) return teamMembersInfo.length - 1;
            return newValue;
        });
    };

    const forShowTwo = teamMembersInfo.slice(showFrom, 2 + showFrom);
    const forShowFour = teamMembersInfo.slice(showFrom, 4 + showFrom);

    const teamMembersToShow = showOne
        ? teamMembersInfo.slice(showFrom, 1 + showFrom)
        : showTwo
            ? forShowTwo.length > 1
                ? forShowTwo
                : [...forShowTwo, ...teamMembersInfo.slice(0, 1)]
            : forShowFour.length > 3
                ? forShowFour
                : [...forShowFour, ...teamMembersInfo.slice(0, 4 - forShowFour.length)];

    const content = teamMembersToShow.map((member) => {
        return (
            <div key={member.name} className="w-25 mw-215-px mb-25">
                <div className="team-member">
                    <Image style={{'border': '1px solid #cccccc80','borderRadius': '20%'}} quality={100} src={isMobile ? member.mobileImage : member.image} width="174" height="172" alt={member.name}/>
                    <h6 className="mt-15 mb-4">{member.name}</h6>
                    <p className="text-sm mb-4">{member.position}</p>
                    {member?.in &&
                        <a href={member.in} target="_blank" rel="noopener noreferrer">
                            <Image quality={100} src="/assets/images/png/in.svg" width="24" height="24" alt={member.name}/>
                        </a>
                    }
                </div>
            </div>
        );
    });

    return (
        <section className="container m-auto mt-45 mt-50 mt-md-65 col-12 text-center basic-container-lg p-x-default">
            <h3 className="section-title mb-30 h4">{t("title")}</h3>
            <Carousel
                contentClassName={`w-100`}
                wrapperClassName={`basic-container-lg w-96`}
                content={content}
                showArrows={true}
                changeVisibleCards={changeVisibleCards}
            />
        </section>
    );
};

export default MeetOurTeam;
