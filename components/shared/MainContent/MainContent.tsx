import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SidebarItem from "../Sidebar/SidebarItem";
import { SidebarItemData } from "../Sidebar/interfaces";

interface SidebarProps {
  header: string;
  items: SidebarItemData[];
}

const Sidebar = ({ items, header }: SidebarProps) => {
  const router = useRouter();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const onHashChangeStart = (url: string) => {
      const newHash = url.split("#")[1];
      if (!newHash) return;
      setHash(newHash);
    };

    router.events.on("hashChangeStart", onHashChangeStart);

    return () => {
      router.events.off("hashChangeStart", onHashChangeStart);
    };
  }, [router.events]);

  return (
    <div>
      <h6>{header}</h6>
      <div className="mt-15">
        {items.map((item, i) => {
          const isActive = item.href === hash;
          const accordionItem: SidebarItemData = {
            text: item.text,
            href: item.href,
          };

          return (
            <SidebarItem
              key={i}
              item={accordionItem}
              isActive={isActive}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
