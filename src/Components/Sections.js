import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 16px;
  @media (min-width: 1200px) {
    gap: 16px;
  }
`;

export const LinkSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;
  order: 1;
  align-self: stretch;

  @media (min-width: 1200px) {
    gap: 16px;
  }
`;