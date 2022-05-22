import React from "react";
interface contactMeProps {
  showContactInfo: boolean;
  mode: boolean;
}
const ContactMe = (props: contactMeProps) => {
  const { showContactInfo, mode } = props;
  return (
    <div
      className="contactMe"
      data-contactInfo={showContactInfo ? "showContactInfo" : "hideContactInfo"}
      id={mode ? "dark" : "light"}
    >
        <h3>Contact Info</h3>
      <div className='contactMe__info'>
        
        <p className='contactMe__info--name'>Name: Shani Rom</p>
        <p className="contactMe__info--age">Age: 222</p>
        <p className="contactMe__info--languages">Languages:English and Hebrew </p>
        <p className="contactMe__info--education">
          Education:sit amet consectetur adipisicing elit. Eveniet et dolorem,
          quos distinctio magni ab possimus, pariatur optio illo maxime
          accusantium explicabo, itaque in? Asperiores porro quae blanditiis
          sint quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ratione maxime, cumque error rem ut sapiente temporibus molestiae
          aperiam, explicabo nihil, delectus odit alias praesentium eum nisi
          voluptatibus magni. Repellat, quo!
        </p>
      </div>
    </div>
  );
};

export default ContactMe;
