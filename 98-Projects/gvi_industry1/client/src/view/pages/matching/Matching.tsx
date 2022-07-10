import axios from "axios";
import { useEffect } from "react";
import MatchingCard from "./components/MatchingCards";
import FilterMenu from "./components/FilterMenu";
import Search from "./components/Search";
import { Link } from "react-router-dom";

interface MatchingProps {
  mentorsList: any;
  setMentorsList: Function;
  currentUser: any;
}

const Matching = (props: MatchingProps) => {
  const { mentorsList, setMentorsList, currentUser } = props;
  useEffect(() => {
    (async () => {
      const { data } = await axios.post("/api/users/get-mentors", {currentUser});

      const { allMentors } = data;
      setMentorsList(allMentors);
      console.log(currentUser);
    })();
  }, []);

  return (
    <div className="matching">
      <Link to="/selected-mentors">Selected-mentors</Link>
      <Search />
      <MatchingCard mentorsList={mentorsList} />
      <FilterMenu />
    </div>
  );
};

export default Matching;
