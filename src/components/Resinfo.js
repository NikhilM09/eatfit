const Resinfo = ({name, avgRating, cuisines, deliveryTime,costForTwo, ratingCount, remark}) =>{
    return(
        <div>
            <h4>{name}</h4>
            <h6>⭐{avgRating}({ratingCount})  <span>-</span>  {costForTwo}</h6>
            <h6 className="text-danger text-decoration-underline">{cuisines}</h6>
            <h6 className="text-lowercase">{deliveryTime}</h6>
            <p>🚲{remark.replace(/<\/?b>/g, "")}.</p>
        </div>
    )
}

export default Resinfo