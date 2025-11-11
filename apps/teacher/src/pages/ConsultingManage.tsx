import PageHeader from "@/components/Common/PageHeader";
import { useState } from "react";

type DummyType = {
    "id": number,
    "title": string,
    "content": string,
    "name": string,
    "gender": string,
    "age": number,
    "phone": string,
    "subject": string,
    "date" : string,
};

export default function TaskStatus() {
  const [selected, setSelected] = useState<null|DummyType>(null);
  
  return (
    <div className="bg-[hsla(211,100%,89%,1)] w-full h-screen">
      <PageHeader title="신규 상담 관리"/>
      <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center flex-col">
        <div className="bg-[hsla(0,0%,100%,1)] w-[95%] h-[90%] rounded-3xl border border-[hsla(0,0%,80%,1)] flex justify-center">
          <div className="flex flex-col w-[30%] items-center">
            <h2 className="bg-blue-500 text-white w-[90%] h-[50px] text-2xl font-semibold text-center leading-[50px] rounded-2xl mt-[30px]">신규 상담 {dummy.length}건</h2>
            <div className="w-[90%] h-[80%] mt-[30px] overflow-y-scroll [&::-webkit-scrollbar]:hidden">
              {dummy.map(item => 
                <div 
                  key={item.id}
                  className={`w-full h-[50px] border mb-5 border-[#0257A3] rounded-md flex justify-center items-center cursor-pointer pl-[10px] pr-[10px] box-border transition-colors ${
                    selected?.id === item.id ? 'bg-blue-400 border-blue-400 text-white font-semibold' : 'bg-white text-black'
                  }`}
                  onClick={() => setSelected(item)}
                >
                  <h2 className="truncate">{item.title}</h2>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col w-[65%] items-center">
            <h2 className="bg-blue-500 text-white w-[90%] h-[50px] text-2xl font-semibold text-center leading-[50px] rounded-2xl mt-[30px]">상담 내용</h2>
            <div className="w-[90%] h-[80%] mt-[30px] rounded-xl flex flex-col items-center overflow-hidden bg-blue-50">
              <h2 className="flex w-[90%] mt-[20px] h-[40px] pl-[20px] pr-[20px] rounded-xl justify-between items-center bg-white text-xl">제목 : {selected?.title}</h2>
              <div className="w-[90%] flex-1 mt-[20px] rounded-xl border-[#0257A3] pl-[15px] pr-[15px] flex flex-col overflow-hidden bg-white">
                <h2 className="font-semibold h-[50px] flex items-center justify-between text-xl border-b-2 border-gray-300">
                  내용
                  <small>희망 일자 : {selected ? new Date(selected.date).toLocaleString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  }) : ""}
                  </small>
                </h2>
                <textarea className="flex-1 resize-none mt-[5px] focus:outline-none" value={selected?.content} readOnly/>
                <div className="w-full h-[25px] rounded flex items-center mb-[10px] bg-gray-100">
                  <ul className="flex w-full justify-evenly">
                    <li><small>이름 : {selected?.name}</small></li>
                    <li><small>성별 : {selected?.gender}</small></li>
                    <li><small>나이 : {selected?.age}</small></li>
                    <li><small>전화번호 : {selected?.phone}</small></li>
                    <li><small>과목 : {selected?.subject}</small></li>
                  </ul>
                </div>
              </div>
              <div className="w-[90%] flex-1 mt-[20px] rounded-xl pl-[15px] pr-[15px] flex flex-col overflow-hidden bg-white">
                <h2 className="font-semibold h-[50px] flex items-center text-xl border-b-2 border-gray-300 justify-between">
                  메세지
                  <div className="bg-gray-100 pr-[10px] pl-[10px] rounded-xl flex items-center h-[25px] gap-7">
                    <input type="date" className="text-sm w-[110px]" defaultValue={selected ? new Date(selected.date).toISOString().split('T')[0] : ""}/>
                    <input type="time" className="text-sm w-[100px]" defaultValue={selected ? `${new Date(selected.date).getHours().toString().padStart(2,'0')}:${new Date(selected.date).getMinutes().toString().padStart(2,'0')}` : `${new Date().getHours().toString().padStart(2,'0')}:${new Date().getMinutes().toString().padStart(2,'0')}`} />
                  </div>
                </h2>
                <textarea className="flex-1 resize-none mt-[5px] focus:outline-none" placeholder="보낼 메세지를 입력하세요."/>
              </div>
              <div className="flex justify-between w-[90%]">
                <button className="w-[140px] h-[40px] rounded-xl mt-[20px] mb-[20px] self-end text-white bg-red-500 hover:bg-red-600 font-semibold hover:bg-blue-700 cursor-pointer">상담 기록 삭제</button>
                <button className="w-[140px] h-[40px] rounded-xl mt-[20px] mb-[20px] self-end text-white bg-blue-600 font-semibold hover:bg-blue-700 cursor-pointer">메세지 전송</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const dummy = [
  {
    "id": 1,
    "title": "수학 성적 향상 상담",
    "content": "최근 수학 점수가 잘 안 나와서 공부 방법을 상담받고 싶어요.",
    "name": "김민재",
    "gender": "남",
    "age": 17,
    "phone": "010-2345-6789",
    "subject": "수학",
    "date": "2025-12-01T14:30:00.000Z"
  },
  {
    "id": 2,
    "title": "영어 회화 실력 향상",
    "content": "유학 준비 중이라 영어 말하기 중심으로 상담받고 싶습니다.",
    "name": "이수진",
    "gender": "여",
    "age": 19,
    "phone": "010-9876-5432",
    "subject": "영어",
    "date": "2025-12-02T10:00:00.000Z"
  },
  {
    "id": 3,
    "title": "코딩 입문 관련 상담",
    "content": "프로그래밍을 처음 배우는데 어떤 언어부터 시작해야 할지 궁금합니다.",
    "name": "박지훈",
    "gender": "남",
    "age": 16,
    "phone": "010-1111-2222",
    "subject": "컴퓨터",
    "date": "2025-12-03T16:45:00.000Z"
  },
  {
    "id": 4,
    "title": "과학 탐구 과목 선택 고민",
    "content": "물리와 화학 중 어떤 과목을 선택해야 할지 상담받고 싶어요.",
    "name": "정유진",
    "gender": "여",
    "age": 18,
    "phone": "010-3333-4444",
    "subject": "과학",
    "date": "2025-12-04T11:30:00.000Z"
  },
  {
    "id": 5,
    "title": "국어 비문학 독해 상담",
    "content": "비문학 지문을 읽는 데 시간이 너무 오래 걸립니다. 방법을 알고 싶어요.",
    "name": "최성민",
    "gender": "남",
    "age": 17,
    "phone": "010-5555-6666",
    "subject": "국어",
    "date": "2025-12-05T13:00:00.000Z"
  },
  {
    "id": 6,
    "title": "사회탐구 과목 선택 상담",
    "content": "경제와 사회문화 중 어떤 게 제 적성에 맞을지 알고 싶어요.",
    "name": "한지은",
    "gender": "여",
    "age": 18,
    "phone": "010-7777-8888",
    "subject": "사회",
    "date": "2025-12-06T15:15:00.000Z"
  },
  {
    "id": 7,
    "title": "물리 개념 정리 상담",
    "content": "물리 개념을 이해하는 데 어려움을 겪고 있습니다. 도와주세요.",
    "name": "윤도현",
    "gender": "남",
    "age": 17,
    "phone": "010-9999-0000",
    "subject": "물리",
    "date": "2025-12-08T10:45:00.000Z"
  },
  {
    "id": 8,
    "title": "논술 준비 방법 상담",
    "content": "논술을 처음 준비하는데 어떻게 시작해야 할지 모르겠어요.",
    "name": "서지훈",
    "gender": "남",
    "age": 19,
    "phone": "010-1122-3344",
    "subject": "논술",
    "date": "2025-12-09T14:00:00.000Z"
  },
  {
    "id": 9,
    "title": "프로그래밍 심화 상담",
    "content": "웹 개발을 배우고 싶은데 프론트엔드부터 시작해도 될까요?",
    "name": "오하늘",
    "gender": "여",
    "age": 20,
    "phone": "010-5566-7788",
    "subject": "프로그래밍",
    "date": "2025-12-10T17:00:00.000Z"
  },
  {
    "id": 10,
    "title": "수학 기초 다지기",
    "content": "중학교 때 배운 내용을 다시 복습하고 싶어요.",
    "name": "장우석",
    "gender": "남",
    "age": 16,
    "phone": "010-9988-7766",
    "subject": "수학",
    "date": "2025-12-01T10:30:00.000Z"
  }
]