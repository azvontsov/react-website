import React, { useState } from "react";
import Video from "../../video/video.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroBtn,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Architecture</HeroH1>
        <HeroP>
          At Archilovers, we specialize in luxury. <br />
          Whether it's a commercial space in downtown for your thriving
          business, or your custom dream home where your family will make
          memories, our commercial and residential architects will bring your
          vision to life.
        </HeroP>
        <HeroBtnWrapper>
          <HeroBtn
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Contact Us {hover ? <ArrowForward /> : <ArrowRight />}
          </HeroBtn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
