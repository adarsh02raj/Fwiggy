import { useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import Shimmer from "./Shimmer";
import starLogo from "../../assets/star-svgrepo-com.svg";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../customHooks/useRestaurantMenu";
import useItemCard from "../customHooks/useItemCard";

const ResMenu = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);
  const itemCards = useItemCard(menuData);
  console.log('itemCard',itemCards);
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
    <Shimmer />
  ) : (
    <div className="menuPage">
      <div className="resMenu">
        <div className="resDetails">
          <div className="left">
            <h1>{name}</h1>
            <p className="cuisines">{cuisines.join(", ")}</p>
            <p className="locations">
              {areaName}, {sla.lastMileTravelString}
            </p>
            <p className="feeDetails">{feeDetails.message}</p>
          </div>
          <div className="right">
            <p className="rate-up">
              <img className="starlogo" src={starLogo} alt="starlogo" />
              {avgRating}
            </p>
            <p className="rate-down">{totalRatingsString}</p>
          </div>
        </div>
        <div className="offers">
          <p>
            <strong>
              {sla.slaString} - {costForTwoMessage}
            </strong>
          </p>
        </div>
        <div className="menu">
          <div className="recommendedLength">
            <>
              <h4>Recommended ({itemCards.length})</h4>
            </>
            <>
              <h4>^</h4>
            </>
          </div>
          {itemCards.map((items) => {
            return <MenuItems key={items?.card?.info?.id} props={items} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ResMenu;
