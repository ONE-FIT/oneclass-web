export interface AttendanceData {
  totalStudents: number;
  attended: number;
  absent: number;
  attendanceRate: number;
}

export interface PaymentData {
  totalStudents: number;
  paid: number;
  unpaid: number;
  totalAmount: number;
  paymentRate: number;
}

export interface AssignmentData {
  totalStudents: number;
  submitted: number;
  unsubmitted: number;
  submissionRate: number;
}

export interface AnnouncementItem {
  id: string;
  date: string;
  title: string;
}

export interface QuickActionItem {
  id: string;
  title: string;
  icon: string;
  route: string;
}

export const mockAttendanceData: AttendanceData = {
  totalStudents: 32,
  attended: 30,
  absent: 2,
  attendanceRate: 98,
};

export const mockPaymentData: PaymentData = {
  totalStudents: 32,
  paid: 30,
  unpaid: 2,
  totalAmount: 2000000,
  paymentRate: 98,
};

export const mockAssignmentData: AssignmentData = {
  totalStudents: 32,
  submitted: 12,
  unsubmitted: 20,
  submissionRate: 37.5,
};

export const mockAnnouncements: AnnouncementItem[] = [
  {
    id: "1",
    date: "2025/12/31",
    title: "공지사항",
  },
  {
    id: "2",
    date: "2025/6/21",
    title: "긴급공지사항",
  },
  {
    id: "3",
    date: "2025/1/1",
    title: "일강공지사항...",
  },
  {
    id: "4",
    date: "2024/1/1",
    title: "일강일강",
  },
];

export const quickActions: QuickActionItem[] = [
  {
    id: "attendance",
    title: "출석 현황",
    icon: "attendance-status",
    route: "/attendance-status",
  },
  {
    id: "payment",
    title: "납부 현황",
    icon: "payment-status",
    route: "/payment-manage",
  },
  {
    id: "assignment",
    title: "과제 제출 현황",
    icon: "task-status",
    route: "/task-status",
  },
  {
    id: "announcement",
    title: "공지 생성",
    icon: "announcement-manage",
    route: "/announcement-manage",
  },
];
