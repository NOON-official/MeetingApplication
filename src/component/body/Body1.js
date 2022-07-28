import styled from 'styled-components'
import * as React from 'react'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 70%;
  width: 100%;
  font-family: var(--font);
`
const Contents = styled.div`
  font-size: var(--font-size-maintitle);
  font-weight: bold;
`
const Button = styled.button`
  border-radius: var(--round-borderradious);
  height: 50px;
  width: 200px;
  background-color: transparent;
  color: 'black';
  border-color: var(--color-gray);
  font-family: var(--font);
  font-size: var(--font-size-title);
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 20%;
`
const Body1 = () => {
  return (
    <Container>
      <Contents>
        그 시절,
        <br /> 우리가 설레였던 미팅
      </Contents>

      <Link to="/Meeting2" style={{ textDecoration: 'none' }}>
        <Button>인연을 찾으러 가기</Button>
      </Link>
    </Container>
  )
}

export default Body1
