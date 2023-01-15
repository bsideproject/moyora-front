export interface IUser {
  id: number;
  name: string;
}

export interface ISignin {
  accessToken: string;
  isFirst: boolean;
  refreshToken: string;
}
