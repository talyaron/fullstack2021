import React , {useState,useEffect} from 'react'
import './style/profile.scss';
import motion from 'framer-motion';
import axios from 'axios';
import FormAddress from './profileComp/FormAddress';
import ProffesionalDetails from './profileComp/ProffesionalDetails';
import FormProffesion from './profileComp/FormProffesion';
import ContactDetails from './profileComp/ContactDetails';

const userDemo = {
    name:'Romy Yuval',
    email:'lalala@gmail.com',
    descriotion:'lalalalalala',
    img:'data:image/jpeg;base64,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',
    country:'Israel',
    city:"Raanana",
    address:"Moshe Dayan20",
    lastEntry: '09.01.2021',
    companies:['Apple ,facebook'],
    linkdInProfile: 'https://linkdin.com',
    phone: "+972547554056",
    type: 'Mentee',
    fieldsOfKnowledge: ['History', 'Math' , 'Finance'],
    sectors:'eduction',
    profession:'Finance'
}

const contactInfo = {country:userDemo.country,city:userDemo.city,address:userDemo.address,email:userDemo.email,
    phone:userDemo.phone,linkdInProfile:userDemo.linkdInProfile}
const companyDetails = ['Company Name', 'Discription','Sectors','Startup Stage','Website',
'Link One Page']

const mentorDetails = ["The Escort Offer",userDemo.sectors,"Start Up Stage" , "description of field", "Website"]

interface ProfileProps{
    id:String;
}


export function Profile (props:ProfileProps) {

     const {id} = props;
     const [profileImg,setProfileImg] = useState("data:image/png;base64,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")
     const [userId , setUserId] = useState(id)
     const [isMentee , setIsMentee] = useState(true)
     const [isMentor , setIsMentor] = useState(false)
     const [editAddress , setEditAddress] = useState(false)
     const [editCompany , setEditCompany] = useState(false)
     const [userDetails , setUserDetails] = useState({userDemo})


    //  useEffect(() => {
    //     (async () => {
    //       const { data } = await axios.get(`/api/users/get-user?id=${id}`)
    //       const {user} = data
    //       setUserDetails(user)
    //       MentorOrMentee(user.type)
    //       console.log(user)
    //     })();
    //   }, [])

    //   function MentorOrMentee(type:string){
    //     if(type === "mentee") {
    //         setIsMentee(true)
    //         setIsMentor(false)
    //       } else if(type === "mentor") {
    //         setIsMentee(false)
    //         setIsMentor(true)
    //       }
    //   }

    function changeImage(ev:any){
        console.dir(ev.target.files);
        const [file] = ev.target.files;
        setProfileImg(URL.createObjectURL(file));
    }

    function editAddressDetails(){
        setEditAddress(!editAddress)
        
    }
    function editCompanyDetails(){
        setEditCompany(!editCompany)
       
    }
    
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
        {editAddress?<FormAddress userId={userId} contactInfo={contactInfo}/>:<ContactDetails contactInfo={contactInfo} />}
        </div>
        <div className='profile_nameProffession'>
            <h1 style={{marginTop:'-5px'}}>{userDemo.name}</h1>
            <h2 style={{fontSize:'25px',marginTop:'-5px'}}>{userDemo.profession}</h2>
        </div>
        <div className="profile_companyDetails">
        <div className='profile_companyDetails_header'>
                {isMentee?<h2 className='profile_companyDetails_header-title'>My Company</h2>:
                <h2 className='profile_companyDetails_header-title'>My Proffesional Details</h2>}  
                <div className='profile_companyDetails_header-edit' onClick={editCompanyDetails}>✏️</div>
                </div>
                {editCompany?
                <FormProffesion isMentee={isMentee} companyDetails={companyDetails} mentorDetails={mentorDetails}/>:
                <ProffesionalDetails companyDetails={companyDetails} mentorDetails={mentorDetails} 
                isMentee={isMentee} />}
                
        </div>
    </div>
  )
}

export default Profile