import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurant = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resID);
      const json = await data.json();
      setResInfo(json);
    } catch (err) {
      console.log(err);
    }
  };

  return resInfo;
};

export default useRestaurant;
