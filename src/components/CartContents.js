import LeftCartContents from "./LeftCartContents";
import RightCartContents from "./RightCartContents";

// Cart Content component ( Wrapper for the left and right section )
export default function CartContents() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <LeftCartContents />
      <RightCartContents />
    </div>
  );
}
