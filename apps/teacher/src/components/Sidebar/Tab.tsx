import { tabList } from "@/constants/sidebar.constants";
import { Link, useLocation } from "react-router";

export default function TabLink({ item }: { item: (typeof tabList)[0] }) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(item.to);

  return (
    <Link
      className={`
          flex items-center justify-start gap-[0.875rem] py-4 px-6 no-underline
          transition-all duration-200 ease-in-out
          ${isActive ? "text-white bg-[#0257A3]" : "text-white bg-transparent"}
          hover:bg-[#0257A3] hover:text-white hover:cursor-pointer
        `}
      key={item.id}
      to={item.to}
    >
      {item.icon}
      {item.name}
    </Link>
  );
}
