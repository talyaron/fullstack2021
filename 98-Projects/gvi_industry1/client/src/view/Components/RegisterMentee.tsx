import react, { useState } from "react";
import axios from 'axios';


interface RegisterMenteeProps {
    countryArray: Array<object>,
    registerWindow: boolean,
    setRegisterWindow: Function,
    menteeWindow: boolean,
    setMenteeWindow: Function,
    handleCloseRegisterWindow: Function
    firstSection: string,
    secondSection: string,
    showProgressBar: string,
    handleToggleShowSections: Function,
    handleBackToggleShowSections: Function,
    handleBackToSelection: Function


}

const RegisterMentee = (props: RegisterMenteeProps) => {
    const { firstSection, secondSection, showProgressBar, handleToggleShowSections, handleBackToggleShowSections, handleBackToSelection, registerWindow, setRegisterWindow, countryArray, menteeWindow, setMenteeWindow, handleCloseRegisterWindow } = props;





    async function handleMenteeForm(ev: any) {
        ev.preventDefault();
        console.log('submit')
        try {
            console.dir(ev.target);


            const first = ev.target.elements.firstName.value;
            const last = ev.target.elements.lastName.value;
            const password = ev.target.elements.password.value;
            const email = ev.target.elements.email.value;
            const phone = ev.target.elements.phone.value;
            const linkdinProfile = ev.target.elements.linkdinProfile.value;
            const country = ev.target.elements.country.value;
            const companyName = ev.target.elements.companyName.value;
            const stage = ev.target.elements.startupStage.value;
            const sector = ev.target.elements.sector.value;
            const website = ev.target.elements.website.value;
            const presentations = ev.target.elements.presentations.value;
            const linkToOnePager = ev.target.elements.linkToOnePager.value;
            const description = ev.target.elements.description.value;
            const profilePic = ev.target.elements.profilePic.value;


            const name = { first, last };

            const user = { name, password, profilePic, description, linkdinProfile, email, country, phone, sector, stage }
            const initiative = { sector, companyName, description, stage, website, linkToOnePager, presentations }
            console.log(user);
            console.log(initiative);
            //company not addded yet to mongo

            const userData = await axios.post('/api/users/add-user', { user });

            console.log(userData)
            // Already exists CHECK
            if (userData.data === 'Already exists') {
                window.alert('Already Exists')
            }
            // Already exists CHECK

            const intiativeData = await axios.post('/api/initiatives/add-initiative', { initiative });

        } catch (error) {
            console.error(error);
        }



    }






    return (
        // <div className={closeForm? "closeForm-on":"closeForm-off" }>
        <div >
            <div className={menteeWindow ? "form__wrapper" : "back"}>
                <div className={showProgressBar}>
                    <button className="closeButton" onClick={() => { handleCloseRegisterWindow() }}>X</button>
                    <div className="progressBar">
                        <div className="progressBar__stage-1">personal details</div>
                        <div className="progressBar__stage-2">Your company</div>
                        <div className="progressBar__stage-3">payment details</div>
                    </div>
                </div>
                <form onSubmit={handleMenteeForm}>
                    <div className={firstSection}>
                        <div className="firstSectionWrapper">
                            <div className="firstSection">
                                <div className="inputBox">
                                    <div className="form__text">First Name</div>
                                    <input type="text" name="firstName" />
                                </div>
                                <div className="inputBox">
                                    <div className="form__text">Last Name</div>
                                    <input type="text" name="lastName" />
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
                                    <div className="form__text">LinkdIN profile</div>
                                    <input type="text" name="linkdinProfile" />
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
                                    <input className="file-input" type="file" name="profilePic" />
                                </div>

                                {/* <button type="button" onClick={() => handleBackToSelection()}>BACK</button>
                                <button type="button" onClick={() => handleToggleShowSections()}>NEXT</button> */}
                            </div>
                            <div className="btn-back-next">
                            <div><button type="button" onClick={() => handleBackToSelection()}>BACK</button></div>
                            <div><button type="button" onClick={() => handleToggleShowSections()}>NEXT</button></div>
                            </div>
                        </div>
                    </div>

                    <div className={secondSection}>
                        <div className="secondSection-menteeWrapper">
                            <div className="secondSection-mentee">
                                <div className="inputBox">
                                    <div className="form__text">Company Name</div>
                                    <input type="text" name="companyName" />
                                </div>
                                <div className="inputBox">
                                    <div className="form__text">Startup Stage</div>
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
                                <div className="inputBox">
                                    <div className="form__text">Website</div>
                                    <input type="text" name="website" />
                                </div>
                                <div className="inputBox">
                                    <div className="form__text">Link To Presentations</div>
                                    <input type="text" name="presentations" id="" />
                                </div>
                                <div className="inputBox">
                                    <div className="form__text">Link To One Pager</div>
                                    <input type="text" name="linkToOnePager" />
                                </div>
                                <div className="inputBox-7">
                                    <div className="form__text">A brief description fo the company concept</div>
                                    <input type="text" name="description" id="descriptionBox" />
                                </div>

                                <button type="button" onClick={() => handleBackToggleShowSections()}>BACK</button>
                                <input type='submit' value='NEXT' />
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )

}
export default RegisterMentee
