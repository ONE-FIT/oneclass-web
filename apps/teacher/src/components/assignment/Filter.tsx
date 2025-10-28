import FilterIcon from "@/assets/assignment/filter.svg";
import SearchIcon from "@/assets/assignment/search.svg";

type filterProps = {
    filter: filterType;
    setFilter: React.Dispatch<React.SetStateAction<filterType>>;
}

type filterType = {
    sortOrder: string;      
    timeOrder: string;      
    submissionStatus: string;
}

export default function Filter({filter, setFilter}:filterProps) {
    console.log(filter)
    return(
        <div className="flex items-center w-full h-[100px] gap-[6%] font-semibold">
            <div className="ml-[3%]">
              <FilterIcon/>
              <h4 className="text-[hsla(210,34%,40%,1)]">정렬</h4>
            </div>
            <div className="w-[90px]">
                <div>
                    <div className="border w-[15px] h-[15px] rounded-3xl inline-block cursor-pointer" style={filter.sortOrder === "asc" ? {backgroundColor:"hsla(210,86%,92%,1)"} : {}} onClick={() => setFilter(prev => ({ ...prev, sortOrder: "asc"}))}></div>
                    <h4 className="inline-block ml-[5px]">오름차순</h4>
                </div>
                <div>
                    <div className="border w-[15px] h-[15px] rounded-3xl inline-block cursor-pointer" style={filter.sortOrder === "desc" ? {backgroundColor:"hsla(210,86%,92%,1)"} : {}} onClick={() => setFilter(prev => ({ ...prev, sortOrder: "desc"}))}></div>
                    <h4 className="inline-block ml-[5px]">내림차순</h4>
                </div>  
            </div>
            <div className="w-[90px]">
                <div>
                    <div className="border w-[15px] h-[15px] rounded-3xl inline-block cursor-pointer" style={filter.submissionStatus === "submitted" ? {backgroundColor:"hsla(210,86%,92%,1)"} : {}} onClick={() => setFilter(prev => ({ ...prev, submissionStatus: "submitted"}))}></div>
                    <h4 className="inline-block ml-[5px]">제출</h4>
                </div>
                <div>
                    <div className="border w-[15px] h-[15px] rounded-3xl inline-block cursor-pointer" style={filter.submissionStatus === "notSubmitted" ? {backgroundColor:"hsla(210,86%,92%,1)"} : {}} onClick={() => setFilter(prev => ({ ...prev, submissionStatus: "notSubmitted"}))}></div>
                    <h4 className="inline-block ml-[5px]">미제출</h4>
                </div>  
            </div>
            <div className="w-[90px]">
                <div>
                    <div className="border w-[15px] h-[15px] rounded-3xl inline-block cursor-pointer" style={filter.timeOrder === "recent" ? {backgroundColor:"hsla(210,86%,92%,1)"} : {}} onClick={() => setFilter(prev => ({ ...prev, timeOrder: "recent"}))}></div>
                    <h4 className="inline-block ml-[5px]">최근순</h4>
                </div>
                <div>
                    <div className="border w-[15px] h-[15px] rounded-3xl inline-block cursor-pointer" style={filter.timeOrder === "past" ? {backgroundColor:"hsla(210,86%,92%,1)"} : {}} onClick={() => setFilter(prev => ({ ...prev, timeOrder: "past"}))}></div>
                    <h4 className="inline-block ml-[5px]">최고순</h4>
                </div>  
            </div>
            <div className="flex w-[50%] items-center">
                <h3 className="inline-block text-2xl">학생 이름 : </h3>
                <input placeholder="학생 이름을 입력해 주세요." className="border ml-[10px] h-[40px] w-[65%] pl-[10px] rounded border-[hsla(0,0%,80%,1)]"/>
                <SearchIcon className="ml-[10px] w-[30px]"/>
            </div>
        </div>
    )
}