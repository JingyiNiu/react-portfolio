import styled from "styled-components";

export const BackToTopContainer = styled.div`
  width: 50px;
  height: 50px;
  color: #fff;
  background-color: #000;
  position: fixed;
  bottom: 100px;
  right: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
