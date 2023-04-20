import { useState } from "react";
import { useSearch } from "@/context/SearchContext";
import { BiSearch } from "react-icons/bi";

function Search() {
  const [search, setSearch] = useState("");
  const { filter, setFilter } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    search.trim() !== "" ? setFilter(search) : null;
    setSearch("");
  };

  console.log("search: ", search, "filter: ", filter);

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Book Title ..."
          value={search}
        />
        <button className="submit-btn" type="submit">
          <BiSearch />
        </button>
      </form>
    </div>
  );
}

export default Search;
