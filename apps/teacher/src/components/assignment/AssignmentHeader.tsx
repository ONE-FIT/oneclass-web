import {format} from "date-fns";
import {ko} from "date-fns/locale";

type propsType = {
    title: string;
    teacher: string;
    today: Date;
}

export default function AssignmentHeader({title, teacher, today}:propsType) {
    
    return (
        <div className="bg-[hsla(210,87%,74%,1)] w-full h-[100px] flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white ml-[50px]">{title}</h2>
            <div className="flex flex-col items-end font-semibold text-white mr-[50px]">
                <span className="text-1xl">환영합니다 {teacher} 원장님</span>
                <span className="text-2xl">{format(today, "yyyy년 MM월 dd일", {locale:ko})}</span>
            </div>
        </div>
    )
}