import styled from 'styled-components';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { authentication } from '../Firebase/firebase';
import { Container, MobileBox, StyledDiv, StyledText } from '../Elements/StyledComponent';
import { ReactComponent as CheckIcon } from '../../Asset/confirm/CheckIcon.svg';
import { useEffect, useRef } from 'react';
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

const Body13 = () => {
  const firstPhoneNumber = useRef();
  const secondPhoneNumber = useRef();
  const saveState = (key, state) => {
    try {
      const serializedState = state;
      dispatch({type:`${key}`, payload:`${serializedState}`});
    } catch {}
  };

  const dispatch = useDispatch();
  const [phonenumFirst, setPhoneNumFirst] = useState('');
  const [phoneNumSecond, setPhonenumSecond] = useState('');

  const phone = useSelector((state) => state.phone);
  const [signin, setSignin] = useState(false);
  useEffect(() => {
    signin && dispatch({ type: 'SET_SIGNIN', payload: true });
  }, [signin]);
  useEffect(() => {
    if (phonenumFirst.length >= 4) {
      secondPhoneNumber.current.focus();
    }
  }, [phonenumFirst]);
  useEffect(()=>{
    let phoneNumber = basicPhoneNumber + phonenumFirst.concat(phoneNumSecond);
    (phoneNumSecond.length==4) && dispatch({type: "SET_PHONE", payload:phoneNumber})
  },[phoneNumSecond])
  // 뒤에서 버튼누를 시 redux로 넘기니 저장이 안되는 경우가 있어서 앞에서 확실하게 쥣번호 4개 입력시 데이터 저당하도록 설정
  const countryCode = '+82';
  const basicPhoneNumber = '010';
  const submitAble = React.useMemo(
    () => (phoneNumSecond.length === 4 && phonenumFirst.length === 4 ? true : false),
    [phoneNumSecond, phonenumFirst],
  );
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const ButtonColor = React.useMemo(() => (submitAble ? '#EB8888' : '#EDEDED'), [submitAble]);
  const ButtonFontColor = React.useMemo(() => (submitAble ? '#FFFFFF' : '#BBBBBB'), [submitAble]);
  const inputHandler = (e) => {
    if (e.target.name === 'phoneNumSecond') {
      setPhonenumSecond(e.target.value);
    } else if (e.target.name === 'phoneNumFirst') {
      setPhoneNumFirst(e.target.value);
    }
  };
  const onPhoneNumSubmit = () => {
    if (!submitAble) {
      alert('번호입력');
    } else {
      let phoneNumber = basicPhoneNumber + phonenumFirst.concat(phoneNumSecond);
     
      saveState('SET_PHONE', phoneNumber);
      requestOTP();
    }
  };

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
  const requestOTP = React.useCallback(() => {
    authentication.languageCode = 'Ko';
    
    if (phone.length >= 10) {
      generateRecaptcha();

      alert('인증번호가 전송되었습니다.');
      setAuthModalOpen(true);

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
      console.log('error', phone);
      alert('올바른 번호를 입력하세요!');
    }
  }, [phone]);

  const PhoneAuthInput = (e) => {
    let otp = e.target.value;
    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          alert('승인되었습니다.');
          setSignin(true);
          // ...
          // console.log(user)
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          alert('번호가 올바르지 않습니다.');
          setSignin(false);
        });
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
              <StyledDiv
                display="flex"
                justify_content="center"
                align_item="center"
                left="15%"
                height="100%"
                width="28%"
                size="18px"
              >
                010
              </StyledDiv>
              <StyledDiv text_align="center" justify_content="center" top="20%" left="33%" height="100%" width="7%">
                {' '}
                -{' '}
              </StyledDiv>
              <StyledDiv
                display="flex"
                justify_content="center"
                align_item="center"
                left="50%"
                height="100%"
                width="28%"
              >
                <StyledInput
                  name="phoneNumFirst"
                  onChange={inputHandler}
                  placeholder="1234"
                  ref={firstPhoneNumber}
                ></StyledInput>
              </StyledDiv>
              <StyledDiv text_align="center" justify_content="center" top="20%" left="68%" height="100%" width="7%">
                {' '}
                -{' '}
              </StyledDiv>
              <StyledDiv
                display="flex"
                justify_content="center"
                align_item="center"
                left="85%"
                height="100%"
                width="28%"
              >
                <StyledInput
                  ref={secondPhoneNumber}
                  name="phoneNumSecond"
                  onChange={inputHandler}
                  placeholder="5678"
                ></StyledInput>
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
                  <StyledInput maxLength={6} name="otp" onChange={PhoneAuthInput} placeholder="12345"></StyledInput>
                  <StyledDiv left="90%">{signin ? <CheckIcon /> : <CheckIcon className="bright" />}</StyledDiv>
                </StyledDiv>
              </StyledDiv>
            </StyledDiv>
          )}
          <StyledDiv
            top="90%"
            left="50%"
            heigth="10%"
            width="100%"
            justify_content="center"
            align_item="center"
            text_align="center"
            font="Pretendard"
            color="#AAAAAA"
          >
            수집된 번호는 매칭에만 활용되고 <br /> 상대팀에게 전달되지 않습니다.
          </StyledDiv>
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};
export default Body13;
