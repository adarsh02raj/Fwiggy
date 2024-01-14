import { useEffect, useState } from "react";
import MenuItems from "./MenuItems";
// import Shimmer from "./Shimmer";
import starLogo from "../../assets/star-svgrepo-com.svg";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../customHooks/useRestaurantMenu";
import ResCategories from "./ResCategories";
import Shimmer2 from "./Shimmer2";

//Accordian Body
//Accordian Header
//Accordian Data

const ResMenu = () => {

  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);
  
  const Categories = menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    .filter((c)=>c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  const {
    name,
    cuisines,
    areaName,
    sla,
    feeDetails,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = menuData?.cards[0]?.card?.card?.info || {};
  return menuData === null ? (
    <Shimmer2 />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      {/* Accordian Categories */}
      {
        Categories.map((category, index)=>(
          <ResCategories key={index} catData={category?.card.card}/>
        ))
      }
    </div>
  );
};

export default ResMenu;
