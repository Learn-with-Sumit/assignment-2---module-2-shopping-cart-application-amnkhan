import Product from "./Product";

export default function LeftCartContents() {
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      <Product title="Asus Vivobook X515MA" stock={20} price="35,500" />
      <Product title="Dell E1916HV 18.5 Inch" stock={35} price="9,300" />
      <Product title="Canon Eos 4000D 18MP" stock={72} price="36,500" />
    </div>
  );
}
