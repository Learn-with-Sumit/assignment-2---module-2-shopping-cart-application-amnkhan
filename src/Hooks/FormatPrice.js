// Create our number formatter.
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "BDT", // choose the currency format
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
