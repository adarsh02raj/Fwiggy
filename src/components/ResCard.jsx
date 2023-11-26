import { imgURLBanner } from "../common/common";
import starLogo from "../../assets/star-svgrepo-com.svg";

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
  console.log({ props });
  return (
    <div className="res-card">
      <div className="card">
        <img
          src={imgURLBanner + cloudinaryImageId}
          alt={name}
          className="card-image"
        />
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

export default ResCard;
