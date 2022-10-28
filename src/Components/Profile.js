import React from "react";
import styled from "styled-components";
import image from "../Assets/jide-profile-pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraAlt, faShare, faSquareShareNodes } from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  isolation: isolate;
  align-self: stretch;

  .share-icon {
    font-size: 20px;
    color: #98a2b3;
    position: relative;
    border: 1px dashed #d0d5dd;
    border-radius: 50px;
    padding: 10px;
    top: -80px;
    right: -150px;
    display: none;

    @media (min-width: 1200px) {
      top: -80px;
      right: -496px;  
      display: block;
    }
  }
  .share-icon:hover {
    border: 1px solid #d0d5dd;
    border-radius: 20px;
    background: #d0d5dd;
  }

  .share-icon2 {
    font-size: 20px;
    color: #98a2b3;
    position: relative;
    border: 1px dashed #d0d5dd;
    border-radius: 50px;
    padding: 10px;
    top: -80px;
    right: -150px;

    @media (min-width: 1200px) {
      display: none;
    }
  }
  .share-icon2:hover {
    border: 1px solid #d0d5dd;
    border-radius: 20px;
    background: #d0d5dd;
  }
`;


const StyledImg = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  vertical-align: middle;
  background: url(${image});
  border-radius: 275px;
  width: 80px;
  height: 80px;


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
    :focus {
      background: url(${image});
      border: 100px solid black;
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
      <div>
        <StyledImg>
          <FontAwesomeIcon icon={faCameraAlt} className="camera-icon" size="xl" />
        </StyledImg>
        <FontAwesomeIcon icon={faShare} className="share-icon" size="xl" />
        <FontAwesomeIcon icon={faSquareShareNodes} className=" share-icon2" size="xl" />
      </div>
      <StyledTitle id="twitter">@bossjidex</StyledTitle>
      <StyledTitle hidden id="debugger">
        debugger
      </StyledTitle>
    </Section>
  );
};

export default Profile;
