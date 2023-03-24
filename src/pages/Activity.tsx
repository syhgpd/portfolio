import styled from "@emotion/styled";
import Title from "../components/common/Title";

const Activity = () => {
  return (
    <ActivityWrapper>
      <div>
        <Title page="ACTIVITY" content="저는 이러한 활동을 했어요." />
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
  }
`;

export default Activity;
