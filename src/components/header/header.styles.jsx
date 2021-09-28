import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  background-color: rgba(30, 26, 44, 0.6);
  height: 5rem;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const LogoLink = styled(Link)`
  color: #fff;
  margin: 0 2rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: 900;
  }
`;

export const HeaderRightContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderLink = styled(Link)`
  color: #fff;
  margin: 0 2rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #fff;
  }
`;
