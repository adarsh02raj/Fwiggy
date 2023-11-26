import { FaSearch } from "react-icons/fa";
import { resList } from "./Recommended";
import { useEffect, useState } from "react";
import ResultResturant from "./ResultResturant";
import { Link } from "react-router-dom";

const Search = () => {
  const [resLists, setResLists] = useState(resList);
  const [getText, setGetText] = useState("");
  const [filterList, setFilterList] = useState([]);
  const handleSearch = (text) => {
    setGetText(text);
    const filtered = resLists.filter((res) =>
      res?.info?.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilterList(filtered);
  };
  useEffect(() => {
    handleSearch(getText);
  }, [getText]);
  return (
    <div className="searchComponent">
      <div className="search-box">
        <input
          className="search-input"
          type="text"
          placeholder="Search for restaurants..."
          value={getText}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <FaSearch />
      </div>
      <div className="resultRestaurant">
        {filterList.map((res) => {
          return (
            <Link
              className="card-link"
              key={res?.info?.id}
              to={"/restaurant/" + res?.info?.id}
            >
              <ResultResturant key={res?.info?.id} props={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Search;
