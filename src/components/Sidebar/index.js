import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            to="residential"
            onClick={toggle}
          >
            Residential
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            to="commercial"
            onClick={toggle}
          >
            Commercial
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            to="services"
            onClick={toggle}
          >
            Services
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            to="contact"
            onClick={toggle}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign in</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
