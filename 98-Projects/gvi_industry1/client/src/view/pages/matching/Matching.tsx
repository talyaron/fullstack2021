import axios from 'axios'
import { useEffect } from 'react'
import MatchingCard from './components/MatchingCards'

interface MatchingProps {
  mentorsList: any,
  setMentorsList: Function
  selectedUser: any
}

const Matching = (props: MatchingProps) => {

  const { mentorsList, setMentorsList, selectedUser } = props
  useEffect(() => {
    (async () => {
      const { data } = await axios.post('/api/users/get-mentors', { selectedUser })
      const { filterMentors } = data
      setMentorsList(filterMentors)
      console.log(selectedUser)
    })();
  }, [selectedUser])


  return (
    <div>

      <MatchingCard mentorsList={mentorsList} />

    </div>
  )
}

export default Matching