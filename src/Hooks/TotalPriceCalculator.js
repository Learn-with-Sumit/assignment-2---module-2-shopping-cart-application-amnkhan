import { useSelector } from "react-redux";

const TotalPriceCalculator = () => {
  const products = useSelector((state) => state);
  let totalPrice = 0;

  products.map(
    (product) => (totalPrice = totalPrice + product.price * product.quantity)
  );

  return totalPrice;
};

export default TotalPriceCalculator;
