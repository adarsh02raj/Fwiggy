import { useState, useEffect } from "react";

const useRecomItems = (menuData) => {
    const [itemCard, setItemCards] = useState([])
    useEffect(() => {
      if (menuData) {
        const cards =
        menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;
        if (cards && Array.isArray(cards.itemCards))
        setItemCards(cards.itemCards);
        console.log('Categories',menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }
  }, [menuData]);
  return itemCard;
}
export default useRecomItems; 