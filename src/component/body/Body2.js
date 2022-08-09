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
import { Container, MobileBox, StyledDiv } from '../Elements/StyledComponent'
const TeamSelectBox = styled.div`
  height: 70%;
  width: 95%;
  position: absolute;
  top: 10%;
`
const Body2 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv top="5%" left="5%" transform="0">
          <PageTitle />
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
