import { useState } from "react";
import type { ISignupStep1, ISignupStep2 } from "@/types/signup";

export function useSignup() {
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState<ISignupStep1 | null>(null);
  const [codeSent, setCodeSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = async (academyCode: string, name: string) => {
    if (!academyCode || !name) {
      alert("학원코드와 이름을 입력해주세요.");
      return;
    }

    setIsLoading(true);
    try {
      // await axios.post(`/member/signup-code?academyCode=${academyCode}&name=${name}`);
      console.log("인증코드 발송:", { academyCode, name });
      setCodeSent(true);
      alert("인증코드가 학원 메일로 발송되었습니다.");
    } catch (error) {
      console.error("인증코드 발송 실패:", error);
      alert("인증코드 발송에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStep1Submit = (data: ISignupStep1) => {
    if (!codeSent) {
      alert("인증코드를 먼저 발송받아주세요.");
      return;
    }

    setStep1Data(data);
    setStep(2);
  };

  const handleStep2Submit = async (data: ISignupStep2) => {
    if (data.password !== data.checkPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!step1Data) {
      alert("잘못된 접근입니다.");
      return;
    }

    setIsLoading(true);
    try {
      const signupData = {
        ...step1Data,
        ...data,
        role: "TEACHER",
      };

      // await axios.post('/member/signup', signupData);
      console.log("회원가입 데이터:", signupData);
      alert("회원가입이 완료되었습니다!");
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return {
    step,
    codeSent,
    isLoading,
    handleSendCode,
    handleStep1Submit,
    handleStep2Submit,
    handleBack,
  };
}