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


export function Profile () {


    // let {userId} = useParams();
    const [companySec,setCompanySec] =useState(["CompanyName" ,"description", "sector" ,"stage","linkToOnePager"]) 
    const [mentorSec,setMentorSec] = useState(["escortOffer" , "sector" , 
    "start up stage","description","website"]) 

    const [userId , setUserId] = useState("")
    const [gotId , setGotId] = useState(false)
    const [mentorInitiative , setMentorInitiative] = useState<any>([])
     const [userName , setUserName] = useState({first:"first",last:"last"})
     const [userSector , setUserSector] = useState("sector")
     const [profilePic , setProfilePic] = useState(" ")
     const [contactInfo, setContactInfo] = useState({})
     const [companyInfo , setCompanyInfo] = useState<any>([])
     const [isInitiative , setIsInitiative] = useState(false)
     const [isMentee , setIsMentee] = useState(false)
     const [editAddress , setEditAddress] = useState(false)
     const [editCompany , setEditCompany] = useState(false)
     const [userDetails , setUserDetails] = useState<any>()

      useEffect(() => {
        (async () => {
          const { data } = await axios.get("/api/users/get-user");
          const { user } = data;
          setUserId(user._id)
          setGotId(true)
        })();
      }, []);
    
     if(gotId){
       getUserDetails()
     }

        async function getUserDetails(){

          const {data} = await axios.post('/api/users/get-userById',{userId});
          const userFound = data.user;          
          const type = userFound.type;
          
          if(type === "mentee") setIsMentee(true)
          if(type === "mentor") {
            
            const mentorInit = [userFound.escortOffer,userFound.sector,
            userFound.stage,userFound.description,"website"]
            setMentorInitiative(mentorInit)
            console.log(mentorInit);
            
            setIsMentee(false)  
          } 
          
          setUserDetails(userFound)
          setUserName(userFound.name)
          setUserSector(userFound.sector)
          
          const newContactInfo = {country:userFound.country,city:userFound.city,address:userFound.address,
          email:userFound.email,phone:userFound.phone,linkdInProfile:userFound.linkdInProfile}
          await setContactInfo(newContactInfo)
          await setProfilePic(userFound.image)
          await getInitiative(userId)
          setGotId(false)
        }
         
     const [loggedInUser, setloggedInUser] = useState({});
     const [currentUserType, setCurrentUserType] = useState("");

      async function getInitiative(userId:any){

        try {

          if(isMentee){

        const {data} = await axios.post('/api/initiatives/get-initiative',{userId});
        console.log(data);
        
        const companyName = data.userInitiative.companyName;
        const description = data.userInitiative.description;
        const sector = data.userInitiative.sector;
        const stage = data.userInitiative.stage;
        const linkToOnePager = data.userInitiative.linkToOnePager;
        
          const companyDetails = [companyName,description,sector,stage,linkToOnePager]
            setCompanyInfo(companyDetails)
            setIsInitiative(true)   
        }else if(!isMentee){
          
        }
      
      } catch (err) {
        console.error(err);
    }
        
      }


    function editAddressDetails(){
        setEditAddress(!editAddress)
    }

    function editCompanyDetails(){
        setEditCompany(!editCompany)
       
    }

    // useEffect(() => {
    //     //get data on the user and show the chosen user by id
    //     (async () => {
    //       try {
    //         const { data } = await axios.post("/api/users/get-LoggedIn-Profile");
    //         const { currentUser } = data;
        
         
    //         setloggedInUser(currentUser);
    //           setCurrentUserType(currentUser.type);
            
    //         if (!loggedInUser) {
    //           throw new Error("no profile");
    //         }
    //       } catch (err: any) {
    //         console.error(err.message);
    //       }
    //     })();
    //   }, []);
    
    
  return (
    <div className='profile'>
      <ProfileImage userId={userId} profilePic={profilePic}/>

        <div className='profile_contactInfo'>
        <div className='profile_contactInfo-edit' onClick={editAddressDetails}>✏️</div>
        <h1 style={{gridColumn:'1/11',gridRow:'2/3',fontSize:'17px',textAlign:'center'}}>Contact Information</h1>
        {editAddress?<FormAddress userId={userId} setEditAddress={setEditAddress} contactInfo={contactInfo }/>:
        <ContactDetails contactInfo={contactInfo} />}
        </div>
        <div className='profile_nameProffession'>
          <NameAndPro userName={userName} userSector={userSector}/>
        </div>
        <div className="profile_companyDetails">
        <div className='profile_companyDetails_header'>
                {isMentee?<h2 className='profile_companyDetails_header-title'>My Company</h2>:
                <h2 className='profile_companyDetails_header-title'>My Proffesional Details</h2>}  
                <div className='profile_companyDetails_header-edit' onClick={editCompanyDetails}>✏️</div>
                </div>
                {editCompany?
                <FormProffesion userId={userId} isMentee={isMentee} 
                mentorSec={mentorSec} companyInfo={companyInfo} companySec={companySec}/>:
                <ProffesionalDetails mentorInitiative={mentorInitiative} companyInfo={companyInfo} 
                companySec={companySec} mentorSec={mentorSec} isInitiative={isInitiative} isMentee={isMentee} />}
                
        </div>  
    </div>
  )
}

export default Profile