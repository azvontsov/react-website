import styled from "styled-components";

export const ContactContainer = styled.div`
  /* height: 500px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin: 4rem auto;
`;

export const ContactWrapper = styled.div`
  margin: 15px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  grid-gap: 16px;
  padding: 0 15px;
  /* background-color: red; */

  @media screen and (max-width: 1000px) {
    margin-bottom: 50px;
    margin: 10px auto;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInputWrap = styled.div`
  max-width: 1200px;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: stretch;
  grid-gap: 16px;
  width: 100%;

  @media screen and (max-width: 1000px) {
    margin-bottom: 50px;
    margin: 10px auto;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 15px;
  background: #e8e6e6;
  box-shadow: inset 3px 3px 6px 0 rgba(0, 0, 0, 0.4),
    inset -3px -3px 6px 0 rgba(255, 255, 255, 0.3);
`;
export const ContactTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
  margin-bottom: 15px;
  background: #e8e6e6;
  box-shadow: inset 3px 3px 6px 0 rgba(0, 0, 0, 0.4),
    inset -3px -3px 6px 0 rgba(255, 255, 255, 0.3);
`;

export const ContactInputBtn = styled.input`
  width: 100%;
  padding: 15px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  background: #010606;
  color: #fff;

  &:hover {
    background: #01bf71;
    transition: all 0.2s ease-in-out;
  }
`;

export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #0c0c0c;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ContactH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
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

export const ConactIframe = styled.div`
  width: 450px;
  height: 450px;
  border: 0;
  background: red;
`;
