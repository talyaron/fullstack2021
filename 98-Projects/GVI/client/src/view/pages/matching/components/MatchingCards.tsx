import StarSvg from "./StarSvg";
import axios from "axios";
import { useState } from "react";
import CardProfile from "../../../components/CardProfile";

interface MatchingCardProps {
  usersList: any;
}
const MatchingCard = (props: MatchingCardProps) => {
  const { usersList } = props;
  const [cardClicked, setcardClicked] = useState(false);
  const [userClicked, setuserClicked] = useState<any>({});

  async function handleSelectUser(selectedUserId: any) {
    await axios.post("/api/users/selected-user", { selectedUserId });

  }

  async function handleCardProfile(ev: any) 
  {

    const userId = ev.target.id;
    const { data } = await axios.post("/api/users/get-userById", { userId });
    const userFound = data.user;
    setcardClicked(!cardClicked);
    await setuserClicked(userFound);   
  }

  try {
    return (
<div>

        {cardClicked ? (
          <CardProfile
          userClicked={userClicked}
          setcardClicked={setcardClicked}
          />
          ) : null}

        <h2 className="matching__title">Matchings that are appropriate for you</h2>
      {/* <div className={cardClicked ? "opacityZero" : ""}> */}
        <div className="matching__wrapper">
          {usersList
            ? usersList.map((user: any) => (
              <div className="matching__wrapper_card" key={user._id}>
                  <StarSvg
                    handleSelectUser={handleSelectUser}
                    userId={user._id}
                    />
                    <img
                      className="matching__wrapper_card_pic"
                      id={user._id}
                      src={
                        user.image ||
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      }
                      onClick={handleCardProfile}
                      alt=""
                      />
                    <p className="matching__wrapper_card_seen">Last Seen</p>

                    <div className="matching__wrapper_card_description">
                      <p>
                        {user.name.first} {user.name.last}
                      </p>
                      <p>{user.sector}</p>
                      <div className="matching__wrapper_card_footer ">
                        <a href={user.linkedInProfile}>
                          <img
                            className="matching__wrapper_card_footer_linkedin"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                            alt=""
                            />
                        </a>
                        <button className="matching__wrapper_card_footer_request">
                          Send Request
                        </button>
                      </div>
                    </div>
                  </div>
                ))
                : null}
          </div>
        </div>
    // </div>
   )}catch (error) {
     console.error(error);
     return null;
     
    };}

export default MatchingCard;
