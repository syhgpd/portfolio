import styled from "@emotion/styled";

interface Props {
  page: string;
  content: string;
}

const Title = ({ page, content }: Props) => {
  return (
    <TitleContainer>
      <p>{page}</p>
      <h1>{content}</h1>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  > p {
    color: ${({ theme }) => theme.pink500};
    font-weight: 800;
    font-size: 24px;
  }
  > h1 {
    font-weight: 700;
    font-size: 36px;
    margin-top: 16px;
    color: ${({ theme }) => theme.charcoal};
  }
`;

export default Title;
