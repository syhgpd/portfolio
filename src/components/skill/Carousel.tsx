import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { SkillContent } from "./content";
import DetailSkill from "./DetailSkill";
import { arrow } from "../../assets";

interface Props {
  setActiveTag: React.Dispatch<React.SetStateAction<number>>;
  sliderRef: React.RefObject<Slider>;
}

const Carousel = ({ setActiveTag, sliderRef }: Props) => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    beforeChange: (current: number, next: number) => setActiveTag(next),
  };

  return (
    <StyledSlider {...settings} ref={sliderRef}>
      {SkillContent.map((item) => (
        <DetailSkill
          title={item.title}
          content={item.content}
          key={item.title}
        />
      ))}
    </StyledSlider>
  );
};

const StyledSlider = styled(Slider)`
  > div {
    margin: 0 60px;
  }
  .slick-arrow {
    z-index: 10;
    width: 40px;
    height: 40px;
    background-image: url(${arrow});
    background-size: contain;
  }
  .slick-prev {
    left: 0;
    transform: translate(0, -50%) scaleX(-1);
    ::before {
      font-size: 0;
    }
  }
  .slick-next {
    right: 0;
    &::before {
      font-size: 0;
    }
  }
`;

export default Carousel;
