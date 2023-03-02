const formatMoney = (value) => {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

export { formatMoney };
