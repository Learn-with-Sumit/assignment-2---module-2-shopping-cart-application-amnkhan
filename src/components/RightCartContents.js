import TotalPrice from "./TotalPrice";
import CartItems from "./CartItems";
import CartItem from "./CartItem";
import TotalItem from "./TotalItem";

export default function RightCartContents() {
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <CartItems>
        <CartItem title="Asus Vivobook X515MA" quantity={0} />
        <CartItem title="Dell E1916HV 18.5 Inch" quantity={0} />
        <CartItem title="Canon Eos 4000D 18MP" quantity={0} />
        <TotalItem totalItem={0} />
      </CartItems>
      <TotalPrice totalprice={0} />
    </div>
  );
}
