import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import Tag from "../common/Tag";

interface Props {
  title: string;
  img: string;
  content: string;
  part: string[];
  skill: string[];
  link: string;
}

const Post = ({ title, content, part, skill, img, link }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Link to={link}>
      <PostContainer
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <ImgBox isHover={isHover}>
          <img src={img} alt="cover" />
        </ImgBox>
        <ContentBox isHover={isHover}>
          <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <div>
              {part.map((item) => (
                <Tag isActive={false} key={item}>
                  {item}
                </Tag>
              ))}
            </div>
            <div>
              {skill.map((item) => (
                <Tag isActive={true} key={item}>
                  {item}
                </Tag>
              ))}
            </div>
          </div>
        </ContentBox>
      </PostContainer>
    </Link>
  );
};

const PostContainer = styled.div`
  border-radius: 12px;
  position: relative;
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
    opacity: ${({ isHover }) => isHover && 0.2};
  }
`;

const ContentBox = styled.div<{ isHover: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  > div {
    justify-content: space-between;
    padding: 0 28px;
    display: ${({ isHover }) => (isHover ? "block" : "none")};
    > h1 {
      font-weight: 700;
      font-size: 36px;
      color: ${({ theme }) => theme.gray900};
    }
    > p {
      font-size: 18px;
      color: ${({ theme }) => theme.gray900};
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
  @media (max-width: 580px) {
    display: none;
  }
`;

export default Post;
