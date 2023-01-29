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

export interface IUser {
  birthDate?: string;
  facebook?: string;
  instagram?: string;
  isPublic: boolean;
  job: string;
  mbti?: string;
  name: string;
  nickname: string;
  profile?: string;
  residence: string;
  schoolId?: number;
  schoolName: string;
  youtube?: string;
}
