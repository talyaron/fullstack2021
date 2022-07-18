import React , {useState,useEffect} from 'react'
import './style/profile.scss';
// import motion from 'framer-motion';
import axios from 'axios';
import FormAddress from './profileComp/FormAddress';
import ProffesionalDetails from './profileComp/ProffesionalDetails';
import FormProffesion from './profileComp/FormProffesion';
import ContactDetails from './profileComp/ContactDetails';
import NameAndPro from './profileComp/NameAndPro';



const companyDetails = ['Company Name', 'Discription','Sectors','Startup Stage','Website',
'Link One Page']

const mentorDetails = ["The Escort Offer","finance","Start Up Stage" , "description of field", "Website"]

interface ProfileProps{
    id:String;
}


export function Profile (props:ProfileProps) {

     const {id} = props;

     const [profileImg,setProfileImg] = useState("data:image/png;base64,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")
     const [userId , setUserId] = useState(id)
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
          const {data} = await axios.post('/api/users/get-userById',{id})
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
        const {data} = await axios.post('/api/initiatives/get-initiative',{userId})
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

    function changeImage(ev:any){
        console.dir(ev.target.files);
        console.log(ev.target.files);
        
        const [file] = ev.target.files;
        setProfileImg(URL.createObjectURL(file));
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
        <div className="profile_profilePic" >
           <img className="profile_profilePic-img" src={profileImg} alt="" />
        <label htmlFor="changeImage" className='profile_profilePic-changeImg'>
            <input type="file" id='changeImage'  accept="image/*" 
            onChange={changeImage}/>
        </label>
        </div>
        <div className='profile_contactInfo'>
        <div className='profile_contactInfo-edit' onClick={editAddressDetails}>✏️</div>
        <h1 style={{gridColumn:'1/11',gridRow:'2/3',fontSize:'17px',textAlign:'center'}}>Contact Information</h1>
        {editAddress?<FormAddress userId={userId} setEditAddress={setEditAddress} contactInfo={contactInformation}/>:
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
                <FormProffesion userId={userId} isMentee={isMentee} companyInfo={companyInfo} mentorDetails={mentorDetails}/>:
                <ProffesionalDetails companyInfo={companyInfo} mentorDetails={mentorDetails} 
                isMentee={isMentee} />}
                
        </div>
    </div>
  )
}

export default Profile