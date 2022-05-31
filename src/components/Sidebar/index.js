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
          <SidebarLink to="residential" onClick={toggle}>
            Residential
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="commercial" onClick={toggle}>
            Commercial
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="contact" onClick={toggle}>
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
