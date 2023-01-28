export interface ISchoolGuestBooks {
  accountId: number;
  content: string;
  createdDate: string;
  modifiedDate: string;
  schoolGuestBookId: number;
  schoolId: number;
}

export interface ISchoolGuestBook {
  content: string;
  schoolId: number;
}

export interface IEditSchoolGuestBook {
  content: string;
  schoolGuestBookId: number;
}
