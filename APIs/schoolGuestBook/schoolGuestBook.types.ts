export interface ISchoolGuestBooks {
  accountId: number;
  content: string;
  createdDate: string;
  modifiedDate: string;
  schoolGuestBookId: number;
  schoolId: number;
  sticker: string;
}

export interface ISchoolGuestBook {
  content: string;
  schoolId: number;
  sticker: string;
}

export interface IEditSchoolGuestBook {
  content: string;
  schoolGuestBookId: number;
  sticker: string;
}
