import LeftCartContents from "./LeftCartContents";
import RightCartContents from "./RightCartContents";

export default function CartContents() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <LeftCartContents />
      <RightCartContents />
    </div>
  );
}
