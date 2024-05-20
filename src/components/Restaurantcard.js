const Restaurantcard = () => {
    return(
      <div className="custom-card">
        <div className="mb-2">
          <img 
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
        />
        </div>
        <div className="px-2">
        <h5>Chinese Wok</h5>
        <div className="d-flex justify-content-between">
          <div>⭐4.5</div>
          <div>40-45min</div>
        </div>
        <div>Chinese, Asian, Tibetan, Desserts</div>
        <div>Santacruz East</div>
        </div>
      </div>
    )
  };

export default Restaurantcard;