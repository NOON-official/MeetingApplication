import styled from 'styled-components'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { authentication } from '../Firebase/firebase'

const buttonColor = '#C4D7E0'
const Container = styled.div`
  left: 0;
  overflow: scroll;
  overflow-x: hidden;
  position: absolute;
  top: 10%;
  width: 100%;
  height: 75%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.div`
  top: ${(props) => props.top || '5%'};
  font-size: 18px;
  font-weight: bold;
  height: 27px;
  margin: 0;
  color: #000;
  font-style: normal;
  letter-spacing: -0.015em;
  line-height: 149.8%;
  position: absolute;
  text-align: center;
  width: 100%;
`

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
`
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
`
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
`
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
`
const AuthContainer = styled.div`
  width: 300px;
  height: 50px;
  position: absolute;
  top: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const PhoneAuthInput = (props) => {
  const dispatch = useDispatch()

  const [minutes, setMinutes] = useState(3)
  const [seconds, setSeconds] = useState(0)

  function Timer() {
    useEffect(() => {
      if (iscalled) {
        const countdown = setInterval(() => {
          if (parseInt(seconds) > 0) {
            setSeconds(parseInt(seconds) - 1)
          }
          if (parseInt(seconds) === 0) {
            if (parseInt(minutes) === 0) {
              clearInterval(countdown)
            } else {
              setMinutes(parseInt(minutes) - 1)
              setSeconds(59)
            }
          }
        }, 1000)
        return () => clearInterval(countdown)
      }
    }, [minutes, seconds, iscalled])
  }
  const iscalled = useSelector((state) => state.phonenumcall)
  Timer()
  console.log(iscalled)
  const verifyOTP = (e) => {
    let otp = e.target.value
    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user
          // ...
          // console.log(user)
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        })
    }
  }

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
            alert('인증이 완료되었습니다.')
          } else {
            alert('번호가 일치하지 않습니다.')
          }
        }}
      >
        인증
      </AuthSubmit>
    </AuthContainer>
  )
}

const PhoneNumBox = (props) => {
  const placeholder = useSelector((state) => state.phone)
  return (
    <PhoneNum
      top={'40%'}
      placeholder={placeholder}
      id="phoneNum"
      onChange={props.set}
    ></PhoneNum>
  )
}

const Body10 = () => {
  const dispatch = useDispatch()
  dispatch({ type: 'SET_PHONENUMCALL', payload: false })
  const setPhone = (e) => {
    dispatch({ type: 'SET_PHONE', payload: e.target.value })
  }
  const phone = useSelector((state) => state.phone)
  const countryCode = '+82'
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptchaContainer',
      {
        size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    )
  }
  const requestOTP = () => {
    authentication.languageCode = 'Ko'
    if (phone.length >= 11) {
      alert('인증번호가 전송되었습니다.')
      generateRecaptcha()
      let appVerifier = window.recaptchaVerifier
      signInWithPhoneNumber(authentication, countryCode + phone, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
          console.log(error)
        })
    } else {
      alert('올바른 번호를 입력하셈')
    }
  }

  return (
    <Container>
      <div id="recaptchaContainer"></div>
      <Title top={'30%'}> 전화번호 인증</Title>
      <PhoneNumBox set={setPhone}></PhoneNumBox>
      <SubmitButton
        top={'50%'}
        onClick={() => {
          requestOTP()
          dispatch({ type: 'SET_PHONENUMCALL', payload: true })
        }}
      >
        인증번호 받기
      </SubmitButton>
      <PhoneAuthInput></PhoneAuthInput>
    </Container>
  )
}
export default Body10
