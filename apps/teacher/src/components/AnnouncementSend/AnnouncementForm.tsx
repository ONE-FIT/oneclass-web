import type { UseFormReturn } from "react-hook-form";
import { getCurrentDateTime } from "@/utils/dateTime";
import type { AnnouncementFormData } from "@/constants/announcementSend.constants";

interface AnnouncementFormProps {
  form: UseFormReturn<AnnouncementFormData>;
}

export default function AnnouncementForm({ form }: AnnouncementFormProps) {
  const { date: currentDate } = getCurrentDateTime();
  const { register } = form;

  return (
    <div className="bg-white rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <h3 className="text-lg font-semibold text-gray-800">공지사항 작성</h3>
      </div>

      <div className="space-y-4 flex-1 flex flex-col">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">제목 *</label>
          <input
            {...register("title")}
            type="text"
            placeholder="공지사항 제목을 입력하세요"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-2">내용 *</label>
          <textarea
            {...register("content")}
            placeholder="공지사항 내용을 입력하세요"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none flex-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">발송 날짜</label>
            <input
              {...register("sendDate")}
              type="date"
              min={currentDate}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">발송 시간</label>
            <input
              {...register("sendTime")}
              type="time"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <div className="text-xs text-gray-500 mt-2">
          발송 날짜와 시간을 현재 시간과 다르게 설정하면 설정된 시간에 예약 발송됩니다.
        </div>
      </div>
    </div>
  );
}
