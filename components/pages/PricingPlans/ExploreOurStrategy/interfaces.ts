import { FC, SVGProps } from "react";
import {
  IconDragWindowWithCheckbox,
  IconScreenWithCompanyBuilding,
  IconScreenWithIdeaLamp,
} from "../../../../shared/icons/common-icons";

export interface IStrategyCardText {
  heading: string;
  content: string;
}

export const StrategyCardIcons: Record<number, FC<SVGProps<SVGSVGElement>>> = {
  0: IconDragWindowWithCheckbox,
  1: IconScreenWithIdeaLamp,
  2: IconScreenWithCompanyBuilding,
};

export interface IStrategyCardToShow extends IStrategyCardText {
  icon: FC<SVGProps<SVGSVGElement>>;
}
