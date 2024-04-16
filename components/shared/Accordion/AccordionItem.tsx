import { Trans } from "next-i18next";
import { IconClose } from "../../../shared/icons/common-icons";
import { AccordionItemData } from "./interfaces";

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  isLast: boolean;
  onClick: () => void;
}

const AccordionItem = ({
  item,
  isActive,
  onClick,
  isLast,
}: AccordionItemProps) => {
  return (
    <div
      className={`accordion-item ps-16 ${
        isLast ? "" : "mb-10 "
      } py-13 pe-12 rounded-2`}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-md fw-500">
          <Trans>{item.title}</Trans>
        </h3>
        <div
          onClick={onClick}
          className={`close-icon cursor-pointer ${
            isActive ? "inactive" : "active rotate-45"
          }`}
        >
          <IconClose />
        </div>
      </div>
      <p
        data-i18n="[html]content.body"
        className={`content ${
          isActive ? "mt-7 active" : "inactive"
        } mb-0 pe-29 text-sm font-sans text-pre-line`}
      >
        <Trans>{item.content}</Trans>
      </p>
    </div>
  );
};

export default AccordionItem;
