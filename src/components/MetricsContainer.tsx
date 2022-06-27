import React from "react";
import styled from "styled-components";

const MetricsContainer = () => {
  return (
    <MetricBox>
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

const MetricBox = styled.div``;

const MetricItem = styled.div`
  margin-bottom: 20px;
  font-family: sans-serif;
  font-size: 36px;
  color: #3a3a3a;
  letter-spacing: -1px;
  animation: fadein 700ms ease-in-out 100ms;

  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;

export default MetricsContainer;
