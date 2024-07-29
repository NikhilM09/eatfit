import React from 'react'
import { useSelector } from 'react-redux'
import MenuSection from './MenuSection'

const Cart = () => {
  const cartItems = useSelector((store)=>store.cart.items)
  console.log("cartItems", cartItems)
  return (
    cartItems.map((cartItem)=>{
      return(
        <MenuSection
        isVeg={cartItem?.isVeg}
        name={cartItem?.name}
        costForTwo={cartItem?.defaultPrice / 100 || cartItem?.price / 100}
        avgRating={cartItem?.ratings?.aggregatedRating?.rating}
        ratingCount={cartItem?.ratings?.aggregatedRating?.ratingCount}
        description={cartItem?.description}
        imageUrl={cartItem?.imageId}
        />
      )
    })
  )
}

export default Cart