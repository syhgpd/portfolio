import React, { MutableRefObject } from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
  scrollRef: MutableRefObject<HTMLDivElement[]>;
}

const RootLayout = ({ children, scrollRef }: Props) => {
  return (
    <>
      <Header scrollRef={scrollRef} />
      {children}
    </>
  );
};

export default RootLayout;
