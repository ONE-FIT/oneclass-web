export interface Student {
  id: string;
  name: string;
  classId: string;
  className: string;
}

export interface ClassGroup {
  id: string;
  name: string;
  studentCount: number;
}

export interface AnnouncementFormData {
  title: string;
  content: string;
  targetType: "all" | "class" | "individual";
  selectedClasses: string[];
  selectedStudents: string[];
  sendDate: string;
  sendTime: string;
  isScheduled: boolean;
}

export const mockStudents: Student[] = [
  { id: "1", name: "김일강", classId: "class1", className: "수학 A반" },
  { id: "2", name: "이재원", classId: "class1", className: "수학 A반" },
  { id: "3", name: "전수안", classId: "class1", className: "수학 A반" },
  { id: "4", name: "권민기", classId: "class2", className: "영어 B반" },
  { id: "5", name: "김연호", classId: "class2", className: "영어 B반" },
  { id: "6", name: "김준현", classId: "class3", className: "국어 C반" },
  { id: "7", name: "채근영", classId: "class3", className: "국어 C반" },
  { id: "8", name: "박민우", classId: "class3", className: "국어 C반" },
];

export const mockClasses: ClassGroup[] = [
  { id: "class1", name: "수학 A반", studentCount: 3 },
  { id: "class2", name: "영어 B반", studentCount: 2 },
  { id: "class3", name: "국어 C반", studentCount: 3 },
];

export const targetTypeOptions = [
  { value: "all", label: "전체 학생" },
  { value: "class", label: "반별 선택" },
  { value: "individual", label: "학생 개별 선택" },
];
