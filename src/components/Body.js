import Navigation from "./Carousel";
import Filter from "./Filter";
import { useState } from "react";
import Searchbar from "./Searchbar";
import Cardcontainer from "./Cardcontainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  const [name, setName] = useState("Aniket")
    return (
      <>
      {/* <Outlet/> */}
        <div className="text-center">This is the body component</div>
        <Navigation />
        <div className="d-flex justify-content-between">
          <Filter />
          {/* <Searchbar /> */}
        </div>
        <Cardcontainer author={name}/>
      </>
    );
  };

  export default Body