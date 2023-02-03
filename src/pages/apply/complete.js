import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';
import ApplyLayout from '../../layout/ApplyLayout';
import { ReactComponent as BigO } from '../../asset/svg/BigO.svg';

function Complete() {
  const navigate = useNavigate();

  return (
    <ApplyLayout>
      <Container>
        <SBigO />
        <TextBox>
          <BlackText>미팅 신청이 완료되었습니다!</BlackText>
          <BlackText>매칭이 완료되면 문자를 드릴께요.</BlackText>
        </TextBox>
        <SubmitButton
          onClick={() => {
            navigate('/');
          }}
        >
          메인으로 가기
        </SubmitButton>
      </Container>
    </ApplyLayout>
  );
}

export default Complete;

const Container = styled.div`
  margin-top: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const SBigO = styled(BigO)`
  margin-right: 5%;
`;

const TextBox = styled.div`
  margin-top: 8%;
  width: 100%;
  text-align: center;
`;

const BlackText = styled.div`
  color: black;
  font-size: 35px;
  font-family: 'Nanum JungHagSaeng';
`;

const SubmitButton = styled(Button)`
  font-family: 'Nanum JungHagSaeng';
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  border: none;
  margin-top: 75%;
  width: 100%;
  height: 50px;
  background: #eb8888;
  border-radius: 10px;
`;
