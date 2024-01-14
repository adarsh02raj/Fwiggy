import { imgURLBanner } from "../common/common";

const ResultResturant = ({ props }) => {
  // console.log(props.info);
  const { name, avgRating, costForTwo, sla, cuisines, cloudinaryImageId } =
    props.info;
  return (
    <div className="ResultResturantComponent my-10">
      <div className="result-box flex items-center">
        <div className="picture w-24 h-24 mr-5">
          <img
            src={imgURLBanner + cloudinaryImageId}
            alt={name}
            className="card-image-res w-full h-full object-cover"
          />
        </div>
        <div className="result-details">
          <h1 className="font-bold">{name}</h1>
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
