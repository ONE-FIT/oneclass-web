interface StatItem {
  label: string;
  value: string | number;
}

interface StatCardProps {
  title: string;
  subtitle?: string;
  items: StatItem[];
  unit: string;
  rateInfo: {
    label: string;
    value: number;
    type: "success" | "error";
  };
}

export default function StatCard({ title, subtitle, items, unit, rateInfo }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        {/* 부제목이 있을 경우 렌더링 */}
        {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {items.map((item, index) => (
          <div key={index} className="rounded-xl p-4 text-center bg-gray-100">
            <div className="text-sm text-gray-600 mb-1">{item.label}</div>
            <div className="text-2xl font-bold text-gray-800">
              {/* 백만 이상의 숫자는 콤마 추가 */}
              {typeof item.value === "number" && item.value >= 1000000
                ? item.value.toLocaleString()
                : item.value}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">(단위 : {unit})</div>
        <div className="flex items-center gap-2 mt-2">
          <div
            className={`w-2 h-2 rounded-full ${
              rateInfo.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <span
            className={`text-sm font-medium ${
              rateInfo.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {rateInfo.label} : {rateInfo.value}%
          </span>
        </div>
      </div>
    </div>
  );
}
