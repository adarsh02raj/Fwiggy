import veg from "../../assets/veg.png";
import nonVeg from "../../assets/non-veg.png";
import { imgURLBanner } from "../common/common";
import { useEffect, useState } from "react";

const MenuItems = ({ props }) => {
  const { name, price, defaultPrice, description, isVeg, imageId } = props?.card?.info;
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const minusCart = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="menu-items">
      <div className="left-menu-items">
      {isVeg === 1 ? (
        <img src={veg} alt="veg" />
      ) : (
        <img src={nonVeg} alt="nonVeg" />
      )}
      <h4 className="item-name">{name}</h4>
      <p>
        <strong>₹ {price / 100 || defaultPrice / 100}</strong>
      </p>
      <div className="item-details">{description}</div>
      </div>
      <div className="right-menu-items">
        <img className="order-img" src={imgURLBanner + imageId} alt="menu-image" />
        <div className="addButton">
          <div className="btnPlus" onClick={minusCart}>{count === 0 ? '' : '-'}</div>
          <div className="btnText" onClick={addToCart}>{count === 0 ? 'Add' : count}</div>
          <div className="btnPlus" onClick={addToCart}>+</div>
        </div>
      </div>
    </div>
  );
};
export default MenuItems;
