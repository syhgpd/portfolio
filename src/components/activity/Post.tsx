import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Tag from "../common/Tag";

interface Props {
  title: string;
  content: string;
  date: string;
  img: string;
  tag: string[];
  link: string;
}

const Post = ({ title, content, date, img, tag, link }: Props) => {
  return (
    <PostContainer>
      <Link to={link}>
        <div>
          <span></span>
          <ContentContainer>
            <h1>{title}</h1>
            <p>{content}</p>
            <i>{date}</i>
            <div>
              {tag.map((item) => (
                <Tag key={item} isActive={true}>
                  {item}
                </Tag>
              ))}
            </div>
          </ContentContainer>
        </div>
      </Link>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 28px;
  padding: 20px;
  transition: all 0.3s;
  a {
    text-decoration: none;
    > div {
      display: flex;
      align-items: center;
      > span {
        border-radius: 50%;
        background-color: ${({ theme }) => theme.white};
        border: 7px solid ${({ theme }) => theme.pink500};
        width: 24px;
        height: 24px;
        z-index: 1;
        margin-right: 28px;
      }
    }
  }
  :hover {
    background-color: ${({ theme }) => theme.white};
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  > h1 {
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.black};
  }
  > p {
    font-size: 17px;
    color: ${({ theme }) => theme.charcoal};
  }
  > i {
    font-size: 15px;
    color: ${({ theme }) => theme.gray700};
  }
  > div {
    display: flex;
    gap: 6px;
  }
`;

export default Post;
