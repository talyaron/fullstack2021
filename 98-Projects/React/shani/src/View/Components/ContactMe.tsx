import { Modal } from "./Footer";

interface contactMeProps {
  showModal: Modal;
  mode: boolean;
}
const ContactMe = (props: contactMeProps) => {
  const { showModal, mode } = props;
  return (
    <div
      className={showModal === Modal.CONTACT?"contactMe showInfo":"contactMe hideInfo"}
      id={mode ? "dark" : "light"}>
      <h3>Contact Info</h3>
      <div className="contactMe__info">
      <p className="contactMe__info--number"><span>number:</span> 0123456</p>
        <a href='https://github.com/ShaniRom?tab=repositories' target="_blank" className="contactMe__info--git">git repository</a>
        <p className="contactMe__info--email"><span>email:</span> shanaynayrom@gmail.com</p>        
        <a href='' className="contactMe__info--linkdin"  target="_blank"> linkdin </a>
      </div>
    </div>
  );
};

export default ContactMe;
