import react, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

interface RegisterMenteeProps {
  countryArray: Array<object>;
  registerWindow: boolean;
  setRegisterWindow: Function;
  menteeWindow: boolean;
  setMenteeWindow: Function;
  handleCloseRegisterWindow: Function;
  firstSection: string;
  thirdSection: string;
  secondSection: string;
  showProgressBar: string;
  handleToggleShowSections: Function;
  handleBackToggleShowSections: Function;
  handleBackToSelection: Function;
  handleBackToggleShowThirdSection: Function;
  handleToggleShowThirdSection: Function;
}

const steps = ["personal details", "Your company", "payment details"];

const RegisterMentee = (props: RegisterMenteeProps) => {
  const navigate = useNavigate();
  const {
    handleToggleShowThirdSection,
    handleBackToggleShowThirdSection,
    firstSection,
    secondSection,
    thirdSection,
    showProgressBar,
    handleToggleShowSections,
    handleBackToggleShowSections,
    handleBackToSelection,
    registerWindow,
    setRegisterWindow,
    countryArray,
    menteeWindow,
    setMenteeWindow,
    handleCloseRegisterWindow,
  } = props;

  const [activeStep, setActiveStep] = React.useState(0);
  // const [isImage, setIsImage] = useState(false);
  const [imageFile, setImageFile] = useState<any>();
  const [profilePic, setProfilePic] = useState(" ");

  async function handleMenteeForm(ev: any) {
    ev.preventDefault();
    console.log("handleMenteeForm");
    try {
      setActiveStep(3);
      const first = ev.target.elements.first.value;
      const last = ev.target.elements.last.value;
      const password = ev.target.elements.password.value;
      const email = ev.target.elements.email.value;
      const phone = ev.target.elements.phone.value;
      const linkedInProfile = ev.target.elements.linkedInProfile.value;
      const country = ev.target.elements.country.value;
      const companyName = ev.target.elements.companyName.value;
      const stage = ev.target.elements.startupStage.value;
      const sector = ev.target.elements.sector.value;
      const webSite = ev.target.elements.website.value;
      const presentations = ev.target.elements.presentations.value;
      const linkToOnePager = ev.target.elements.linkToOnePager.value;
      const description = ev.target.elements.description.value;
      const image = profilePic;

      const type = "mentee";
      const name = { first, last };

      const user = {
        name,
        password,
        image,
        description,
        linkedInProfile,
        email,
        country,
        phone,
        sector,
        stage,
        type,
      };
      console.log(user);

      const userData = await axios.post("/api/users/add-user", { user });

      const { data } = userData;
      console.log(data);
      const { result } = data;

      const ownerUserId = result._id;

      // Already exists CHECK
      if (userData.data === "Already exists" || userData.data == null) {
        window.alert("User Already Exists. Please try deferent email:)");
      }
      // Already exists CHECK
      let ownerName = name;
      const initiative = {
        ownerName,
        sector,
        companyName,
        description,
        stage,
        webSite,
        linkToOnePager,
        presentations,
        ownerUserId,
      };

      await axios.post("/api/initiatives/add-initiative", { initiative });

     
    } catch (err) {
      console.error(err);
    }
  }

  function saveImage(ev: any) {
    const image = ev.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      await setImageFile(`${reader.result}`);
      const imageFile = reader.result;
      const { data } = await axios.post("/api/profile/saveImage", {
        imageFile,
      });
      const ImgUrl = data.result.url;

      setProfilePic(ImgUrl);
    };
  }


function moveToMainPage(){
  console.log("go to main page");
  navigate("/mainPage");
}



  return (
    <div>
      <div className={menteeWindow ? "background-overlay" : "back"}>
        <div className={menteeWindow ? "form__wrapper" : "back"}>
          <div className={showProgressBar}>
            <button
              className="closeButton"
              onClick={() => {
                handleCloseRegisterWindow();
              }}>
              X
            </button>
          </div>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <form onSubmit={handleMenteeForm}>
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
                    <div className="form__text">LinkdIN profile</div>
                    <input type="text" name="linkedInProfile" />
                  </div>
                  <div className="inputBox">
                    <div className="form__text">Country</div>
                    <select name="country">
                      <option hidden></option>
                      {countryArray.map((country: any, i) => {
                        return (
                          <option key={i} value={`${country.name.common}`}>
                            {country.name.common}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="inputBox">
                    <div className="form__text">Upload Profile Image</div>
                    <input
                      className="file-input"
                      type="file"
                      name="profilePic"
                      onChange={saveImage}
                    />
                  </div>
                </div>
                <div className="btn-back-next">
                  <div className="back-btn">
                    <button
                      type="button"
                      onClick={() => {
                        handleBackToSelection();
                        setActiveStep(0);
                      }}>
                      <span className="fa fa-angle-left"></span> BACK
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        handleToggleShowSections();
                        setActiveStep(1);
                      }}>
                      NEXT
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={secondSection}>
              <div className="secondSectionWrapper">
                <div className="secondSection">
                  <div className="inputBox">
                    <div className="form__text">Company Name</div>
                    <input type="text" name="companyName" />
                  </div>
                  <div className="inputBox">
                    <div className="form__text">Startup Stage</div>
                    <select name="startupStage">
                      <option hidden></option>
                      <option value="fff">friends and family</option>
                      <option value="pre-seed">pre-seed</option>
                      <option value="seed">seed</option>
                      <option value="round-a">round a</option>
                      <option value="round-b-and-above">
                        round b and above
                      </option>
                    </select>
                  </div>
                  <div className="inputBox">
                    <div className="form__text">Sector</div>
                    <select name="sector">
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
                </div>
                <div className="inputBox-description">
                  <div className="form__text">
                    A brief description fo the company concept
                  </div>
                  <input type="text" name="description" id="descriptionBox" />
                </div>
                <div className="btn-back-next">
                  <div className="back-btn">
                    <button
                      type="button"
                      onClick={() => {
                        handleBackToggleShowSections();
                        setActiveStep(0);
                      }}>
                      <span className="fa fa-angle-left"></span> BACK
                    </button>
                  </div>
                  <div>
                    <input
                      type="submit"
                      value="NEXT"
                      onClick={() => {
                        handleToggleShowThirdSection();
                        setActiveStep(2);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className={thirdSection}>
            <h1 className="welcomeNote__title">
              We're so happy to welcome you!
            </h1>
            <div className="pic"></div>
            <p className="welcomeNote__text">
              Since you are part of the founding generation, we would like to
              offer you 15 days of free use without any additional commitment on
              your part
            </p>
            <div className="btn-back-next">
              <div className="back-btn">
                <button
                  type="button"
                  onClick={() => {
                    handleBackToggleShowThirdSection();
                    setActiveStep(0);
                  }}>
                  <span className="fa fa-angle-left"></span> BACK
                </button>
              </div>
              <div>
                <button  onClick={() => { moveToMainPage() }} >NEXT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterMentee;
