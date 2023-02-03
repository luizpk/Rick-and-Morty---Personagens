import styled from "styled-components";
import background from './Images/background.jpg'

export const Structure = styled.main`
  height: 100vh;
  width: 100vw;
  background-image: url(${background});
  background-position-x: -830px;
  background-position-y: 630px;
  background-size: 100%;
  font-family: $mainFont;
  scroll-behavior: smooth;
`