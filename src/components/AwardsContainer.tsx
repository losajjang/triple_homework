import React from "react";
import styled from "styled-components";
import awardPlayStore from "../static/images/play-store2x.png";
import awardApple from "../static/images/badge-apple4x.png";
import useFadein from "../hooks/useFadein";
import { Fadein } from "../types/fadein";

const AwardsContainer = () => {
  const [opacity, transY] = useFadein();

  return (
    <AwardBox  isVisible={opacity} transY={transY}>
      <AwardItem>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </AwardItem>
      <AwardItem>
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </AwardItem>
    </AwardBox>
  );
};

const AwardBox = styled.div<Fadein>`
  margin-top: 50px;
  white-space: nowrap;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: translateY(${(props) => (props.transY ? "0px" : "10px")});
  transition: all 700ms ease-in-out 200ms;
`;

const AwardItem = styled.div`
  display: inline-block;
  height: 54px;
  margin-right: 39px;
  padding: 5px 0 5px 62px;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: bold;
  color: #3a3a3acc;
  background-size: 54px 54px;
  background-position-x: left;
  background-position-y: top;
  background-repeat: no-repeat;
  line-height: 22px;

  &:first-child {
    background-image: url(${awardPlayStore});
  }
  &:last-child {
    background-image: url(${awardApple});
    margin-right: 0;
  }
`;

export default AwardsContainer;
