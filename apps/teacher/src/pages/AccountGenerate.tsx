import { useForm } from "react-hook-form";
import PageHeader from "@/components/Common/PageHeader";

interface AccountFormData {
  name: string;
  phone: string;
}

export default function AccountGenerate() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AccountFormData>();

  const onSubmit = (data: AccountFormData) => {
    console.log("학생 계정 생성:", data);
    alert("학생 계정이 생성되었습니다!");
    reset();
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <PageHeader title="계정 생성" />

      <div className="bg-blue-200 p-6 flex-1 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-12 w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">학생 계정 생성</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2">
                이름
              </label>
              <input
                {...register("name", {
                  required: "이름을 입력해주세요",
                  minLength: {
                    value: 2,
                    message: "이름은 2글자 이상이어야 합니다",
                  },
                })}
                id="name"
                type="text"
                placeholder="학생 이름을 입력하세요"
                className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg font-semibold mb-2">
                전화번호
              </label>
              <input
                {...register("phone", {
                  required: "전화번호를 입력해주세요",
                  pattern: {
                    value: /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/,
                    message: "올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)",
                  },
                })}
                id="phone"
                type="tel"
                placeholder="010-1234-5678"
                className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#6BB5FF] hover:bg-[#5AA3E8] text-white font-semibold py-4 rounded-2xl transition-colors duration-200 mt-8 hover:cursor-pointer"
            >
              계정 생성
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
