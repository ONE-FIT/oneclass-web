import OneClassAppImg from "@/assets/oneclass-app.png?url";
import OneclassLogo from "@/assets/one-class-logo.svg?url";
import { SignupStep1 } from "@/components/signup/SignupStep1";
import { SignupStep2 } from "@/components/signup/SignupStep2";
import { useSignup } from "@/hooks/useSignup";

function SignUp() {
  const {
    step,
    codeSent,
    isLoading,
    handleSendCode,
    handleStep1Submit,
    handleStep2Submit,
    handleBack,
  } = useSignup();

  return (
    <div className="grid h-screen grid-cols-7">
      <div className="flex flex-col gap-20 bg-white col-span-3 p-24 justify-center mb-20">
        <div className="flex flex-col gap-6">
          <div className="flex gap-2 items-end">
            <img className="w-12" src={OneclassLogo} alt="Oneclass Logo" />
            <p className="text-2xl font-normal">OneClass</p>
          </div>
          <h2 className="text-5xl font-bold">회원가입</h2>
        </div>

        {step === 1 ? (
          <SignupStep1
            onSubmit={handleStep1Submit}
            codeSent={codeSent}
            onSendCode={handleSendCode}
            isLoading={isLoading}
          />
        ) : (
          <SignupStep2
            onSubmit={handleStep2Submit}
            onBack={handleBack}
            isLoading={isLoading}
          />
        )}
      </div>

      <div className="bg-[#D8EAFC] col-span-4 h-screen">
        <div className="flex flex-col gap-8 px-24 justify-center">
          <h1 className="text-7xl font-bold mt-38">학원관리</h1>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">
              OneClass는 학생과 학원을 이어주는 <br />
              온라인 학원 관리 플랫폼입니다
            </h3>
            <button className="border-2 w-36 py-2 rounded hover:cursor-pointer">문의하기</button>
          </div>
        </div>
        <img
          className="w-[35rem] relative z-[100] left-[15rem] top-0"
          src={OneClassAppImg}
          alt="oneclass app img"
        />
      </div>
    </div>
  );
}

export default SignUp;