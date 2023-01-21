export interface ISignup {
  graduationYear: number;
  name: string;
  nickname: string;
  category: string;
  job: string;
  parentRegion: string;
  childRegion: string;
  schoolCode: string;
  introduction?: string;
}

export interface ISignin {
  accessToken: string;
  isFirst: boolean;
  refreshToken: string;
}
