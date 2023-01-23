export interface ISignup {
  graduationYear: number;
  name: string;
  nickname: string;
  job: string;
  regionId: number;
  schoolCode: string;
  schoolComment: string;
}

export interface ISignin {
  accessToken: string;
  isFirst: boolean;
  refreshToken: string;
}
