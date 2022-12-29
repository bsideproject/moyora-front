const fillZero = (number: number) => {
  return Math.floor(number).toString().padStart(2, '0');
};

export default fillZero;
