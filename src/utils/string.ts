export const shortenText = (text: string, rightChars = 4, leftChars = 4) => {
  return text.replace(
    new RegExp(`^(.{${rightChars}}).*(.{${leftChars}})$`),
    `$1...$2`,
  );
};

export const formatCurrency = (
  amount: number | string,
  currency: string = '$',
) => {
  return `${currency} ${amount}`;
};
