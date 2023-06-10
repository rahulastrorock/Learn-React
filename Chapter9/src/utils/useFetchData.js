import { useEffect, useState } from "react";

const useResData = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredList, setfilteredList] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
      setfilteredList(json?.data?.cards[2]?.data?.data?.cards);
    } catch (err) {
      console.log(err);
    }
  };

  return [listOfRestaurants, setListOfRestraunt, filteredList, setfilteredList];
};

export default useResData;
