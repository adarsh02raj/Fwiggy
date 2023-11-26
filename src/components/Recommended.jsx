import ResCard from "./ResCard";
import { API_URL } from "../common/common";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export let resList = [];

const Recommended = () => {
  const [resData, setResData] = useState([]);
  const [listOfresturant, setListOfResturant] = useState([]);
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const dataJson = await data.json();
    setResData(
      dataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };
  useState(() => {
    fetchData();
  }, []);
  resList = resData;
  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="recommended">
      {resData.map((res) => {
        return (
          <Link
            className="card-link"
            key={res?.info?.id}
            to={"/restaurant/" + res?.info?.id}
          >
            <ResCard props={res} />
          </Link>
        );
      })}
    </div>
  );
};
export default Recommended;
