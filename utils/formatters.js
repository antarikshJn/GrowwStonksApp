export const roundOffNumber = (number, decimalPlaces = 2) => {
  return isNaN(number) ? number : Number(number).toFixed(decimalPlaces);
};
