import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from 'react'
import Shimmer from "./Shimmer";

const Cardcontainer = () => {
  const [count, setCount] = useState(0)
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [restaurantCollection, setRestaurantCollection] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  console.log("restaurantlist", restaurantData)
  

  const handleSearchText = (event) => {
    console.log("function is called", searchtext)
    setSearchtext(event.target.value)
  }

  const filterData = () =>{
    const filteredData = restaurantCollection.filter((restaurant)=>{
      return restaurant?.info?.name.toLowerCase().includes(searchtext.toLowerCase())
    })
   
    setRestaurantData(filteredData);
  }
  useEffect(()=>{
    const getRestaurants = async() =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setLoading(false);
      console.log("json", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurantCollection(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    getRestaurants();
  }, [])

  console.log("component is rendered")
  
  if(loading){
    return (
      <div className="container d-flex flex-wrap gap-4">
        <Shimmer/>
      </div>
    )
  }

  return (
    <div>
      <div className="container my-3">
        <input type="text" 
        className="custom_input" 
        placeholder="Enter name of restaurant"
        value={searchtext}
        onChange={handleSearchText}/>
        <button className="btn btn-light" onClick={filterData}>🔍</button> 
      </div>
      <div className="container d-flex flex-wrap gap-4">
      {restaurantData.map((restaurant) => {
        return (
          <Restaurantcard
          key = {restaurant?.info?.id}
            // imgUrl={IMG_URL + restaurant?.info?.cloudinaryImageId}
            // title={restaurant?.info?.name}
            // starRating={restaurant?.info?.avgRating}
            // deliveryTime={restaurant?.info?.sla?.deliveryTime}
            // cuisines={restaurant?.info?.cuisines.join(", ")}
            // location={restaurant?.info?.areaName}
            {...restaurant?.info}
          />
        );
      })}</div>
    
    </div>
  );
};

export default Cardcontainer;
