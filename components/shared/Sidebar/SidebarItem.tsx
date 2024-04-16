import Link from "next/link";
import { IconSidebarArrow } from "../../../shared/icons/common-icons";
import { SidebarItemData } from "./interfaces";

interface SidebarItemProps {
  item: SidebarItemData;
  isActive: boolean;
}

const SidebarItem = ({
  item,
  isActive,
}: SidebarItemProps) => {
  return (
    <div className="mb-6 ms-10 d-flex col-8">
      <div>
        <IconSidebarArrow className={`${isActive ? 'stroke-purple' : ''}`}/>
      </div>
      <div>
        <Link href={`#${item.href}`} className={`ml-2 text-sm cursor-pointer text-undecorated ${isActive ? 'fw-600' : ''}`}>{item.text}</Link>
      </div>
    </div>
  );
};

export default SidebarItem;
