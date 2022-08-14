import styled from 'styled-components';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { authentication } from '../Firebase/firebase';
import { Container, MobileBox, StyledDiv, StyledText } from '../Elements/StyledComponent';
import { ContentPasteSearchOutlined } from '@mui/icons-material';
const buttonColor = '#C4D7E0';

const PhoneNum = styled.input`
  position: absolute;
  top: ${(props) => props.top || '5%'};
  width: ${(props) => props.width || '295px'};
  height: 8%;
  border-radius: 12px;
  border: 0.5px solid black;
  display: flex;
  font-size: 18px;
  text-align: center;
  ::placeholder {
    justify-content: center;
    text-align: center;
    font-size: 16px;
  }
`;
const SubmitButton = styled.button`
  position: absolute;
  top: ${(props) => props.top || '5%'};
  width: 300px;
  height: 8%;
  border-radius: 12px;
  border: 0.5px solid black;
  display: flex;
  font-size: 18px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: ${buttonColor};
  color: black;
  font-weight: 700;
`;
const AuthNum = styled.input`
  width: ${(props) => props.width || '300px'};
  height: 50px;
  border-radius: 12px;
  border: 0.5px solid black;
  display: flex;
  font-size: 18px;
  text-align: center;
  ::placeholder {
    justify-content: center;
    text-align: center;
    font-size: 16px;
  }
`;
const StyledInput = styled.input`
  width: ${(props) => props.width || '100%'};
  height: 100%;
  display: flex;
  font-size: 18px;
  border: 0;
  text-align: 'center';
  outline: none;
  margin-left: 10px;
  ::placeholder {
    justify-content: center;
    text-align: 'center';
    font-size: 16px;
    outline: none;
  }
`;
const AuthSubmit = styled.button`
  display: flex;
  width: 70px;
  border-radius: 12px;
  border: 0.5px solid black;

  font-size: 15x;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: black;
  font-weight: 100;
`;
const AuthContainer = styled.div`
  width: 300px;
  height: 50px;
  position: absolute;
  top: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const PhoneAuthInput = (props) => {
  const dispatch = useDispatch();

  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  function Timer() {
    useEffect(() => {
      if (iscalled) {
        const countdown = setInterval(() => {
          if (parseInt(seconds) > 0) {
            setSeconds(parseInt(seconds) - 1);
          }
          if (parseInt(seconds) === 0) {
            if (parseInt(minutes) === 0) {
              clearInterval(countdown);
            } else {
              setMinutes(parseInt(minutes) - 1);
              setSeconds(59);
            }
          }
        }, 1000);
        return () => clearInterval(countdown);
      }
    }, [minutes, seconds, iscalled]);
  }
  const iscalled = useSelector((state) => state.phonenumcall);
  Timer();
  console.log(iscalled);
  const verifyOTP = (e) => {
    let otp = e.target.value;
    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          // ...
          // console.log(user)
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    }
  };

  return (
    <AuthContainer className="container">
      <AuthNum
        width={'200px'}
        placeholder={`인증번호 유효시간${minutes}:${seconds}`}
        onChange={verifyOTP}
        className="code"
      ></AuthNum>

      <AuthSubmit
        onClick={() => {
          if (authentication.currentUser) {
            // console.log(authentication.currentUser.uid);
            alert('인증이 완료되었습니다.');
          } else {
            alert('번호가 일치하지 않습니다.');
          }
        }}
      >
        인증
      </AuthSubmit>
    </AuthContainer>
  );
};

const PhoneNumBox = (props) => {
  const placeholder = useSelector((state) => state.phone);
  return <PhoneNum top={'40%'} placeholder={placeholder} id="phoneNum" onChange={props.set}></PhoneNum>;
};

const Body13 = () => {
  const [zero, setZero] = useState('');
  const [phonenumFirst, setPhoneNumFirst] = useState('');
  const [phoneNumSecond, setPhonenumSecond] = useState('');
  const [phoneNnum, setPhoneNum] = useState('');
  const submitAble = React.useMemo(
    () => (zero.length === 3 && phoneNumSecond.length === 4 && phonenumFirst.length === 4 ? true : false),
    [zero, phoneNumSecond, phonenumFirst],
  );
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const ButtonColor = React.useMemo(() => (submitAble ? '#EB8888' : '#EDEDED'), [submitAble]);
  const ButtonFontColor = React.useMemo(() => (submitAble ? '#FFFFFF' : '#BBBBBB'), [submitAble]);
  const inputHandler = (e) => {
    if (e.target.name === 'phoneNumSecond') {
      setPhonenumSecond(e.target.value);
    } else if (e.target.name === 'phoneNumFirst') {
      setPhoneNumFirst(e.target.value);
    } else if (e.target.name === '010') {
      setZero(e.target.value);
    }
  };
  const onPhoneNumSubmit = React.useCallback(() => {
    if (!submitAble) {
      alert('번호입력');
    } else {
      let phoneNumber = zero.concat(phonenumFirst.concat(phoneNumSecond));
      console.log(phoneNumber);
      setAuthModalOpen(true);
    }
  }, [zero, phonenumFirst, phoneNumSecond]);

  const dispatch = useDispatch();
  dispatch({ type: 'SET_PHONENUMCALL', payload: false });
  const setPhone = (e) => {
    dispatch({ type: 'SET_PHONE', payload: e.target.value });
  };
  const phone = useSelector((state) => state.phone);
  const countryCode = '+82';
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptchaContainer',
      {
        size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication,
    );
  };
  const requestOTP = () => {
    authentication.languageCode = 'Ko';
    if (phone.length >= 11) {
      alert('인증번호가 전송되었습니다.');
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, countryCode + phone, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
          console.log(error);
        });
    } else {
      alert('올바른 번호를 입력하셈');
    }
  };

  return (
    <Container>
      <MobileBox>
        <StyledDiv top="5%" width="90%" height="15%" left="50%">
          <StyledText position=" absolute" size="35px" left="10px" color="#F49393">
            전화번호 인증
          </StyledText>
          <StyledText position="absolute" size="35px" left="125px">
            을 통해
          </StyledText>
          <StyledText position="absolute" size="35px" left="10px" top="30px">
            서비스를 시작해 보세요
          </StyledText>
        </StyledDiv>
        <div id="recaptchaContainer"></div>
        <StyledDiv height="80%" top="20%" width="90%" left="50%">
          <StyledDiv height="88px" width="100%" left="50%" border="10px" bg="white">
            <StyledText
              color="#777777"
              font="Pretendard"
              weight="400"
              size="13px"
              height="30%"
              width="90%"
              top="20%"
              left="5%"
            >
              전화번호
            </StyledText>
            <StyledDiv top="50%" width="100%" left="50%" height="50%">
              <StyledDiv left="15%" height="100%" width="28%">
                <StyledInput name="010" onChange={inputHandler} placeholder="010"></StyledInput>
              </StyledDiv>
              <StyledDiv text_align="center" justify_content="center" top="20%" left="33%" height="100%" width="7%">
                {' '}
                -{' '}
              </StyledDiv>
              <StyledDiv left="50%" height="100%" width="28%">
                <StyledInput name="phoneNumFirst" onChange={inputHandler} placeholder="1234"></StyledInput>
              </StyledDiv>
              <StyledDiv text_align="center" justify_content="center" top="20%" left="68%" height="100%" width="7%">
                {' '}
                -{' '}
              </StyledDiv>
              <StyledDiv left="85%" height="100%" width="28%">
                <StyledInput name="phoneNumSecond" onChange={inputHandler} placeholder="5678"></StyledInput>
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>
          <StyledDiv
            onClick={onPhoneNumSubmit}
            border="10px"
            top="98px"
            height="60px"
            width="100%"
            bg={ButtonColor}
            left="50%"
          >
            <StyledText color={ButtonFontColor} size="24px" weight="400" top="25%" left="40%">
              인증번호 요청
            </StyledText>
          </StyledDiv>
          {authModalOpen && (
            <StyledDiv height="88px" width="100%" left="50%" border="10px" bg="white" top="35%">
              <StyledText
                color="#777777"
                font="Pretendard"
                weight="400"
                size="13px"
                height="30%"
                width="90%"
                top="20%"
                left="5%"
              >
                인증번호
              </StyledText>
              <StyledDiv top="50%" width="100%" left="50%" height="50%">
                <StyledDiv display="flex" justify_content="flex-start" left="50%" height="100%" width="100%">
                  <StyledInput name="12345" onChange={inputHandler} placeholder="12345"></StyledInput>
                </StyledDiv>
              </StyledDiv>
            </StyledDiv>
          )}
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};
export default Body13;
