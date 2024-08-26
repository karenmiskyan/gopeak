import { TFunction, Trans } from "next-i18next";
import Link from "next/link";
import { FC } from "react";
import {
  IconEnvelope,
  IconGoPeakSMWhite,
  IconLinkedin,
  IconPhone,
  IconTelegram,
  IconFacebook
} from "../../../shared/icons/common-icons";
import {IFooterContactsColumn, IFooterLinkColumn, IFooterLinkColumnItem} from "./interfaces";

interface FooterProps {
  t: TFunction;
}

const Footer: FC<FooterProps> = ({ t }) => {
  const linkColumns: IFooterLinkColumn[] = t("layout.footer.link_columns", {
    returnObjects: true,
  });

  const contactsColumns: IFooterContactsColumn = t(
    "layout.footer.contacts_column",
    {
      returnObjects: true,
    }
  );

  const miniColumns: IFooterLinkColumnItem[] = t("layout.footer.mini_columns", {
    returnObjects: true,
  });

  // @ts-ignore
  return (
    <footer className="bg-midnight p-20 pb-8">
      <div className="container d-flex justify-content-between flex-wrap">
        <div className="d-flex flex-column mxw-200-px col-12 col-md-5">
          <IconGoPeakSMWhite />
          <p className="text-xs text-white pt-5 mb-21">
            {t("layout.footer.under_logo_text")}
          </p>
          <div className="d-flex mb-25">
            <Link target="_blank" href="https://www.facebook.com/gopeakio/" className="me-10 cursor-pointer">
              <IconFacebook />
            </Link>
            {/*<div className="me-10 cursor-pointer">*/}
            {/*  <IconTwitter />*/}
            {/*</div>*/}
            <Link target="_blank" href="https://www.linkedin.com/company/gopeak-io/" className="me-10 cursor-pointer">
              <IconLinkedin />
            </Link>
          </div>
        </div>
        <div className="d-flex flex-wrap col-12 col-md-7 justify-content-between">
          {linkColumns?.map((column, i) => {
            const { items, name } = column;

            return (
              <div className="p-5 mb-15" key={i + name}>
                <p className="text-md m-0 text-color-white mb-10">{name}</p>
                <div>
                  {items?.length && (items.map((item, i) => {
                    return (
                      <Link
                        key={i + item.href}
                        href={item.href}
                        className="d-block text-sm m-0 mb-5 text-color-white-85 footer-link cursor-pointer mxw-max-content"
                      >
                        {item.name}
                      </Link>
                    );
                  }))}
                </div>
              </div>
            );
          })}
          <div className=" p-5 mb-15 d-none">
            <p className="text-md m-0 text-color-white mb-10 col-12 col-sm-4">
              {contactsColumns.name}
            </p>
            <div>
              <p className="text-sm m-0 mb-5 text-color-white-85">
                <IconPhone />
                <span className="ms-6">{contactsColumns.phone_number}</span>
              </p>
              <p className="text-sm m-0 mb-5 text-color-white-85 d-inline-flex align-items-center">
                <IconEnvelope />
                <span className="ms-6">{t("email")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-20" />
      <div className="text-color-white-70 mt-10 text-xs d-flex justify-content-between container copyright-container">
        <p>{t("layout.footer.copyright", { year: new Date().getFullYear() })}</p>
        <div>
          {miniColumns.map((item,i) =>  <Link
            key={i + item.href}
            href={item.href}
            className={`text-color-white-70 mt-10 text-xs ${i === 0?'mx-20':''} footer-link cursor-pointer mxw-max-content`}
          >
            {item.name}
          </Link>)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
