import styled from "@emotion/styled";
import { useState, useEffect, useRef, MutableRefObject } from "react";

interface Props {
  scrollRef: MutableRefObject<HTMLDivElement[]>;
}

const Header = ({ scrollRef }: Props) => {
  const [hide, setHide] = useState<boolean>(false);
  const [pageY, setPageY] = useState<number>(0);
  const documentRef = useRef<Document>(document);
  const headerItem = ["INTRO", "ABOUT ME", "SKILL", "ACTIVITY", "PROJECT"];
  const scrollItem = (idx: number) => {
    scrollRef.current[idx]?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  const throttle = (callback: (event: any) => void, waitTime: number) => {
    let timerId: ReturnType<typeof setTimeout> | null = null;
    return (e: any) => {
      if (timerId) return;
      timerId = setTimeout(() => {
        callback.call(this, e);
        timerId = null;
      }, waitTime);
    };
  };

  const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
    documentRef.current.addEventListener("scroll", throttleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", throttleScroll);
  }, [pageY]);

  const onClickHeaberItem = (idx: number) => {
    scrollItem(idx);
  };

  return (
    <HeaderArea>
      <div>
        <HeaderWrap className={hide ? "hide" : ""}>
          {headerItem.map((item, i) => (
            <p key={item} onClick={() => onClickHeaberItem(i)}>
              {item}
            </p>
          ))}
        </HeaderWrap>
      </div>
    </HeaderArea>
  );
};

const HeaderArea = styled.div`
  position: fixed;
  > div {
    position: relative;
    width: 100%;
    height: 80px;
  }
`;

const HeaderWrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  top: 0;
  z-index: 1;
  gap: 40px;
  width: 100%;
  height: 60px;
  transition: 0.4s ease;
  padding-right: 60px;
  > p {
    line-height: 60px;
    cursor: pointer;
  }
  &.hide {
    transform: translateY(-80px);
  }
`;

export default Header;
