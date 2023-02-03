import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Input, Button } from 'antd';
import ApplyLayout from '../../layout/ApplyLayout';
import { ReactComponent as CheckValid } from '../../asset/svg/CheckValid.svg';
import { ReactComponent as CheckInvalid } from '../../asset/svg/CheckInvalid.svg';

function CertificationPage() {
  const { finishedStep } = useSelector((store) => store.apply);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [authorizeNumber, setAuthorizeNumber] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (finishedStep < 5) {
      window.alert('잘못된 접근입니다');
      navigate(`/apply/${finishedStep + 1}`);
    }
  }, [finishedStep]);

  const handleNumber = useCallback(
    (e) => {
      setPhoneNumber(e.target.value);
    },
    [phoneNumber],
  );
  const SubmitPhoneNumber = useCallback(() => {
    console.log(phoneNumber);
  }, [phoneNumber]);

  const handleAuthorizeNumber = useCallback(
    (e) => {
      setAuthorizeNumber(e.target.value);
    },
    [authorizeNumber],
  );

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
              <SInput value={phoneNumber} onChange={handleNumber} />
            </InputBox>
          </PhoneNumber>
        </PhoneBox>
        <SubmitButton onClick={SubmitPhoneNumber} disabled={!phoneNumber}>
          인증번호요청
        </SubmitButton>
        <PhoneBox>
          인증번호
          <PhoneNumber>
            <InputBox>
              <SInput
                value={authorizeNumber}
                onChange={handleAuthorizeNumber}
                placeholder="인증번호를입력해주세요"
              />
            </InputBox>
            <SCheckValid />
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

const SCheckValid = styled(CheckValid)`
  margin-left: 40%;
`;

const SCheckInvalid = styled(CheckInvalid)`
  margin-left: 40%;
`;

const SInput = styled(Input)`
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
