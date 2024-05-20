import Navigation from "./Carousel";
import Filter from "./Filter";
import Searchbar from "./Searchbar";
import Cardcontainer from "./Cardcontainer";

const Body = () => {
    return (
      <>
        <div className="text-center">This is the body component</div>
        <Navigation />
        <div className="d-flex justify-content-between">
          <Filter />
          <Searchbar />
        </div>
        <Cardcontainer />
      </>
    );
  };

  export default Body