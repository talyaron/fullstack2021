import { Modal } from "./Footer";

interface contactMeProps {
  showModal: Modal;
  mode: boolean;
}
const ContactMe = (props: contactMeProps) => {
  const { showModal, mode } = props;
  return (
    <div
      className="contactMe"
      data-contactInfo={ showModal === Modal.CONTACT ? "showContactInfo" : "hideContactInfo"}
      id={mode ? "dark" : "light"}>
      <h3>Contact Info</h3>
      <div className="contactMe__info">
        <p className="contactMe__info--name">Name: Shani Rom</p>
        <p className="contactMe__info--age">Age: 222</p>
        <p className="contactMe__info--languages">
          Languages:English and Hebrew{" "}
        </p>
        <p className="contactMe__info--education">
          Education:I studied in sheCodes web development after finshing my army
          service half a year after that I started studying fullstack in INT.
        </p>
      </div>
    </div>
  );
};

export default ContactMe;
