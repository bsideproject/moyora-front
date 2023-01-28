export interface INotes {
  content: string;
  friendId: number;
  isPublic: boolean;
  nickname: string;
  noteId: number;
  sticker: string;
  username: string;
}

export interface INote {
  content: string;
  isPublic: boolean;
  sticker: string;
  userId: number;
}

export interface IEditNote {
  content: string;
  noteId: number;
}
