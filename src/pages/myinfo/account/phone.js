import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import MyinfoLayout from '../../../layout/MyinfoLayout';
import { ReactComponent as CheckValid } from '../../../asset/svg/CheckValid.svg';
import { ReactComponent as CheckInvalid } from '../../../asset/svg/CheckInvalid.svg';
import {
  usePostPhoneCodeMutation,
  usePostPhoneNumberMutation,
} from '../../../features/api/userApi';

export default function AccountPhoneChangePage() {
  const [phoneNumber] = usePostPhoneNumberMutation();
  const [phoneCode] = usePostPhoneCodeMutation();

  const [vaildcheck, setValidCheck] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const [authCodeInput, setAuthCodeInput] = useState('');
  const [isAuthCodeSent, setIsAuthCodeSent] = useState(false);
  const navigate = useNavigate();
  const regex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

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
  }, [phoneInput, authCodeInput]);

  return (
    <MyinfoLayout title="전화번호 변경">
      <Title>
        <Maintitle>
          <Pink>전화번호 변경 </Pink>하시려면
        </Maintitle>
        <Maintitle>인증해주세요</Maintitle>
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
        <SubmitButton
          onClick={() => {
            window.alert('전화번호가 변경되었습니다');
            navigate('/myinfo/account');
          }}
          disabled={!vaildcheck}
        >
          변경 완료
        </SubmitButton>
      </Footer>
    </MyinfoLayout>
  );
}

const Title = styled.div`
  width: 90%;
  margin: 8% auto;
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
  margin: 0 auto;
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
  margin: 15% auto;
`;
