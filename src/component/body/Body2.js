import * as React from 'react'
import styled from 'styled-components'
import {
  GenderSelect,
  NumberSelect,
  AgeSelect,
  JobSelect,
} from '../Elements/GenderSelec'
import { ReactComponent as PageTitle } from '../../Asset/page2/Page2Title.svg'
import { ReactComponent as Character } from '../../Asset/page2/Character.svg'
import {
  Container,
  MobileBox,
  StyledDiv,
  StyledText,
} from '../Elements/StyledComponent'
const TeamSelectBox = styled.div`
  height: 70%;
  width: 95%;
  position: absolute;
  top: 10%;
`
const Body2 = () => {
  return (
    <Container bg=" #F5F5F5">
      <MobileBox>
        <StyledDiv top="5%" width="196px" height="40px" left="30%">
          <StyledText position="static" size="35px" color="#F49393">
            우리 팀을 소개
          </StyledText>
          <StyledText position="static" size="35px">
            해주세요
          </StyledText>
        </StyledDiv>
        <TeamSelectBox>
          <GenderSelect />
          <NumberSelect />
          <AgeSelect />
          <JobSelect />
        </TeamSelectBox>
        <StyledDiv top="82%" left="80%">
          <Character />
        </StyledDiv>
      </MobileBox>
    </Container>
  )
}
export default Body2
