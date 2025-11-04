import type { assItem } from "@/pages/TaskStatus";
import React from "react";

type taskProps = {
  selectedItem: assItem | null;
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DetailTaskModal({ selectedItem, setShowDetail }: taskProps) {
  return (
    <>
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-800">{selectedItem?.title}</h2>
                        <button
                            onClick={() => setShowDetail(false)}
                            className="text-2xl leading-none text-gray-400 hover:text-gray-600 hover:cursor-pointer"
                        >
                            ×
                        </button>
                    </div>
                </div>
        
                <div className="p-6 space-y-6 overflow-y-scroll">
                    <div>
                        <h3 className="mb-2 text-sm font-semibold text-gray-700">공지 내용</h3>
                        <div className="p-4 text-gray-700 whitespace-pre-wrap bg-gray-50 rounded-xl">
                            {selectedItem?.content}
                        </div>
                    </div>
        
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="mb-2 text-sm font-semibold text-gray-700">제출 여부</h3>
                            <div className="p-4 text-gray-700 bg-gray-50 rounded-xl">
                                {selectedItem?.submitted === true ? "제출" : "미제출"}
                            </div>
                        </div>
            
                        <div>
                            <h3 className="mb-2 text-sm font-semibold text-gray-700">학생</h3>
                            <div className="p-4 text-gray-700 bg-gray-50 rounded-xl">
                                {selectedItem?.student}
                            </div>
                        </div>
                    </div>
        
                    <div>
                        <h3 className="mb-2 text-sm font-semibold text-gray-700">제출 기한</h3>
                        <div className="p-4 text-gray-700 bg-gray-50 rounded-xl">
                            {`${selectedItem?.startDate} ~ ${selectedItem?.dueDate}`}
                        </div>
                    </div>
                </div>
        
                <div className="flex gap-3 p-6 border-t border-gray-200">
                    <button
                    className="flex-1 py-3 font-semibold text-white transition-colors bg-red-500 rounded-xl hover:bg-red-600 hover:cursor-pointer"
                    >
                    삭제
                    </button>
                    <button
                    onClick={() => setShowDetail(false)}
                    className="flex-1 py-3 font-semibold text-gray-700 transition-colors bg-gray-200 rounded-xl hover:bg-gray-300 hover:cursor-pointer"
                    >
                    닫기
                    </button>
                </div>
            </div>
        </div>
    </>
  );
}
