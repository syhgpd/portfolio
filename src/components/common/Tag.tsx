import styled from "@emotion/styled";

interface Props {
  children: string;
  isActive: boolean;
  onClick?: () => void;
}

const Tag = ({ children, isActive, onClick }: Props) => {
  return (
    <TagWraaper isActive={isActive} onClick={onClick}>
      {children}
    </TagWraaper>
  );
};

const TagWraaper = styled.div<{ isActive: boolean }>`
  padding: 4px 14px;
  font-size: 16px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.pink500 : theme.white};
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  color: ${({ isActive, theme }) => (isActive ? theme.white : theme.pink500)};
  border: 1px solid ${({ isActive, theme }) => isActive && theme.pink500};
`;

export default Tag;
