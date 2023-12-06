import { useEffect, useState } from "react";
import { API_URL } from "../common/common";

const useRecommandedRes = () => {
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
      useEffect(()=>{
        fetchData();
      },[])
    return resData;
}

export default useRecommandedRes;