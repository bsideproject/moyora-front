import dayjs from 'dayjs';

const getGraduationYear = () => {
  const thisYear = dayjs().year();
  return [...Array(thisYear - 1899)].map((_v, i) => ({
    label: thisYear - i,
    value: thisYear - i,
  }));
};

export const getMonth = () =>
  new Array(12).fill(null).map((_v, i) => ({
    label: i + 1,
    value: i + 1,
  }));

export const getDay = () =>
  new Array(31).fill(null).map((_v, i) => ({
    label: i + 1,
    value: i + 1,
  }));

export default getGraduationYear;
