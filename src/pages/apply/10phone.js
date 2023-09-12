import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import { ReactComponent as CheckValid } from '../../asset/svg/CheckValid.svg';
import { ReactComponent as CheckInvalid } from '../../asset/svg/CheckInvalid.svg';
import MatchingCompleteModal from '../../components/Modal/Matching/MatchingCompleteModal';
import {
  usePostPhoneCodeMutation,
  usePostPhoneNumberMutation,
} from '../../features/api/userApi';

export default function Apply10Page() {
  const [phoneNumber] = usePostPhoneNumberMutation();
  const [phoneCode] = usePostPhoneCodeMutation();

  const [openModal, setOpenModal] = useState(false);
  const [vaildcheck, setValidCheck] = useState(false);

  const [phoneInput, setPhoneInput] = useState('');
  const [authCodeInput, setAuthCodeInput] = useState('');
  const [isAuthCodeSent, setIsAuthCodeSent] = useState(false);
  const regex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  const setModal = (bool) => {
    setOpenModal(bool);
  };

  const handlePhoneNumber = useCallback(
    (e) => {
      setPhoneInput(e.target.value);
    },
    [phoneInput],
  );

  const requestAuthCode = useCallback(async () => {
    try {
      await phoneNumber({ phone: phoneInput }).unwrap();
    } catch (e) {
      window.alert('인증코드 발송에 실패했습니다');
    }
    setIsAuthCodeSent(true);
  }, [phoneInput]);

  const handleAuthCodeInput = useCallback(
    (e) => {
      setAuthCodeInput(e.target.value);
    },
    [authCodeInput],
  );

  const validateAuthCode = useCallback(async () => {
    try {
      await phoneCode({ phone: phoneInput, code: authCodeInput }).unwrap();
      window.alert('인증이 완료되었습니다');
      setValidCheck(true);
    } catch (e) {
      window.alert('인증번호가 틀렸습니다');
      setValidCheck(false);
    }
  }, [authCodeInput]);

  return (
    <ApplyLayout>
      <MatchingCompleteModal open={openModal} setModal={setModal} />
      <Title>
        <Maintitle>
          미팅을 위한 준비가 모두 끝났어요!
          <br />
          <Pink>전화번호 인증</Pink> 후 신청 완료됩니다
        </Maintitle>
        <Subtitle>첫 미팅 신청 시에만 필요한 단계예요</Subtitle>
      </Title>

      <Conatiner>
        <PhoneBox>
          전화번호
          <PhoneNumber>
            <InputBox>
              <SInput
                value={phoneInput}
                onChange={handlePhoneNumber}
                placeholder="전화번호 입력"
              />
            </InputBox>
          </PhoneNumber>
        </PhoneBox>
        <SubmitButton
          onClick={requestAuthCode}
          disabled={!regex.test(phoneInput) || isAuthCodeSent}
        >
          인증번호요청
        </SubmitButton>

        <PhoneBox>
          인증번호
          <PhoneNumber>
            <InputBox>
              <SInput
                value={authCodeInput}
                onChange={handleAuthCodeInput}
                placeholder="인증번호 입력"
              />
            </InputBox>
            {vaildcheck ? <SCheckValid /> : <SCheckInvalid />}
          </PhoneNumber>
        </PhoneBox>
        <SubmitButton
          onClick={validateAuthCode}
          disabled={!authCodeInput || !regex.test(phoneInput) || vaildcheck}
        >
          인증번호확인
        </SubmitButton>
      </Conatiner>
      <Footer>
        <SubmitButton onClick={() => setModal(true)} disabled={!vaildcheck}>
          매칭 신청 완료
        </SubmitButton>
      </Footer>
    </ApplyLayout>
  );
}

const Title = styled.div`
  width: 90%;
  margin-top: 30px;
`;

const Maintitle = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
`;

const Pink = styled.span`
  color: ${theme.pink};
`;

const Subtitle = styled.p`
  margin-top: 5%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 15px;
`;

const Conatiner = styled.div`
  margin-bottom: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const PhoneBox = styled.div`
  margin-top: 7%;
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
  margin-top: 5%;
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
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
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
  margin: auto 0 10%;
`;
