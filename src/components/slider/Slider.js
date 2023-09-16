import React from "react";
import "./Slider.css";
import { motion } from "framer-motion";
import Kiwi from "../../assests/asset (1).png";
import avocado from "../../assests/asset (3).png";
import greens from "../../assests/asset (2).png";
import lemon from "../../assests/lemon.png.png";
import Fruits from "../../assests/fruits.png";
import FoodSlider from "./FoodSlider";
const Slider = () => {
  return (
    <div className="flex flex-col ">
      <div className="section overflow-y-visible">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={`mx-auto  text-center z-50 flex flex-col items-center justify-center `}
        >
          <div className="text-3xl  md:text-4xl lg:text-5xl font-bold">
            <span>F</span>
            <span className="text-[#DC0D28]">OO</span>
            <span>D</span>
            <span>Y</span>
          </div>
          <h1 className=" my-4 text-3xl  md:text-3xl lg:text-4xl tracking-wide font-bold">
            Lets Order
          </h1>
        </motion.div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          src={Fruits}
          alt=""
          className="hidden sm:flex absolute w-32 sm:w-48 -left-0.5"
        />
        <motion.img
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          src={lemon}
          alt=""
          className="hidden lg:flex  absolute w-52 top-4 right-80 "
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          src={Kiwi}
          alt=""
          className="hidden lg:flex  absolute top-10 -rotate-12 left-52"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          src={avocado}
          alt=""
          className="hidden lg:flex  absolute bottom-10 -rotate-12 right-52"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          src={greens}
          alt=""
          className="hidden sm:flex absolute right-0  sm:w-72 "
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          src={lemon}
          alt=""
          className="hidden lg:flex absolute w-52 left-60 bottom-20 "
        />
      </div>
      <FoodSlider />
    </div>
  );
};

export default Slider;
