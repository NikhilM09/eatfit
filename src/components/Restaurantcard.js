const Restaurantcard = ({imgUrl, title, starRating, deliveryTime, cuisines, location}) => {
  // imgUrl, title, starRating, deliveryTime, cuisines, location
    return(
      <div className="custom-card">
        <div className="mb-2">
          <img 
         src={imgUrl}
        //  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
        />
        </div>
        <div className="px-2">
        <h5>{title}</h5>
        {/* <h5>Chinese Wok</h5> */}
        <div className="d-flex justify-content-between">
        <div>⭐{starRating}</div>
          {/* <div>⭐4.5</div> */}
          <div>{deliveryTime}min</div>
          {/* <div>40-45min</div> */}
        </div>
        <div className="text-secondary">{cuisines}</div>
        {/* <div className="text-secondary">Chinese, Asian, Tibetan, Desserts</div> */}
        <div>{location}</div>
        {/* <div>Santacruz East</div> */}
        </div>
      </div>
    )
  };

export default Restaurantcard;