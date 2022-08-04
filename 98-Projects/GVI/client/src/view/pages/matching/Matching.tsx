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
  setCurrentUser: Function;
  
  filterOptions: any;
  setFilterOptions: Function;
  checked: any;
  setChecked: Function;

}

const Matching = (props: MatchingProps) => {
  const {
    usersList,
    setUsersList,
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
          console.log('/api/users/get-users')
        const { data } = await axios.post("/api/users/get-users", {
          currentUser,
        });
        console.log(data)

        const { filterUsers } = data;
        setUsersList(filterUsers);


      } catch (error) {
        console.error(error);
      }
    })();
  }, [currentUser]);


  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post("/api/users/get-users", { currentUser, });
        const{filterUsers} = data;
        setUsersList(filterUsers);


      } catch (error) {
        console.error(error);
      }
    })();
  }, []);










  return (
    <div className="matching ">
      <Link to="selected-users">Selected-Users</Link>
      <Search
        setUsersList={setUsersList}
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
      />
      <FilterMenu
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
        setChecked={setChecked}
        checked={checked}
        setUsersList={setUsersList}
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
        
      />
      <MatchingCard usersList={usersList} />
    </div>
  );
};

export default Matching;
