export type TStickerType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export interface IGuestBookList {
  id: string;
  sticker: TStickerType;
  date?: string;
  text: string;
}

export const blurDataURL =
  'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';

export const guestBookTempList: IGuestBookList[] = [
  {
    id: '0',
    sticker: '1',
    date: '20220101',
    text: '안녕 누구야! 잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아',
  },
  {
    id: '1',
    sticker: '6',
    date: '20220111',
    text: '잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아 안녕 누구야',
  },
  { id: '2', sticker: '4', date: '20220222', text: '잘 지내지? 나 누구야~ 잘있니? 난 잘있단다' },
  {
    id: '3',
    sticker: '8',
    date: '20220303',
    text: '안녕 누구야! 잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아 안녕 누구야! 잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아 안녕 누구야! 잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아 200자임',
  },
  {
    id: '4',
    sticker: '9',
    date: '20220404',
    text: `줄바꿈! 잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아 
    
    
    가
    
    나
    
    다
    
    
    라
    
    마
    
    
    안녕 누구야
    `,
  },
  { id: '5', sticker: '12', date: '20220505', text: '잘 지내지? 나 누구야~ 잘있니? 난 잘있단다' },
  {
    id: '6',
    sticker: '10',
    date: '20220606',
    text: '안녕 누구야! 잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아',
  },
  {
    id: '7',
    sticker: '9',
    date: '20220101',
    text: '안녕 누구야! 잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아',
  },
  {
    id: '8',
    sticker: '5',
    date: '20220111',
    text: '잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아 안녕 누구야',
  },
  { id: '9', sticker: '1', date: '20220222', text: '잘 지내지? 나 누구야~ 잘있니? 난 잘있단다' },
  {
    id: '10',
    sticker: '7',
    date: '20220303',
    text: '안녕 누구야! 잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아',
  },
  {
    id: '11',
    sticker: '3',
    date: '20220404',
    text: '잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아 안녕 누구야',
  },
  { id: '12', sticker: '4', date: '20220505', text: '잘 지내지? 나 누구야~ 잘있니? 난 잘있단다' },
  {
    id: '13',
    sticker: '10',
    date: '20220606',
    text: '안녕 누구야! 잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아',
  },
  {
    id: '14',
    sticker: '1',
    date: '20220606',
    text: '안녕 누구야! 잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아',
  },
];

export interface IFriendsList {
  id: string;
  name: string;
  nickname: string;
  school: string;
}

export const friendsTempList: IFriendsList[] = [
  { id: '0', name: '홍길동', nickname: '홍홍홍', school: 'OO초등학교' },
  { id: '1', name: '김민준', nickname: '길길길', school: 'OO초등학교' },
  { id: '2', name: '이서준', nickname: '동동동', school: 'OO초등학교' },
  { id: '3', name: '박도윤', nickname: '도유니', school: 'OO초등학교' },
  { id: '4', name: '나예준', nickname: '나예', school: 'OO초등학교' },
  { id: '5', name: '도시우', nickname: '도시', school: 'OO초등학교' },
  { id: '6', name: '박하준', nickname: '별명없음', school: 'OO초등학교' },
  { id: '7', name: '제갈주원', nickname: '줜', school: 'OO초등학교' },
  { id: '8', name: '박주현', nickname: '박주', school: 'OO초등학교' },
  { id: '9', name: '이지호', nickname: '이지', school: 'OO초등학교' },
  { id: '10', name: '김지후', nickname: '김지', school: 'OO초등학교' },
];
