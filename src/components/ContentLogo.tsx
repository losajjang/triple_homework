import React from "react";
import styled from "styled-components";
import { CONTENT_LOGO } from "../static/images";
import contentLogo from "../static/images/triple2x.png";

const ContentLogo = () => {
  return <ContentLogoBox>2019월 2월 기준</ContentLogoBox>;
};

const ContentLogoBox = styled.div`
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
`;

export default ContentLogo;
