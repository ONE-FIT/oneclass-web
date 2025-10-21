import type { Announcement } from "@/constants/announcementManage.constants";

interface AnnouncementListProps {
  announcements: Announcement[];
  onAnnouncementClick: (announcement: Announcement) => void;
}

export default function AnnouncementList({
  announcements,
  onAnnouncementClick,
}: AnnouncementListProps) {
  const getStatusBadge = (status: "scheduled" | "sent") => {
    if (status === "scheduled") {
      return (
        <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
          예약 발송
        </span>
      );
    }
    return (
      <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
        발송 완료
      </span>
    );
  };

  const formatDateTime = (date: string, time: string) => {
    const [year, month, day] = date.split("-");
    return `${year}.${month}.${day} ${time}`;
  };

  return (
    <div className="space-y-3">
      {announcements.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center text-gray-500">
          발송된 공지사항이 없습니다.
        </div>
      ) : (
        announcements.map(announcement => (
          <div
            key={announcement.id}
            onClick={() => onAnnouncementClick(announcement)}
            className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-800 flex-1">
                {announcement.title}
              </h3>
              {getStatusBadge(announcement.status)}
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{announcement.content}</p>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">발송 대상:</span>
                  <span className="text-gray-700 font-medium">
                    {announcement.targetNames.join(", ")}
                  </span>
                </div>
              </div>
              <div className="text-gray-500">
                {formatDateTime(announcement.sendDate, announcement.sendTime)}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}