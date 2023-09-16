import React from "react";
import { motion } from "framer-motion";
import OffersBackground from "../../assests/offer.jpg";
function Offers() {
  return (
    <div className="my-10">
      <div
        className="flex items-center justify-center"
        style={{
          backgroundImage: `url(${OffersBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col px-4 py-4 items-center justify-center backdrop-blur-lg text-neutral-800 shadow-xl shadow-black/60 bg-white/50 rounded-sm  h-2/4 w-3/6"
        >
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-6 tracking-wide">
            We Provide Our Customers with discounts from verious Resturants and
            Coffeshops up to
          </h1>
          <p className="text-base  md:text-lg lg:text-xl font-bold tracking-wide">
            15% Discount
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Offers;
