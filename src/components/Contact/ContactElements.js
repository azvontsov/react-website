import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    margin-bottom: 50px;
    margin: 10px auto;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    /* padding: 50px 50px; */
  }
`;
export const ContactInputWrap = styled.div`
  max-width: 1200px;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: stretch;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    margin-bottom: 50px;
    margin: 10px auto;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #0c0c0c;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ContactH2 = styled.h2`
  font-size: 1.5rem;
  color: #01bf71;
`;
export const ContactH3 = styled.h2`
  font-size: 1rem;
`;
export const ContactP = styled.p`
  max-width: 900px;
  font-size: 1rem;
  text-align: center;
`;
