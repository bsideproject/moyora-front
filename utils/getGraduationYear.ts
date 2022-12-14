import dayjs from 'dayjs';

const getGraduationYear = () => {
  const thisYear = dayjs().year();
  return [...Array(thisYear - 1900)].map((v, i) => ({
    label: thisYear - i,
    value: thisYear - i,
  }));
};

export default getGraduationYear;
