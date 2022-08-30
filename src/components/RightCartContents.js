import TotalPrice from "./TotalPrice";
import CartItems from "./CartItems";
import CartItem from "./CartItem";
import TotalItem from "./TotalItem";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../redux/AddToCart/actions";
import TotalProductsCalculator from "../Hooks/TotalProductsCalculator";
import TotalPriceCalculator from "../Hooks/TotalPriceCalculator";
import { formatter } from "../Hooks/FormatPrice";

export default function RightCartContents() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const totalProducts = TotalProductsCalculator();
  const totalPrice = TotalPriceCalculator();

  // Increment and Decrement handlers
  const quantityIncrementHandler = (value) => {
    dispatch(increase(value));
  };
  const quantityDecrementHandler = (value) => {
    dispatch(decrease(value));
  };

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <CartItems>
        {products.map(
          (product) =>
            product.quantity > 0 && (
              <CartItem
                key={product.id}
                title={product.productName}
                quantity={product.quantity}
                quantityIncrementHandler={() =>
                  quantityIncrementHandler(product.id)
                }
                quantityDecrementHandler={() =>
                  quantityDecrementHandler(product.id)
                }
              />
            )
        )}
        <TotalItem totalItem={totalProducts} />
      </CartItems>
      <TotalPrice totalprice={formatter.format(totalPrice)} />
    </div>
  );
}
