import * as React from 'react'
import UnivBox from '../Universities/UnivBox'
import {
  Container,
  MobileBox,
  Title,
  SubTitle,
} from '../Elements/StyledComponent'

const Body3 = () => {
  return (
    <Container>
      <MobileBox>
        <Title>조금 더 구체적으로 알려주세요!</Title>
        <SubTitle top="10%">우리는 이런 학교를 다녀요</SubTitle>
        <UnivBox></UnivBox>
      </MobileBox>
    </Container>
  )
}

export default Body3
