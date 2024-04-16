import { InfoIcon } from "shared/icons/common-icons";

interface PrivacyOrTermsIntroSectionProps {
  paragraphs: (string | { isItalic: boolean, info: string })[];
}

const PrivacyOrTermsIntroSection = ({
  paragraphs,
}: PrivacyOrTermsIntroSectionProps) => {
  return (
    <section>
      {paragraphs.map((content, index) => {
        if (typeof content === "object") {
          return (
            <div key={index}>
              <InfoIcon />
              <span className={`text-xs ms-3 ${content.isItalic ? 'text-italic' : ''}`}>{content.info}</span>
            </div>
          );
        }
        return <p key={index}>{content}</p>;
      })}
    </section>
  );
};

export default PrivacyOrTermsIntroSection;
