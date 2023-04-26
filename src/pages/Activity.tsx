import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ActivityContent } from "../components/activity/content";
import Post from "../components/activity/Post";
import Title from "../components/common/Title";

const Activity = () => {
  return (
    <ActivityWrapper>
      <div>
        <Title page="ACTIVITY" content="저는 이러한 활동을 했어요." />
      </div>
      <PostContainer>
        <span></span>
        {ActivityContent.map((item) => (
          <Post
            key={item.title}
            title={item.title}
            content={item.content}
            date={item.date}
            tag={item.tag}
            link={item.link}
          />
        ))}
      </PostContainer>
      <div>
        <p>
          저는 다양한 활동을 해왔어요.
          <Link to="https://hyeyeon.oopy.io/"> 활동 모두보기 →</Link>
        </p>
      </div>
    </ActivityWrapper>
  );
};

const ActivityWrapper = styled.div`
  padding: 60px 0;
  background-color: ${({ theme }) => theme.gray300};
  > div {
    margin: 0 auto;
    width: 70vw;
    > p {
      margin-top: 28px;
      text-align: end;
      color: ${({ theme }) => theme.gray900};
      > a {
        color: ${({ theme }) => theme.gray700};
        text-decoration: none;
        :hover {
          color: ${({ theme }) => theme.pink700};
        }
      }
    }
  }
`;

const PostContainer = styled.div`
  margin-top: 40px !important;
  position: relative;
  > span {
    position: absolute;
    height: calc(100% - 160px);
    left: 30.5px;
    top: 80px;
    border: 1.5px dashed ${({ theme }) => theme.pink500};
  }
`;

export default Activity;
