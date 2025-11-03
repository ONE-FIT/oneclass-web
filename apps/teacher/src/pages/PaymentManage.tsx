import PageHeader from "@/components/Common/PageHeader";
import { useState } from "react";
import StatCard from "@/components/Dashboard/StatCard";
import {
  mockPaymentData,
} from "@/constants/dashboard.constants";
import PieChart, { type PieDatum } from "@/components/PieCharts";

export default function PaymentManage() {
  const [sendAlert, setSendAlert] = useState<boolean>(true) //납부 알림 수동 -> false, 자동 -> true
  const paymentItems = [
      { label: "납부", value: mockPaymentData.paid },
      { label: "미납부", value: mockPaymentData.unpaid },
      { label: "총납 금액", value: mockPaymentData.totalAmount },
    ];
  const sample: PieDatum[] = [
    { name: '납부', value: mockPaymentData.paid },
    { name: '미납부', value: mockPaymentData.unpaid },
    ]
  return (
    <div className="bg-[hsla(211,100%,89%,1)] w-full h-screen">
      <PageHeader title="납부 현황"/>
      <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center flex-col">
        <div className="bg-[hsla(0,0%,100%,1)] w-[95%] h-[90%] rounded-3xl border border-[hsla(0,0%,80%,1)] flex flex-col justify-center">
          <div className="flex items-center justify-evenly ">
            <div className="w-[300px] h-[350px]">
              <PieChart data={sample} height={350} />
            </div>
            <div className="border rounded-xl border-[#CDCDCD]">
            <StatCard
              title="납부 현황"
              subtitle={`필요 납부 수 : ${mockPaymentData.totalStudents}`}
              items={paymentItems}
              unit="명"
              rateInfo={{
                label: "납부율",
                value: mockPaymentData.paymentRate,
                type: "success",
              }}
            />
            </div>
          </div>
          <div className="w-[80%] h-[40%] border border-[hsla(0,0%,80%,1)] self-center rounded-2xl flex flex-col">
            <div className="w-full h-[30%] flex items-center justify-between pr-[20px] pl-[20px]">
              <h3 className="text-2xl font-semibold">미납부생</h3>
              <div className="flex items-center gap-2">
                <span>납부 알림</span>
                <div
                  onClick={() => setSendAlert(!sendAlert)}
                  className={`
                    w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300
                    ${sendAlert ? "bg-blue-300" : "bg-blue-100"}
                  `}
                >
                <div
                  className={`
                    bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
                    ${sendAlert ? "translate-x-6" : "translate-x-0"}
                  `}
                />
              </div>
                <span>{sendAlert === true ? '자동' : '수동'}</span>
              </div>
            </div>
            <div className="w-[95%] h-[60%] self-center overflow-y-scroll">
              <div className="flex items-center justify-evenly mb-[10px]">
                <div className="w-[85%] h-[50px] bg-gray-100 rounded-lg flex items-center pl-[20px] text-xl font-semibol">김일강 학생</div>
                <button className="w-[10%] h-[50px] bg-red-400 rounded-lg text-white cursor-pointer hover:bg-red-500">알림 발송</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
