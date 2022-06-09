import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Container = styled.div`
  height: 100vh;
  background: #010606;
`;

export const GalleryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* background-color: #f7941d; */
  justify-content: center;
  margin-bottom: 2rem;
  height: 90vh;
  overflow-y: scroll;

  @media screen and (max-width: 1000px) {
    max-width: 900px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryImg = styled.img`
  height: 260px;
  width: 460px;
  margin: 10px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const GalleryTextWrapper = styled.div`
  display: flex;
  padding: 1rem;
  margin-left: 4rem;

  @media screen and (max-width: 768px) {
    margin-left: 1rem;
  }
`;

export const GalleryBtn = styled.button`
  color: #fff;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    color: #01bf71;
  }
  &.active {
    color: #01bf71;
  }
`;
