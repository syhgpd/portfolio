import styled from "@emotion/styled";
import Post from "../components/project/Post";
import { ProjectContent } from "../components/project/content";
import Title from "../components/common/Title";

const Project = () => {
  return (
    <ProjectContainer>
      <Title
        page="PROJECT"
        content="기술을 공부하고, 활용하기 위해 프로젝트를 진행해요."
      />
      <PostContainer>
        {ProjectContent.map((item) => (
          <Post
            key={item.title}
            title={item.title}
            img={item.img}
            skill={item.skill}
            content={item.content}
            part={item.part}
            link={item.link}
          />
        ))}
      </PostContainer>
      <p>
        <i>*</i> 누르면 프로젝트의 상세한 정보를 볼 수 있어요.
      </p>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  margin: 0 auto;
  width: 70vw;
  padding: 80px 0;
  > p {
    margin-top: 12px;
    text-align: end;
    color: ${({ theme }) => theme.gray900};
    > i {
      color: ${({ theme }) => theme.pink700};
    }
  }
`;

const PostContainer = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

export default Project;
