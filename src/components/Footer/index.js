import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIconP,
} from "./FooterElements";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Discover</FooterLinkTitle>
              <FooterLink to="/">All About Our Firm & Team</FooterLink>
              <FooterLink to="/">More About Our Services</FooterLink>
              <FooterLink to="/">Request Additional Information</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">LinkedIn</FooterLink>
              <FooterLink to="/">GitHub</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Location</FooterLinkTitle>
              <SocialIconP to="/">4949 Connecticute Ave NW</SocialIconP>
              <SocialIconP to="/">Washington, DC</SocialIconP>
              <SocialIconP to="/">(202) 948-4734</SocialIconP>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome} to="/">
              Archilovers
            </SocialLogo>
            <WebsiteRights>
              © {new Date().getFullYear()} All rights reserved | Digital
              Marketing by azvontsov
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" area-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" area-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" area-label="GitHub">
                <AiFillGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
