import { imgURLBanner } from "../common/common";

const ResultResturant = ({ props }) => {
  console.log(props.info);
  const { name, avgRating, costForTwo, sla, cuisines, cloudinaryImageId } =
    props.info;
  return (
    <div className="ResultResturantComponent">
      <div className="result-box">
        <div className="picture">
          <img
            src={imgURLBanner + cloudinaryImageId}
            alt={name}
            className="card-image-res"
          />
        </div>
        <div className="result-details">
          <h1>{name}</h1>
          <p className="p-info">
            {avgRating} - {costForTwo} - {sla.slaString}
          </p>
          <p className="p-cuisines">{cuisines.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultResturant;
