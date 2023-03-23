import styled from "@emotion/styled";
import Post from "../components/project/Post";
import { ProjectContent } from "../components/project/content";

const Project = () => {
  return (
    <ProjectContainer>
      <p>PROJECT</p>
      <h1>기술을 공부하고, 활용하기 위해 프로젝트를 진행해요.</h1>
      <PostContainer>
        {ProjectContent.map((item) => (
          <Post
            key={item.title}
            title={item.title}
            img={item.img}
            skill={item.skill}
            content={item.content}
            part={item.part}
          />
        ))}
      </PostContainer>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  margin: 0 auto;
  width: 70vw;
  padding: 80px 0;
  > p {
    color: ${({ theme }) => theme.pink};
    font-weight: 800;
    font-size: 24px;
  }
  > h1 {
    font-weight: 700;
    font-size: 36px;
    margin-top: 16px;
    color: ${({ theme }) => theme.gray900};
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
