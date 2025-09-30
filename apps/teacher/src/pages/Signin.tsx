import OneClassAppImg from "@/assets/oneclass-app.png?url";
import OneclassLogo from "@/assets/one-class-logo.svg?url";
import { useForm } from "react-hook-form";

interface ISignin {
  id: string;
  password: string;
  remember: boolean;
}

function Signin() {
  const { register, handleSubmit } = useForm<ISignin>();

  const onSubmit = (data: ISignin) => {};

  return (
    <div className="grid h-screen grid-cols-7">
      <div className="flex flex-col gap-20 bg-white col-span-3 p-24 justify-center mb-20">
        <div className="flex flex-col gap-6">
          <div className="flex gap-2 items-end">
            <img className="w-12" src={OneclassLogo} alt="Oneclass Logo" />
            <p className="text-2xl font-normal">OneClass</p>
          </div>
          <h2 className="text-5xl font-bold">Welcome!</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-20">
          <div className="flex flex-col gap-2">
            <div>
              <label htmlFor="id" className="hidden">
                아이디
              </label>
              <input
                {...register("id", { required: true })}
                id="id"
                type="text"
                placeholder="아이디"
                className="w-full border border-gray-300 p-3 px-4 rounded"
              />
            </div>
            <div>
              <label htmlFor="password" className="hidden">
                비밀번호
              </label>
              <input
                {...register("password", { required: true })}
                id="password"
                type="current-password"
                placeholder="비밀번호"
                className="w-full border border-gray-300 p-3 px-4 rounded"
              />
            </div>
            <div className="flex items-center gap-2 ml-0.5">
              <label htmlFor="remember" className="font-semibold hover:cursor-pointer">
                로그인 유지
              </label>
              <input
                {...register("remember")}
                className="hover:cursor-pointer"
                type="checkbox"
                name="remember"
                id="remember"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#001222] text-white py-4 rounded-4xl w-full hover:cursor-pointer"
          >
            로그인
          </button>
        </form>
      </div>
      <div className="bg-[#D8EAFC] col-span-4 h-screen">
        <div className="flex flex-col gap-8 px-24 justify-center">
          <h1 className="text-7xl font-bold mt-68">학원관리</h1>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">
              OneClass는 학생과 학원을 이어주는 <br />
              온라인 학원 관리 플랫폼입니다
            </h3>
            <button className="border-2 w-36 py-2 rounded hover:cursor-pointer">문의하기</button>
          </div>
        </div>
        <img
          className="w-[35rem] relative z-[100] left-[15rem] top-[5rem]"
          src={OneClassAppImg}
          alt="oneclass app img"
        />
      </div>
    </div>
  );
}

export default Signin;
