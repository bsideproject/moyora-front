export type TStickerType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export const blurDataURL =
  'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';

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

export const MBTIOptions = [
  { label: 'MBTI 선택', value: null },
  { label: 'ISTJ', value: 'ISTJ' },
  { label: 'ISTP', value: 'ISTP' },
  { label: 'ISFJ', value: 'ISFJ' },
  { label: 'ISFP', value: 'ISFP' },
  { label: 'INTJ', value: 'INTJ' },
  { label: 'INTP', value: 'INTP' },
  { label: 'INFP', value: 'INFP' },
  { label: 'INFJ', value: 'INFJ' },
  { label: 'ESTJ', value: 'ESTJ' },
  { label: 'ESTP', value: 'ESTP' },
  { label: 'ESFJ', value: 'ESFJ' },
  { label: 'ESFP', value: 'ESFP' },
  { label: 'ENFP', value: 'ENFP' },
  { label: 'ENTJ', value: 'ENTJ' },
  { label: 'ENTP', value: 'ENTP' },
  { label: 'ENFJ', value: 'ENFJ' },
];

export const snsOptions = [
  { label: 'SNS 선택', value: '' },
  { label: '인스타그램', value: 'instagram' },
  { label: '유튜브', value: 'youtube' },
  { label: '페이스북', value: 'facebook' },
];

export const urlRegex =
  /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
