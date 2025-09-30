import { type AnnouncementItem } from "@/constants/dashboard.constants";

interface AnnouncementCardProps {
  announcements: AnnouncementItem[];
}

export default function AnnouncementCard({ announcements }: AnnouncementCardProps) {
  // 최신 3개 공지사항
  const recentAnnouncements = announcements.slice(0, 3);

  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <h3 className="text-lg font-semibold text-gray-800">공지</h3>
      </div>

      <div className="space-y-2">
        {recentAnnouncements.map((announcement, _index) => (
          <div
            key={announcement.id}
            className="bg-gray-50 rounded-lg px-3 py-3 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{announcement.date}</span>
              {/* 긴 제목은 ... */}
              <span className="text-sm font-medium text-gray-800 truncate ml-2">
                {announcement.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
