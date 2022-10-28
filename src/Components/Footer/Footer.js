import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  background: #ffffff;  
  @media (min-width: 1200px) {
    padding: 32px 0px;

  }

`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 2px 10px;
  gap: 2px;

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 1280px;
    padding: 2px 0px;

  }
`;

const StyledImg = styled.img`
  width: 30%;
  @media (min-width: 1200px) {
    width: 10%;
  }
`;
const StyledText = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #667085;
  @media (min-width: 1200px) {
    font-size: 16px;
    width: 380px;
    text-align: left;
  }
`;


const ZuriSvg = styled.svg `
height: 20px;
width: 300px;
font-size: 20px;
font-weight: 550;
word-spacing: 3px;
font-family: Arial, Helvetica, sans-serif;
`

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <ZuriSvg>
          <text x="0" y="15" fill="black" >Zuri  Internship </text>
          <circle cx="42" cy="12" r="3" fill="red" />
        </ZuriSvg>
        <StyledText>HNG Internship 9 Frontend Task</StyledText> 
        <StyledImg src={require("../../Assets/I4G.png")} alt="I4G" />
      </Container>
    </FooterSection>
  );
};

export default Footer;

