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

const Body12 = () => {
  return (
    <Container>
      <Title> 드디어 끝이 났어요... 많이 사랑해주세요</Title>
    </Container>
  )
}

export default Body12
