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
  jobCategory: string;
  job: string;
  mbti?: string;
  name: string;
  username?: string;
  nickname: string;
  profile?: string;
  residence: string;
  schoolId?: number;
  schoolName: string;
  youtube?: string;
}

export interface IUsers {
  id: number;
  nickname: string;
  profile?: string;
  schoolName: string;
  username: string;
}

export interface IEditName {
  name?: string;
  nickname?: string;
}

export interface IEditProfile {
  birthDate?: string;
  facebook?: string;
  instagram?: string;
  isPublic?: boolean;
  job?: string;
  mbti?: string;
  youtube?: string;
  regionId?: number;
}

export interface IEditSchool {
  graduationYear?: number;
  schoolCode?: string;
}
