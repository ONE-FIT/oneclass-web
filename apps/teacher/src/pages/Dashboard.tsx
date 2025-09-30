import PageHeader from "@/components/Common/PageHeader";
import StatCard from "@/components/Dashboard/StatCard";
import AnnouncementCard from "@/components/Dashboard/AnnouncementCard";
import QuickActionButton from "@/components/Dashboard/QuickActionButton";
import {
  mockAttendanceData,
  mockPaymentData,
  mockAssignmentData,
  mockAnnouncements,
  quickActions,
} from "@/constants/dashboard.constants";

export default function Dashboard() {
  const attendanceItems = [
    { label: "전체 학생수", value: mockAttendanceData.totalStudents },
    { label: "출석", value: mockAttendanceData.attended },
    { label: "미출석", value: mockAttendanceData.absent },
  ];

  const paymentItems = [
    { label: "납부", value: mockPaymentData.paid },
    { label: "미납부", value: mockPaymentData.unpaid },
    { label: "총납 금액", value: mockPaymentData.totalAmount },
  ];

  const assignmentItems = [
    { label: "전체 학생수", value: mockAssignmentData.totalStudents },
    { label: "제출", value: mockAssignmentData.submitted },
    { label: "미제출", value: mockAssignmentData.unsubmitted },
  ];

  return (
    <div>
      <PageHeader title="대시보드" />

      <div className="bg-blue-200 p-6 h-[calc(100vh-theme(spacing.20))]">
        {/* 통계 카드 2x2 그리드, 모바일은 1열 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <StatCard
            title="출석 현황"
            items={attendanceItems}
            unit="명"
            rateInfo={{
              label: "출석률",
              value: mockAttendanceData.attendanceRate,
              type: "success",
            }}
          />

          <StatCard
            title="납부 현황"
            subtitle={`필요 납부 수 : ${mockPaymentData.totalStudents}`}
            items={paymentItems}
            unit="명"
            rateInfo={{
              label: "납부율",
              value: mockPaymentData.paymentRate,
              type: "success",
            }}
          />

          <StatCard
            title="과제 현황"
            items={assignmentItems}
            unit="명"
            rateInfo={{
              label: "제출률",
              value: mockAssignmentData.submissionRate,
              type: "error",
            }}
          />

          <AnnouncementCard announcements={mockAnnouncements} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map(action => (
            <QuickActionButton
              key={action.id}
              title={action.title}
              icon={action.icon}
              route={action.route}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
