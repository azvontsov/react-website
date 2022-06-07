import React from "react";

import {
  ContactContainer,
  ContactH1,
  ContactH2,
  ContactH3,
  ContactWrapper,
  ContactInputWrap,
  ContactP,
  ContactForm,
  ContactInput,
  ContactTextarea,
  ContactInputBtn,
} from "./ContactElements";

const Services = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactH1>Contact Us</ContactH1>
        <ContactH2>Tell us about your needs</ContactH2>
        <ContactP>
          Thank you for your interest in Archilovers. <br /> We look forward to
          discovering what masterpiece we can design for you. <br />
          Filling out the form below in its entirety will ensure we are prepared
          to discuss your particular project and that we are using the most
          convenient way to contact you. Feel free to provide any additional
          information in the message section, including more details about your
          project or the best day and time to contact you.
        </ContactP>

        <ContactWrapper>
          <ContactInputWrap>
            <ContactForm
              action="https://formsubmit.co/azvontsov@gmail.com"
              method="POST"
            >
              <ContactInput
                type="text"
                name="First Name"
                placeholder="First Name"
                required
              />
              <ContactInput
                type="text"
                name="Last Name"
                placeholder="Last Name"
                required
              />
              <ContactInput
                type="text"
                name="email"
                placeholder="Email"
                required
              />
              <ContactInput
                type="text"
                name="Mobile No."
                placeholder="Mobile No."
                required
              />
              <ContactTextarea
                placeholder="Message"
                name="Message"
                required
              ></ContactTextarea>
              <ContactInputBtn type="submit" value="Send" />
            </ContactForm>
          </ContactInputWrap>
          <ContactInputWrap>
            <ContactH3>Contact us</ContactH3>
            <ContactH3>(202) 948-4734</ContactH3>
            <ContactH3>4849 Connecticute Ave NW</ContactH3>
            <ContactH3>Washington, DC</ContactH3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1250.6822621212943!2d-77.06835131184957!3d38.95248655678193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c9b82886a817%3A0x320db49c9deb5105!2s4849%20Connecticut%20Ave%20NW%2C%20Washington%2C%20DC%2020008!5e0!3m2!1sen!2sus!4v1654032991079!5m2!1sen!2sus"></iframe>
          </ContactInputWrap>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Services;
