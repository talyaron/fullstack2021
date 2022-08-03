import React from 'react'
import '../styles/cardProfile.scss'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from '@mui/material';

//@ts-ignore
interface CardProfileProps{
  userClicked:any,
  setcardClicked:Function
}
function CardProfile(props:CardProfileProps) {
  const {userClicked,setcardClicked} = props
  console.log(userClicked)
  function handleGoBack(){
    setcardClicked(false)

  }
  return (
    <div className='cardProfile'>
      <div className='cardProfile__flex'>
     <h1 style={{color:"black"}}>{userClicked.name.first} {userClicked.name.last}</h1>
     <h3 className="cardProfile__flex__sector" style={{color:"black"}}>{userClicked.sector}</h3>
     <h2 className="cardProfile__flex__company" style={{color:"black"}}>{userClicked.company} company</h2>
     <h4 className="cardProfile__flex__fieldsOfKnowledge" style={{color:"black"}}>{userClicked.fieldsOfKnowledge}</h4>
     </div>
     <p className="cardProfile__description" style={{color:"black"}}>{userClicked.description}</p>

     <div className="cardProfile__countryLink">
     <img src={userClicked.country ? `${userClicked.country}` : 'https://commons.wikimedia.org/wiki/File:Flag_of_Australia.svg' }/>
              <a href={userClicked.linkedInProfile ? `${userClicked.linkedInProfile}` : 'https://www.linkedin.com/'}>
                <LinkedInIcon className="ardProfile__countryLink__linkdIn" style={{ fontSize: "30px" }} ></LinkedInIcon>
              </a>
            </div>
     <div  className ="cardProfile__photo">
            <img  id={userClicked._id}  src={userClicked.image ? `${userClicked.image} ` 
             : 'https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png'}  />
          </div>
          <button className="cardProfile__button" onClick={handleGoBack}> Back</button>







    
    



    </div>
  )
}

export default CardProfile