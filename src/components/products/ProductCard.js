import React from "react";
import Plate from "../../assests/plate1.png";
function ProductCard() {
  return (
    <div className=" bg-white border border-[#085521] rounded-lg shadow">
      <img
        className=" w-52 object-cover object-center mx-auto"
        src={Plate}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
          Salad Fresh
        </h5>
      </div>
    </div>
  );
}

export default ProductCard;
