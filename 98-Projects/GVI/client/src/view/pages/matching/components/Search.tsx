import React, { useEffect } from "react";
import axios from "axios";

interface MatchingProps {
  setUsersList: Function;
  currentUser: any;
  setCurrentUser: Function;
}

const Search = (props: MatchingProps) => {
  const { setUsersList, currentUser, setCurrentUser } = props;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/users/get-user");
      const { user } = data;
      setCurrentUser(user);
    })();
  }, []);

  async function getAllUsers() {
    const { data } = await axios.post("/api/users/get-users", { currentUser });
    const { filterUsers } = data;
    console.log(filterUsers);

    setUsersList(filterUsers);
  }

  async function getSearchResults(ev: any) {
    const currentSearch = ev.target.value;
    console.log(currentSearch);
    if (currentSearch === "") {
      console.log("empty");
    } else {
      const { data } = await axios.post("/api/users/get-search", {
        currentSearch,
      });
      const { allSearches } = data;
      console.log(allSearches);
      setUsersList(allSearches);
    }
  }
  return (
    <div className="matching__search">
      <input
        className="matching__search_input"
        type="text"
        name="inputText"
        onChange={getSearchResults}
        placeholder="Type full name..."
      />
      {/* <button>search</button> */}
      {/* {currentSearch.map((search: any) => {
        return <h2>country:{search.country}</h2>;
      })} */}
      <span className="material-symbols-outlined">search</span>
    </div>
  );
};

export default Search;
