import React , {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './style/profile.scss';
// import motion from 'framer-motion';
import axios from 'axios';
import FormAddress from './profileComp/FormAddress';
import ProffesionalDetails from './profileComp/ProffesionalDetails';
import FormProffesion from './profileComp/FormProffesion';
import ContactDetails from './profileComp/ContactDetails';
import NameAndPro from './profileComp/NameAndPro';
import ProfileImage from './profileComp/ProfileImage';



const companyDetails = ['Company Name', 'Discription','Sectors','Startup Stage','Website',
'Link One Page']

const mentorDetails = ["The Escort Offer","finance","Start Up Stage" , "description of field", "Website"]

interface ProfileProps{
 
}


export function Profile (props:ProfileProps) {

    const {userId} = useParams();
    const id = userId;

  
     const [userName , setUserName] = useState()
     const [userSector , setUserSector] = useState(" ")
     const [contactInformation , setContactInfo] = useState({})
     const [companyInfo , setCompanyInfo] = useState<any>([])
     const [isMentee , setIsMentee] = useState(true)
     const [isMentor , setIsMentor] = useState(false)
     const [editAddress , setEditAddress] = useState(false)
     const [editCompany , setEditCompany] = useState(false)
     const [userDetails , setUserDetails] = useState()


     useEffect(() => {
        (async () => {
          const {data} = await axios.post('/api/users/get-userById',{id});
          console.log(data)
          const userFound = data.user;
          await getInitiative()
          setUserDetails(userFound)
          MentorOrMentee(userFound.type)
          setUserName(userFound.name)
          setUserSector(userFound.sector)
          console.log(userFound);
          const newContactInfo = {country:userFound.country,city:userFound.city,address:userFound.address,
            email:userFound.email,phone:userFound.phone,linkdInProfile:userFound.linkdInProfile}
            setContactInfo(newContactInfo)
        })();
      }, [])
     const [loggedInUser, setloggedInUser] = useState({});
     const [currentUserType, setCurrentUserType] = useState("");

      async function getInitiative(){
        const {data} = await axios.post('/api/initiatives/get-initiative',{userId});
        console.log(data)
        const companyDetails = [
          data.userInitiative.companyName,
          data.userInitiative.description,
          data.userInitiative.sector,data.userInitiative.stage,
          data.userInitiative.linkToOnePager]
          setCompanyInfo(companyDetails)
      }

      function MentorOrMentee(type:string){
        if(type === "mentee") {
            setIsMentee(true)
            setIsMentor(false)
          } else if(type === "mentor") {
            setIsMentee(false)
            setIsMentor(true)
          }
      }

    

    function editAddressDetails(){
        setEditAddress(!editAddress)
    }

    function editCompanyDetails(){
        setEditCompany(!editCompany)
       
    }

    useEffect(() => {
        //get data on the user and show the chosen user by id
        (async () => {
          try {
            const { data } = await axios.post("/api/users/get-LoggedIn-Profile");
            const { currentUser } = data;
        
         
            setloggedInUser(currentUser);
              setCurrentUserType(currentUser.type);
    
            if (!loggedInUser) {
              throw new Error("no profile");
            }
          } catch (err: any) {
            console.error(err.message);
          }
        })();
      }, []);
    
    
  return (
    <div className='profile'>
      <ProfileImage userId={userId}/>
        {/* <div className="profile_profilePic" >
           <img className="profile_profilePic-img" src={profileImg} alt="" />
        <label htmlFor="changeImage" className='profile_profilePic-changeImg'>
            <input type="file" id='changeImage'  accept="image/*" 
            onChange={changeImage}/>
        </label>
        </div> */}
        <div className='profile_contactInfo'>
        <div className='profile_contactInfo-edit' onClick={editAddressDetails}>✏️</div>
        <h1 style={{gridColumn:'1/11',gridRow:'2/3',fontSize:'17px',textAlign:'center'}}>Contact Information</h1>
        {editAddress?<FormAddress userId={id} setEditAddress={setEditAddress} contactInfo={contactInformation}/>:
        <ContactDetails contactInfo={contactInformation} />}
        </div>
        <div className='profile_nameProffession'>
          {/* <NameAndPro userName={userName} userSector={userSector}/> */}
            {/* <h1 style={{marginTop:'-5px'}}>{userDemo.name}</h1>
            <h2 style={{fontSize:'25px',marginTop:'-5px'}}>{userDemo.profession}</h2> */}
        </div>
        <div className="profile_companyDetails">
        <div className='profile_companyDetails_header'>
                {isMentee?<h2 className='profile_companyDetails_header-title'>My Company</h2>:
                <h2 className='profile_companyDetails_header-title'>My Proffesional Details</h2>}  
                <div className='profile_companyDetails_header-edit' onClick={editCompanyDetails}>✏️</div>
                </div>
                {editCompany?
                <FormProffesion userId={id} isMentee={isMentee} companyInfo={companyInfo} mentorDetails={mentorDetails}/>:
                <ProffesionalDetails companyInfo={companyInfo} mentorDetails={mentorDetails} 
                isMentee={isMentee} />}
                
        </div>
    </div>
  )
}

export default Profile