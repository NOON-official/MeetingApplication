import styled from 'styled-components'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Bulb } from '../../Asset/page1/Frame.svg'
import { ReactComponent as CatchPhrase } from '../../Asset/page1/CatchPhrase.svg'
import { ReactComponent as Title } from '../../Asset/page1/Title.svg'
import { ReactComponent as Logo } from '../../Asset/page1/Logo.svg'
import { ReactComponent as Star } from '../../Asset/page1/Star.svg'
import { ReactComponent as MainText } from '../../Asset/page1/MainText.svg'
import { ReactComponent as MainButtonText } from '../../Asset/page1/MainButtonText.svg'
import { Container, MobileBox } from '../Elements/StyledComponent'
import { StyledDiv } from '../Elements/StyledComponent'

const Button = styled.button`
  border-radius: var(--round-borderradious);
  height: 50px;
  width: 200px;
  background-color: var(--color-ClickedPink);
  color: white;
  border-color: var(--color-gray);
  font-family: var(--font-family);
  font-size: var(--font-size-title);
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 20%;
  letter-spacing: 1px;
`
const StyledText = styled.text`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-size: 13px;
  line-height: 20px;
  align-items: center;
  justify-content: start;
`
const Body1 = () => {
  return (
    <Container height={'90%'} bg="#f8f3f3">
      <MobileBox>
        <StyledDiv top="10.5%" left="27.5%" transform=" translate(-50%, 0)">
          <Bulb />
        </StyledDiv>
        <StyledDiv top="13%" left="50%" transform="translate(-50%, 0)">
          <CatchPhrase />
        </StyledDiv>
        <StyledDiv top="20%" left="50%" transform="translate(-50%, 0)">
          <Title />
        </StyledDiv>
        <StyledDiv top="30%" left="80%" transform="translate(-50%, 0)">
          <Star />
        </StyledDiv>
        <StyledDiv top="35%" left="50%" transform="translate(-50%, 0)">
          <Logo />
        </StyledDiv>
        <StyledDiv top="65%" left="50%" transform="translate(-50%, 0)">
          <MainText />
        </StyledDiv>
        <Link to="/Meeting2" style={{ textDecoration: 'none' }}>
          <Button>
            <MainButtonText />
          </Button>
        </Link>
      </MobileBox>
    </Container>
  )
}

export default Body1
