import styled from "@emotion/styled";
import Title from "../components/common/Title";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <Title page="ABOUT ME" content="HELLO, HYE YEON👋🏻" />
      <ProfileBox>
        <div style={{ backgroundColor: "black", height: "300px" }}></div>
        <div>
          <p>
            사용자에게 즐거움과 편리함을 선사하는 개발자, 추혜연입니다.
            <br />
          </p>
        </div>
      </ProfileBox>
    </AboutMeContainer>
  );
};

const AboutMeContainer = styled.div`
  padding: 60px 15vw;
  background-color: ${({ theme }) => theme.gray300};
`;

const ProfileBox = styled.div`
  background-color: ${({ theme }) => theme.white};
  margin-top: 32px;
  width: 70vw;
  border-radius: 20px;
  display: grid;
  padding: 40px;
  grid-template-columns: 1fr 3fr;
  gap: 40px;
  > div {
    white-space: pre-line;
  }
`;

export default AboutMe;
