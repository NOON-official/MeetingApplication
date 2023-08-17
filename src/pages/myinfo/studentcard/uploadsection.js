import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

export default function Uploadsection({ setImgSrc, upload }) {
  return (
    <ButtonBox>
      <SInputLabel onClick={() => setImgSrc(null)}>
        <ChangeButton>변경하기</ChangeButton>
      </SInputLabel>
      <UploadButton onClick={upload}>업로드하기</UploadButton>
    </ButtonBox>
  );
}

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 5% auto 6%;
`;

const SInputLabel = styled.label``;

const ChangeButton = styled(Button).attrs({ type: 'button' })`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.lightPink};
  color: ${(props) => props.theme.lightPink};
  background-color: #ffffff;
  font-size: 14px;
  font-weight: 400;
`;

const UploadButton = styled(Button).attrs({ type: 'button' })`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  background-color: #eb8888;
  font-size: 14px;
  font-weight: 400;
`;
