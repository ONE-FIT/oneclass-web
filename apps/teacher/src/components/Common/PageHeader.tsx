import { getCurrentDateTime } from "@/utils/dateTime";

interface PageHeaderProps {
  title: string;
  schoolName?: string;
}

export default function PageHeader({ title, schoolName = "학원명" }: PageHeaderProps) {
  const { date } = getCurrentDateTime();
  const [year, month, day] = date.split("-");

  return (
    <div className="bg-blue-300 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <div className="text-white text-right">
          <div className="text-sm opacity-90">{schoolName}님의 간편한 학원관리</div>
          <div className="text-lg font-semibold">
            {year}년 {month}월 {day}일
          </div>
        </div>
      </div>
    </div>
  );
}