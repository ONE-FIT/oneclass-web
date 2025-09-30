import type { UseFormReturn } from "react-hook-form";
import {
  targetTypeOptions,
  mockClasses,
  mockStudents,
  type AnnouncementFormData,
} from "@/constants/announcementSend.constants";

interface TargetSelectorProps {
  form: UseFormReturn<AnnouncementFormData>;
  isScheduled: boolean;
}

export default function TargetSelector({ form, isScheduled }: TargetSelectorProps) {
  const { watch, setValue } = form;

  const targetType = watch("targetType");
  const selectedClasses = watch("selectedClasses");
  const selectedStudents = watch("selectedStudents");

  // 발송 방식 변경시 선택 초기화
  const handleTargetTypeChange = (newTargetType: "all" | "class" | "individual") => {
    setValue("targetType", newTargetType);
    setValue("selectedClasses", []);
    setValue("selectedStudents", []);
  };

  // 반 선택/해제 토글
  const handleClassToggle = (classId: string) => {
    const newSelectedClasses = selectedClasses.includes(classId)
      ? selectedClasses.filter((id: string) => id !== classId)
      : [...selectedClasses, classId];
    setValue("selectedClasses", newSelectedClasses);
  };

  // 개별 학생 선택/해제 토글
  const handleStudentToggle = (studentId: string) => {
    const newSelectedStudents = selectedStudents.includes(studentId)
      ? selectedStudents.filter((id: string) => id !== studentId)
      : [...selectedStudents, studentId];
    setValue("selectedStudents", newSelectedStudents);
  };

  // 선택된 학생 수 계산
  const getSelectedCount = () => {
    if (targetType === "all") {
      return mockStudents.length;
    } else if (targetType === "class") {
      return selectedClasses.reduce((count: number, classId: string) => {
        const classGroup = mockClasses.find(c => c.id === classId);
        return count + (classGroup?.studentCount || 0);
      }, 0);
    } else {
      return selectedStudents.length;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <h3 className="text-lg font-semibold text-gray-800">발송 대상 선택</h3>
        <span className="text-sm text-blue-600 ml-auto">총 {getSelectedCount()}명 선택됨</span>
      </div>

      <div className="space-y-4 flex-1 flex flex-col">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">발송 방식</label>
          <div className="flex gap-4">
            {targetTypeOptions.map(option => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name="targetType"
                  value={option.value}
                  checked={targetType === option.value}
                  onChange={e =>
                    handleTargetTypeChange(e.target.value as "all" | "class" | "individual")
                  }
                  className="mr-2"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {targetType === "class" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">반 선택</label>
            <div className="grid grid-cols-2 gap-3">
              {mockClasses.map(classGroup => (
                <label
                  key={classGroup.id}
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedClasses.includes(classGroup.id)}
                    onChange={() => handleClassToggle(classGroup.id)}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium text-gray-800">{classGroup.name}</div>
                    <div className="text-sm text-gray-600">{classGroup.studentCount}명</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {targetType === "individual" && (
          <div className="flex-1 flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-2">학생 선택</label>
            <div className="grid grid-cols-2 gap-3 overflow-y-auto flex-1">
              {mockStudents.map(student => (
                <label
                  key={student.id}
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(student.id)}
                    onChange={() => handleStudentToggle(student.id)}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium text-gray-800">{student.name}</div>
                    <div className="text-sm text-gray-600">{student.className}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
        >
          {isScheduled ? "예약 발송하기" : "지금 발송하기"}
        </button>
      </div>
    </div>
  );
}
