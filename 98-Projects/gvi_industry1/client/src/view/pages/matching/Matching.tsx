import axios from 'axios'
import { useEffect } from 'react'
interface MatchingProps {
  mentorsList:any,
  setMentorsList:Function
}

const Matching = (props:MatchingProps) => {

  const {mentorsList,setMentorsList} = props

  useEffect(()=>{
    (async()=>{
      const {data} = await axios.get('/api/get-mentors')
      const allMentors = data.allMentors
      setMentorsList(allMentors)
    })();
  },[])


  return (
    <div>
      {mentorsList.map((mentor:any)=>
      <div key={mentor._id}>{mentor.fullName}</div>
      )}

  
    </div>
  )
}

export default Matching