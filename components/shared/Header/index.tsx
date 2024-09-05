import {IconGoPeakSMBlack} from "../../../shared/icons/common-icons";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import useResizer from "hooks/useResizer";
import {TFunction} from "next-i18next";
import Loading from "../Loading";
import {useRouter} from "next/router";
import BookCallModal from "../BookCallModal";
import Cookies from "js-cookie";

interface HeaderProps {
    t: TFunction;
    border?: boolean;
}

const Header: React.FC<HeaderProps> = ({t, border}) => {
    const [showModal, setShowModal] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [hideGetStarted, setHideGetStarted] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {   
        if(!Cookies.get('book_modal')) {
            setShowModal(true);
            Cookies.set('book_modal', 'modal showed', );
        }
    }, [])

    const handleNavToggle = () => {
        setShowNav((prevShowNav) => !prevShowNav);
    };

    const handleWindowResize = () => {
        if (window.innerWidth >= 768) {
            setShowNav(false);
        }
        if (window.innerWidth <= 600) {
            setHideGetStarted(true);
        } else {
            setHideGetStarted(false);
        }
    };

    // useResizer(handleWindowResize);

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <header id="gopeak-header" className={border ? 'bordered' : ''}>
            {
                showModal && <BookCallModal 
                    handleCloseModal={handleCloseModal}
                />
            }
            <div className="header py-9 basic-container-lg">
                {(loading && router.asPath !== '/blog') && (<Loading/>)}
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">
                            <IconGoPeakSMBlack/>
                        </Link>
                        {!showNav && (
                            <div
                                className={`collapse navbar-collapse ${showNav ? "show" : ""}`}
                            >
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link
                                            href={"/how-we-work"}
                                            className="nav-link text-sm fw-600"
                                        >
                                            {t("layout.header.how_it_works")}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href={"/pricing"} className="nav-link text-sm fw-600">
                                            {t("layout.header.pricing")}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href={"/about"} className="nav-link text-sm fw-600">
                                            {t("layout.header.about_us")}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href={"/blog"} className="nav-link text-sm fw-600" onClick={() => {
                                            setLoading(true)
                                        }}>
                                            {t("layout.header.blog")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                        <div className="d-flex align-items-center">
                            {!hideGetStarted && (
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item item-menu-booking">
                                        <Link
                                            href="/booking"
                                            type="button"
                                        >
                                            {t("btn.get_started")}
                                        </Link>
                                    </li>
                                </ul>
                            )}
                            <button
                                type="button"
                                className="navbar-toggler"
                                onClick={handleNavToggle}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </nav>
                <div className={`bg-light mobile-menu ${showNav ? "show" : ""}`}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href={"/how-we-work"} className="nav-link text-sm fw-600 ">
                                {t("layout.header.how_it_works")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/pricing"} className="nav-link text-sm fw-600 ">
                                {t("layout.header.pricing")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/about"} className="nav-link text-sm fw-600 ">
                                {t("layout.header.about_us")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/blog"} className="nav-link text-sm fw-600 " onClick={() => {
                                setLoading(true)
                            }}>
                                {t("layout.header.blog")}
                            </Link>
                        </li>
                        {hideGetStarted && (
                            <li className="nav-item text-center">
                                <Link
                                    href="/booking"
                                    type="button"
                                    className="btn btn-secondary me-2"
                                >
                                    {t("btn.get_started")}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
