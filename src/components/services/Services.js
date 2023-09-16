import React from "react";
import Home1 from "../../assests/home.jpg";
import Home2 from "../../assests/home (1).jpg";
import Card1 from "../../assests/CARD.jpg";
import Card2 from "../../assests/CARD (1).jpg";
import Details1 from "../../assests/detailes.jpg";
import Details2 from "../../assests/detailes (1).jpg";
import Kiwi from "../../assests/asset (1).png";
import avocado from "../../assests/asset (3).png";
import lemon from "../../assests/lemon.png.png";
import { motion } from "framer-motion";
function Services() {
  return (
    <div className="my-10 mb-28">
      <div className="relative my-10">
        {/* <img src={Kiwi} alt="" className="absolute top-10 right-44 " />
        <img
          src={lemon}
          alt=""
          className="absolute w-32 md:w-36 lg:w-44 top-6   left-28"
        />
        <img
          src={avocado}
          alt=""
          className="absolute bottom-4  -rotate-12 left-1/4  "
        />
        <img
          src={lemon}
          alt=""
          className="absolute bottom-6 z-50  w-52 right-1/4  "
        /> */}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold py-10 tracking-wider  flex items-cnter justify-center">
          Our Services
        </h1>
      </div>

      <div className="flex md:flex-row flex-col  items-center justify-between gap-4">
        <div className="flex items-center justify-center md:items-end md:justify-end bg-gradient-to-r from-[#c3f49d] via-[#E6F0C4] to-white  md:w-1/2 w-full py-10">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            src={Home2}
            alt=""
            className=" w-32 sm:w-40 md:w-48 lg:w-52 rounded-xl   "
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            src={Home1}
            alt=""
            className="w-32 sm:w-40 md:w-48 lg:w-52 -ml-20  rounded-xl"
          />
        </div>
        <div className="h-full flex flex-col space-y-4 md:items-start md:justify-start md:text-start items-center px-10 py-6 justify-enter text-center md:w-1/2">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold  leading-10 md:w-3/4">
            Real service time
          </h1>
          <h1 className="text-base md:text-lg font-semibold leading-10 md:w-3/4">
            Lorem ipsum dolor sit amet consectetur. Sed sagittis a tristique ac
            cursus et Lorem ipsum dolor sit amet consectetur. Sed sagittis a
            tristique ac cursus et Lorem ipsum dolor sit amet consectetur. Sed
            sagittis a tristique ac cursus et Lorem ipsum dolor sit amet
            consectetur.
          </h1>
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col  items-center justify-between gap-4">
        <div className="flex items-center justify-center md:items-start md:justify-start bg-gradient-to-l from-[#c3f49d] via-[#E6F0C4] to-white  md:w-1/2 w-full py-10">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            src={Details1}
            alt=""
            className="  w-36 sm:w-42 md:w-48 lg:w-56 z-50 rounded-xl"
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            src={Details2}
            alt=""
            className="w-32 sm:w-40 md:w-48 lg:w-52  -ml-20  rounded-xl my-auto  "
          />
        </div>
        <div className="h-full flex flex-col space-y-4 md:items-start md:justify-start md:text-start items-center px-10 py-6 justify-enter text-center md:w-1/2">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold  leading-10 md:w-3/4">
            Real service time
          </h1>
          <h1 className="text-base md:text-lg font-semibold leading-10 md:w-3/4">
            Lorem ipsum dolor sit amet consectetur. Sed sagittis a tristique ac
            cursus et Lorem ipsum dolor sit amet consectetur. Sed sagittis a
            tristique ac cursus et Lorem ipsum dolor sit amet consectetur. Sed
            sagittis a tristique ac cursus et Lorem ipsum dolor sit amet
            consectetur.
          </h1>
        </div>
      </div>
      <div className="flex md:flex-row flex-col  items-center justify-between gap-4">
        <div className="flex items-center justify-center md:items-end md:justify-end bg-gradient-to-r from-[#c3f49d] via-[#E6F0C4] to-white  md:w-1/2 w-full py-10">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            src={Card2}
            alt=""
            className="w-32 sm:w-40 md:w-48 lg:w-52  rounded-xl"
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            src={Card1}
            alt=""
            className=" w-32 sm:w-40 md:w-48 lg:w-52 rounded-xl  -ml-20  "
          />
        </div>
        <div className="h-full flex flex-col space-y-4 md:items-start md:justify-start md:text-start items-center px-10 py-6 justify-enter text-center md:w-1/2">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold  leading-10 md:w-3/4">
            Real service time
          </h1>
          <h1 className="text-base md:text-lg font-semibold leading-10 md:w-3/4">
            Lorem ipsum dolor sit amet consectetur. Sed sagittis a tristique ac
            cursus et Lorem ipsum dolor sit amet consectetur. Sed sagittis a
            tristique ac cursus et Lorem ipsum dolor sit amet consectetur. Sed
            sagittis a tristique ac cursus et Lorem ipsum dolor sit amet
            consectetur.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Services;
