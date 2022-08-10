import   {useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

interface RegisterMentorProps {
    countryArray: Array<object>,
    registerWindow: boolean,
    setRegisterWindow: Function,
    mentorWindow: boolean,
    setMenteeWindow: Function,
    handleCloseRegisterWindow: Function
    firstSection: string,
    secondSection: string,
    thirdSection: string,
    showProgressBar: string,
    handleToggleShowSections: Function,
    handleBackToggleShowSections: Function,
    handleBackToSelection: Function,
    handleBackToggleShowThirdSection: Function
    handleToggleShowThirdSection: Function,
    setCurrentUserType:Function;
}

const steps = [
    'personal details',
    'Your company',
    'payment details',
];

const RegisterMentor = (props: RegisterMentorProps) => {
    const navigate = useNavigate();
    const { handleToggleShowThirdSection, handleBackToggleShowThirdSection, firstSection, secondSection, thirdSection, showProgressBar, handleToggleShowSections, handleBackToggleShowSections, handleBackToSelection,  countryArray, mentorWindow, handleCloseRegisterWindow,setCurrentUserType } = props;

    const [activeStep, setActiveStep] = React.useState(0);
    
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [imageFile , setImageFile] = useState<any>()
    const [profilePic, setProfilePic] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC");

    async function handleMentorForm(ev: any) {
        ev.preventDefault()
        try {
            const first = ev.target.elements.first.value;
            const last = ev.target.elements.last.value;
            const password = ev.target.elements.password.value;
            const email = ev.target.elements.email.value;
            const phone = ev.target.elements.phone.value;
            const linkedInProfile = ev.target.elements.linkedInProfile.value;
            const country = ev.target.elements.country.value;
            const FieldsOfKnowledged = ev.target.elements.FieldsOfKnowledged.value;
            const stage = ev.target.elements.startupStage.value;
            const sector = ev.target.elements.sector.value;
            const description = ev.target.elements.description.value;
            // const profilePic = ev.target.elements.profilePic.value;
            const image = profilePic;
            const type = 'mentor';
            const name = { first, last };


            const user = { name, password, image, description, linkedInProfile, email, country, phone, sector, stage, FieldsOfKnowledged, type };


            const userData = await axios.post('/api/users/add-user', { user });
            console.log(userData);
            
            // Already exists CHECK
            if (userData.data === 'Already exists') {
                window.alert('Already Exists')
            }


        } catch (error) {
            console.error(error);
        }

    }

    async function saveImage(ev:any){

        const image = ev.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(image)
        reader.onloadend = async () => {
        await setImageFile(`${reader.result}`)
        const imageFile = reader.result
        const {data} = await axios.post('/api/profile/saveImage',{imageFile})
                const ImgUrl = data.result.url;
                setProfilePic(ImgUrl)
                }
    }


    function moveToMainPage(){
        console.log("go to main page");
        setCurrentUserType("mentor")
         navigate(`mainPage`);
      }

    return (
        <div className={mentorWindow ? "background-overlay" : "back"}>
            <div className={mentorWindow ? "form__wrapper" : "back"}>
                <div className={showProgressBar}>
                    <button className="closeButton" onClick={() => { handleCloseRegisterWindow() }}>X</button>
                </div>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <form onSubmit={handleMentorForm}>
                    <div className={firstSection}>
                        <div className="firstSectionWrapper">
                            <div className="firstSection">
                                <div className="inputBox">
                                    <div className="form__text">First Name</div>
                                    <input type="text" name="first" />
                                </div>
                                <div className="inputBox">
                                    <div className="form__text">Last Name</div>
                                    <input type="text" name="last" />
                                </div>
                                <div className="inputBox">
                                    <div className="form__text">Password</div>
                                    <input type="password" name="password" />
                                </div>
                                <div className="inputBox">
                                    <div className="form__text">Email</div>
                                    <input type="email" name="email" />
                                </div>
                                <div className="inputBox">
                                    <div className="form__text">Phone</div>
                                    <input type="text" name="phone" />
                                </div>
                                <div className="inputBox">
                                    <div className="form__text">LinkedIn profile</div>
                                    <input type="text" name="linkedInProfile" />
                                </div>
                                <div className="inputBox">
                                    <div className="form__text">Country</div>
                                    <select name="country">
                                        <option hidden></option>
                                        {countryArray.map((country: any, i) => { return <option key={i} value={`${country.name.common}`}>{country.name.common}</option> })}
                                    </select>
                                </div>
                                <div className="inputBox">
                                    <div className="form__text">Upload Profile Image</div>
                                    <input className="file-input" type="file" name="profilePic" onChange={saveImage}/>
                                </div>
                            </div>
                            <div className="btn-back-next">
                                <div className="back-btn"><button type="button" onClick={() => { handleBackToSelection(); setActiveStep(0) }}><span className="fa fa-angle-left"></span> BACK</button></div>
                                <button type="button" onClick={() => { handleToggleShowSections(); setActiveStep(1) }}>NEXT</button>
                            </div>
                        </div>
                    </div>

                    <div className={secondSection}>
                        <div className="secondSectionWrapper">
                            <div className="secondSection">
                                <div className="inputBox-SectorMentor">
                                    <div className="form__text">Fields Of Knowledged</div>
                                    <select name="FieldsOfKnowledged">
                                        <option hidden></option>
                                        <option value="ux">UX</option>
                                        <option value="development">Business Development</option>
                                    </select>
                                </div>
                                <div className="inputBox">
                                    <div className="form__text">Startup Stage that you are willing to work on</div>
                                    <select name="startupStage" >
                                        <option hidden></option>
                                        <option value="friends-and-family">friends and family</option>
                                        <option value="pre-seed">pre-seed</option>
                                        <option value="seed">seed</option>
                                        <option value="round-a">round a</option>
                                        <option value="round-b-and-above">round b and above</option>
                                    </select>
                                </div>
                                <div className="inputBox">
                                    <div className="form__text">Steps in the learning system that I am willing to accompany</div>
                                    <select name="100steps" >
                                        <option hidden></option>
                                        <option value="step-one">Step one</option>
                                        <option value="step-ten">Step ten</option>
                                        <option value="a">a</option>
                                        <option value="b">b</option>
                                        <option value="c">c</option>
                                    </select>
                                </div>
                                <div className="inputBox-SectorMentor">
                                    <div className="form__text">Sector</div>
                                    <select name="sector" >
                                        <option hidden></option>
                                        <option value="education">Education</option>
                                        <option value="digital-health">digital health</option>
                                        <option value="c">c</option>
                                        <option value="d">d</option>
                                        <option value="e">E</option>
                                    </select>
                                </div>
                            </div>
                            <div className="inputBox-description">
                                <div className="form__text">Description of the field of specialization</div>
                                <input type="text" name="description" />
                            </div>
                            <div className="btn-back-next">
                                <div className="back-btn"><button type="button" onClick={() => { handleBackToggleShowSections(); setActiveStep(0) }}><span className="fa fa-angle-left"></span> BACK</button></div>
                                <div><input type='submit' value='NEXT' onClick={() => { handleToggleShowThirdSection(); setActiveStep(2) }} /></div>
                            </div>
                        </div>
                    </div>
                </form>

                <div className={thirdSection}>
                    <h1 className="welcomeNote__title">We're so happy to welcome you!</h1>
                    <div className="pic"></div>
                    <p className="welcomeNote__text">Since you are part of the founding generation, we would like to offer you 15 days of free use without any additional commitment on your part</p>
                    <div className="btn-back-next">
                                    <div className="back-btn"><button type="button" onClick={() => { handleBackToggleShowThirdSection(); setActiveStep(0) }}><span className="fa fa-angle-left"></span> BACK</button></div>
                                    <div><button  onClick={() => { moveToMainPage() }} >NEXT</button> </div>
                                </div>
                </div>
            </div>
        </div>

    )

}
export default RegisterMentor