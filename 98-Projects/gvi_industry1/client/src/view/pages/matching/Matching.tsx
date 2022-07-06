import axios from "axios";
import { useEffect } from "react";
import MatchingCard from "./components/MatchingCards";
import FilterMenu from "./components/FilterMenu";
import Search from "./components/Search";

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

      const { filterMentors } = data;
      setMentorsList(filterMentors);
      console.log(currentUser);
    })();
  }, [currentUser]);

  return (
    <div className="matching">
      <Search />
      <MatchingCard mentorsList={mentorsList} />
      <FilterMenu />
    </div>
  );
};

export default Matching;
