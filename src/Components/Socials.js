import React from "react";
import styled from "styled-components";

const SocialsSection = styled.section`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  padding: 24px 0px;
  gap: 50px;  
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    width: 1280px;
  }
`;

const StyledImg = styled.img`
  width: 5%;
  border-radius: 10px;


  @media (min-width: 1200px) {
    width: 2%;
  }
`;

const Socials = () => {
  return (
    <SocialsSection>
      <StyledImg src={require("../Assets/github-logo.png")} alt="socials" />
      <StyledImg src={require("../Assets/slack-logo.png")} alt="socials" />
    </SocialsSection>
  );
};

export default Socials;
