import type { Announcement } from "@/constants/announcementManage.constants";
import { targetTypeLabels } from "@/constants/announcementManage.constants";

interface AnnouncementDetailProps {
  announcement: Announcement;
  onClose: () => void;
  onDelete: (id: string) => void;
}

export default function AnnouncementDetail({
  announcement,
  onClose,
  onDelete,
}: AnnouncementDetailProps) {
  const formatDateTime = (date: string, time: string) => {
    const [year, month, day] = date.split("-");
    return `${year}년 ${month}월 ${day}일 ${time}`;
  };

  const handleDelete = () => {
    if (window.confirm("이 공지사항을 삭제하시겠습니까?")) {
      onDelete(announcement.id);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{announcement.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 hover:cursor-pointer text-2xl leading-none"
            >
              ×
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 ${
                announcement.status === "scheduled"
                  ? "bg-orange-100 text-orange-600"
                  : "bg-blue-500 text-white"
              } text-sm font-medium rounded-full`}
            >
              {announcement.status === "scheduled" ? "예약 발송" : "발송 완료"}
            </span>
            <span className="text-gray-500 text-sm">
              {formatDateTime(announcement.sendDate, announcement.sendTime)}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">공지 내용</h3>
            <div className="bg-gray-50 rounded-xl p-4 text-gray-700 whitespace-pre-wrap">
              {announcement.content}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">발송 유형</h3>
              <div className="bg-gray-50 rounded-xl p-4 text-gray-700">
                {targetTypeLabels[announcement.targetType]}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">발송 대상</h3>
              <div className="bg-gray-50 rounded-xl p-4 text-gray-700">
                {announcement.targetNames.join(", ")}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">작성 일시</h3>
            <div className="bg-gray-50 rounded-xl p-4 text-gray-700">
              {new Date(announcement.createdAt).toLocaleString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={handleDelete}
            className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 hover:cursor-pointer transition-colors"
          >
            삭제
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 hover:cursor-pointer transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}