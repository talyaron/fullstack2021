import react from "react";
import axios from 'axios'


interface RegisterMentorProps {
    countryArray: Array<object>,
    registerWindow: boolean,
    setRegisterWindow: Function,
}

const RegisterMentor = (props: RegisterMentorProps) => {
    const { registerWindow, setRegisterWindow, countryArray } = props;

    async function handleMentorForm(ev: any) {
        ev.preventDefault()

        const first = ev.target.elements.firstName.value;
        const last = ev.target.elements.lastName.value;
        const password = ev.target.elements.password.value;
        const email = ev.target.elements.email.value;
        const phone = ev.target.elements.phone.value;
        const linkdinProfile = ev.target.elements.linkdinProfile.value;
        const country = ev.target.elements.country.value;
        const FieldsOfKnowledged = ev.target.elements.FieldsOfKnowledged.value;
        const stage = ev.target.elements.startupStage.value;
        const sector = ev.target.elements.sector.value;
        const description = ev.target.elements.description.value;
        const profilePic = ev.target.elements.profilePic.value;
        const type = 'mentor';
        const name = { first, last };

        const user = { name, password, profilePic, description, linkdinProfile, email, country, phone, sector, stage, FieldsOfKnowledged, type };
        console.log(user);

        const userData = await axios.post('/api/users/add-user', { user });

        
    }


    return (
        <div className="form__wrapper">
            <button className="closeButton" onClick={() => { setRegisterWindow(false) }}>X</button>
            <div className="progressBar">
                <div className="progressBar__stage-1">personal details</div>
                <div className="progressBar__stage-2">Professional Details</div>
                <div className="progressBar__stage-3">payment details</div>
            </div>
            <form onSubmit={handleMentorForm}>
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
                            <input type="file" name="profilePic" />
                        </div>
                        <button>BACK</button>
                        <button>NEXT</button>
                    </div>
                </div>

                <div className="secondSection-mentorWrapper">
                    <div className="secondSection-mentor">
                        <div className="inputBox-1">
                            <div className="form__text">Fields Of Knowledged</div>
                            <select name="FieldsOfKnowledged" id='FieldsOfKnowledged'>
                                <option hidden></option>
                                <option value="ux">UX</option>
                                <option value="businessDevelopment">Business Development</option>

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
                            <select name="startupStage" >
                                <option hidden></option>
                                <option value="step-one">Step one</option>
                                <option value="step-ten">Step ten</option>
                                <option value="a">a</option>
                                <option value="b">b</option>
                                <option value="c">c</option>
                            </select>
                        </div>
                        <div className="inputBox">
                            <div className="form__text">Sector</div>
                            <select name="sector" >
                                <option hidden></option>
                                <option value="eduction">Eduction</option>
                                <option value="digital-health">digital health</option>
                                <option value="c">c</option>
                                <option value="d">d</option>
                                <option value="e">E</option>
                            </select>
                        </div>
                        <div className="inputBox-4">
                            <div className="form__text">Description of the field of specialization</div>
                            <input type="text" name="description" id="SpecializationDescription" />

                        </div>

                        <button>BACK</button>
                        <button value='submit'>next</button>
                    </div>
                </div>
            </form>
        </div>

    )

}
export default RegisterMentor