import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Resinfo from "./Resinfo";
import Shimmer from "./Shimmer";
import MenuSection from "./MenuSection";
import useMenu from "../hooks/useMenu";
import NormalMenu from "./NormalMenu";
import NestedMenu from "./NestedMenu";

const Menu = () => {
  const { id } = useParams();
  const menuList = useMenu(id);
  console.log("custom hook data", menuList);
  const [activeIndex, setActiveIndex] = useState(0);

 
  if (menuList.length===0) {
    return (
      <div className="container d-flex flex-wrap gap-4">
        <Shimmer />
      </div>
    );
  }

  const menuCategories = menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const normalMenu = menuCategories.filter((menuCategory) => {
    return (
      menuCategory?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  const nestedMenu = menuCategories.filter((menuCategory) => {
    return (
      menuCategory?.card?.card["@type"] === 
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  });

  console.log("normal menu", normalMenu);
  console.log("nestedMenu", nestedMenu);

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    sla,
    expectationNotifiers,
  } = menuList[2]?.card?.card?.info;
  const { slaString, lastMileTravelString } = sla;
  const { enrichedText } = expectationNotifiers[0];
  const showDetails = (val)=>{
    if(activeIndex===val){
      setActiveIndex(-1)
    }
    else
    {
      setActiveIndex(val);
    }
    
  }


  return (
    <div className="menu_container">
      <Resinfo
        name={name}
        avgRating={avgRating}
        ratingCount={totalRatingsString}
        costForTwo={costForTwoMessage}
        cuisines={cuisines.join(", ")}
        deliveryTime={slaString}
        remark={enrichedText}
      />
      <div className="p-3">
        {normalMenu.map((normalCategory, index) => {
          return (
           <NormalMenu normalCollection={normalCategory} isActive={activeIndex===index}
           toggleFunction={()=>showDetails(index)}/>
          );
        })}
      </div>
      <div>
        {nestedMenu.map((category) => {
          return (
            <NestedMenu collection={category}/>
            // <div>
            //   <h4>{category?.card?.card?.title}</h4>
            //   {category?.card?.card?.categories.map((subCategory) => {
            //     return (
            //       <>
            //         <h5 className="text-secondary">{subCategory?.title}</h5>
            //         {subCategory?.itemCards.map((dish) => {
            //           return (
            //             <MenuSection
            //               isVeg={dish?.card?.info?.isVeg}
            //               name={dish?.card?.info?.name}
            //               costForTwo={
            //                 dish?.card?.info?.defaultPrice / 100 ||
            //                 dish?.card?.info?.price / 100
            //               }
            //               avgRating={
            //                 dish?.card?.info?.ratings?.aggregatedRating?.rating
            //               }
            //               ratingCount={
            //                 dish?.card?.info?.ratings?.aggregatedRating
            //                   ?.ratingCount
            //               }
            //               description={dish?.card?.info?.description}
            //               imageUrl={dish?.card?.info?.imageId}
            //             />
            //           );
            //         })}
            //       </>
            //     );
            //   })}
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
