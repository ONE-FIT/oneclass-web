import PageHeader from "@/components/Common/PageHeader";
import { useState } from "react";
import ClassGenerateModal from "@/components/classManage/classGenerateModal";

type DummyType = {
  class: string;
  description: string;
  students: string[];
}

export default function ClassManage() {
  const [mode, setMode] = useState<string>("반")
  const [selected, setSelected] = useState<null|DummyType>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState<boolean>(false);

  if (modalShow === true) {
    document.body.style.overflow = 'hidden';
  }
  
  return (
      <div className="bg-[hsla(211,100%,89%,1)] w-full h-screen">
        <PageHeader title="납부 현황"/>
        <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center flex-col">
          <div className="bg-[hsla(0,0%,100%,1)] w-[95%] h-[90%] rounded-3xl border border-[hsla(0,0%,80%,1)] flex flex-col">
            <div className="h-[80px]  border-b border-[hsla(0,0%,80%,1)] flex justify-center items-center gap-5 text-2xl font-semibold">
              <span onClick={() => setMode("반")} className={mode === "반" ? "border-b-3 border-blue-300" : ""}>반</span>
              <span onClick={() => setMode("과목")} className={mode === "과목" ? "border-b-3 border-blue-300" : ""}>과목</span>
            </div>
            <div className="flex-1 p-5 grid grid-cols-[300px_1fr] grid-rows-[1fr_60px] gap-y-5 overflow-hidden">
              <div className="overflow-y-auto bg-white rounded [&::-webkit-scrollbar]:hidden">
                <div className="flex flex-col items-end">
                  {dummy.map(room => (
                    <div key={room.class} 
                      onClick={() => setSelected(room)}
                      className={`w-[80%] h-[50px] border mb-5 border-[#0257A3] rounded-md flex justify-center items-center cursor-pointer pl-[10px] pr-[10px] box-border transition-colors ${
                        selected?.class === room.class ? 'bg-[hsla(211,100%,89%,1)] text-[#00162E] border-blue-300 font-semibold' : 'bg-white text-black'
                      }`}
                    >{room.class}</div>
                  ))}
                </div>
              </div>
              <div className="row-span-2 bg-[hsla(211,100%,89%,1)] w-[90%] justify-self-center flex flex-col items-center rounded-2xl">
                <div className="bg-white h-[50px] mt-[30px] w-[80%] text-2xl font-semibold flex items-center justify-center rounded-2xl">1반</div>
                <div className=" w-[80%] mt-[30px] h-[35%] flex flex-col">
                  <h3 className="text-2xl font-semibold ml-[10px] mb-[5px]">비고</h3>
                  <textarea className="w-full h-full p-[10px] bg-white resize-none focus:outline-none rounded" readOnly={isEdit === false} defaultValue={selected?.description}/>
                  <button className="bg-blue-600 text-white text-sm w-[80px] h-[30px] rounded-3xl mt-[10px] self-end shrink-0 cursor-pointer hover:bg-blue-700" onClick={() => setIsEdit(!isEdit)}>{isEdit === false ? "수정" : "완료"}</button>
                </div>
                <div className="w-[80%] mt-[30px] h-[30%] flex flex-col">
                  <h3 className="text-2xl font-semibold ml-[10px] mb-[10px]">소속 학생</h3>
                  <div className="flex flex-wrap gap-5 overflow-y-scroll">
                    {selected?.students.map(student => 
                      <div className="bg-white w-[120px] h-[40px] rounded-3xl flex items-center justify-center">{student}</div>
                    )}
                  </div>
                </div>
              </div>
              <button className="text-xl font-semibold text-white bg-blue-300 rounded-2xl w-[80%] h-[50px] self-center justify-self-end hover:bg-[hsl(210,91.30%,68.40%)] cursor-pointer" onClick={() => setModalShow(true)}>추가하기</button>
            </div>
          </div>
        </div>
        {modalShow && 
          <ClassGenerateModal
            setModalShow={setModalShow}
        />}
      </div>
  );
}

const dummy = [
  {
    "class": "중등 영어 A",
    "description": "중학교 1~2학년 대상, 기본 문법 및 독해 집중",
    "students": [
      "김민지",
      "이준호",
      "박서연",
      "최우진",
      "정하은",
      "강도윤"
    ]
  },
  {
    "class": "고등 수학 심화",
    "description": "고등학교 2학년 상위권 대상, 미적분 및 기하 집중",
    "students": [
      "윤지수",
      "한재민",
      "송예나",
      "오세현"
    ]
  },
  {
    "class": "초등 코딩 입문",
    "description": "초등학교 4~6학년 대상, 블록 코딩 기초 및 알고리즘 소개",
    "students": [
      "배소미",
      "임채율",
      "조하준",
      "고다인",
      "신지환",
      "서아윤",
      "배소미",
      "임채율",
      "조하준",
      "고다인",
      "신지환",
      "배소미",
      "임채율",
      "조하준",
      "고다인",
      "신지환",
    ]
  },
  {
    "class": "토플 대비반",
    "description": "대학생 및 일반인 대상, iBT 토플 전 영역 집중 훈련",
    "students": [
      "문성훈",
      "구혜림"
    ]
  },
  {
    "class": "국어 논술 고급",
    "description": "고등학교 3학년 대상, 심층 독해 및 비판적 글쓰기 연습",
    "students": [
      "유승호",
      "장예원",
      "차은결",
      "하윤서",
      "권혁준"
    ]
  }
  ,
  {
    "class": "국어 논술 고급2",
    "description": "고등학교 3학년 대상, 심층 독해 및 비판적 글쓰기 연습",
    "students": [
      "유승호",
      "장예원",
      "차은결",
      "하윤서",
      "권혁준"
    ]
  },
  {
    "class": "국어 논술 고급3",
    "description": "고등학교 3학년 대상, 심층 독해 및 비판적 글쓰기 연습",
    "students": [
      "유승호",
      "장예원",
      "차은결",
      "하윤서",
      "권혁준"
    ]
  },
  {
    "class": "국어 논술 고급4",
    "description": "고등학교 3학년 대상, 심층 독해 및 비판적 글쓰기 연습",
    "students": [
      "유승호",
      "장예원",
      "차은결",
      "하윤서",
      "권혁준"
    ]
  },
  {
    "class": "국어 논술 고급5",
    "description": "고등학교 3학년 대상, 심층 독해 및 비판적 글쓰기 연습",
    "students": [
      "유승호",
      "장예원",
      "차은결",
      "하윤서",
      "권혁준"
    ]
  }
]