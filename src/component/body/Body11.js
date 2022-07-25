import styled from 'styled-components'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Container = styled.div`
  left: 0;
  overflow: hidden;
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
  display: flex;
  top: 10%;
  font-size: 17px;
  font-weight: bold;
  height: auto;
  margin: 0;
  color: #000;
  font-style: normal;
  letter-spacing: -0.015em;
  line-height: 149.8%;
  position: absolute;
  text-align: center;
  justify-content: center;
  width: auto;
`
const KakaoIdInput = styled.input`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 50px;
  width: 200px;
  ::placeholder {
    justify-content: center;
    text-align: center;
    font-size: 13px;
    margin: 5px;
  }
  border: 1px solid #c4d7e0;
`

const Body11 = () => {
  const dispatch = useDispatch()
  const KakaoId = (e) => {
    dispatch({ type: 'SET_KAKAOID', payload: e.target.value })
  }
  return (
    <Container>
      <Title>
        카카오톡 아이디를 알려주세요. <br /> 매칭확인 후 상대에게 전달됩니다!
      </Title>
      <KakaoIdInput onChange={KakaoId} placeholder="깨똑아이뒤"></KakaoIdInput>
    </Container>
  )
}

export default Body11
