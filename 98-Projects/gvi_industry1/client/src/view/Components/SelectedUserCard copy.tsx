//@ts-ignore
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//@ts-ignore
import StarIcon from "@mui/icons-material/Star";
import "../styles/card.scss";

interface CardProps {
  selectedUsers: any;
}
interface RequestCard{
  requests:any
}

const Card = (props: CardProps) => {

  const { selectedUsers } = props;

  function handle_send_request() {
    const handleClick = (e:any) => {
      e.preventDefault();
      console.log('The link was clicked.');

    }
  }

  return (
    <>
      {selectedUsers.map((selectedUser: any, i: any) =>
        <div className="card" key={i}>

          <div className="card__photo">
            <img src={selectedUser.image ? `${selectedUser.image}` : 'https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png'} />
          </div>

          <div className="card__center">
            <p>{selectedUser['name']['first']} {selectedUser['name']['last']}</p>

            <div className="card__flex">
              <img src={selectedUser.country ? `${selectedUser.country}` : 'https://flagsweb.com/Flag_Colouring_Page/WEBP/Germany_Flag_Colouring_Page.webp' }/>
              <a href={selectedUser.linkedInProfile ? `${selectedUser.linkedInProfile}` : 'https://www.linkedin.com/'}>
                <LinkedInIcon className="card__flex__linkdIn" style={{ fontSize: "30px" }} ></LinkedInIcon>
              </a>
            </div>

            <p className="card__center__company">{selectedUser.fieldsOfKnowledge}</p>
            <p className="card__center__profession">{selectedUser.sector}</p>
          </div>

          <div className="card__star">
            <StarIcon></StarIcon>
          </div>
          <button onClick ={handle_send_request} className="card__button"> Send-Requst</button>

        </div>
      )
      }
    </>
  );
};

export default Card;
