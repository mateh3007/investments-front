export function currencyFilter(value) {
  console.log(value);

  if (typeof value !== "number") {
    return value;
  }

  const options = {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  console.log(value);
  return value.toLocaleString("pt-BR", options);
}
