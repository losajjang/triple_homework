import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import ContentLogo from "./components/ContentLogo";
import MetricsContainer from "./components/MetricsContainer";
import AwardsContainer from "./components/AwardsContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <SectionContainer>
        <ResponsiveSection>
          <ContentLogo />
          <DetailSection>
            <MetricsContainer />
            <AwardsContainer />
          </DetailSection>
        </ResponsiveSection>
      </SectionContainer>
    </>
  );
}

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const ResponsiveSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
`;

export default App;
