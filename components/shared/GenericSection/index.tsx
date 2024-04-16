import { Trans } from "next-i18next";
import { ISectionItem } from "../PrivacyOrTerms";

interface GenericSectionProps {
  section: ISectionItem;
  ordered: boolean;
}

const GenericSection = ({ section, ordered = false }: GenericSectionProps) => {
  return (
    <section id={section.href} className={section.isH5 ? "mt-12" : "mt-7"}>
      <p className={section.isH5 ? "h5" : "h7"}>{section.title}</p>
      {section.paragraphs.map((paragraph, index) => {
        if (typeof paragraph === "string") {
          return (
            <div key={index} className="text-sm mb-7">
              {paragraph}
            </div>
          );
        }

        return (
          <div key={index} className="text-sm">
            {ordered ? (
              <ol key={index} type="a">
                {paragraph.map((item, i) => {
                  if (typeof item === "string") {
                    return <li key={i}>{item}</li>;
                  }

                  return (
                    <li key={i} className="fw-bold">
                      <p>{item.title}</p>
                      <p className="fw-400">{item.content}</p>
                    </li>
                  );
                })}
              </ol>
            ) : (
              <ul key={index}>
                {paragraph.map((item, i) => {
                  if (typeof item === "string") {
                    return <li key={i}>{item}</li>;
                  }

                  return (
                    <li key={i} className="fw-bold">
                      {item.title}{" "}
                      <span className="fw-400">{item.content}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default GenericSection;
