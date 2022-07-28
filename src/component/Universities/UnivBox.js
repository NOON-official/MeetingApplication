import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import { Fab } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import * as React from 'react'
const buttonColor = '#C4D7E0'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  top: 20%;
  width: 301px;
`
const UniversitiesBox = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px;
`

const Uni = styled.button`
  width: 50%;
  height: 100%;
  border: 0.2px solid var(--color-lightblue);
  border-radius: var(--round-borderradious);
  margin: 10px;
  max-height: 200px;
  font-family: var(--font);
  font-size: var(--font-size-title);
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.background_color || 'transparent'};
`
const University = (props) => {
  const dispatch = useDispatch()
  const universities = useSelector((state) => state.university)
  const num = useSelector((state) => state.num)
  const exist = React.useMemo(
    () => universities.includes(props.university),
    [universities]
  )
  const bgcolor = React.useMemo(
    () => (exist ? buttonColor : 'transparent'),
    [exist]
  )
  const fontColor = React.useMemo(() => (exist ? 'white' : 'black'), [exist])

  const OnUniversityClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'UNIVERSITIES_DELETE', payload: props.university })
    } else {
      if (universities.length < num)
        dispatch({ type: 'UNIVERSITIES', payload: props.university })
    }
  }, [exist, props.university, universities])
  return (
    <Uni
      color={fontColor}
      background_color={bgcolor}
      onClick={OnUniversityClick}
    >
      {props.university}
    </Uni>
  )
}

const UnivBox = () => {
  return (
    <Container>
      <UniversitiesBox>
        <University university={'외대'}></University>
        <University university={'경희대'}></University>
      </UniversitiesBox>
      <UniversitiesBox>
        <University university={'시립대'}></University>
        <University university={'한예종'}></University>
      </UniversitiesBox>
      <UniversitiesBox>
        <University university={'기타'}></University>
      </UniversitiesBox>
    </Container>
  )
}

export default UnivBox
