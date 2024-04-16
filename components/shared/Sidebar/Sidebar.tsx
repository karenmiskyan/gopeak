import SidebarItem from "./SidebarItem";
import { SidebarItemData } from "./interfaces";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

interface SidebarProps {
  header: string;
  items: SidebarItemData[];
  className?: string;
}

const Sidebar = ({ items, header, className }: SidebarProps) => {
  const router = useRouter();
  const [hash, setHash] = useState("");
  const onHashChangeStart = useCallback((url: string) => {
    const newHash = url.split("#")[1];
    if (!newHash) return;
    setHash(newHash);
  }, []);

  useEffect(() => {
    router.events.on("hashChangeStart", onHashChangeStart);

    const initialHash = router.asPath.split("#")[1];
    if (initialHash) setHash(initialHash);

    return () => {
      router.events.off("hashChangeStart", onHashChangeStart);
    };
  }, [router.events, onHashChangeStart, router.asPath]);

  return (
    <div className={className}>
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
