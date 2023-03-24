import styled from "@emotion/styled";
import { useRef, useState } from "react";
import Slider from "react-slick";
import Tag from "../components/common/Tag";
import Title from "../components/common/Title";
import Carousel from "../components/skill/Carousel";
import { SkillContent } from "../components/skill/content";

const Skill = () => {
  const [activeTag, setActiveTag] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  const onClickTag = (i: number) => {
    setActiveTag(i);
    sliderRef.current?.slickGoTo(i);
  };

  return (
    <SkillContainer>
      <Title page="SKILL" content="주로 사용하는 기술들이에요." />
      <div className="tagBox">
        {SkillContent.map((item, i) => (
          <Tag
            key={item.title}
            isActive={activeTag === i}
            onClick={() => onClickTag(i)}
          >
            {item.title}
          </Tag>
        ))}
      </div>
      <Carousel setActiveTag={setActiveTag} sliderRef={sliderRef} />
    </SkillContainer>
  );
};

const SkillContainer = styled.div`
  padding: 60px 15vw;
  .tagBox {
    display: flex;
    gap: 8px 12px;
    flex-wrap: wrap;
    margin: 32px 0 20px 0;
    > div {
      cursor: pointer;
    }
  }
`;

export default Skill;
