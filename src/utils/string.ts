export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const numberWithCommas = (x: string) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
