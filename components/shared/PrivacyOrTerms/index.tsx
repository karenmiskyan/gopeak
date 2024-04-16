import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import GenericSection from "../GenericSection";
import { InfoIcon } from "shared/icons/common-icons";
import ContactInformationSection from "./ContactInformationSection";
import PrivacyOrTermsIntroSection from "./PrivacyOrTermsIntroSection";

interface IListItem {
  title: string;
  content: string;
}

type TParagraph = string | string[] | IListItem[];

export interface ISectionItem {
  title: string;
  isH5: boolean;
  paragraphs: TParagraph[];
  href: string;
}

interface ISidebarItem {
  text: string;
  href: string;
}

interface IPrivacyOrTermsProps {
  title: string;
  sidebar: {
    header: string;
    items: ISidebarItem[];
  };
  main_content: {
    intro_paragraphs: (string | { isItalic: boolean, info: string })[];
    sections: ISectionItem[];
    contact_information: {
      title: string;
      text: string;
      emails: string[];
      href: string;
    };
  };
  ordered: boolean;
}

const PrivacyOrTerms = ({
  title,
  sidebar,
  main_content,
  ordered,
}: IPrivacyOrTermsProps) => {
  return (
    <div className="row basic-container-lg p-x-default pt-20">
      <aside className="col-12 col-md-3">
        <Sidebar
          header={sidebar.header}
          items={sidebar.items}
          className="mt-14 mt-sm-50 mt-md-49"
        />
      </aside>
      <main className="col-12 col-md-9">
        <h1 className="h3">{title}</h1>
        <PrivacyOrTermsIntroSection
          paragraphs={main_content.intro_paragraphs}
        />
        {main_content.sections.map((section, index) => {
          return (
            <GenericSection
              section={section}
              key={section.title + index}
              ordered={ordered}
            />
          );
        })}
        <ContactInformationSection
          contact_information={main_content.contact_information}
        />
      </main>
    </div>
  );
};

export default PrivacyOrTerms;
