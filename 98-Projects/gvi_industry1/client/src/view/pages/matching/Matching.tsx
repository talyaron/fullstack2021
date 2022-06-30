import axios from 'axios'
import { useEffect } from 'react'
interface MatchingProps {
  mentorsList: any,
  setMentorsList: Function
  selectedUser: any
}

const Matching = (props: MatchingProps) => {

  const { mentorsList, setMentorsList, selectedUser } = props
  useEffect(() => {
    (async () => {
      const { data } = await axios.post('/api/get-mentors', {selectedUser} )
      const {filterMentors} = data
      setMentorsList(filterMentors)
      console.log(selectedUser)
    })();
  }, [selectedUser])


  return (
    <div>
      {mentorsList.map((mentor: any) =>
        <div key={mentor._id}>{mentor.fullName}</div>
      )}
    </div>
  )
}

export default Matching