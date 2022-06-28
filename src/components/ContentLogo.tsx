import React from "react";
import styled from "styled-components";
import contentLogo from "../static/images/triple2x.png";
import useFadeIn from "../hooks/useFadeIn";
import { Fadein } from "../types/fadein";

const ContentLogo: React.FC = () => {
  const [opacity, transY] = useFadeIn();

  return (
    <ContentLogoBox isVisible={opacity} transY={transY}>
      2019월 2월 기준
    </ContentLogoBox>
  );
};

const ContentLogoBox = styled.div<Fadein>`
  top: 150px;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  background-image: url(${contentLogo});
  background-repeat: no-repeat;
  background-size: 400px 338px;
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  color: #3a3a3ab3;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: translateY(${(props) => (props.transY ? "0px" : "10px")});
  transition: all 700ms ease-in-out 0ms;
`;

export default ContentLogo;
