import React from "react";
import styled from "styled-components";
import image from "../Assets/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraAlt } from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
  isolation: isolate;
  align-self: stretch;
  margin-bottom: 20px;
`;
const StyledImg = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  vertical-align: middle;
  width: 110px;
  height: 110px;
  background: url(${image});
  border-radius: 275px;
  width: 88px;
  height: 88px;

  .camera-icon {
    display: none;
    color: #fffff1;
    padding: 4px;
    overlay: hidden;
  }

  &:hover .camera-icon {
    display: block;
  }
  &:hover {
    background: linear-gradient(0deg, rgba(52, 64, 84, 0.75), rgba(52, 64, 84, 0.75)), url(${image});
  }

  @media (min-width: 1200px) {
    &:focus {
      background: url(${image});
      border: 5.5px solid #ebe9fe;
      border-radius: 275px;
    }
  }
`;
const StyledTitle = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #101828;
  flex: none;
  order: 0;
  flex-grow: 1;
  margin: 0px;
  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const Profile = () => {
  return (
    <Section>
      {/* <StyledImg
        id="profile__img"
        src={require("../Assets/profile.jpeg")}
        alt="avatar"
      /> */}

      <StyledImg>
        <FontAwesomeIcon icon={faCameraAlt} className="camera-icon" size="xl" />
      </StyledImg>
      <StyledTitle id="twitter">@bossjidex</StyledTitle>
      <StyledTitle hidden id="debugger">
        debugger
      </StyledTitle>
    </Section>
  );
};

export default Profile;
