import {
  IconCubeWithOpenedTop,
  IconPriceTicket,
  IconReloadWithCircle,
  IconStrategyBlank,
} from "shared/icons/about-icons";

export interface IWhatMakeUsBetterItems {
  title: string;
  content: string;
}

export const whatMakeUsBetterItemsIcons: Record<number, JSX.Element> = {
  0: <IconStrategyBlank />,
  1: <IconCubeWithOpenedTop />,
  2: <IconReloadWithCircle />,
  3: <IconPriceTicket />,
};
