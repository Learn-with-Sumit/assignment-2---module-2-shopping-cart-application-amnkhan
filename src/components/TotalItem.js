import React from "react";

// Show Total Items
export default function TotalItem({ totalItem }) {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="text-xl font-semibold">
        <p>Total Item</p>
        <p className="text-5xl">{totalItem}</p>
      </div>
    </div>
  );
}
