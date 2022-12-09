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
  font-size: 15px;
  border: 0;
  text-align: 'center';
  outline: none;
  margin-left: 10px;
  ::placeholder {
    justify-content: center;
    text-align: 'center';
    font-size: ${(props) => props.placholderFontSize || '15px'};
    outline: none;
  }
`;

const Body13 = () => {
  const firstPhoneNumber = useRef();
  const secondPhoneNumber = useRef();
  const saveState = (key, state) => {
    try {
      const serializedState = state;
      dispatch({ type: `${key}`, payload: `${serializedState}` });
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
  useEffect(() => {
    let phoneNumber = basicPhoneNumber + phonenumFirst.concat(phoneNumSecond);
    phoneNumSecond.length == 4 && dispatch({ type: 'SET_PHONE', payload: phoneNumber });
  }, [phoneNumSecond]);
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
  const KakaoInputHandler = (e) => {
    let kakaoId = e.target.value;
    dispatch({ type: 'SET_KAKAOID', payload: kakaoId });
  };
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
    <Container display="flex" justify_content="center" align_item="start">
      <MobileBox position="static" transform="0" left="0" height="auto" overflow="scroll">
        <StyledDiv
          position="static"
          display="flex"
          direction="column"
          top="2%"
          width="90%"
          transform="0"
          left="0"
          overflow="hidden"
          margin="20px 0 20px 0"
        >
          {/* HeaderBox*/}
          <StyledDiv
            position="static"
            left="0"
            display="flex"
            direction="column"
            transform="0"
            width="100%"
            margin="5px 0 0 10px"
          >
            <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0" width="100%">
              <StyledText position=" static" size="0.8em">
                연락을 드릴 수 있게 전화번호 인증과
              </StyledText>
            </StyledDiv>
            <StyledDiv position="static" display="flex" direction="row" transform="0" width="100%">
              {/* TitleBox*/}
              <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0">
                {/* TextTitle*/}

                <StyledText position=" static" size="0.8em" color="#F49393">
                  카카오톡 아이디를 입력해주세요!
                </StyledText>
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>
        </StyledDiv>

        <StyledDiv position="0" width="90%" left="0" transform="0" display="flex" direction="column" overflow="hidden">
          <StyledDiv
            minHeight="100px"
            position="static"
            width="100%"
            left="0"
            transform="0"
            display="flex"
            border="10px"
            bg="white"
            direction="column"
          >
            <StyledText
              position="static"
              color="#777777"
              font="Pretendard"
              weight="400"
              size="12px"
              padding=" 10px 0 10px 10px"
            >
              전화번호
            </StyledText>
            <StyledDiv padding="20px 0 20px 0" position="static" display="flex" transform="0" width="100%" left="0">
              <StyledDiv
                position="static"
                display="flex"
                justify_content="center"
                align_item="center"
                left="0"
                width="28%"
                transform="0"
                size="15px"
              >
                010
              </StyledDiv>
              <StyledDiv
                position="static"
                text_align="center"
                justify_content="center"
                left="0"
                width="7%"
                transform="0"
              >
                {' '}
                -{' '}
              </StyledDiv>
              <StyledDiv
                position="static"
                display="flex"
                justify_content="center"
                align_item="center"
                left="0"
                width="28%"
                transform="0"
                size="15px"
              >
                <StyledInput
                  name="phoneNumFirst"
                  onChange={inputHandler}
                  placeholder="1234"
                  ref={firstPhoneNumber}
                ></StyledInput>
              </StyledDiv>
              <StyledDiv
                position="static"
                text_align="center"
                justify_content="center"
                left="0"
                width="7%"
                transform="0"
              >
                {' '}
                -{' '}
              </StyledDiv>
              <StyledDiv
                position="static"
                display="flex"
                justify_content="center"
                align_item="center"
                left="0"
                width="28%"
                transform="0"
                size="15px"
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
            margin="10px 0 0 0"
            position="static"
            border="10px"
            top="98px"
            height="60px"
            display="flex"
            align_item="center"
            justify_content="center"
            width="100%"
            bg={ButtonColor}
            left="0"
            transform="0"
          >
            <StyledText
              position="static"
              color={ButtonFontColor}
              size="24px"
              weight="400"
              top="25%"
              left="0"
              transform="0"
            >
              인증번호 요청
            </StyledText>
          </StyledDiv>
          {authModalOpen && (
            <StyledDiv position="static" transform="0" left="0" display="flex" direction="column">
              <StyledDiv
                minHeight="70px"
                position="static"
                width="100%"
                left="0"
                transform="0"
                display="flex"
                border="10px"
                bg="white"
                direction="column"
                margin="10px 0 0 0"
              >
                <StyledText
                  position="static"
                  color="#777777"
                  font="Pretendard"
                  weight="400"
                  size="13px"
                  width="90%"
                  top="20%"
                  left="5%"
                  padding="10px 0 0 10px"
                >
                  인증번호
                </StyledText>
                <StyledDiv position="static" display="felx" width="100%" left="0" transform="0">
                  <StyledDiv
                    position="static"
                    display="flex"
                    justify_content="space-between"
                    left="0"
                    transform="0"
                    width="100%"
                    padding="10px 0 0 0"
                  >
                    <StyledInput maxLength={6} name="otp" onChange={PhoneAuthInput} placeholder="12345"></StyledInput>
                    <StyledDiv padding="0 20px 0 0" position="static" left="0" transform="0">
                      {signin ? <CheckIcon /> : <CheckIcon className="bright" />}
                    </StyledDiv>
                  </StyledDiv>
                </StyledDiv>
              </StyledDiv>
              <StyledDiv
                position="static"
                transform="0"
                left="0"
                heigth="50px"
                width="100%"
                justify_content="center"
                align_item="center"
                text_align="center"
                font="Pretendard"
                color="#AAAAAA"
                size="12px"
                margin="10px 0 0 0"
              >
                수집된 번호는 매칭에만 활용되고 <br /> 상대팀에게 전달되지 않습니다.
              </StyledDiv>
            </StyledDiv>
          )}
        </StyledDiv>
        <StyledDiv
          margin="20px 0 0 0"
          position="static"
          left="0"
          transform="0"
          display="flex"
          width="100%"
          align_item="center"
          direction="column"
        >
          <StyledDiv
            position="static"
            display="flex"
            direction="column"
            width="90%"
            left="0"
            transform="0"
            overflow="hidden"
          >
            <StyledDiv
              position="static"
              minHeight="100px"
              display="flex"
              direction="row"
              size="35px"
              transform="0"
              width="100%"
              justify_content="center"
            >
              <StyledText position=" static" size="0.8em" text_align="center">
                카카오톡 아이디를 입력해주세요.
              </StyledText>
            </StyledDiv>
          </StyledDiv>

          <StyledDiv
            minHeight="80px"
            position="static"
            width="90%"
            left="0"
            transform="0"
            display="flex"
            border="10px"
            bg="white"
            direction="column"
          >
            <StyledText
              position="static"
              color="#777777"
              font="Pretendard"
              weight="400"
              size="12px"
              padding=" 10px 0 10px 10px"
            >
              카카오톡 아이디
            </StyledText>
            <StyledDiv position="static" top="50%" width="100%" left="0" transform="0" height="53%">
              <StyledDiv
                position="static"
                display="flex"
                justify_content="flex-start"
                transform="0"
                left="0"
                height="100%"
                width="100%"
              >
                <StyledInput
                  placholderFontSize="12px"
                  name="otp"
                  onChange={KakaoInputHandler}
                  placeholder="원활한 서비스 이용을 위해 카카오톡 아이디검색 허용을 해주세요."
                ></StyledInput>
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>
          <StyledDiv
            position="static"
            left="0"
            transform="0"
            height="10%"
            width="100%"
            justify_content="center"
            align_item="center"
            text_align="center"
            font="Pretendard"
            color="#AAAAAA"
            size="12px"
            margin="20px"
          >
            카카오톡 아이디는 서로 미팅을 수락할 경우 <br /> 상대팀에게 전달됩니다.
          </StyledDiv>
        </StyledDiv>
      </MobileBox>
      <div id="recaptchaContainer"></div>
    </Container>
  );
};
export default Body13;
