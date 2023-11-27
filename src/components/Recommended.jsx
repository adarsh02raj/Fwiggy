import ResCard from "./ResCard";
import { API_URL } from "../common/common";     
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export let resList = [];

const Recommended = () => {
  const [resData, setResData] = useState([]);
  const fetchData = async () => {
    try{
    const data = await fetch(API_URL);
    if (!data.ok) {
      throw new Error('Network response was not ok');
    }
    const dataJson = await data.json();
    setResData(
      dataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    }catch(error){
      console.log("Error:", error)
    }
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
