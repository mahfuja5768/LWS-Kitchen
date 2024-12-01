import React from "react";
import Banner from "./components/Home/Banner";
import SuperDelicious from "./components/Home/SuperDelicious";
import PopularCategories from "./components/Home/PopularCategories";
import Newsletter from "./components/Home/Newsletter";
import HandPicked from "./components/Home/HandPicked";
import LatestRecipes from "./components/Home/LatestRecipes";

const Home = () => {
  return (
    <main className="container mx-auto px-4 mt-[100px]">
      <Banner />
      <SuperDelicious />
      <PopularCategories />
      <Newsletter />
      <HandPicked />
      <LatestRecipes />
    </main>
  );
};

export default Home;
