import vegLogo from "../../assets/veg.png";
import nonVegLogo from "../../assets/non-veg.png";
import { imgURLBanner } from "../common/common";

const ItemLists = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-b-2 flex justify-between">
          <div className="left w-10/12 my-5">
            <div className="text-left">
                {item?.card?.info?.isVeg ? (
                <img src={vegLogo} alt="veg" />
                ) : (
                <img src={nonVegLogo} alt="veg" />
                )}
                <span><h1>{item?.card?.info?.name}</h1></span>
                <span><p>&#8377;{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice /100}</p></span>
                <p className="text-xs">{item?.card?.info?.description}</p>       
            </div>
          </div>
          <div className="righ w-2/12 my-5 ml-10">
            <div className="absolute">
                <button className="px-4 ml-5 mt-16 bg-green-400 rounded-lg shadow-md" >Add + </button>
            </div>
            <img 
                src={imgURLBanner + item?.card?.info?.imageId} alt="food_image " 
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemLists;
