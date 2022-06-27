import React from "react";
import styled from "styled-components";
import useFadein from "../hooks/useFadein";
import { Fadein } from "../types/fadein";

const MetricsContainer = () => {
  const [opacity, transY] = useFadein();

  return (
    <MetricBox isVisible={opacity} transY={transY}>
      <MetricItem>
        <strong>
          <span>350</span>만 명
        </strong>
        의 사용자
      </MetricItem>
      <MetricItem>
        <strong>
          <span>21</span>만 개
        </strong>
        의 리뷰
      </MetricItem>
      <MetricItem>
        <strong>
          <span>650</span>만 개
        </strong>
        의 저장
      </MetricItem>
    </MetricBox>
  );
};

const MetricBox = styled.div<Fadein>`
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: translateY(${(props) => (props.transY ? "0px" : "10px")});
  transition: all 700ms ease-in-out 100ms;
`;

const MetricItem = styled.div`
  margin-bottom: 20px;
  font-family: sans-serif;
  font-size: 36px;
  color: #3a3a3a;
  letter-spacing: -1px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export default MetricsContainer;
