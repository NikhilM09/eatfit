import MenuSection from "./MenuSection";
import {useState} from 'react'
import { useDispatch } from "react-redux";
import {addItem} from '../utils/cartSlice'

const NormalMenu = ({normalCollection, isActive, toggleFunction, isNested}) =>{
  const [showList, setShowList] = useState(false)
  const dispatch = useDispatch();

  const handleAddItem = (val) =>{
    dispatch(addItem(val));
  }
      return (
      <>
              <h5 key={normalCollection?.card?.card?.title} className="bg-secondary p-3" onClick={isNested ? ()=>setShowList(!showList) : toggleFunction}>
                {isNested ? normalCollection?.title : normalCollection?.card?.card?.title}
              </h5>
              {isNested ? normalCollection?.itemCards.map((dish) => {
                return (
                  showList && <>
                    <MenuSection
                    isVeg={dish?.card?.info?.isVeg}
                    name={dish?.card?.info?.name}
                    costForTwo={
                      dish?.card?.info?.defaultPrice / 100 ||
                      dish?.card?.info?.price / 100
                    }
                    avgRating={
                      dish?.card?.info?.ratings?.aggregatedRating?.rating
                    }
                    ratingCount={
                      dish?.card?.info?.ratings?.aggregatedRating?.ratingCount
                    }
                    description={dish?.card?.info?.description}
                    imageUrl={dish?.card?.info?.imageId}
                  />
                  <hr/>
                  </>  
                );
              }) :
              normalCollection?.card?.card?.itemCards.map((dish) => {
                return (
                  isActive && 
                  (<>
                    <MenuSection
                    isVeg={dish?.card?.info?.isVeg}
                    name={dish?.card?.info?.name}
                    costForTwo={
                      dish?.card?.info?.defaultPrice / 100 ||
                      dish?.card?.info?.price / 100
                    }
                    avgRating={
                      dish?.card?.info?.ratings?.aggregatedRating?.rating
                    }
                    ratingCount={
                      dish?.card?.info?.ratings?.aggregatedRating?.ratingCount
                    }
                    description={dish?.card?.info?.description}
                    imageUrl={dish?.card?.info?.imageId}
                    handleAdd={()=>handleAddItem(dish.card.info)}
                  />
                  <hr/>
                  </>)  
                );
              })}
            </>
      )};

export default NormalMenu;