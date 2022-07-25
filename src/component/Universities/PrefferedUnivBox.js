import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import { Fab } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import * as React from 'react'
const buttonColor = '#FFDCE1'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #c9c9c9;
  border-radius: 12px;
  box-sizing: border-box;
  height: 428px;
  left: 50%;
  margin: 0 0 0 -150.5px;
  position: absolute;
  top: 131px;
  width: 301px;
  overflow: scroll;
  overflow-x: hidden;
  top: ${(props) => props.top || '70%'};
`
const UnivHeader = styled(Stack)`
  border: solid #e5e5e5;
  border-width: 0 0 0.5px;
  color: #000;
  margin: 10px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  left: 0;
  letter-spacing: -0.015em;
  line-height: 180%;

  text-align: left;
  width: 281px;
`
const ThreeUnivs = styled(Stack)`
  width: 80%;
  margin-left: 25px;
  margin-bottom: 20px; ;
`

const Univ = styled(Fab)`
  background-color: ${(props) =>
    props.background_color || 'transparent'}!important;
  color: ${(props) => props.color} !important;
`
const Uni = styled.button`
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-height: auto;
  -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 17px;
  padding: 0 8px;
  min-width: 34px;
  width: auto;
  height: 34px;
  z-index: 1050;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.background_color || 'transparent'};
`
const University = (props) => {
  const dispatch = useDispatch()
  const universities = useSelector((state) => state.preffereduniversity)
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
      dispatch({
        type: 'PREFFEREDUNIVERSITIES_DELETE',
        payload: props.university,
      })
    } else {
      dispatch({ type: 'PREFFEREDUNIVERSITIES', payload: props.university })
    }
  }, [exist, props.university])
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

const UnivBox = (props) => {
  return (
    <Container top={props.top}>
      <UnivHeader spacing={2}>ㄱ-ㄹ</UnivHeader>
      <ThreeUnivs direction="row" spacing={2}>
        <University university={'가천대'}></University>
        <University university={'카톨릭대'}></University>
        <University university={'건국대'}></University>
      </ThreeUnivs>
      <ThreeUnivs direction="row" spacing={2}>
        <University university={'경기대'}></University>
        <University university={'경인교대'}></University>
        <University university={'경찰대'}></University>
      </ThreeUnivs>
      <ThreeUnivs direction="row" spacing={0.1}>
        <University university={'경희대'}>경희대</University>
        <University university={'고려대'}>고려대</University>
        <University university={'공군사관학교'}>공군사관학교</University>
      </ThreeUnivs>

      <ThreeUnivs direction="row" spacing={2}>
        <University university={'광운대'}>광운대</University>
        <University university={'국민대'}>국민대</University>
        <University university={'단국대'}>단국대</University>
      </ThreeUnivs>
      <ThreeUnivs direction="row" spacing={1}>
        <University university={'덕성여대'}>덕성여대</University>
        <University university={'동국대'}>동국대</University>
        <University university={'동덕여대'}>동덕여대</University>
      </ThreeUnivs>

      <UnivHeader>ㅁ-ㅅ</UnivHeader>
      <ThreeUnivs direction="row" spacing={2}>
        <University university={'명지대'}>명지대</University>
        <University university={'백석여대'}>백석여대</University>
        <University university={'삼육대'}>삼육대</University>
      </ThreeUnivs>
      <ThreeUnivs direction="row" spacing={2}>
        <University university={'상명대'}></University>
        <University university={'서강대'}></University>
        <University university={'서경대'}></University>
      </ThreeUnivs>
      <ThreeUnivs direction="row" spacing={2}>
        <University university={'서울과학기술대'}>서울과학기술대</University>
        <University university={'서울교대'}>서울교대</University>
      </ThreeUnivs>
      <ThreeUnivs direction="row" spacing={1}>
        <University university={'서울대'}>서울대</University>
        <University university={'서울여대'}>서울여대</University>
        <University university={'서울예대'}>서울예대</University>
      </ThreeUnivs>
      <ThreeUnivs direction="row" spacing={1}>
        <University university={'성균관대'}>성균관대</University>
        <University university={'성신여대'}>성신여대</University>
        <University university={'세종대'}>세종대</University>
      </ThreeUnivs>
      <ThreeUnivs direction="row" spacing={2}>
        <University university={'숙명여대'}>숙명여대</University>
        <University university={'숭실대'}>숭실대</University>
        <University university={'시립대'}>시립대</University>
      </ThreeUnivs>
      <UnivHeader>ㅇ-ㅎ</UnivHeader>
      <ThreeUnivs direction="row" spacing={0.1}>
        <University university={'아주대'}>아주대</University>
        <University university={'연세대'}>연세대</University>
        <University university={'육군사관학교'}>육군사관학교</University>
      </ThreeUnivs>
      <ThreeUnivs direction="row" spacing={2}>
        <University university={'이화여대'}>이화여대</University>
        <University university={'인천대'}>인천대</University>
        <University university={'인하대'}>인하대</University>
      </ThreeUnivs>
      <ThreeUnivs direction="row" spacing={1}>
        <University university={'중앙대'}>중앙대</University>
        <University university={'포항공대'}>포항공대</University>
        <University university={'한국외대'}>한국외대</University>
      </ThreeUnivs>
      <ThreeUnivs direction="row" spacing={2}>
        <University university={'한국체대'}>한국체대</University>
        <University university={'한성대'}>한성대</University>
        <University university={'한양대'}>한양대</University>
      </ThreeUnivs>
    </Container>
  )
}

export default UnivBox
