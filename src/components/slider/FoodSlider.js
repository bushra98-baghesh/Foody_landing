import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import Plate1 from "../../assests/plate1.png";
import Plate2 from "../../assests/plate2.png";
import Plate3 from "../../assests/plate3.png";
function FoodSlider() {
  return (
    <div className="-mt-20 md:-mt-24 lg:-mt-28">
      <Swiper
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        fadeEffect={{ crossFade: true }}
        effect={"fade"}
        spaceBetween={15}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img
              className=" w-64 md:w-72 object-cover object-center"
              src={Plate1}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img
              className=" w-64 md:w-72  me-8 object-cover object-center"
              src={Plate2}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img
              className="  w-40 sm:w-52 md:w-60  object-cover object-center"
              src={Plate3}
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default FoodSlider;
