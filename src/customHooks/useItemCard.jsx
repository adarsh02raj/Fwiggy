import { useState, useEffect } from "react";

const useItemCard = (menuData) => {
    const [itemCard, setItemCards] = useState([])
    useEffect(() => {
        if (menuData) {
          const cards =
            menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
              ?.card;
          if (cards && Array.isArray(cards.itemCards))
            setItemCards(cards.itemCards);
        }
      }, [menuData]);
    return itemCard;
}
export default useItemCard; 