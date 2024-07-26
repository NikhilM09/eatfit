import NormalMenu from "./NormalMenu";

const NestedMenu = ({collection}) =>{
    return(
        <div>
              <h4>{collection?.card?.card?.title}</h4>
              {collection?.card?.card?.categories.map((subCategory) => {
                return (
                  <>
                    {/* <h5 className="text-secondary">{subCategory?.title}</h5>
                    {subCategory?.itemCards.map((dish) => {
                      return (
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
                            dish?.card?.info?.ratings?.aggregatedRating
                              ?.ratingCount
                          }
                          description={dish?.card?.info?.description}
                          imageUrl={dish?.card?.info?.imageId}
                        />
                      );
                    })} */}
                    <NormalMenu normalCollection={subCategory} 
                    isNested={true}
                    />
                  </>
                );
              })}
            </div>
    )
}

export default NestedMenu;