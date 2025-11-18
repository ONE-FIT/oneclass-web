import PageHeader from "@/components/Common/PageHeader";
import SearchIcon from "@/assets/assignment/search.svg";
import React, { useState } from "react";

export default function AttendanceStatus() {
  const [selectedSubject, setSelectedSubject] = useState("전체");
  const [selectedClass, setSelectedClass] = useState("전체");
  const [searchName, setSearchName] = useState("");

  const filteredData = dummy.filter(item => {
    const subjectMatch = selectedSubject === "전체" || item.subject === selectedSubject;
    const classMatch = selectedClass === "전체" || item.class === selectedClass;
    return subjectMatch && classMatch;
  });

  const filteredTotalAttendance = filteredData.reduce((total, cls) => {
    const attended = cls.students.filter(student => {
      const nameMatch = searchName === "" || student.name.includes(searchName);
      return student.attendance === "출석" && nameMatch;
    }).length;
    return total + attended;
  }, 0);

  const filteredTotalNotAttendance = filteredData.reduce((total, cls) => {
    const attended = cls.students.filter(student => {
      const nameMatch = searchName === "" || student.name.includes(searchName);
      return student.attendance === "미출석" && nameMatch;
    }).length;
    return total + attended;
  }, 0);

  const filteredAttendanceRate =
    filteredTotalAttendance + filteredTotalNotAttendance > 0
      ? (filteredTotalAttendance / (filteredTotalAttendance + filteredTotalNotAttendance)) * 100
      : 0;

  return (
    <div className="bg-[hsla(211,100%,89%,1)] w-full h-screen">
      <PageHeader title="출석 현황" />
      <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center flex-col">
        <div className="w-[95%] h-[90%] rounded-3xl flex flex-col gap-5">
          <div className="flex items-center w-[60%] self-center h-[100px] gap-[6%] font-semibold rounded-2xl bg-white flex-shrink-0 justify-between">
            <select
              className="border w-[150px] h-[50px] rounded-xl pl-[10px] focus:outline-none border-gray-300 ml-[3%]"
              value={selectedSubject}
              onChange={e => setSelectedSubject(e.target.value)}
            >
              <option>전체</option>
              {[...new Set(dummy.map(item => item.subject))].map((subject, idx) => (
                <option key={idx}>{subject}</option>
              ))}
            </select>
            <select
              className="border w-[150px] h-[50px] rounded-xl pl-[10px] focus:outline-none border-gray-300"
              value={selectedClass}
              onChange={e => setSelectedClass(e.target.value)}
            >
              <option>전체</option>
              {[...new Set(dummy.map(item => item.class))].map((cls, idx) => (
                <option key={idx}>{cls}</option>
              ))}
            </select>
            <div className="flex w-[80%] items-center">
              <input
                placeholder="학생 이름을 입력해 주세요."
                className="border ml-[10px] h-[40px] w-[65%] pl-[10px] rounded border-gray-300 focus:outline-none"
                value={searchName}
                onChange={e => setSearchName(e.target.value)}
              />
              <SearchIcon className="ml-[10px] w-[30px]" />
            </div>
          </div>
          <div className="flex justify-between flex-1 w-full min-h-0 gap-5">
            <div className="w-[32%] h-full bg-white rounded-xl flex flex-col">
              <h2 className="h-[60px] text-2xl font-semibold flex items-center justify-center flex-shrink-0">
                출석
              </h2>
              <div className="flex flex-col flex-1 w-full px-4 overflow-y-scroll mb-[20px] gap-5">
                {filteredData.map((item, itemIndex) => (
                  <React.Fragment key={itemIndex}>
                    {item.students.map((student, studentIndex) => {
                      const nameMatch = searchName === "" || student.name.includes(searchName);
                      return (
                        student.attendance === "출석" &&
                        nameMatch && (
                          <div
                            key={studentIndex}
                            className="flex justify-center py-2 rounded bg-blue-50"
                          >
                            {student.name}
                          </div>
                        )
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="w-[32%] h-full bg-white rounded-xl flex flex-col">
              <h2 className="h-[60px] text-2xl font-semibold flex items-center justify-center flex-shrink-0">
                미출석
              </h2>
              <div className="flex flex-col flex-1 w-full px-4 overflow-y-scroll mb-[20px] gap-5">
                {filteredData.map((item, itemIndex) => (
                  <React.Fragment key={itemIndex}>
                    {item.students.map((student, studentIndex) => {
                      const nameMatch = searchName === "" || student.name.includes(searchName);
                      return (
                        student.attendance === "미출석" &&
                        nameMatch && (
                          <div
                            key={studentIndex}
                            className="flex justify-center py-2 rounded bg-blue-50"
                          >
                            {student.name}
                          </div>
                        )
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="w-[32%] h-full bg-white rounded-xl flex justify-center items-center">
              <div className="w-[80%] h-[80%] rounded-xl flex flex-col justify-between">
                <div className="w-full bg-gray-100 h-[30%] rounded-xl text-2xl font-semibold flex flex-col justify-center items-center">
                  <span>출석</span>
                  <span className="text-green-600">{filteredTotalAttendance}명</span>
                </div>
                <div className="w-full bg-gray-100 h-[30%] rounded-xl text-2xl font-semibold flex flex-col justify-center items-center">
                  <span>미출석</span>
                  <span className="text-orange-600">{filteredTotalNotAttendance}명</span>
                </div>
                <div className="w-full bg-gray-100 h-[30%] rounded-xl text-2xl font-semibold flex flex-col justify-center items-center">
                  <span>출석률</span>
                  <span
                    className={`${filteredAttendanceRate <= 60 ? "text-orange-600" : filteredAttendanceRate <= 80 ? "text-yellow-300" : "text-green-600"}`}
                  >
                    {filteredAttendanceRate.toFixed(2)}%
                  </span>
                </div>
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
    class: "중등 영어 A",
    description: "중학교 1~2학년 대상, 기본 문법 및 독해 집중",
    subject: "영어",
    students: [
      {
        name: "김민지",
        attendance: "출석",
      },
      {
        name: "이준호",
        attendance: "미출석",
      },
      {
        name: "박서연",
        attendance: "출석",
      },
      {
        name: "최우진",
        attendance: "출석",
      },
      {
        name: "정하은",
        attendance: "미출석",
      },
      {
        name: "강도윤",
        attendance: "출석",
      },
    ],
  },
  {
    class: "고등 수학 심화",
    description: "고등학교 2학년 상위권 대상, 미적분 및 기하 집중",
    subject: "수학",
    students: [
      {
        name: "윤지수",
        attendance: "출석",
      },
      {
        name: "한재민",
        attendance: "출석",
      },
      {
        name: "송예나",
        attendance: "미출석",
      },
      {
        name: "오세현",
        attendance: "출석",
      },
    ],
  },
  {
    class: "초등 코딩 입문",
    description: "초등학교 4~6학년 대상, 블록 코딩 기초 및 알고리즘 소개",
    subject: "코딩/IT",
    students: [
      {
        name: "배소미",
        attendance: "출석",
      },
      {
        name: "임채율",
        attendance: "출석",
      },
      {
        name: "조하준",
        attendance: "미출석",
      },
      {
        name: "고다인",
        attendance: "출석",
      },
      {
        name: "신지환",
        attendance: "출석",
      },
      {
        name: "서아윤",
        attendance: "출석",
      },
    ],
  },
  {
    class: "토플 대비반",
    description: "대학생 및 일반인 대상, iBT 토플 전 영역 집중 훈련",
    subject: "영어",
    students: [
      {
        name: "문성훈",
        attendance: "출석",
      },
      {
        name: "구혜림",
        attendance: "출석",
      },
    ],
  },
  {
    class: "국어 논술 고급",
    description: "고등학교 3학년 대상, 심층 독해 및 비판적 글쓰기 연습",
    subject: "국어",
    students: [
      {
        name: "유승호",
        attendance: "출석",
      },
      {
        name: "장예원",
        attendance: "미출석",
      },
      {
        name: "차은결",
        attendance: "출석",
      },
      {
        name: "하윤서",
        attendance: "출석",
      },
      {
        name: "권혁준",
        attendance: "출석",
      },
    ],
  },
  {
    class: "국어 논술 고급",
    description: "고등학교 3학년 대상, 심층 독해 및 비판적 글쓰기 연습",
    subject: "국어",
    students: [
      {
        name: "유승호",
        attendance: "출석",
      },
      {
        name: "장예원",
        attendance: "미출석",
      },
      {
        name: "차은결",
        attendance: "출석",
      },
      {
        name: "하윤서",
        attendance: "출석",
      },
      {
        name: "권혁준",
        attendance: "출석",
      },
    ],
  },
];
