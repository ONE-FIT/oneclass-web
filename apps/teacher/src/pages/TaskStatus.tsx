import Header from "@/components/assignment/Header";
import Filter from "@/components/assignment/Filter";
import BackIcon from "@/assets/assignment/backIcon.svg";
import { useState } from "react";

type filterType = {
  sortOrder: string;      
  timeOrder: string;      
  submissionStatus: string;
}

type assItem = {
  id: number,
  startDate: string,
  dueDate: string,
  title: string,
  student: string,
  submitted: boolean,
  content: string
}

export default function TaskStatus() {
  const teacher:string = '김일강';
  const today:Date = new Date()

  const [filter, setFilter] = useState<filterType>({
    sortOrder: "asc",       
    timeOrder: "recent",       
    submissionStatus: "submitted"
  });

  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<null|assItem>(null);

  const handleClick = (id:number) => {
    setShowDetail(!showDetail);
    const item = dummy.find(item => item.id === id) || null;
    setSelectedItem(item);
  }

  return (
    <div className="bg-[hsla(211,100%,89%,1)] w-full h-screen">
      <Header title="과제 현황" teacher={teacher} today={today}/>
      <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center flex-col">
        <div className="bg-[hsla(0,0%,100%,1)] w-[95%] h-[90%] rounded-3xl border border-[hsla(0,0%,80%,1)] flex flex-col">
          {!showDetail ?
            <div className="h-[100%] w-[100%]">
              <div className="w-full border-b h-[100px] border-[hsla(0,0%,80%,1)]">
                <Filter filter={filter} setFilter={setFilter}/>
              </div>
              <ul className="flex text-[25px] font-semibold justify-between ml-[7%] mr-[5%] mt-[15px]">
                  <li>날짜</li>
                  <li>제목</li>
                  <li>학생</li>
                  <li>제출 여부</li>
                </ul>
              <div className="flex flex-col items-center mt-[10px] w-full h-[77%]">
                <div className="w-[90%] h-[90%] overflow-y-scroll">
                  {dummy.map(item => (
                    <div className="relative flex items-center w-full border h-[60px] rounded-[10px] border-[hsla(0,0%,80%,1)] mb-[10px] border-2 text-[17px] font-semibold cursor-pointer" onClick={() => handleClick(item.id)}>
                      <h4 className="absolute left-[30px]">{item.dueDate.split("-").join(".")}</h4>
                      <h4 className="absolute left-[30%]">{item.title}</h4>
                      <h4 className="absolute right-[34%]">{item.student}</h4>
                      <h4 className="absolute right-[30px]">{item.submitted === true ? "제출" : "미제출"}</h4>
                    </div>
                  ))}
                </div>
              </div> 
            </div> :
            <>
              <div className="w-full border-b h-[80px] border-[hsla(0,0%,80%,1)] flex items-center">
                <div className="ml-8 cursor-pointer" onClick={() => setShowDetail(!showDetail)}>
                  <BackIcon width="20" height="auto"/>
                </div>
                <h2 className="ml-5 text-2xl font-semibold">{selectedItem?.title}</h2>
                <h2 className="ml-auto mr-10 text-2xl font-semibold">{selectedItem?.student} 학생</h2>
              </div>
              <div className="flex items-center h-20 text-2xl font-semibold justify-evenly">
                <h2>{selectedItem?.startDate.split("-").join(".")} ~ {selectedItem?.dueDate.split("-").join(".")}</h2>
                <h2>제출여부 : {selectedItem?.submitted === true ? "제출" : "미제출"}</h2>
              </div>
              <textarea className="border resize-none w-[90%] h-[40%] self-center rounded p-5" value={selectedItem?.content}></textarea>
              <button className="bg-red-400 w-[180px] h-[50px] rounded-md text-white self-end mr-[5%] mt-auto mb-[30px] hover:bg-red-500 cursor-pointer">과제 삭제</button>
            </> }
        </div>
      </div>
    </div>
  );
}

const dummy = [
  {
    "id": 1,
    "startDate": "2025-08-29",
    "dueDate": "2025-09-01",
    "title": "수학 숙제 1",
    "student": "김철수",
    "submitted": true,
    "content": "집합과 명제 단원의 연습문제 풀이 및 개념 복습에 대한 과제입니다. 교과서 15페이지부터 20페이지까지의 모든 문제와 풀이 과정을 노트에 순서대로 정리하여 제출해야 합니다. 특히, 풀이 과정을 명확하게 보여주는 것이 중요하며, 틀린 문제는 반드시 빨간 펜을 사용하여 다시 풀어 오답 노트를 함께 제출해야 합니다. 추가적으로 '역, 이, 대우' 개념을 정확히 이해했는지 확인하기 위해 관련 예제를 5개 이상 찾고, 그 개념을 적용한 풀이 과정을 별도로 정리하여 제출해야 합니다. 제출 기한은 9월 1일 월요일 수업 시작 전입니다."
  },
  {
    "id": 2,
    "startDate": "2025-08-31",
    "dueDate": "2025-09-02",
    "title": "영어 독해 과제",
    "student": "이영희",
    "submitted": false,
    "content": "제시된 미국 역사에 관한 짧은 영문 기사(약 500단어)를 읽고 제출하는 과제입니다. 과제는 두 부분으로 구성됩니다. 첫째, 기사의 핵심 내용을 한국어로 요약하여 A4 용지 반 페이지 분량으로 작성합니다. 요약은 단순히 번역하는 것이 아니라 논리적인 흐름에 따라 작성되어야 합니다. 둘째, 기사를 읽으면서 새로 알게 된 중요 단어 10개를 선정하여, 각 단어의 영영 풀이와 함께 예문 1개를 추가하여 정리합니다. 요약본과 단어 정리는 하나의 워드 파일(.docx)로 통합하여 제출 시스템에 업로드해야 하며, 파일명은 '학번_이름_영어독해.docx' 형식으로 해주세요."
  },
  {
    "id": 3,
    "startDate": "2025-09-01",
    "dueDate": "2025-09-03",
    "title": "과학 실험 보고서",
    "student": "박민수",
    "submitted": true,
    "content": "산성 용액과 염기성 용액의 중화 반응 실험에 대한 공식 보고서를 작성해야 합니다. 보고서에는 필수적으로 실험 목적, 가설 설정, 준비물 및 실험 과정(시각적 이해를 돕기 위한 그림 또는 사진 포함), 측정된 결과 데이터 표, 결과 분석, 결론 및 심화 토의 내용을 포함해야 합니다. 특히, 이번 보고서에서는 실험 과정에서 발생할 수 있는 오차의 원인을 최소 3가지 이상 심도 있게 다루고, 이를 개선하기 위한 방안을 제안하는 항목이 중요하게 평가될 것입니다. 보고서는 5일 이내로 제출해야 하며, 미제출 시 감점됩니다."
  },
  {
    "id": 4,
    "startDate": "2025-09-02",
    "dueDate": "2025-09-04",
    "title": "역사 퀴즈 준비",
    "student": "최지우",
    "submitted": false,
    "content": "다음 주에 있을 삼국 시대 역사 퀴즈에 대비하기 위한 준비 과제입니다. 고구려, 백제, 신라의 건국 배경, 전성기를 이끈 주요 왕들의 업적, 그리고 각국의 대표적인 문화유산(불상, 탑, 건축물 등)에 대한 내용을 중심으로 스스로 요약 정리한 노트를 준비합니다. 이와 더불어, 친구들과 서로 퀴즈를 내고 풀 수 있도록 객관식, 주관식, 서술형 형태를 혼합한 예상 문제 20개를 만들고 정답과 해설을 별첨하여 제출하세요. 퀴즈를 풀기 위한 참고 자료는 제출할 필요는 없으나, 예상 문제는 다음 수업 시간에 활용될 예정입니다."
  },
  {
    "id": 5,
    "startDate": "2025-09-02",
    "dueDate": "2025-09-05",
    "title": "컴퓨터 과제",
    "student": "한승민",
    "submitted": true,
    "content": "Python 프로그래밍 언어를 활용하여 간단한 웹 스크래핑(크롤링) 프로그램을 제작하는 과제입니다. 목표는 특정 금융 관련 웹사이트에서 코스피(KOSPI) 또는 코스닥(KOSDAQ) 시장의 특정 종목 데이터를 크롤링하여 날짜, 종가, 거래량 등의 정보를 CSV 파일로 저장하는 기능을 구현하는 것입니다. 완성된 Python 소스 코드 파일(.py)과 함께, 프로그램 실행 화면 및 결과 CSV 파일의 일부를 캡처한 이미지, 그리고 코드의 구조와 사용법을 설명하는 보고서(A4 1페이지)를 하나의 압축 파일(.zip)로 묶어 제출해야 합니다. 라이브러리 사용 시, `requests`와 `BeautifulSoup` 또는 `pandas` 라이브러리 사용을 권장합니다."
  },
  {
    "id": 6,
    "startDate": "2025-09-03",
    "dueDate": "2025-09-06",
    "title": "체육 활동 기록",
    "student": "정다은",
    "submitted": false,
    "content": "지난 일주일(화요일부터 금요일까지) 동안의 개인 체육 활동 기록을 상세히 작성하는 과제입니다. 기록에는 운동을 시작한 날짜와 시간, 운동의 종류(예: 달리기, 농구, 홈트레이닝), 총 운동 시간(분 단위), 그리고 온라인 칼로리 계산기를 활용한 추정 소모 칼로리 값을 포함해야 합니다. 이 기록을 바탕으로 현재 자신의 체력 수준을 진단하고, 앞으로 3개월간 체력을 향상시키기 위한 구체적이고 현실적인 계획 5가지 항목을 정리하여 제출합니다. 이 기록과 계획은 다음 학기 체육 수행 평가 점수에 반영될 중요한 자료이므로, 성실하게 작성해 주세요."
  },
  {
    "id": 7,
    "startDate": "2025-09-04",
    "dueDate": "2025-09-07",
    "title": "미술 작품 제출",
    "student": "윤성호",
    "submitted": true,
    "content": "자유 주제로 A3 사이즈 도화지에 완성된 드로잉 작품을 제출하는 과제입니다. 표현 재료는 목탄, 연필, 색연필 중 하나를 선택하여 사용해야 하며, 혼합 재료 사용은 허용되지 않습니다. 작품과 함께 작품 뒷면에 본인의 이름과 함께 작품에 대한 간략한 설명(최대 5문장), 즉 작품의 의도와 구상 과정, 그리고 사용한 주재료를 기재해야 합니다. 창의적이고 독창적인 아이디어를 바탕으로 자유롭게 표현하는 것을 권장하며, 마감 기한을 엄수하여 미술실로 직접 제출해야 합니다."
  },
  {
    "id": 8,
    "startDate": "2025-09-05",
    "dueDate": "2025-09-08",
    "title": "음악 감상문",
    "student": "강수진",
    "submitted": false,
    "content": "클래식 음악가(루트비히 판 베토벤, 볼프강 아마데우스 모차르트, 요한 제바스티안 바흐 중 택 1)의 작품 3곡 이상을 감상한 후, 분석적인 감상문을 작성하는 과제입니다. 각 곡에 대한 개인적인 감상평과 함께, 곡의 형식, 사용된 악기 구성, 음악적 특징에 대한 분석 내용을 포함해야 합니다. 또한, 작곡가의 생애와 해당 작품이 탄생하게 된 시대적/개인적 배경을 조사하여 감상문에 녹여내야 합니다. 감상문은 최소 1500자 이상으로 작성해야 하며, 음악적 전문 용어를 적절히 사용하여 깊이 있는 내용을 담을수록 높은 점수를 받을 수 있습니다."
  },
  {
    "id": 9,
    "startDate": "2025-09-06",
    "dueDate": "2025-09-09",
    "title": "국어 독후감",
    "student": "오지훈",
    "submitted": true,
    "content": "지정 도서인 헤르만 헤세의 소설 '데미안'을 읽고 제출하는 독후감입니다. 독후감은 단순히 줄거리를 요약하는 것을 넘어, 작품에서 가장 인상 깊었던 구절 5개를 선정하여 인용하고, 그 구절에 대한 자신의 해석을 서술해야 합니다. 특히, 주인공 '싱클레어'의 심리적 변화와 성장의 과정에 초점을 맞추어 자신의 개인적인 생각과 경험을 논리적으로 서술하는 것이 중요합니다. 독후감의 분량은 A4 용지 2페이지 내외(글자 크기 11pt, 줄 간격 160%)로 작성하여야 하며, 문학적 통찰력을 보여주는 것이 평가의 주요 기준이 될 것입니다."
  },
  {
    "id": 10,
    "startDate": "2025-09-07",
    "dueDate": "2025-09-10",
    "title": "사회 토론 준비",
    "student": "신예린",
    "submitted": false,
    "content": "다음 수업 시간에 진행될 찬반 토론을 위한 개요서 준비 과제입니다. 토론 주제는 '인공지능(AI)의 윤리적 사용에 대한 법적 규제 강화는 필요한가?'입니다. 학생은 자신의 입장(찬성 또는 반대)을 명확히 정하고, 그 입장을 뒷받침할 수 있는 최소 3가지 이상의 강력한 근거 자료(최신 뉴스 기사, 연구 논문, 통계 자료 등)를 준비해야 합니다. 또한, 예상되는 상대편의 반론에 대해 미리 대비할 수 있는 재반박 자료와 논리를 함께 정리하여 토론 개요서(주장-근거-예상 반론-재반박 구조) 형태로 제출해야 합니다. 개요서는 토론의 성공적인 진행을 위해 사전에 검토될 예정입니다."
  }
]
