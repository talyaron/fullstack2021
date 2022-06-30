import axios from "axios";
import { useEffect, useState } from "react";
import StepperBar from "./StepperBar"





const steps = ['Personal Details', 'Your Company', 'Payment Details'];

const UserForm = (props: any) => {

  const { handleRegister, handLocalStorage, id, RegClassShow, RegTwoClassShow, handleShowWindowTwo } = props

  const [countryArray, setCountryArray] = useState([]);
  useEffect(() => {
    getCountries()
  }, [])

  async function getCountries() {
    const { data } = await axios.get('https://restcountries.com/v3.1/all')
    setCountryArray(data)
  }



  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});
  const totalSteps = () => {
    return steps.length;
  };
  const completedSteps = () => {
    return Object.keys(completed).length;
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <div>
      <form onSubmit={handLocalStorage} id={id} className={RegClassShow}>
        <StepperBar />
        <div className="formContainer">
          <div><h3>First Name</h3>
            <input type="text" name="firstName" required />
          </div>
          <div><h3>Last Name</h3>
            <input type="text" name="lastName" required />
          </div>
          <div><h3>Email</h3>
            <input type="email" name="email" required />
          </div>
          <div><h3>Phone</h3>
            <input type="text" name="phone" required />
          </div>
          <div><h3>LinkedIN Profile</h3>
            <input type="text" name="Linkedin" required />
          </div>
          <div><h3>Country</h3>
            <select name="country">
              <option hidden></option>
              {countryArray.map((country: any, i) => { return <option key={i} value={`${country.name.common}`}>{country.name.common}</option> })}
            </select>
          </div>
        </div>

        <button type="submit" onClick={() => { handleShowWindowTwo(); handleNext() }}>Next</button>
      </form>

      <form onSubmit={handleRegister} id={id} className={RegTwoClassShow}>
        <StepperBar />
        <div className="formContainer">
          <div><h3>Company Name</h3>
            <input type="text" name="companyName" required />
          </div>
          <div className="select-stage-sector"><h3>Startup Stage</h3>
            <select name="stage">
              <option hidden></option>
              <option value="friends-and-family">friends and family</option>
              <option value="pre-seed">pre-seed</option>
              <option value="seed">seed</option>
              <option value="round-a">round a</option>
              <option value="round-b-and-above">round b and above</option>
            </select>
          </div>
          <div className="select-stage-sector"><h3>Sector</h3>
            <select name="sectors" >
              <option hidden></option>
              <option value="eduction">Eduction</option>
              <option value="digital-health">digital health</option>
            </select>
          </div>
          <div><h3>Website</h3>
            <input type="text" name="website" required />
          </div>
          <div><h3>Link To Presentations</h3>
            <input type="text" name="presentations" required />
          </div>
          <div><h3>Link To One Pager</h3>
            <input type="text" name="linkToOnePager" required />
          </div>
          <div className="descriptionTextArea"><h3>A brief description fo the company concept</h3>
            <textarea name="description" required />
          </div>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default UserForm