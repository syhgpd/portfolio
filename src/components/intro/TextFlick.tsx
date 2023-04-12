import { useState, useEffect } from "react";

interface Props {
  texts: string[];
}

const TextFlick = ({ texts }: Props) => {
  const [index, setIndex] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [forwards, setDirection] = useState<boolean>(true);
  const [skipCount, setSkipCount] = useState<number>(0);

  const skipDelay: number = 10;
  const speed: number = 110;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= texts[index].length) {
          setSkipCount((prev) => prev + 1);
          if (skipCount === skipDelay) {
            setDirection(false);
            setSkipCount(0);
          }
        } else {
          setOffset((prev) => prev + 1);
        }
      } else {
        if (offset === 0) {
          setDirection(true);
          setIndex((prev) => (prev + 1) % texts.length);
        } else {
          setOffset((prev) => prev - 1);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index, offset, forwards, skipCount]);

  const currentWord = texts[index].substr(0, offset);
  return <i>{currentWord}</i>;
};

export default TextFlick;
