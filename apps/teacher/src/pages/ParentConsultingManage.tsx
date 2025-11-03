import PageHeader from "@/components/Common/PageHeader";
import { useState } from "react";

type DummyType = {
    "id": number,
    "title": string,
    "content": string,
    "parent": string,
};

export default function ParantConsultingManage() {
  const [selected, setSelected] = useState<null|DummyType>(null);
  
  return (
    <div className="bg-[hsla(211,100%,89%,1)] w-full h-screen">
      <PageHeader title="학부모 상담"/>
      <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center flex-col">
        <div className="bg-[hsla(0,0%,100%,1)] w-[95%] h-[90%] rounded-3xl border border-[hsla(0,0%,80%,1)] flex justify-center">
          <div className="flex flex-col w-[30%] items-center">
            <h2 className="bg-blue-300 w-[90%] h-[50px] text-white text-2xl font-semibold text-center leading-[50px] rounded-2xl mt-[30px]">학부모 상담 {dummy.length}건</h2>
            <div className="w-[90%] h-[80%] mt-[30px] overflow-y-scroll [&::-webkit-scrollbar]:hidden">
              {dummy.map(item => 
                <div 
                  key={item.id}
                  className={`w-full h-[50px] border mb-5 rounded-md flex justify-center items-center cursor-pointer pl-[10px] pr-[10px] box-border transition-colors ${
                    selected?.id === item.id ? 'bg-[hsla(211,100%,89%,1)] text-[#00162E] border-blue-300 font-semibold' : 'bg-white text-black border-[#0257A3]'
                  }`}
                  onClick={() => setSelected(item)}
                >
                  <h2 className="truncate">{item.title}</h2>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col w-[65%] items-center">
            <h2 className="bg-blue-300 text-white w-[90%] h-[50px] text-2xl font-semibold text-center leading-[50px] rounded-2xl mt-[30px]">상담 내용</h2>
            <div className="w-[90%] h-[80%] mt-[30px] border rounded-xl flex flex-col items-center border-[#0257A3] overflow-hidden">
              <div className="flex w-[90%] mt-[20px] justify-between items-center">
                <h2 className="text-xl">제목 : {selected?.title}</h2>
                <small className="bg-[hsla(211,100%,89%,1)] border text-[#00162E] border-blue-300 font-semibold w-[130px] text-center h-[25px] leading-[25px] rounded-md">{selected?.parent} 학생 학부모</small>
              </div>
              <div className="border w-[90%] flex-1 mt-[20px] rounded-xl border-[#0257A3] pl-[15px] pr-[15px] flex flex-col overflow-hidden">
                <h2 className="font-semibold h-[50px] flex items-center text-xl border-b-2 border-[#0257A3]">내용</h2>
                <textarea className="flex-1 resize-none mt-[5px] focus:outline-none pb-[15px]" value={selected?.content} readOnly/>
              </div>
              <div className="border w-[90%] flex-1 mt-[20px] rounded-xl border-[#0257A3] pl-[15px] pr-[15px] flex flex-col overflow-hidden">
                <h2 className="font-semibold h-[50px] flex items-center text-xl border-b-2 border-[#0257A3]">메세지</h2>
                <textarea className="flex-1 resize-none mt-[5px] focus:outline-none pb-[15px]" placeholder="보낼 메세지를 입력하세요."/>
              </div>
              <button className="border w-[140px] h-[40px] rounded-xl mt-[20px] mb-[20px] self-end mr-[5%] border-blue-300 text-white bg-blue-300 font-semibold hover:bg-[hsl(210,91.30%,68.40%)] cursor-pointer">메세지 전송</button>
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
    "title": "11월 수강료 결제 문의",
    "content": "11월 수강료 카드 결제를 하고 싶은데, 학원 방문 전에 미리 결제할 수 있는 방법이 있나요?",
    "parent": "김민준"
  },
  {
    "id": 2,
    "title": "겨울방학 특강 신청 문의",
    "content": "겨울방학에 개설되는 수학 특강에 대해 자세한 시간표와 내용을 알고 싶습니다.",
    "parent": "이서연"
  },
  {
    "id": 3,
    "title": "금일 결석 및 보강 요청",
    "content": "자녀(박서준)가 몸이 안 좋아 오늘 수업에 참여하기 어렵습니다. 보강 일정을 잡아주실 수 있을까요?",
    "parent": "박지훈"
  },
  {
    "id": 4,
    "title": "수업 시간 변경 가능 여부",
    "content": "아이가 다른 학원과 시간이 겹쳐서 그런데, 현재 듣고 있는 영어 수업을 다른 시간대 반으로 옮길 수 있는지 궁금합니다.",
    "parent": "최수빈"
  },
  {
    "id": 5,
    "title": "셔틀버스 노선 문의",
    "content": "이번에 새로 등록했는데, 저희 아파트 앞으로 지나가는 셔틀버스 노선과 시간을 알려주세요.",
    "parent": "정예은"
  },
  {
    "id": 6,
    "title": "레벨테스트 결과 상담 요청",
    "content": "지난주에 본 레벨테스트 결과에 대해 선생님과 상담을 하고 싶습니다. 가능한 시간을 알려주세요.",
    "parent": "강하윤"
  },
  {
    "id": 7,
    "title": "새 교재 구매 관련 문의",
    "content": "다음 달부터 새로운 교재로 수업한다고 들었습니다. 교재는 어디서 구매해야 하나요?",
    "parent": "윤지아"
  },
  {
    "id": 8,
    "title": "숙제 관련 질문",
    "content": "아이가 오늘 내주신 숙제를 많이 어려워하는데, 힌트를 조금 주실 수 있을까요?",
    "parent": "임도윤"
  },
  {
    "id": 9,
    "title": "친구 추천 이벤트 문의",
    "content": "게시판에서 본 친구 추천 이벤트에 대해 궁금한 점이 있어 연락드렸습니다. 자세한 안내 부탁드립니다.",
    "parent": "한채원"
  },
  {
    "id": 10,
    "title": "자녀 수업 태도 문의",
    "content": "최근 아이가 학원에 잘 적응하고 있는지, 수업 태도는 어떤지 궁금하여 연락드렸습니다.",
    "parent": "송현우"
  }
]