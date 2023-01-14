export type TStickerType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export interface IGuestBookList {
  id: string;
  sticker: TStickerType;
  date?: string;
  text: string;
  lock?: boolean;
}

export const blurDataURL =
  'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';

export const guestBookTempList: IGuestBookList[] = [
  {
    id: '0',
    sticker: '1',
    date: '20220101',
    text: '안녕 누구야! 잘 지내지? 나 누구야~ 기억하니! 여기서 보니 너무 반갑다! 너무 너무 반가워 우리 그때 재밌었잖아',
    lock: true,
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
    lock: true,
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

export const dummyChartData = {
  datasets: [
    {
      data: [19, 12, 5, 3, 2],
      backgroundColor: ['#FF6D3A', '#4181F0', '#F4B95C', '#71BA9D', '#B8C6FB'],
      borderWidth: 1,
    },
  ],
};

export const barOptions = {
  responsive: false,
  indexAxis: 'y' as const,
  plugins: {
    legend: {
      position: 'right' as const,
    },
  },
  scales: {
    x: { stacked: true, display: false },
    y: { stacked: true, display: false },
  },
};

export const dummyBarChartData = {
  labels: [''],
  datasets: [
    {
      data: [40],
      backgroundColor: '#FF6D3A',
      borderRadius: 50,
    },
    {
      data: [22],
      backgroundColor: '#4181F0',
    },
    {
      data: [18],
      backgroundColor: '#F4B95C',
    },
    {
      data: [15],
      backgroundColor: '#71BA9D',
    },
    {
      data: [5],
      backgroundColor: '#B8C6FB',
      borderRadius: 50,
    },
  ],
};

export const dummyJobsData = [
  { title: '마케팅/광고/홍보', value: 50 },
  { title: '디자인', value: 38 },
  { title: '교육', value: 20 },
  { title: '무역 유통', value: 18 },
  { title: '무역 유통', value: 18 },
  { title: '무역 유통', value: 18 },
  { title: '무역 유통', value: 18 },
  { title: '무역 유통', value: 18 },
  { title: '무역 유통', value: 18 },
];

export const dummyLocationsData = [
  { title: '서울시 동대문구', value: 50 },
  { title: '성남시 분당구', value: 38 },
  { title: '대전광역시 동구', value: 20 },
  { title: '수원시 장안구', value: 18 },
  { title: '수원시 장안구', value: 18 },
  { title: '수원시 장안구', value: 18 },
  { title: '수원시 장안구', value: 18 },
  { title: '수원시 장안구', value: 18 },
  { title: '수원시 장안구', value: 18 },
  { title: '수원시 장안구', value: 18 },
];

export const dummyMBTIsData = [
  { title: 'ISTJ', value: 50 },
  { title: 'ENTP', value: 38 },
  { title: 'ESFP', value: 20 },
  { title: 'INFP', value: 18 },
  { title: 'INFP', value: 18 },
  { title: 'INFP', value: 18 },
  { title: 'INFP', value: 18 },
  { title: 'INFP', value: 18 },
  { title: 'INFP', value: 18 },
  { title: 'INFP', value: 18 },
  { title: 'INFP', value: 18 },
];

export const info = {
  name: '홍길동',
  profile: 'beta',
  nickname: '별명',
  school: '모여라',
  graduation: '77',
  jobCategory: '전문/특수직',
  jobCategory2: '사회복지 · 요양보호 · 자원봉사',
  region: '서울시 성동구',
  mbti: 'ISTJ',
  sns: {
    facebook: '주소',
    instagram: '주소',
    youtube: '주소',
  },
  birthDay: '96.02.29',
};

export const info2 = {
  name: '홍길순',
  profile: '',
  nickname: '별명',
  school: '모여라',
  graduation: '77',
  jobCategory: '',
  jobCategory2: '',
  region: '',
  mbti: '',
  sns: {
    facebook: '',
    instagram: '',
    youtube: '',
  },
  birthDay: '',
};

export const dummyMBTIOptions = [
  { label: 'ISTJ', value: 'ISTJ' },
  { label: 'ENTP', value: 'ENTP' },
  { label: 'ESFP', value: 'ESFP' },
  { label: 'INFP', value: 'INFP' },
  { label: 'INFP', value: 'INFP' },
  { label: 'INFP', value: 'INFP' },
  { label: 'INFP', value: 'INFP' },
  { label: 'INFP', value: 'INFP' },
  { label: 'INFP', value: 'INFP' },
  { label: 'INFP', value: 'INFP' },
  { label: 'INFP', value: 'INFP' },
];

export const dummySNSOptions = [
  { label: 'SNS 선택', value: '' },
  { label: '인스타그램', value: 'instagram' },
  { label: '유튜브', value: 'youtube' },
  { label: '페이스북', value: 'facebook' },
];
