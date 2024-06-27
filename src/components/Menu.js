import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Resinfo from './Resinfo';
import Shimmer from './Shimmer';

const Menu = () =>{
    // const params = useParams();
    const {id} = useParams();
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getMenu = async() =>{
            try{
                const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
                const json = await data.json();
                setLoading(false)
                setMenuData(json?.data?.cards)
                console.log("json", json?.data?.cards);
            }
            catch(err){
                console.log("menu api error", err)
            }
        }
        getMenu();
    },[])

    if(loading){
        return (<div className="container d-flex flex-wrap gap-4">
            <Shimmer/>
            </div>)
    }

    const {name, avgRating, totalRatingsString, costForTwoMessage, cuisines,sla,expectationNotifiers} = menuData[2]?.card?.card?.info
    const {slaString, lastMileTravelString} = sla;
    const {enrichedText} = expectationNotifiers[0]
    
    
    return(
        
        <div className="container">
            <Resinfo
            name={name}
            avgRating={avgRating}
            ratingCount={totalRatingsString}
            costForTwo={costForTwoMessage} 
            cuisines={cuisines.join(", ")} 
            deliveryTime={slaString} 
            remark={enrichedText}   />
        </div>
    )
}

export default Menu