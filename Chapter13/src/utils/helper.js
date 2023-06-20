export function filterData(listOfRestaurants, searchText) {
  return listOfRestaurants.filter((res) =>
    res.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
