import { useForm } from "react-hook-form";
import type { ISignupStep2 } from "@/types/signup";
import { Link } from "react-router";

interface SignupStep2Props {
  onSubmit: (data: ISignupStep2) => void;
  onBack: () => void;
  isLoading: boolean;
}

export function SignupStep2({ onSubmit, onBack, isLoading }: SignupStep2Props) {
  const { register, handleSubmit } = useForm<ISignupStep2>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        {/* 아이디 */}
        <div>
          <label htmlFor="username" className="hidden">
            아이디
          </label>
          <input
            {...register("username", { required: true })}
            id="username"
            type="text"
            placeholder="아이디"
            className="w-full border border-gray-300 p-3 px-4 rounded"
          />
        </div>

        {/* 전화번호 */}
        <div>
          <label htmlFor="phone" className="hidden">
            전화번호
          </label>
          <input
            {...register("phone", { required: true })}
            id="phone"
            type="tel"
            placeholder="전화번호"
            className="w-full border border-gray-300 p-3 px-4 rounded"
          />
        </div>

        {/* 비밀번호 */}
        <div>
          <label htmlFor="password" className="hidden">
            비밀번호
          </label>
          <input
            {...register("password", { required: true })}
            id="password"
            type="password"
            placeholder="비밀번호"
            className="w-full border border-gray-300 p-3 px-4 rounded"
          />
        </div>

        {/* 비밀번호 확인 */}
        <div>
          <label htmlFor="checkPassword" className="hidden">
            비밀번호 확인
          </label>
          <input
            {...register("checkPassword", { required: true })}
            id="checkPassword"
            type="password"
            placeholder="비밀번호 확인"
            className="w-full border border-gray-300 p-3 px-4 rounded"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#001222] text-white py-4 rounded-4xl w-full hover:cursor-pointer disabled:bg-gray-400"
        >
          {isLoading ? "처리 중..." : "회원가입"}
        </button>

        <button
          type="button"
          onClick={onBack}
          className="bg-gray-200 text-gray-700 py-4 rounded-4xl w-full hover:cursor-pointer"
        >
          이전
        </button>
      </div>

      <div className="text-center">
        <Link to="/signin" className="text-blue-600 hover:underline">
          이미 계정이 있으신가요? 로그인
        </Link>
      </div>
    </form>
  );
}