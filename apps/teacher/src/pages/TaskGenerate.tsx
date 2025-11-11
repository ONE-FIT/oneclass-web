import { useState } from "react";
import DeleteIcon from "@/assets/assignment/delete-icon.svg";
import AddIcon from "@/assets/assignment/add.svg";
import PageHeader from "@/components/Common/PageHeader";

export default function TaskGenerate() {
  const subjects:string[] = ['영어', '과학', '수학', '국어', '사회', '코딩'];
  const [selectedSub, setSelectedSub] = useState<string | null>(null);

  const classes:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selectedClass, setSelectedClass] = useState<number|null>(null);

  const students: string[] = ["김일강", "김이강", "김삼강", "김사강", "김오강", "김육강", "김칠강", "김팔강", "김구강", "김십강", "김십일강", "김십이강", "김십삼강", "김십사강", "김십오강", "김십육강", "김십칠강", "김십팔강", "김십구강", "김이십강"];
  const [selectedStu, setSelectedStu] = useState<string[]>([]);

  const [previews, setPreviews] = useState<string[]>([]);
  const handleImgPreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files: File[] = Array.from(e.target.files);
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviews(prev => [...prev, ...newPreviews]);
  };

  const [mode, setMode] = useState<string>("글");

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const deletePreview = (idx: number) => {
    setPreviews(prev => prev.filter((_, i) => i !== idx));
  };  

  const [startDate, setStartDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");

  const [endDate, setEndDate] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  return (
    <div className="bg-[hsla(211,100%,89%,1)] w-full h-screen">
      <PageHeader title="과제 생성"/>
      <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center flex-col">
        <div className="bg-[hsla(0,0%,100%,1)] w-[95%] h-[90%] rounded-3xl border border-[hsla(0,0%,80%,1)] flex flex-col">
          <div className="flex flex-1 overflow-hidden">
            <div className="w-[25%] border-r border-[hsla(0,0%,80%,1)] text-center mt-[30px] flex flex-col">
              <span className="text-2xl font-semibold">과목 선택</span>
              <div className="flex-1 overflow-y-scroll mt-[10px] flex flex-col items-center">
                {subjects.map(subject => (
                  <div className={`text-2xl font-semibold h-[50px] w-[90%] p-[10px] flex items-center justify-center rounded-[10px] mb-[10px] cursor-pointer ${selectedSub === subject ? "bg-[hsla(210,86%,92%,1)]" : "bg-transparent"}`} 
                    key={subject}
                    onClick={() => setSelectedSub(prev => prev === subject ? null : subject)}>
                      <div>{subject}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[25%] border-r border-[hsla(0,0%,80%,1)] text-center mt-[30px] flex flex-col">
              <span className="text-2xl font-semibold">반 선택</span>
              <div className="flex-1 overflow-y-scroll mt-[10px] flex flex-col items-center">
                {classes.map(num => (
                  <div className={`text-2xl font-semibold h-[50px] w-[90%] p-[10px] flex items-center justify-center rounded-[10px] mb-[10px] cursor-pointer ${selectedClass === num ? "bg-[hsla(210,86%,92%,1)]" : "bg-transparent"}`} 
                    key={num}
                    onClick={() => setSelectedClass(prev => prev === num ? null : num)}>
                      <div>{num}반</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[25%] border-r border-[hsla(0,0%,80%,1)] text-center mt-[30px] flex flex-col">
              <span className="text-2xl font-semibold">학생 선택</span>
              <div className="flex-1 overflow-y-scroll mt-[10px] flex flex-col items-center">
                {students.map(student => (
                  <div className={`text-2xl font-semibold h-[50px] w-[90%] p-[10px] flex items-center justify-center rounded-[10px] mb-[10px] cursor-pointer ${
                    selectedStu.includes(student) ? "bg-[hsla(210,86%,92%,1)]" : "bg-transparent"
                  }`}
                    key={student}
                    onClick={() => {
                      setSelectedStu(prev =>
                        prev.includes(student)
                          ? prev.filter(s => s !== student) 
                          : [...prev, student]          
                      );
                    }}>
                      <div>{student}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[25%] border-r border-[hsla(0,0%,80%,1)] text-center mt-[30px] flex flex-col">
              <span className="text-2xl font-semibold">시간 선택</span>
              <div className="flex-1 overflow-y-scroll mt-[10px] flex flex-col items-center">
                <form className="flex flex-col items-start w-[90%] font-semibold">
                  <label className="text-sm">과제 시작일</label>
                  <input type="date" className="w-full border border-[hsla(0,0%,80%,1)] mt-[5px] pl-[10px] pr-[10px]" onChange={(e) => setStartDate(e.target.value)}/>
                  <input type="time" className="w-full border border-[hsla(0,0%,80%,1)] mt-[10px] pl-[10px] pr-[10px]" onChange={(e) => setStartTime(e.target.value)}/>
                </form>
                <form className="flex flex-col items-start w-[90%] font-semibold mt-[20px]">
                  <label className="text-sm">과제 마감일</label>
                  <input type="date" className="w-full border border-[hsla(0,0%,80%,1)] mt-[5px] pl-[10px] pr-[10px]" onChange={(e) => setEndDate(e.target.value)}/>
                  <input type="time" className="w-full border border-[hsla(0,0%,80%,1)] mt-[10px] pl-[10px] pr-[10px]" onChange={(e) => setEndTime(e.target.value)}/>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-[20px] text-2xl font-semibold ml-[40px] mb-[10px] mt-[20px]">
              <h3 onClick={() => setMode("글")} className={`${mode === "글" ? "border-b-3 border-blue-600" : ""} cursor-pointer`}>글</h3>
              <h3 onClick={() => setMode("사진")} className={`${mode === "사진" ? "border-b-3 border-blue-600" : ""} cursor-pointer`}>사진</h3>
            </div>
            <div className="h-[250px] flex mb-[20px] mx-[20px]">
              {mode === '사진' ?
              <div className="border border-dashed border-[hsla(0,0%,80%,1)] flex-1 rounded relative pl-[20px] pr-[20px] flex flex-col">
                { previews.length > 0 ?
                  <label htmlFor="fileUpload" className="absolute bottom-[10px] right-[10px] w-[40px] h-[40px] cursor-pointer z-10">
                    <AddIcon className="w-full h-full fill-[hsla(210,87%,74%,1)]" />
                  </label>
                  : <></>
                }
                <input className="hidden" type="file" id="fileUpload" onChange={handleImgPreview} multiple/>
                <div className={`flex-1 flex items-center overflow-x-scroll gap-[10px] pt-[10px] pb-[10px] ${previews.length > 0 ? "justify-start" : "justify-center"}`}>
                  {previews.length > 0 ? (
                    previews.map((src, idx) => (
                      <div key={idx} className="h-[80%] flex-shrink-0 min-w-[80px] relative">
                        <img src={src} className="object-contain w-auto h-full" />
                        <DeleteIcon className="absolute right-[-8px] top-[-5px] w-[20px] h-[20px] bg-white cursor-pointer" onClick={() => deletePreview(idx)}/>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center w-full">
                      <h1 className="text-[hsla(0,0%,80%,1)] text-3xl font-bold">이미지를 삽입하세요</h1>
                      <label className="mt-[20px] w-[170px] h-[50px] bg-[hsla(0,0%,80%,1)] text-white flex justify-center items-center rounded-xl text-2xl font-semibold cursor-pointer" htmlFor="fileUpload">
                        첨부하기
                      </label>
                    </div>
                  )}
                </div>
              </div>
              : <div className="border border-[hsla(0,0%,80%,1)] flex-1 rounded relative pl-[20px] pr-[20px] flex flex-col">
                  <input type="text" placeholder="제목을 입력하세요." className="text-2xl mt-[15px] mb-[5px] w-full focus:outline-none" defaultValue={title} onChange={(e) => setTitle(e.target.value)}/>
                  <hr />
                  <textarea placeholder="내용을 입력하세요." className="w-full flex-1 mt-[10px] resize-none focus:outline-none" defaultValue={content} onChange={(e) => setContent(e.target.value)}/>
              </div>}
              <div className="flex flex-col w-[280px] items-center ml-[20px]">
                <div className="flex flex-1 w-full">
                  <div className="border-r border-[hsla(0,0%,80%,1)] flex-1 h-full flex flex-col justify-center font-semibold">
                    <h4>과목 : {selectedSub}</h4>
                    <h4>반 : {selectedClass? selectedClass : "-"}반</h4>
                    <h4>학생 : <br /> {selectedStu.length > 1 ? `${selectedStu[0]} 외 ${selectedStu.length-1}명` : `${selectedStu}`}</h4>
                  </div>
                  <div className="flex items-center justify-center flex-1 h-full">
                    <h4 className="text-sm font-semibold text-center">{startDate.split("-").join(".")}<br/>{startTime}<br/>~<br/>{endDate.split("-").join(".")}<br/>{endTime}</h4>
                  </div>
                </div>
                <button className="border border-blue-600 rounded-2xl mt-[10px] w-[80%] h-[50px] bg-blue-600 text-white cursor-pointer hover:bg-blue-700">과제 생성</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}