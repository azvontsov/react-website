import React from "react";

import {
  ContactContainer,
  ContactH1,
  ContactH2,
  ContactH3,
  ContactWrapper,
  ContactInputWrap,
  ContactP,
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
            <input type="text" />
            <input type="text" />
          </ContactInputWrap>
          <ContactInputWrap>
            <ContactH3>Contact us</ContactH3>
            <ContactH3>(202) 948-4734</ContactH3>
            <ContactH3>4849 Connecticute Ave NW</ContactH3>
          </ContactInputWrap>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Services;
