import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IntroContent, IntroImgArr } from "../components/intro/content";
import TextFlick from "../components/intro/TextFlick";

const Intro = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <IntroContainer>
      <StyledSlider {...settings} className="fadein one">
        {IntroImgArr.map((item, i) => (
          <img src={item} alt="intro" key={i} />
        ))}
      </StyledSlider>
      <TextBox>
        <h1 className="fadein two">안녕하세요 :)</h1>
        <h1 className="fadein three">
          <TextFlick texts={IntroContent} />
        </h1>
        <h1 className="fadein four">
          개발자 <i>추혜연</i>입니다.
        </h1>
      </TextBox>
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  padding: 0 15vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.pink300};
  display: flex;
  align-items: center;
  gap: 40px;
  @keyframes fadein {
    0% {
      transform: translateY(28px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  .fadein {
    opacity: 0;
    animation: fadein ease-in 0.75s;
    animation-fill-mode: forwards;
  }
  .fadein.two {
    animation-delay: 0.5s;
  }
  .fadein.three {
    animation-delay: 1s;
  }
  .fadein.four {
    animation-delay: 1.5s;
  }
`;

const TextBox = styled.div`
  i {
    color: ${({ theme }) => theme.pink500};
  }
  > h1 {
    line-height: 74px;
    height: 74px;
    font-weight: 700;
    font-size: 60px;
    color: ${({ theme }) => theme.gray900};
  }
`;

const StyledSlider = styled(Slider)`
  height: 76vh;
  width: 57vh !important;
  img {
    border-radius: 20px;
    object-fit: cover;
  }
`;

export default Intro;
