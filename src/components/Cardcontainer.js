import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from 'react'
import Shimmer from "./Shimmer";
import useRestaurant from "../hooks/useRestaurant"
import Searchbar from "./Searchbar";

const Cardcontainer = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantCollection, setRestaurantCollection] = useState([]);
  const resObject = useRestaurant();
  console.log("resObject", resObject);
  console.log("restaurantlist", restaurantData)
  

  const handleDelivery = () =>{
    const filteredData = restaurantCollection.filter((restaurant)=>{
      return restaurant?.info?.sla?.deliveryTime <= 30
    })
    setRestaurantData(filteredData);
  }

  const handleVeg = () =>{
    const filteredData = restaurantCollection.filter((restaurant)=>{
      return restaurant?.info?.veg
    })
    setRestaurantData(filteredData);
  }

  const handleRating = () =>{
    const filteredData = restaurantCollection.filter((restaurant)=>{
      return restaurant?.info?.avgRating >= 4.5
    })
    setRestaurantData(filteredData);
  }

  const reset = () =>{
    setRestaurantData(restaurantCollection)
  }


  console.log("component is rendered")
  
  if(resObject?.loading){
    return (
      <div className="container d-flex flex-wrap gap-4">
        <Shimmer/>
      </div>
    )
  }

  if(resObject?.failed){
    return(
      <div>
        <h1>Something went wrong</h1>
      </div>
    )
  }

  return (
    <div>
      <div className="container d-flex align-items-center justify-content-between">
      <Searchbar collection={resObject.masterData} updater={resObject?.updater}/>
      <div >
        <button className="btn btn-sm btn-light mx-2" onClick={handleDelivery}>Fast Delivery</button>
        <button className="btn btn-sm btn-light mx-2" onClick={handleVeg}>Pure Veg</button>
        <button className="btn btn-sm btn-light mx-2" onClick={handleRating}>Top rated</button>
        <button className="btn btn-sm btn-light mx-2" onClick={reset}>Show all</button>
      </div>
      </div>
      
      <div className="container d-flex flex-wrap gap-4">
      {resObject?.resData.length!==0 ? resObject?.resData.map((restaurant) => {
        return (
          <Restaurantcard
          key = {restaurant?.info?.id}
            {...restaurant?.info}
          />
        );
      }) : <h1>No restaurants match your search</h1>}</div>
    
    </div>
  );
};

export default Cardcontainer;
