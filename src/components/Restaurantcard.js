import { IMG_URL } from "../const/config";

const Restaurantcard = ({cloudinaryImageId, name, avgRating, sla, cuisines, areaName}) => {
    return(
      <div className="custom-card">
        <div className="mb-2">
          <img 
         src={IMG_URL+cloudinaryImageId}
        />
        </div>
        <div className="px-2">
        <h5>{name}</h5>
        <div className="d-flex justify-content-between">
        <div>⭐{avgRating}</div>
          <div>{sla?.deliveryTime}min</div>
        </div>
        <div className="text-secondary">{cuisines.join(", ")}</div>
        <div>{areaName}</div>
        </div>
      </div>
    )
  };

export default Restaurantcard;