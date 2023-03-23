import styled from "@emotion/styled";

interface Props {
  title: string;
  content: string[];
}

const DetailSkill = ({ title, content }: Props) => {
  return (
    <DetailSkillContainer>
      <h1>{title}</h1>
      <hr />
      <ul>
        {content.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </DetailSkillContainer>
  );
};

const DetailSkillContainer = styled.div`
  background-color: ${({ theme }) => theme.lightPink};
  border-radius: 20px;
  padding: 32px;
  > h1 {
    color: ${({ theme }) => theme.gray900};
    font-size: 24px;
    font-weight: 600;
  }
  > hr {
    margin: 12px 0;
    border: 0.5px solid ${({ theme }) => theme.gray700};
  }
`;

export default DetailSkill;
