import { useForm } from "react-hook-form";
import PageHeader from "@/components/Common/PageHeader";
import AnnouncementForm from "@/components/AnnouncementSend/AnnouncementForm";
import TargetSelector from "@/components/AnnouncementSend/TargetSelector";
import { getCurrentDateTime, isScheduledTime } from "@/utils/dateTime";
import type { AnnouncementFormData } from "@/constants/announcementSend.constants";

export default function AnnouncementSend() {
  const { date: currentDate, time: currentTime } = getCurrentDateTime();

  const form = useForm<AnnouncementFormData>({
    defaultValues: {
      title: "",
      content: "",
      targetType: "all",
      selectedClasses: [],
      selectedStudents: [],
      sendDate: currentDate,
      sendTime: currentTime,
      isScheduled: false,
    },
  });

  const { handleSubmit, watch, reset } = form;

  // 예약 발송 여부 계산
  const sendDate = watch("sendDate");
  const sendTime = watch("sendTime");
  const isScheduled = isScheduledTime(sendDate, sendTime);

  const onSubmit = (data: AnnouncementFormData) => {
    const finalData = { ...data, isScheduled };

    // 폼 유효성 검사
    if (!finalData.title.trim() || !finalData.content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    if (finalData.targetType === "class" && finalData.selectedClasses.length === 0) {
      alert("발송할 반을 선택해주세요.");
      return;
    }

    if (finalData.targetType === "individual" && finalData.selectedStudents.length === 0) {
      alert("발송할 학생을 선택해주세요.");
      return;
    }

    console.log("공지사항 발송:", finalData);
    alert("공지사항을 발송하였습니다!");

    // 폼 리셋
    const { date: newCurrentDate, time: newCurrentTime } = getCurrentDateTime();
    reset({
      title: "",
      content: "",
      targetType: "all",
      selectedClasses: [],
      selectedStudents: [],
      sendDate: newCurrentDate,
      sendTime: newCurrentTime,
      isScheduled: false,
    });
  };

  return (
    <div>
      <PageHeader title="공지 발송" />

      <div className="bg-blue-200 p-6 h-[calc(100vh-theme(spacing.20))]">
        <form onSubmit={handleSubmit(onSubmit)} className="h-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            <div className="lg:col-span-2">
              <AnnouncementForm form={form} />
            </div>
            <TargetSelector form={form} isScheduled={isScheduled} />
          </div>
        </form>
      </div>
    </div>
  );
}
