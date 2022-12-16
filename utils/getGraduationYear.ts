import dayjs from 'dayjs';

const getGraduationYear = () => {
  const thisYear = dayjs().year();
  return [...Array(thisYear - 1899)].map((_v, i) => ({
    label: thisYear - i,
    value: thisYear - i,
  }));
};

export default getGraduationYear;
