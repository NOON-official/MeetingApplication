import styled from 'styled-components';
import { useState } from 'react';

export default function ChooseButton(props) {
  const [check, setCheck] = useState(false);

  return (
    <BigButton
      isActive={check}
      onClick={() => {
        setCheck((prev) => !prev);
      }}
    >
      {props.content}
    </BigButton>
  );
}

const BigButton = styled.button`
  margin-top: 3%;
  background: #f6eeee;
  border-radius: 10px;
  border: none;
  font-family: 'Nanum JungHagSaeng';
  width: 360px;
  height: 45px;
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => (props.isActive ? '#F6EEEE' : '#B79292')};
  background: ${(props) => (props.isActive ? '#EB8888' : 'F6EEEE')};
  &:hover {
    cursor: pointer;
  }
`;
