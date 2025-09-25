interface DashboardHeaderProps {
  schoolName?: string; // 학원명 (선택사항, 기본값: "학원명")
}

export default function DashboardHeader({ schoolName = "학원명" }: DashboardHeaderProps) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const currentDay = String(today.getDate()).padStart(2, "0"); // 한 자리수일 때 앞에 0 추가

  return (
    <div className="bg-blue-300 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">대시보드</h1>
        <div className="text-white text-right">
          <div className="text-sm opacity-90">{schoolName}님의 간편한 학원관리</div>
          <div className="text-lg font-semibold">
            {currentYear}년 {currentMonth}월 {currentDay}일
          </div>
        </div>
      </div>
    </div>
  );
}
