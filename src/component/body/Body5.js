import AreaContainer from '../Areas/AreaContainer'
import styled from 'styled-components'
import DaysContainer from '../DAYS/DaysContainer'
import { Container, MobileBox, Title } from '../Elements/StyledComponent'

const Body5 = () => {
  return (
    <Container>
      <MobileBox>
        <Title>미팅 가능한 지역을 알려주세요</Title>
        <AreaContainer></AreaContainer>
        <Title top={'60%'}>선호하는 요일을 알려주세요</Title>
        <DaysContainer></DaysContainer>
      </MobileBox>
    </Container>
  )
}
export default Body5
