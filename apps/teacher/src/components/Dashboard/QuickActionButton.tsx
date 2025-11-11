import { useNavigate } from "react-router";
import AttendanceStatusIcon from "@/assets/sidebar/attendance-status.svg";
import PaymentStatusIcon from "@/assets/sidebar/payment-status.svg";
import TaskStatusIcon from "@/assets/sidebar/task-status.svg";
import AnnouncementManageIcon from "@/assets/sidebar/announcement-manage.svg";

interface QuickActionButtonProps {
  title: string;
  icon: string;
  route: string;
}

// 아이콘 키와 SVG 컴포넌트 매핑
const iconMap = {
  "attendance-status": AttendanceStatusIcon,
  "payment-status": PaymentStatusIcon,
  "task-status": TaskStatusIcon,
  "announcement-manage": AnnouncementManageIcon,
};

export default function QuickActionButton({ title, icon, route }: QuickActionButtonProps) {
  const navigate = useNavigate();
  const IconComponent = iconMap[icon as keyof typeof iconMap]; // 전달받은 키로 아이콘 컴포넌트 선택

  const handleClick = () => {
    navigate(route);
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center justify-center h-48 p-8 text-center bg-white rounded-2xl group"
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 cursor-pointer rounded-2xl">
        <IconComponent className="w-6 h-6 text-blue-600" />
      </div>
      <div className="text-lg font-semibold text-gray-800">{title}</div>
    </button>
  );
}
