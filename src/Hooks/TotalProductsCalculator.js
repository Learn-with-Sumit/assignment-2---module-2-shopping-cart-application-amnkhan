import { useSelector } from "react-redux";

const TotalProductsCalculator = () => {
  const products = useSelector((state) => state);
  let totalQuantity = 0;

  products.map((product) => (totalQuantity = totalQuantity + product.quantity));

  return totalQuantity;
};

export default TotalProductsCalculator;
