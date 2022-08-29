export default function TotalPrice({ totalprice }) {
  return (
    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div className="flex justify-center items-center text-center">
        <div className="text-xl font-semibold">
          <p>Total Price</p>
          <p className="text-5xl">{totalprice}</p>
        </div>
      </div>
    </div>
  );
}
