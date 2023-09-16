import React from "react";
import Slider from "../components/slider/Slider";
import Products from "../components/products/Products";
import Offers from "../components/offers/Offers";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <div className=" ">
      <Slider />
      <Products />
      <Offers />
      <Services />
      <Footer />
    </div>
  );
}

export default Home;
