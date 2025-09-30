import { tabList } from "@/constants/sidebar.constants.tsx";
import OneClassIcon from "@/assets/one-class-logo.svg";
import TabLink from "./Tab";

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-[#00162E] h-screen w-64 overflow-y-hidden gap-6">
      <div className="flex px-4 pt-4">
        <OneClassIcon className="h-10" />
        <span className="text-[#81BBF6] flex items-end text-xl font-medium">OneClass</span>
      </div>
      <div>
        <div className="flex flex-col gap-1 flex-1">
          <span className="pl-6 text-white text-sm font-semibold">메인</span>
          {tabList
            .filter(item => item.section === "main")
            .map(item => (
              <TabLink key={item.id} item={item} />
            ))}
          <span className="pl-6 text-white text-sm font-semibold">학생 관리</span>
          {tabList
            .filter(item => item.section === "student-manage")
            .map(item => (
              <TabLink key={item.id} item={item} />
            ))}
          <span className="pl-6 text-white text-sm font-semibold">소통 관리</span>
          {tabList
            .filter(item => item.section === "communication-manage")
            .map(item => (
              <TabLink key={item.id} item={item} />
            ))}
          <span className="pl-6 text-white text-sm font-semibold">상담 관리</span>
          {tabList
            .filter(item => item.section === "consulting-manage")
            .map(item => (
              <TabLink key={item.id} item={item} />
            ))}
          <span className="pl-6 text-white text-sm font-semibold">학원비 관리</span>
          {tabList
            .filter(item => item.section === "payment-manage")
            .map(item => (
              <TabLink key={item.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
}
