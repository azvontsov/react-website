import React from "react";
import Icon1 from "../../images/house1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import Icon4 from "../../images/svg-4.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Residential</ServicesH2>
            <ServicesP>
              Residential Architecture While well-known for high-end residential
              design, we also provide design services for additions and
              renovations, comparing the value of a total renovation versus a
              full or partial demolition while listening to your ideas, goals
              and financial objectives.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Comercial</ServicesH2>
            <ServicesP>
              Residential Architecture While well-known for high-end residential
              design, we also provide design services for additions and
              renovations, comparing the value of a total renovation versus a
              full or partial demolition while listening to your ideas, goals
              and financial objectives.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Site Planning</ServicesH2>
            <ServicesP>
              We combine regulatory requirements with topography, access,
              existing vegetation and solar orientation to determine the best
              use of your site, whether you are looking at a new location or
              want to determine growth patterns of your current location.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>Interior Design</ServicesH2>
            <ServicesP>
              If your current commercial interior is tired or outdated, we will
              be happy to help you update your corporate image. We also design
              functional, attractive interiors for new builds and up-fits,
              selecting finishes, furniture and fixtures.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
