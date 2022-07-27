import styled from 'styled-components'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged,
} from 'firebase/auth'
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
  const [OTP, setOTP] = useState('')

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
          console.log(user)
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        })
    }
  }
  return (
    <AuthContainer>
      <AuthNum
        width={'200px'}
        placeholder={`인증번호 유효시간`}
        onChange={verifyOTP}
      ></AuthNum>

      <AuthSubmit
        onClick={() => {
          if (authentication.currentUser) {
            console.log(authentication.currentUser.uid)
            alert('hello')
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
  return (
    <PhoneNum
      top={'40%'}
      placeholder={'- 없이 입력해주세요'}
      id="phoneNum"
      onChange={props.set}
    ></PhoneNum>
  )
}

const Body10 = () => {
  const dispatch = useDispatch()
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
        }}
      >
        인증번호 받기
      </SubmitButton>
      <PhoneAuthInput></PhoneAuthInput>
    </Container>
  )
}
export default Body10
