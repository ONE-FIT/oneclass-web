import { useState } from "react";
import PageHeader from "@/components/Common/PageHeader";
import FilterBar from "@/components/AnnouncementManage/FilterBar";
import AnnouncementList from "@/components/AnnouncementManage/AnnouncementList";
import AnnouncementDetail from "@/components/AnnouncementManage/AnnouncementDetail";
import { mockAnnouncements, type Announcement } from "@/constants/announcementManage.constants";

export default function AnnouncementManage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(mockAnnouncements);
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  // 필터링된 공지사항 목록
  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesStatus = selectedStatus === "all" || announcement.status === selectedStatus;
    const matchesSearch = announcement.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // 공지사항 삭제
  const handleDeleteAnnouncement = (id: string) => {
    setAnnouncements(prev => prev.filter(announcement => announcement.id !== id));
  };

  return (
    <div>
      <PageHeader title="공지 관리" />

      <div className="bg-blue-200 p-6 min-h-[calc(100vh-theme(spacing.20))]">
        <FilterBar
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <AnnouncementList
          announcements={filteredAnnouncements}
          onAnnouncementClick={setSelectedAnnouncement}
        />
        {selectedAnnouncement && (
          <AnnouncementDetail
            announcement={selectedAnnouncement}
            onClose={() => setSelectedAnnouncement(null)}
            onDelete={handleDeleteAnnouncement}
          />
        )}
      </div>
    </div>
  );
}
