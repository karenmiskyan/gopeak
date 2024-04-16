import { useId } from "react";
import { BenefitCheckMark } from "../../../shared/icons/home-icons";

export interface InfoListProps {
  headingText: string;
  list: string[];
}

const InfoList = ({ headingText, list }: InfoListProps) => {
  const uniqID = useId();

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-24 mb-sm-25 mb-md-30">
      <h3 className="mb-12 h6">{headingText}</h3>
      {list.map((item, i) => {
        return (
          <div
            key={uniqID + i}
            className="d-flex align-items-center mb-7 mxw-max-content"
          >
            <div>
              <BenefitCheckMark className="me-4" />
            </div>
            <span className="text-sm">{item}</span>
          </div>
        );
      })}
    </div>
  );
};

export default InfoList;
