import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/AddToCart/actions";

export default function LeftCartContents() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  // addToCart Action
  const addToCartHandler = (value) => {
    dispatch(addToCart(value));
  };

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      {/* Generate the Product UI based on current state */}
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.productName}
          stock={product.stock}
          price={product.price}
          addToCartHandler={() => addToCartHandler(product.id)}
        />
      ))}
    </div>
  );
}
