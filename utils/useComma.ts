const useComma = (x: number): number | string => {
  if (x) {
    const stringPrice = x.toString();
    return stringPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return 0;
};

export default useComma;
