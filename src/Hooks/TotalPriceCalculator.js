import { useSelector } from "react-redux";

// Calculate the Total Price
const TotalPriceCalculator = () => {
  const products = useSelector((state) => state);
  let totalPrice = 0;

  products.map(
    (product) => (totalPrice = totalPrice + product.price * product.quantity)
  );

  return totalPrice;
};

export default TotalPriceCalculator;
