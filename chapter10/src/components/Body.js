import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import fetchData from "../utils/useFetchData"; //custom hook
import useOnline from "../utils/useOnline"; //custom hook

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = fetchData([]); //custom hook
  const [searchText, setSearchText] = useState("");
  const [filteredList, setfilteredList] = fetchData(""); //custom hook

  // // useEffect hook
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // // Fetch Data from API
  // const fetchData = async () => {
  //   try {
  //     const data = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
  //     );
  //     const json = await data.json();

  //     //optional chaining operator
  //     setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
  //     setfilteredList(json?.data?.cards[2]?.data?.data?.cards);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const isOnline = useOnline();

  if (!isOnline) {
    return <div>🔴 Offline</div>;
  }

  return listOfRestaurants?.length === 0 ? (
    shimmer()
  ) : (
    <div className="body bg-slate-200">
      <div className="filter flex justify-between my-3">
        <div className="search bg-red-50 outline pl-2">
          <input
            type="text"
            className="search-box"
            placeholder="Search for Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn outline-0 hover:bg-pink-700 text-black font-bold py-2 px-4 rounded "
            onClick={() => {
              const newList = filterData(listOfRestaurants, searchText);
              setfilteredList(newList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn outline bg-pink-50 hover:bg-pink-700 text-black font-bold py-2 px-4 rounded"
          onClick={() => {
            const newList = filteredList.filter(
              (res) => res.data.avgRating > 4
            );
            setfilteredList(newList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {/* link tag is used here to link the restaurant card to the individudal restaurant page 
          and make it clickable ,
          it send us to the specified url in to tag where already the restaurant page is builted*/}
        {filteredList.map((res) => (
          <Link key={res.data.id} to={"/restaurants/" + res.data.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
