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
    currentUser,
    currentSearch,
    setCurrentSearch,
    filterOptions,
    setFilterOptions,
    checked,
    setChecked,
  } = props;

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
        // const userid: any = `{currentUser._id} `;
        //  let  userId  = useParams();

        //  function handleSelectedUserId(currentUser:any){
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    //<div className={matching?"matching showMatching":"dontShowMatching"}>
    <div className="matching ">
      <Link to="selected-mentors">Selected-mentors</Link>
      <Search
        currentSearch={currentSearch}
        setCurrentSearch={setCurrentSearch}
      />
      <FilterMenu
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
    </div>
  );
};

export default Matching;
