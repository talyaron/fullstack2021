import StarSvg from "./StarSvg";
import axios from 'axios'

import MessageForm1 from "./MessageForm1";
import Popup from "reactjs-popup";
//import "../styles/matching.scss";




// import SentReq from "./sentReq";

interface MatchingCardProps {
  usersList: any

}
const MatchingCard = (props: MatchingCardProps) => {
  const { usersList} = props
  async function handleSelectUser(selectedUserId: any) { await axios.post("/api/users/selected-user", { selectedUserId }) }
  async function handleSendReq(selectedUserId: any) { 
    
    const {data}= await axios.post("/api/users/requested-users", { selectedUserId }) 
    console.log(data);
  }




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
                {/* <MessageForm1  userId={user._id}/> */}
                
                {/* /====================================================== */}
                <Popup className="popUp" trigger={<button onClick={() => handleSendReq(user._id)} className='matching__wrapper_card_footer_request'>
                  Send Request               

                </button>} >
                <MessageForm1  userId={user._id}/>

                {/* <div>
      <form>
          <label>
              Select a reason for rejecting the request:
                <input type="text" name="name" /><br></br>
        </label>
        <label>       
              You can add a short message(optional):
                <input type="text" name="name" placeholder='(Up to 50 characters)' />
        </label>
                  <input type="submit" value="Submit" />
      </form>                           
    </div> */}
                </Popup>
                
              </div>
            </div>

            {/* <Popup  trigger={<button className='matching-card-flex__button' >Mismatch</button>}>
    <div>
      <form>
          <label>
              Select a reason for rejecting the request:
                <input type="text" name="name" /><br></br>
        </label>
        <label>       
              You can add a short message(optional):
                <input type="text" name="name" placeholder='(Up to 50 characters)' />
        </label>
                  <input type="submit" value="Submit" />
      </form>                           
    </div>
  </Popup> */}
            
          </div>



        )}
      </div>


    </div>
  )


  
}

export default MatchingCard