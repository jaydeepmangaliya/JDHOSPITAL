import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import Todocters from "../components/Todocters";
import Banner from "../components/Banner";

function Home() {
  return (
    <div className="mx-4 sm:mx[10%]">
      <Header></Header>
      <SpecialityMenu></SpecialityMenu>
      <Todocters></Todocters>
      <Banner></Banner>
    </div>
  );
}

export default Home;
