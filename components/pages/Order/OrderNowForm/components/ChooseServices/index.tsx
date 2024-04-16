import CheckBox from "components/shared/Checkbox";
import { ICustomizeForm } from "../../interfaces";

interface ChooseServicesProps {
  customizeForm: ICustomizeForm;
  onChange: (key: keyof ICustomizeForm) => void;
}

const ChooseServices = ({ customizeForm, onChange }: ChooseServicesProps) => {
  const dataToCheck = [
    {
      value: customizeForm.linkBuildingAndStrategyPlanning,
      text: "Link Building and Strategy Planning",
      id: "linkBuildingAndStrategyPlanning",
      key: "linkBuildingAndStrategyPlanning",
    },
    {
      value: customizeForm.keywordAnalysis,
      text: "Keyword Analysis",
      id: "keywordAnalysis",
      key: "keywordAnalysis",
    },
    {
      value: customizeForm.backLinkAudit,
      text: "Website backlink audit",
      id: "backlinAudit",
      key: "backLinkAudit",
    },
    {
      value: customizeForm.seoAuditAndConsultation,
      text: "Website SEO audit and consultation",
      id: "seoAuditAndConsultation",
      key: "seoAuditAndConsultation",
    },
    {
      value: customizeForm.optimizeArticle,
      text: "SEO optimized article from our writers",
      id: "optimizeArticle",
      key: "optimizeArticle",
    },
  ];

  return (
    <div className="mt-15 ">
      <p className="mb-2 text-xs text-gray-450">CHOOSE SERVICES</p>
      <div className="pt-10 d-flex flex-column">
        {dataToCheck.map((el, i) => {
          const isLast = i === dataToCheck.length - 1;
          return (
            <CheckBox
              key={i + el.id}
              checked={customizeForm.linkBuildingAndStrategyPlanning}
              id={el.id}
              name={el.id}
              className={isLast ? "mb-12" : "mb-4"}
              onChange={onChange.bind(null, el.key as keyof ICustomizeForm)}
              label={el.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChooseServices;
