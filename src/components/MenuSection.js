import { IMG_URL } from "../const/config"

const MenuSection = ({isVeg, name, costForTwo, avgRating, ratingCount, description, imageUrl}) =>{
    return(
        <div className="d-flex justify-content-between align-items-center">
            <div>
                <p>{isVeg ? "🟢" : "🔴"}</p>
                <h6>{name}</h6>
                <h6>Rs. {costForTwo}</h6>
                {avgRating && <p className="text-success">⭐{avgRating} <span className="text-secondary">({ratingCount})</span></p>}
                <p className="text-secondary">{description}</p>
            </div>
            <div>
                <img style={{width:"150px", height:"150px", objectFit:"cover", borderRadius:"20px"}} src={IMG_URL+imageUrl}/>
            </div>
        </div>
    )
}

export default MenuSection