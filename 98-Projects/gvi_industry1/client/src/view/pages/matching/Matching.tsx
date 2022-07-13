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
    (async () => {
      const { data } = await axios.post("/api/users/get-mentors", {
        currentUser,
      });

      const { allMentors } = data;
      setMentorsList(allMentors);
      console.log(allMentors);
    })();
  }, []);

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
