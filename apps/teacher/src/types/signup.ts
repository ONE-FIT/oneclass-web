export interface ISignupStep1 {
  academyCode: string;
  name: string;
  email: string;
  verificationCode: string;
}

export interface ISignupStep2 {
  username: string;
  phone: string;
  password: string;
  checkPassword: string;
}

export type ISignup = ISignupStep1 & ISignupStep2;