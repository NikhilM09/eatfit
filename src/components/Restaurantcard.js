import { IMG_URL } from "../const/config";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Restaurantcard = ({cloudinaryImageId, name, avgRating, sla, cuisines, areaName, id}) => {
  const {username} = useContext(UserContext);
  return(
      <Link to={`/menu/${id}`} className="custom-card text-decoration-none text-dark">
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
        <div className="text-danger text-end">Designed by : {username}</div>
        </div>
      </Link>
    )
  };

export default Restaurantcard;