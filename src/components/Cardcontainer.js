import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from 'react'
import Shimmer from "./Shimmer";

const Cardcontainer = () => {
  const [count, setCount] = useState(0)
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [restaurantCollection, setRestaurantCollection] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const [isFailed, setIsFailed] = useState(false)
  console.log("restaurantlist", restaurantData)
  

  const handleSearchText = (event) => {
    console.log("function is called", searchtext)
    setSearchtext(event.target.value)
  }

  const filterData = () =>{
    const filteredData = restaurantCollection.filter((restaurant)=>{
      return restaurant?.info?.name.toLowerCase().includes(searchtext.toLowerCase())
    })
    console.log("filteredData", filteredData);
    setRestaurantData(filteredData);
  }

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

  useEffect(()=>{
    const getRestaurants = async() =>{
      try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setLoading(false);
      console.log("json", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurantCollection(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
      catch(err){
        setLoading(false)
        setIsFailed(true)
        console.log("something went wrong", err)
      }
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

  if(isFailed){
    return(
      <div>
        <h1>Something went wrong</h1>
      </div>
    )
  }

  return (
    <div>
      <div className="container d-flex align-items-center justify-content-between">
      <div className="d-flex my-3" style={{width:"100vw", maxWidth:"400px"}}>
        <input type="text" 
        className="custom_input" 
        placeholder="Enter name of restaurant"
        value={searchtext}
        onChange={handleSearchText}/>
        <button className="btn btn-light" onClick={filterData}>🔍</button> 
      </div>
      <div >
        <button className="btn btn-sm btn-light mx-2" onClick={handleDelivery}>Fast Delivery</button>
        <button className="btn btn-sm btn-light mx-2" onClick={handleVeg}>Pure Veg</button>
        <button className="btn btn-sm btn-light mx-2" onClick={handleRating}>Top rated</button>
        <button className="btn btn-sm btn-light mx-2" onClick={reset}>Show all</button>
      </div>
      </div>
      
      <div className="container d-flex flex-wrap gap-4">
      {restaurantData.length!==0 ? restaurantData.map((restaurant) => {
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
      }) : <h1>No restaurants match your search</h1>}</div>
    
    </div>
  );
};

export default Cardcontainer;
