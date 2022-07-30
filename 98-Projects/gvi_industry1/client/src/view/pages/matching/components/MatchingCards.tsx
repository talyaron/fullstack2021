import StarSvg from "./StarSvg";
import axios from 'axios'

interface MatchingCardProps {
  usersList: any

}
const MatchingCard = (props: MatchingCardProps) => {
  const { usersList} = props
  async function handleSelectUser(selectedUserId: any) { await axios.post("/api/users/selected-user", { selectedUserId }) }
  



  return (
    <div>
      <h2>Matchings that are appropriate for you</h2>
      <div className='matching__wrapper'>
        {usersList.map((user: any) =>
          <div className='matching__wrapper_card' key={user._id}>
            <StarSvg handleSelectUser={handleSelectUser} userId={user._id} />
            <img className='matching__wrapper_card_pic'  src={user.image||'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="" />
            <p className="matching__wrapper_card_seen">Last Seen</p>
            <div className='matching__wrapper_card_description'>
              <p>{user.name.first} {user.name.last}</p>
              <p>{user.sector}</p>
              <div className='matching__wrapper_card_footer'>
                <a href={user.linkedInProfile}>
                  <img className='matching__wrapper_card_footer_linkedin' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="" />
                </a>
                <button className='matching__wrapper_card_footer_request'>Send Request</button>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default MatchingCard