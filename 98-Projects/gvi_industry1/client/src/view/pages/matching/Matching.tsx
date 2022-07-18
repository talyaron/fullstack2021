import axios from "axios";
import { useEffect } from "react";
import MatchingCard from "./components/MatchingCards";
import FilterMenu from "./components/FilterMenu";
import Search from "./components/Search";
import { Link, Outlet } from "react-router-dom";

interface MatchingProps {
  mentorsList: any;
  setMentorsList: Function;
  currentUser: any;
  currentSearch: any;
  setCurrentSearch: Function;
  checked: any;
  setChecked: Function;
}

const Matching = (props: MatchingProps) => {
  const {
    mentorsList,
    setMentorsList,
    currentUser,
    currentSearch,
    setCurrentSearch,
    checked,
    setChecked,
  } = props;

  useEffect(() => {
    console.log('mounted');
    
    (async () => {
      try {
        console.log(currentUser,"get mentors2");
        if (Object.keys(currentUser).length === 0)
          throw new Error("User is not logged in");
          
        console.log("get mentors");
        const { data } = await axios.post("/api/users/get-mentors", {
          currentUser,
        });

        const { allMentors } = data;
        setMentorsList(allMentors);
        console.log(allMentors);
      } catch (err) {
        console.error(err);
      }
    })();
    return () => {
      console.log('unMounted');
      
    }
  }, [currentUser]);

  //   const userid:any =  `{currentUser._id} `
  //  let  userId  = useParams();

  //  function handleSelectedUserId(currentUser:any){
  //  }

  return (
    <div className="matching">
      <Link to="/selected-mentors">Selected-mentors</Link>
      <Search
        currentSearch={currentSearch}
        setCurrentSearch={setCurrentSearch}
      />
      <FilterMenu checked={checked} setChecked={setChecked} />

      <MatchingCard mentorsList={mentorsList} />

      <Outlet />
    </div>
  );
};

export default Matching;
