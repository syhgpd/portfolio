import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { profile } from "../assets";
import { SummaryContent } from "../components/aboutMe/content";
import Title from "../components/common/Title";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <Title page="ABOUT ME" content="HELLO, HYE YEON👋🏻" />
      <ProfileBox>
        <img src={profile} alt="프로필" />
        <div>
          <h1>
            사용자에게 <i>즐거움</i>과 <i>편리함</i>을 선사하는 개발자,
            추혜연입니다.
          </h1>
          <p>
            제가 가장 중요하게 생각하는 가치는 <i>즐거움</i>입니다. 즐거움은
            저를 움직이게 하는 가장 큰 힘이며, 늘 모든일에&nbsp;
            <i>긍정적이고 낙천적인 사고</i>를 가지고 임합니다. 저의 이러한
            생각이 사용자에게 닿아 즐거움을 느낄 수 있게끔 늘 섬세한 서비스를
            개발하려고 합니다.
          </p>
          <p>
            주니어 front-end 개발자로서 항상 겸손한 마음을 가지고 실력을
            쌓아나가는 중입니다.
          </p>
          <SummaryBox>
            <>
              {Object.entries(SummaryContent).map((item) => (
                <div key={item[0]}>
                  <>
                    <h1>
                      <i>
                        {item[0].replace(/^[a-z]/, (char) =>
                          char.toUpperCase()
                        )}
                      </i>
                    </h1>
                    {item[1].map((item, i) =>
                      Array.isArray(item) ? (
                        <Link to={item[1]} key={item[0]}>
                          {item[0]}
                          <i>{i < item.length && "|"}</i>
                        </Link>
                      ) : (
                        <p key={item}>{item}</p>
                      )
                    )}
                  </>
                </div>
              ))}
            </>
          </SummaryBox>
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
  padding: 40px;
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  gap: 40px;
  > img {
    object-fit: contain;
    width: 100%;
    border-radius: 8px;
  }
  > div {
    i {
      color: ${({ theme }) => theme.pink700};
      font-weight: 600;
    }
    h1 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.black};
    }
    > p {
      font-size: 18px;
      line-height: 24px;
      color: ${({ theme }) => theme.gray900};
      margin: 8px 0;
    }
  }
  @media (max-width: 1000px) {
    display: block;
    > img {
      margin-bottom: 20px;
    }
  }
`;

const SummaryBox = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  h1 {
    margin-bottom: 12px !important;
  }
  a {
    transition: all 0.5s;
    text-decoration: none;
    color: ${({ theme }) => theme.gray700};
    :hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.pink700};
    }
    i {
      margin: 0 4px;
      font-weight: 400 !important;
      color: ${({ theme }) => theme.gray500} !important;
    }
  }
  p {
    line-height: 24px;
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export default AboutMe;
