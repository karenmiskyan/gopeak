import { useId } from "react";
import AccordionItem from "./AccordionItem";
import { AccordionItemData } from "./interfaces";

interface AccordionProps {
  items: AccordionItemData[];
  activeItem: any;
  onToggleClick: (state: any) => void;
}

const Accordion = ({ items, onToggleClick, activeItem }: AccordionProps) => {
  const id = useId();
  return (
    <div>
      {items.map((item, i) => {
        const isLast = i == items.length - 1;
        const isActive = item.value === activeItem;
        const accordionItem: AccordionItemData = {
          title: item.title,
          content: item.content,
          value: item.value,
        };

        return (
          <AccordionItem
            key={id + i}
            item={accordionItem}
            isActive={isActive}
            onClick={() => onToggleClick(item.value)}
            isLast={isLast}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
