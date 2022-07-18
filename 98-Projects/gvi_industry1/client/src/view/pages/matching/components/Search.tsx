import React, { useEffect } from "react";
import axios from "axios";

interface MatchingProps {
  currentSearch: any;
  setCurrentSearch: Function;
}

const Search = (props: MatchingProps) => {
  const { currentSearch, setCurrentSearch } = props;

  async function getSearchResults(ev: any) {
    const currentSearch = ev.target.value;
    console.log(currentSearch);

    const { data } = await axios.get("/api/users/get-search");
    const { allSearches } = data;
    setCurrentSearch(allSearches);
    console.log(allSearches);
  }

  return (
    <div className={'matching__search'}>
      <input type="text" name="inputText" onChange={getSearchResults} />
      <button>search</button>
      {currentSearch.map((search: any) => {
        return <h2>country:{search.country}</h2>;
      })}
    </div>
  );
};

export default Search;
