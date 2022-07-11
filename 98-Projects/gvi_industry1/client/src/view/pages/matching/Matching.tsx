import axios from 'axios'
import { useEffect } from 'react'
import MatchingCard from './components/MatchingCards'

interface MatchingProps {
  mentorsList: any,
  setMentorsList: Function
  currentUser: any
}

const Matching = (props: MatchingProps) => {

  const { mentorsList, setMentorsList, currentUser } = props
  useEffect(() => {
    (async () => {
      const { data } = await axios.post('/api/users/get-mentors', { currentUser })
      const { allMentors } = data
      setMentorsList(allMentors)
      console.log(currentUser)
    })();
  }, [currentUser])


  return (
    <div>

      <MatchingCard mentorsList={mentorsList} />

    </div>
  )
}

export default Matching