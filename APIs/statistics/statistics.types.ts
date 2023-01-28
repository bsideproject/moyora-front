export interface ICounts {
  schoolCount: number;
  schoolGuestBookKeyCount: number;
  userCount: number;
}

export interface IChart {
  chart: number[];
  data: {
    title: 'string';
    value: 0;
  }[];
}
