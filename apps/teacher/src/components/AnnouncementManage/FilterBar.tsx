import { statusOptions } from "@/constants/announcementManage.constants";

interface FilterBarProps {
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function FilterBar({
  selectedStatus,
  onStatusChange,
  searchQuery,
  onSearchChange,
}: FilterBarProps) {
  return (
    <div className="bg-white rounded-xl p-4 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex gap-2">
          {statusOptions.map(option => (
            <button
              key={option.value}
              onClick={() => onStatusChange(option.value)}
              className={`px-4 py-2 rounded-lg font-medium hover:cursor-pointer transition-colors ${
                selectedStatus === option.value
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="flex-1">
          <input
            type="text"
            placeholder="제목으로 검색하기"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
