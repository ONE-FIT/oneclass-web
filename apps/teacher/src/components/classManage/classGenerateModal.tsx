interface ClassGenerateModalProps {
    setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  }

export default function ClassGenerateModal({setModalShow}:ClassGenerateModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white w-[40%] h-[330px] rounded-2xl flex flex-col items-center gap-5 p-5 relative">
                <button
                onClick={() => setModalShow(prev => !prev)}
                className="absolute text-2xl leading-none text-gray-400 hover:text-gray-600 hover:cursor-pointer right-9"
                >
                ×
                </button>
                <h2 className="text-2xl font-semibold">반 생성</h2>
                <input placeholder="반 이름을 입력하세요." className="w-[80%] h-[40px] border pl-[10px] rounded focus:outline-none border-gray-300"/>
                <textarea placeholder="비고를 입력하세요." className="w-[80%] h-[100px] border resize-none p-[10px] rounded focus:outline-none border-gray-300"/>
                <button className="w-[80%] px-8 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-2xl hover:bg-blue-700 hover:cursor-pointer">생성하기</button>
            </div>
        </div>
    )
}