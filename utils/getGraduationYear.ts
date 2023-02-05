import dayjs from 'dayjs';

const getGraduationYear = () => {
  const thisYear = dayjs().year();
  return [...Array(thisYear - 1900)].map((_v, i) => {
    if (i === 0)
      return {
        label: '연 선택',
        value: '',
      };
    return {
      label: thisYear - i,
      value: thisYear - i,
    };
  });
};

export const getMonth = () =>
  new Array(13).fill(null).map((_v, i) => {
    if (i === 0) return { label: '월 선택', value: '' };
    return {
      label: i,
      value: i,
    };
  });

export const getDay = () =>
  new Array(32).fill(null).map((_v, i) => {
    if (i === 0) return { label: '일 선택', value: '' };
    return {
      label: i + 1,
      value: i + 1,
    };
  });

export default getGraduationYear;
