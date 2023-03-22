import React, { MutableRefObject } from "react";
import Header from "./Header";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
  scrollRef: MutableRefObject<HTMLDivElement[]>;
}

const RootLayout = ({ children, scrollRef }: Props) => {
  return (
    <>
      <Header scrollRef={scrollRef} />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  > div {
    height: 100vh;
  }
`;

export default RootLayout;
