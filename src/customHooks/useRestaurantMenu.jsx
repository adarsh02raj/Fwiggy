import { useEffect, useState } from "react";
import { MENU_API_URL } from "../common/common";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    // fetch data
    const fetchData = async () => {
        try{
        const data = await fetch(MENU_API_URL + resId)
        if (!data.ok) {
            throw new Error('Network response was not ok');
          }
        const dataJson = await data.json();
        setResInfo(dataJson?.data);
        }catch(error){
            console.log("Error: ", error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
    return resInfo
}

export default useRestaurantMenu;