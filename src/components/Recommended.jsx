import ResCard from "./ResCard";   
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import useRecommandedRes from "../customHooks/useRecommandedRes";

export let resList = [];

const Recommended = () => {
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return (<div>You are offline</div>)
  }
  const resData = useRecommandedRes();
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
