const number = 12.1244;
let formatter = new Intl.NumberFormat("en-In", {
  style: "currency",
  currency: "INR",
});
let formattedNumber = formatter.format(number);
console.log("Formatted number in INR", formattedNumber);

formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

formattedNumber = formatter.format(number);
console.log("Formatted number in USD", formattedNumber);

formatter = new Intl.NumberFormat("da-DK", {
  style: "currency",
  currency: "DKK",
});

formattedNumber = formatter.format(number);
console.log("Formatted number in DKK", formattedNumber);

formatter = new Intl.NumberFormat("da-DK");
formattedNumber = formatter.format(number);
console.log("Formatted decimal number for DK", formattedNumber);

formatter = new Intl.NumberFormat("en-US");
formattedNumber = formatter.format(number);
console.log("Formatted decimal number for US", formattedNumber);

formattedNumber = number.toLocaleString("en-IN");
console.log(
  "Formatted decimal number for IN using toLocaleString",
  formattedNumber
);

formattedNumber = number.toLocaleString("en-IN", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});
console.log(
  "Formatted decimal number for IN using toLocaleString, maximumFractionDigits and minimumFractionDigits",
  formattedNumber
);
