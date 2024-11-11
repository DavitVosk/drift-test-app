export const shortenText = (text: string, rightChars = 4, leftChars = 4) => {
  return text.replace(
    new RegExp(`^(.{${rightChars}}).*(.{${leftChars}})$`),
    `$1...$2`,
  );
};

export const formatCurrency = (
  amount: number,
  currency: string = '$',
): string => {
  return `${currency} ${new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)}`;
};

export const formatNumber = (
  amount: number,
  maxPrecision: number = 10,
): string => {
  return new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: maxPrecision,
  }).format(amount);
};

export const formatNumberWithCommas = (
  num: number,
  maxPrecision: number = 10,
): string => {
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: maxPrecision,
  });
};

export const parseString = (value: string): number => {
  return parseFloat(value.replace(/,/g, ''));
};
