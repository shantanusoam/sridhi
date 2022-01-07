import React from "react";
import {
  WWOCCButton,
  ContactContainer,
  ContactForm,
  ContactImage,
  AboutContainerHeading,
  AboutContainerSubHeading,
} from "./ContactSEctionElements";
import logo from "../../images/distributor.png";
const ContactSection = ({ isOpen, toggle }) => {
  function refreshPage() {
    hide = "lol";
    window.location.reload();
  }
  var hide = "ContactUs";
  return (
    <ContactContainer id="ContactUs">
      <ContactForm>
        <div
          data-aidaform-widget="form-2019-12"
          data-url="https://shantanu.aidaform.com/contact-us-tires"
          data-width="100%"
          data-height="500px"
          data-do-resize
        ></div>
        <WWOCCButton className="p-8" onClick={refreshPage} id={`${hide}`}>
          Contact Us
        </WWOCCButton>
        {/* <WWOHeding>info@Sridhi.com</WWOHeding>
          <WWOHeding>Phone number: +1909-306-5570</WWOHeding> */}
      </ContactForm>

      <ContactImage>
        <AboutContainerHeading>Contact</AboutContainerHeading>
        <AboutContainerSubHeading>Keep In Touch</AboutContainerSubHeading>
        <img src={logo} alt="Logo Of KalTire" height="400em" />
      </ContactImage>
    </ContactContainer>
  );
};

export default ContactSection;
