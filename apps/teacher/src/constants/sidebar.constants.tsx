import type { ReactElement } from "react";
import DashboardIcon from "@/assets/sidebar/dashboard.svg";
import TaskTtatusIcon from "@/assets/sidebar/task-status.svg";
import TaskGenerateIcon from "@/assets/sidebar/task-generate.svg";
import AccountGenerateIcon from "@/assets/sidebar/account-generate.svg";
import AnnouncementSendICon from "@/assets/sidebar/announcement-send.svg";
import AnnouncementManageIcon from "@/assets/sidebar/announcement-manage.svg";
import ConsultingManageIcon from "@/assets/sidebar/consulting-manage.svg";
import ParentConsultingIcon from "@/assets/sidebar/parent-consulting.svg";
import PaymentStatusIcon from "@/assets/sidebar/payment-status.svg";
import ClassManageIcon from "@/assets/sidebar/class-manage.svg";
import AttendanceStatusIcon from "@/assets/sidebar/attendance-status.svg";

interface TabItem {
  id: string;
  name: string;
  icon: ReactElement;
  to: string;
  section: string;
}

export const tabList: TabItem[] = [
  { id: "dashboard", name: "대시보드", icon: <DashboardIcon />, to: "/", section: "main" },
  {
    id: "attendance",
    name: "출석 현황",
    icon: <AttendanceStatusIcon />,
    to: "/attendance-status",
    section: "student-manage",
  },
  {
    id: "task-status",
    name: "과제 현황",
    icon: <TaskTtatusIcon />,
    to: "/task-status",
    section: "student-manage",
  },
  {
    id: "task-generate",
    name: "과제 생성",
    icon: <TaskGenerateIcon />,
    to: "/task-generate",
    section: "student-manage",
  },
  {
    id: "class-manage",
    name: "클래스 설정",
    icon: <ClassManageIcon />,
    to: "/class-manage",
    section: "student-manage",
  },
  {
    id: "account-generate",
    name: "계정 생성",
    icon: <AccountGenerateIcon />,
    to: "/account-generate",
    section: "student-manage",
  },
  {
    id: "announcement-send",
    name: "공지 발송",
    icon: <AnnouncementSendICon />,
    to: "/announcement-send",
    section: "communication-manage",
  },
  {
    id: "announcement-manage",
    name: "공지 관리",
    icon: <AnnouncementManageIcon />,
    to: "/announcement-manage",
    section: "communication-manage",
  },
  {
    id: "consulting-manage",
    name: "신규 상담 관리",
    icon: <ConsultingManageIcon />,
    to: "/consulting-manage",
    section: "consulting-manage",
  },
  {
    id: "parent-consulting-manage",
    name: "학부모 상담",
    icon: <ParentConsultingIcon />,
    to: "/parent-consulting-manage",
    section: "consulting-manage",
  },
  {
    id: "payment-status",
    name: "납부 현황",
    icon: <PaymentStatusIcon />,
    to: "/payment-manage",
    section: "payment-manage",
  },
];
