import styled from 'styled-components';

import { Input, Button } from 'antd';
import ApplyLayout from '../../layout/ApplyLayout';

function CertificationPage() {
  return (
    <ApplyLayout>
      <Title>
        <Maintitle>
          <Pink>전화 번호 인증 </Pink>후
        </Maintitle>
        <Maintitle>미팅 신청이 완료됩니다</Maintitle>
      </Title>
      <Conatiner>
        <PhoneBox>
          전화번호
          <PhoneNumber>
            <InputBox>
              <SInput defaultValue="010" /> &nbsp;&nbsp;&nbsp;—
            </InputBox>
            <InputBox>
              <SInput /> &nbsp;&nbsp;&nbsp;—
            </InputBox>
            <InputBox>
              <SInput />
            </InputBox>
          </PhoneNumber>
        </PhoneBox>
        <SubmitButton>인증번호요청</SubmitButton>
        <PhoneBox>
          인증번호
          <PhoneNumber>
            <InputBox>
              <SInput2 placeholder="인증번호를입력해주세요" />
            </InputBox>
          </PhoneNumber>
        </PhoneBox>
      </Conatiner>
      <Footer>
        <SubmitButton>매칭신청완료</SubmitButton>
      </Footer>
    </ApplyLayout>
  );
}

export default CertificationPage;

const Title = styled.div`
  width: 90%;
  margin-top: 8%;
  height: 13%;
  min-height: 13%;
`;

const Maintitle = styled.div`
  width: 100%;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 35px;
`;

const Pink = styled.span`
  color: ${(props) => props.theme.pink};
`;

const Conatiner = styled.div`
  margin-bottom: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const PhoneBox = styled.div`
  margin-top: 5%;
  width: 90%;
  padding: 15px;
  background: #ffffff;
  border: 1px solid #f1ecec;
  border-radius: 10px;
  font-weight: 500;
  font-size: 13px;
  color: #777777;
`;

const PhoneNumber = styled.div`
  margin-top: 3%;
  display: flex;
`;

const InputBox = styled.div`
  width: 50%;
`;

const SInput = styled(Input)`
  width: 60%;
`;

const SInput2 = styled(Input)`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  font-family: 'Nanum JungHagSaeng';
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  border: none;
  margin-top: 3%;
  width: 100%;
  height: 50px;
  background: #eb8888;
  border-radius: 10px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: 60%;
`;
