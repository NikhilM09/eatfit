import Restaurantcard from "./Restaurantcard";
import { restaurantList } from "../const/config";

const Cardcontainer = () => {
  console.log(
    "restaurantList",
    restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  const restaurants =
    restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  return (
    <div className="container d-flex flex-wrap gap-4">
      {restaurants.map((restaurant) => {
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
      })}
    </div>
  );
};

export default Cardcontainer;
