import styled from 'styled-components'
import Appearance from '../TeamMate/Appearance'
import Mbtis from '../TeamMate/Mbti'
import Fashions from '../TeamMate/Fashion'
import { Container, MobileBox, Title } from '../Elements/StyledComponent'

const SubDiv = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  height: auto;
  margin: 10px;
  width: 301px;
  top: ${(props) => props.top || '15%'};
  overflow: hidden;
  overflow-x: hidden;
`
const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: flex-start;
  font-size: 17px;
  font-weight: bold;
  width: 15%;
  height: 10%;
`
const Body6 = () => {
  return (
    <Container overflow={'scroll'}>
      <MobileBox height={'160%'}>
        <Title>우리팀에는 이런 사람들이 있어요!</Title>
        <SubDiv top={'100px'}>
          <SubTitle>외모</SubTitle>
          <Appearance></Appearance>
        </SubDiv>
        <SubDiv height={'45%'} top={'350px'}>
          <SubTitle>mbti</SubTitle>
          <Mbtis></Mbtis>
        </SubDiv>
        <SubDiv height={'35%'} top={'680px'}>
          <SubTitle>패션</SubTitle>
          <Fashions></Fashions>
        </SubDiv>
      </MobileBox>
    </Container>
  )
}

export default Body6
