import * as React from 'react'
import {
  GenderSelect,
  NumberSelect,
  AgeSelect,
  JobSelect,
} from '../Elements/GenderSelec'
import { Container, MobileBox, Title } from '../Elements/StyledComponent'

const Body2 = () => {
  return (
    <Container>
      <MobileBox>
        <Title>우리팀을 소개해 주세요</Title>
        <GenderSelect />
        <NumberSelect />
        <AgeSelect />
        <JobSelect />
      </MobileBox>
    </Container>
  )
}
export default Body2
