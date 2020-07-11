const formatPrice = (value: number) =>
  Intl.NumberFormat('pt-ao', { style: 'currency', currency: 'AOA' }).format(
    value
  );

export default formatPrice;
