import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";

import "swiper/css/effect-coverflow";
import ProductCard from "./ProductCard";
function Products() {
  return (
    <div className=" py-6 px-10">
      <div className="flex-col space-y-5 py-4 ">
        <div className="flex items-center justify-between py-2 ">
          <h1 className=" text-xl font-bold  text-[#085521]">Categories</h1>
        </div>

        <Swiper
          spaceBetween={20}
          breakpoints={{
            200: {
              slidesPerView: 3,
            },
            350: {
              slidesPerView: 4,
            },
            576: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide>
            <div className="focus-within:text-[#C4C4C4]  ">
              <button className="py-4 w-full gap-2  overflow-hidden focus-within:bg-[#085521] hover:bg-[#085521] focus-within:text-white  rounded-lg cursor-pointer text-[#085521]  hover:text-white border-2 border-[#085521] transition duration-500 ease-in-out flex flex-col items-center justify-between ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-egg-fried"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
                </svg>
                <h1 className="text-sm  text-center cursor-pointer sm:text-base md:text-lg font-semibold pb-1  ">
                  category
                </h1>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="focus-within:text-[#C4C4C4]  ">
              <button className="py-4 w-full gap-2  overflow-hidden focus-within:bg-[#085521] hover:bg-[#085521] focus-within:text-white  rounded-lg cursor-pointer text-[#085521]  hover:text-white border-2 border-[#085521] transition duration-500 ease-in-out flex flex-col items-center justify-between ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-egg-fried"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
                </svg>
                <h1 className="text-sm  text-center cursor-pointer sm:text-base md:text-lg font-semibold pb-1  ">
                  category
                </h1>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="focus-within:text-[#C4C4C4]  ">
              <button className="py-4 w-full gap-2  overflow-hidden focus-within:bg-[#085521] hover:bg-[#085521] focus-within:text-white  rounded-lg cursor-pointer text-[#085521]  hover:text-white border-2 border-[#085521] transition duration-500 ease-in-out flex flex-col items-center justify-between ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-egg-fried"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
                </svg>
                <h1 className="text-sm  text-center cursor-pointer sm:text-base md:text-lg font-semibold pb-1  ">
                  category
                </h1>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="focus-within:text-[#C4C4C4]  ">
              <button className="py-4 w-full gap-2  overflow-hidden focus-within:bg-[#085521] hover:bg-[#085521] focus-within:text-white  rounded-lg cursor-pointer text-[#085521]  hover:text-white border-2 border-[#085521] transition duration-500 ease-in-out flex flex-col items-center justify-between ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-egg-fried"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
                </svg>
                <h1 className="text-sm  text-center cursor-pointer sm:text-base md:text-lg font-semibold pb-1  ">
                  category
                </h1>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="focus-within:text-[#C4C4C4]  ">
              <button className="py-4 w-full gap-2  overflow-hidden focus-within:bg-[#085521] hover:bg-[#085521] focus-within:text-white  rounded-lg cursor-pointer text-[#085521]  hover:text-white border-2 border-[#085521] transition duration-500 ease-in-out flex flex-col items-center justify-between ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-egg-fried"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
                </svg>
                <h1 className="text-sm  text-center cursor-pointer sm:text-base md:text-lg font-semibold pb-1  ">
                  category
                </h1>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="focus-within:text-[#C4C4C4]  ">
              <button className="py-4 w-full gap-2  overflow-hidden focus-within:bg-[#085521] hover:bg-[#085521] focus-within:text-white  rounded-lg cursor-pointer text-[#085521]  hover:text-white border-2 border-[#085521] transition duration-500 ease-in-out flex flex-col items-center justify-between ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-egg-fried"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
                </svg>
                <h1 className="text-sm  text-center cursor-pointer sm:text-base md:text-lg font-semibold pb-1  ">
                  category
                </h1>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="my-10 ">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect="coverflow"
          centeredSlides={true}
          coverflowEffect={{
            rotate: -2,
            stretch: -20,
            depth: 50,
            modifier: 2.5,
          }}
          breakpoints={{
            200: {
              slidesPerView: 1,
            },
            350: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
          }}
          style={{
            paddingBottom: "20px",
          }}
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Products;
