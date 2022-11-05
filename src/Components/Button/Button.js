import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  gap: 8px;
  background: #D0D5DD;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  text-decoration: none;
  width: 355px;
  height: 68px;
  :hover {
    background: #EAECF0; 
  } 
  @media (min-width: 1200px) {
    width: 1152px;
    height: 76px;
  }
`;

const StyledTitle = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #101828;
  flex: none;
  order: 0;
  flex-grow: 0;


  @media (min-width: 1200px) {
    font-weight: 600px;
    line-height: 28px;
  }
`;

const Button = (props) => {
  return (
      <StyledLink to={props.link} id={props.id}>
        <StyledTitle>{props.title}</StyledTitle>
      </StyledLink>
  );
};

export default Button;
  