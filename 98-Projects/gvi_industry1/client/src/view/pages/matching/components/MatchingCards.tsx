import StarIcon from "@mui/icons-material/Star";
import axios from 'axios'

interface MatchingCardProps {
  mentorsList: any
}
const MatchingCard = (props: MatchingCardProps) => {
  const { mentorsList } = props

  async function handleSelectUser(selectedUserId: string) {
    console.log(selectedUserId)
    const { data } = await axios.post("/api/users/selected-user" , {selectedUserId})
    console.log(data)
    
  }
  return (
    <div>
      <h2>Matchings that are appropriate for you</h2>
      <div className='matching__wrapper'>
        {mentorsList.map((mentor: any) =>
          <div className='matching__wrapper_card' key={mentor._id}>
            <StarIcon onClick={() => handleSelectUser(mentor._id)} />
            <img className='matching__wrapper_card_pic' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
            <div className='matching__wrapper_card_description'>
              <p>{mentor.fullName}</p>
              <p>Primary occupation</p>
              <div className='matching__wrapper_card_footer'>
                <img className='matching__wrapper_card_footer_linkedin' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="" />
                <button className='matching__wrapper_card_footer_request' >Send Request</button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default MatchingCard