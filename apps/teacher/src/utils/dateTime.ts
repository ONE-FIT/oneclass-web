// 현재 날짜, 시간을 YYYY-MM-DD, HH:MM 형식으로 반환
export const getCurrentDateTime = () => {
  const now = new Date();
  const date = now.toISOString().split("T")[0];
  const time = now.toTimeString().slice(0, 5);
  return { date, time };
};

// 예약 발송 여부 판단
export const isScheduledTime = (sendDate: string, sendTime: string) => {
  const { date: currentDate, time: currentTime } = getCurrentDateTime();
  return sendDate !== currentDate || sendTime !== currentTime;
};
