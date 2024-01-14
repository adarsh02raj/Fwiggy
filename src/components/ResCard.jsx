import { imgURLBanner } from "../common/common";

const ResCard = ({ props }) => {
  const { name, cloudinaryImageId, avgRating, sla, cuisines, areaName } =
    props?.info;

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.slice(0, maxLength - 3) + "..."
      : text;
  };
  const truncatedCuisines = truncateText(cuisines.join(", "), 35);
  const truncatedName = truncateText(name, 27);

  return (
    <div className="res-card">
      <div className="card w-80 my-5 mx-2">
        <div className="restaurant-image w-80 h-56 my-2">
        <img
          src={imgURLBanner + cloudinaryImageId}
          alt={name}
          className="
            card-image 
            w-full
            h-full
            object-cover
            rounded-xl
          "
          />
        </div>
          
        <div className="card-details">
          <h3>{truncatedName}</h3>
          <div className="ratings">
            <span className="rating">
              *{avgRating} - {sla?.slaString}
            </span>
          </div>
          <p>{truncatedCuisines}</p>
          <p>{areaName}</p>
        </div>
      </div>
    </div>
  );
};

export const WithLabelCard = (ResCard)=>{
  return (props) => {
    return(
      <div>
        <label className="absolute bg-black text-white ml-1 p-1 rounded-lg">
          Promoted
        </label>
        <ResCard {...props}/>
      </div>
    )
  }
}

export default ResCard;
