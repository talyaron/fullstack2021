import axios from "axios";
import { useEffect } from "react";
import MatchingCard from "./components/MatchingCards";
import FilterMenu from "./components/FilterMenu";
import Search from "./components/Search";
import { Link, Outlet } from "react-router-dom";

interface MatchingProps {
  usersList: any;
  setUsersList: Function;
  currentUser: any;
  setCurrentUser:Function;
  currentSearch: any;
  setCurrentSearch: Function;
  filterOptions: any;
  setFilterOptions: Function;
  checked: any;
  setChecked: Function;

}

const Matching = (props: MatchingProps) => {
  const {
    usersList,
    setUsersList,
    currentSearch,
    setCurrentSearch,
    filterOptions,
    setFilterOptions,
    currentUser,
    setCurrentUser,
    checked,
    setChecked,

  } = props;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/users/get-user");
      const { user } = data;
      setCurrentUser(user);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (Object.keys(currentUser).length === 0)
          throw new Error("User is not logged in");
        const { data } = await axios.post("/api/users/get-users", {
          currentUser,
        });

        const { filterUsers } = data;
        setUsersList(filterUsers);
      

      } catch (error) {
        console.error(error);
      }
    })();
  }, [currentUser]);
  return (
    <div className="matching ">
      <Link to="selected-users">Selected-Users</Link>
      <Search
        currentSearch={currentSearch}
        setCurrentSearch={setCurrentSearch}
      />
      <FilterMenu
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
      <MatchingCard usersList={usersList}/>
    </div>
  );
};

export default Matching;
