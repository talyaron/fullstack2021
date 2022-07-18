import axios from "axios";
import { useEffect } from "react";
import MatchingCard from "./components/MatchingCards";
import FilterMenu from "./components/FilterMenu";
import Search from "./components/Search";
import { Link } from "react-router-dom";

interface MatchingProps {
  usersList: any;
  setUsersList: Function;
  currentUser: any;
  currentSearch: any;
  setCurrentSearch: Function;
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
    checked,
    setChecked,
  } = props;

  useEffect(() => {    
    (async () => {
      try {
        console.log(currentUser,"get mentors2");
        if (Object.keys(currentUser).length === 0)
          throw new Error("User is not logged in");
          
        console.log("get mentors");
        const { data } = await axios.post("/api/users/get-users", {
          currentUser,
        });

        const { filterUsers } = data;
        setUsersList(filterUsers);
        console.log(filterUsers);
      } catch (err) {
        console.error(err);
      }
    })();

  }, [currentUser]);

  //   const userid:any =  `{currentUser._id} `
  //  let  userId  = useParams();

  //  function handleSelectedUserId(currentUser:any){
  //  }

  return (
    //<div className={matching?"matching showMatching":"dontShowMatching"}>
    <div className="matching ">
      <Link to="/selected-mentors">Selected-mentors</Link>
      <Search
        currentSearch={currentSearch}
        setCurrentSearch={setCurrentSearch}
      />
      <FilterMenu checked={checked} setChecked={setChecked} />

      <MatchingCard usersList={usersList} />

      
    </div>
  );
};

export default Matching;
