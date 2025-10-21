import { useForm } from "react-hook-form";
import type { ISignupStep1 } from "@/types/signup";
import { Link } from "react-router";

interface SignupStep1Props {
  onSubmit: (data: ISignupStep1) => void;
  codeSent: boolean;
  onSendCode: (academyCode: string, name: string) => void;
  isLoading: boolean;
}

export function SignupStep1({ onSubmit, codeSent, onSendCode, isLoading }: SignupStep1Props) {
  const { register, handleSubmit, watch } = useForm<ISignupStep1>();

  const academyCode = watch("academyCode");
  const name = watch("name");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        {/* 학원코드 */}
        <div>
          <label htmlFor="academyCode" className="hidden">
            학원코드
          </label>
          <input
            {...register("academyCode", { required: true })}
            id="academyCode"
            type="text"
            placeholder="학원코드"
            className="w-full border border-gray-300 p-3 px-4 rounded"
          />
        </div>

        {/* 이름 */}
        <div>
          <label htmlFor="name" className="hidden">
            이름
          </label>
          <input
            {...register("name", { required: true })}
            id="name"
            type="text"
            placeholder="이름"
            className="w-full border border-gray-300 p-3 px-4 rounded"
          />
        </div>

        {/* 이메일 + 인증코드 발송 버튼 */}
        <div className="flex gap-2">
          <div className="flex-1">
            <label htmlFor="email" className="hidden">
              이메일
            </label>
            <input
              {...register("email", { required: true })}
              id="email"
              type="email"
              placeholder="이메일"
              className="w-full border border-gray-300 p-3 px-4 rounded"
            />
          </div>
          <button
            type="button"
            onClick={() => onSendCode(academyCode, name)}
            disabled={isLoading || codeSent}
            className={`px-4 py-3 rounded font-medium whitespace-nowrap ${
              codeSent
                ? "bg-green-500 text-white cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {codeSent ? "✓ 발송완료" : "인증코드 발송"}
          </button>
        </div>

        {/* 인증코드 */}
        <div>
          <label htmlFor="verificationCode" className="hidden">
            인증코드
          </label>
          <input
            {...register("verificationCode", { required: true })}
            id="verificationCode"
            type="text"
            placeholder="인증코드"
            disabled={!codeSent}
            className="w-full border border-gray-300 p-3 px-4 rounded disabled:bg-gray-100"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-[#001222] text-white py-4 rounded-4xl w-full hover:cursor-pointer disabled:bg-gray-400"
      >
        다음
      </button>

      <div className="text-center">
        <Link to="/signin" className="text-blue-600 hover:underline">
          이미 계정이 있으신가요? 로그인
        </Link>
      </div>
    </form>
  );
}