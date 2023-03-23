import styled from "@emotion/styled";
import { useState } from "react";
import Tag from "../common/Tag";

interface Props {
  title: string;
  img: string;
  content: string;
  part: string[];
  skill: string[];
}

const Post = ({ title, content, part, skill, img }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <PostContainer
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <ImgBox isHover={isHover}></ImgBox>
      <ContentBox isHover={isHover}>
        <img src={img} alt="cover" />
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
          <div>
            {part.map((item) => (
              <Tag isActive={false}>{item}</Tag>
            ))}
          </div>
          <div>
            {skill.map((item) => (
              <Tag isActive={true}>{item}</Tag>
            ))}
          </div>
        </div>
      </ContentBox>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  position: relative;
  border-radius: 12px;
  cursor: pointer;
`;

const ImgBox = styled.div<{ isHover: boolean }>`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  > img {
    width: 100%;
    object-fit: contain;
    transition: all 0.3s;
    opacity: ${({ isHover }) => isHover && 0.3};
  }
`;

const ContentBox = styled.div<{ isHover: boolean }>`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  > img {
    width: 100%;
    object-fit: contain;
    transition: all 0.3s;
    opacity: ${({ isHover }) => isHover && 0.4};
  }
  > div {
    display: ${({ isHover }) => (isHover ? "block" : "none")};
    position: absolute;
    top: 0;
    padding: 48px 28px;
    > h1 {
      font-weight: 700;
      font-size: 36px;
      color: ${({ theme }) => theme.gray900};
    }
    > p {
      font-size: 18px;
      margin-top: 8px;
      line-height: 20px;
    }
    > div {
      margin-top: 8px;
      display: flex;
      flex-wrap: wrap;
      gap: 4px 8px;
    }
  }
`;

export default Post;
