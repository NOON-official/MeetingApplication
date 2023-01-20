import styled from 'styled-components';

export default function ApplyButton({ children }) {
  return <SButton type="text">{children}</SButton>;
}

const SButton = styled.button`
  font-weight: 400;
  font-size: 24px;
  font-family: 'Nanum JungHagSaeng';
  background-color: white;
  width: 160px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.lightPink};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.pink};
  }
`;
