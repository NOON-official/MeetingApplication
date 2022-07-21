import styled from 'styled-components'
import Appearance from '../TeamMate/Appearance'
import Mbtis from '../TeamMate/Mbti'
import Fashions from '../TeamMate/Fashion'
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
`
const Title = styled.div`
  display: flex;
  top: 2%;
  font-size: 18px;
  font-weight: bold;
  height: 27px;
  left: 10%;
  margin: 0;
  color: #000;
  font-style: normal;
  letter-spacing: -0.015em;
  line-height: 149.8%;
  position: absolute;
  text-align: center;
  width: 90%;
`
const SubDiv = styled.div`
  position: absolute;
  top: ${(props) => props.top || '5%'};
  left: 10%;
  width: 80%;
  height: ${(props) => props.height || '10%'};
`
const SubTitle = styled.div`
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
    <Container>
      <Title>우리팀에는 이런 사람들이 있어요!</Title>
      <SubDiv height={'35%'} top={'10%'}>
        <SubTitle>외모</SubTitle>
        <Appearance></Appearance>
      </SubDiv>
      <SubDiv height={'45%'} top={'45%'}>
        <SubTitle>mbti</SubTitle>
        <Mbtis></Mbtis>
      </SubDiv>
      <SubDiv height={'35%'} top={'95%'}>
        <SubTitle>패션</SubTitle>
        <Fashions></Fashions>
      </SubDiv>
    </Container>
  )
}

export default Body6
