export interface Announcement {
  id: string;
  title: string;
  content: string;
  targetType: "all" | "class" | "individual";
  targetNames: string[];
  sendDate: string;
  sendTime: string;
  isScheduled: boolean;
  status: "scheduled" | "sent";
  createdAt: string;
}

export const mockAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "겨울방학 특강 안내",
    content:
      "12월 26일부터 1월 10일까지 겨울방학 특강이 진행됩니다. 자세한 내용은 별도 공지를 참고해주세요.",
    targetType: "all",
    targetNames: ["전체 학생"],
    sendDate: "2025-01-02",
    sendTime: "09:00",
    isScheduled: false,
    status: "sent",
    createdAt: "2025-01-02T09:00:00",
  },
  {
    id: "2",
    title: "수학 A반 보충수업 공지",
    content: "이번 주 토요일 오전 10시에 보충수업이 있습니다. 필수 참석 부탁드립니다.",
    targetType: "class",
    targetNames: ["수학 A반"],
    sendDate: "2025-01-05",
    sendTime: "10:00",
    isScheduled: true,
    status: "scheduled",
    createdAt: "2025-01-01T14:30:00",
  },
  {
    id: "3",
    title: "영어 B반 과제 제출 안내",
    content: "금주 과제는 교재 34~38페이지입니다. 다음 주 월요일까지 제출해주세요.",
    targetType: "class",
    targetNames: ["영어 B반"],
    sendDate: "2024-12-30",
    sendTime: "15:00",
    isScheduled: false,
    status: "sent",
    createdAt: "2024-12-30T15:00:00",
  },
  {
    id: "4",
    title: "개별 상담 일정 안내",
    content: "학부모 상담 일정이 확정되었습니다. 1월 8일 오후 2시에 뵙겠습니다.",
    targetType: "individual",
    targetNames: ["김일강", "이재원"],
    sendDate: "2025-01-03",
    sendTime: "14:00",
    isScheduled: false,
    status: "sent",
    createdAt: "2025-01-03T14:00:00",
  },
  {
    id: "5",
    title: "1월 정기 테스트 안내",
    content: "1월 15일 정기 테스트가 있습니다. 시험 범위는 별도 공지 예정입니다.",
    targetType: "all",
    targetNames: ["전체 학생"],
    sendDate: "2025-01-10",
    sendTime: "09:00",
    isScheduled: true,
    status: "scheduled",
    createdAt: "2024-12-28T10:00:00",
  },
];

export const statusOptions = [
  { value: "all", label: "전체" },
  { value: "sent", label: "발송 완료" },
  { value: "scheduled", label: "예약 발송" },
];

export const targetTypeLabels = {
  all: "전체 학생",
  class: "반별 선택",
  individual: "학생 개별 선택",
};