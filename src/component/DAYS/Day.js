import styled from 'styled-components'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react'
const buttonColor = '#C4D7E0'
const DayButton = styled.input`
  font-family: 'Single Day', cursive;
  border-radius: 100%;
  background-color: ${(props) =>
    props.background_color || 'transparent'}!important;
  color: ${(props) => props.color} !important;
  border: 0.3px solid #c9c9c9;
  width: 20%;
  font-weight: bold;
`
const Day = (props) => {
  const dispatch = useDispatch()
  const day = useSelector((state) => state.day)
  const exist = React.useMemo(() => day.includes(props.day), [day])
  const fontColor = React.useMemo(() => (exist ? 'white' : 'black'), [exist])
  const bgColor = React.useMemo(
    () => (exist ? buttonColor : 'transparent'),
    [exist]
  )
  const OnDayClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'DAY_DELETE', payload: props.day })
    } else {
      dispatch({ type: 'DAY', payload: props.day })
    }
  }, [exist, props.day])
  return (
    <DayButton
      color={fontColor}
      background_color={bgColor}
      type="button"
      value={props.day}
      onClick={OnDayClick}
    ></DayButton>
  )
}

export default Day
