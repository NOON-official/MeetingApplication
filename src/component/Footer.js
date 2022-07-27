import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Line } from 'rc-progress'
import { useSelector, useDispatch } from 'react-redux'
import { PageNotCompleted } from './ErrorMessages/PageNotCompletedError'
import { authentication } from './Firebase/firebase'

const Container = styled.footer`
  position: fixed;
  bottom: 0%;
  left: 0;
  right: 0;
  height: 15%;
`
const Percentage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 50%;
  margin-left: 10%;
  margin-right: 10%;
`
const PercentageText = styled.div`
  font-weight: bold;
`
const BackAndFront = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  width: 100%;
`
const BackButton = styled.div`
  font-family: 'Single Day', cursive;
`
const FrontButton = styled.div`
  background-color: #c4d7e0;
  font-family: 'Single Day', cursive;
`
const StyledBackLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`
const StyledFrontLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: #c4d7e0;
`

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  const [nextPath, setNextPath] = useState('/')
  const [prevPath, setPrevPath] = useState('/')
  const location = useLocation().pathname
  const [percent, setPercent] = useState(10)
  const phone = useSelector((state) => state.phone)
  const gender = useSelector((state) => state.gender)
  const num = useSelector((state) => state.num)
  const age = useSelector((state) => state.age)
  const jobs = useSelector((state) => state.jobs)
  const prefferedjobs = useSelector((state) => state.prefferedjobs)
  const prefferedage = useSelector((state) => state.prefferedage)
  const preffereduniversity = useSelector((state) => state.preffereduniversity)
  const university = useSelector((state) => state.university)
  const characters = useSelector((state) => state.characters)
  const area = useSelector((state) => state.area)
  const kakaoid = useSelector((state) => state.kakaoid)
  const day = useSelector((state) => state.day)
  const appearance = useSelector((state) => state.appearance)
  const mbti = useSelector((state) => state.mbti)
  const fashion = useSelector((state) => state.fashion)
  const MovingPath = () => {
    if (location === '/Meeting2') {
      if (jobs.length > 0) {
        setNextPath('/Meeting3')
      } else {
        setNextPath('/Meeting2')
      }
      setPrevPath('/')
      setPercent(20)
    } else if (location === '/Meeting3') {
      if (university.length > 0) {
        setNextPath('/Meeting4')
      } else {
        setNextPath('/Meeting3')
      }

      setPrevPath('/Meeting2')
      setPercent(35)
    } else if (location === '/Meeting4') {
      if (characters.length > 0) {
        setNextPath('/Meeting5')
      } else {
        setNextPath('/Meeting4')
      }
      setPrevPath('/Meeting3')
      setPercent(45)
    } else if (location === '/Meeting5') {
      if (area.length > 0 && day.length > 0) {
        setNextPath('/Meeting6')
      } else {
        setNextPath('/Meeting5')
      }

      setPrevPath('/Meeting4')
      setPercent(50)
    } else if (location === '/Meeting6') {
      if (mbti.length > 0 && fashion.length > 0 && appearance.length > 0) {
        setNextPath('/Meeting7')
      } else {
        setNextPath('/Meeting6')
      }

      setPrevPath('/Meeting5')
      setPercent(60)
    } else if (location === '/Meeting7') {
      if (
        prefferedage !== 0 &&
        prefferedjobs.length > 0 &&
        preffereduniversity.length > 0
      ) {
        setNextPath('/Meeting8')
      } else {
        setNextPath('/Meeting7')
      }
      setPrevPath('/Meeting6')
      setPercent(70)
    } else if (location === '/Meeting8') {
      setNextPath('/Meeting9')
      setPrevPath('/Meeting7')
      setPercent(80)
    } else if (location === '/Meeting9') {
      setPrevPath('/Meeting8')
      setNextPath('/Meeting10')
      setPercent(90)
    } else if (location === '/Meeting10') {
      setPrevPath('/Meeting9')
      if (authentication.currentUser) {
        setNextPath('/Meeting11')
      } else {
        setNextPath('/Meeting10')
      }

      setPercent(90)
    } else if (location === '/Meeting11') {
      setPrevPath('/Meeting10')

      setNextPath('/Meeting12')
      setPercent(90)
    } else if (location === '/Meeting12') {
      setPrevPath('/Meeting11')

      setPercent(90)
    }
  }

  return (
    <Container>
      <PageNotCompleted
        open={modalOpen}
        close={closeModal}
        header="아직 완료하지 않은 답변이 있어요"
        children={'구체적인 답변이 매칭률을 높여줍니다!'}
      ></PageNotCompleted>
      <MovingPath />
      <Percentage>
        <Line
          style={{ height: '10px', width: '50%' }}
          percent={percent}
          strokeWidth={4}
          strokeColor="#C4D7E0"
        />
        <PercentageText>{percent}%</PercentageText>
      </Percentage>
      <BackAndFront>
        <StyledBackLink to={prevPath} style={{ textDecoration: 'none' }}>
          {' '}
          <BackButton> 뒤로가기</BackButton>
        </StyledBackLink>

        <StyledFrontLink
          onClick={() => {
            if (location === '/Meeting2' && jobs.length === 0) {
              openModal()
            } else if (location === '/Meeting3' && university.length === 0) {
              openModal()
            } else if (location === '/Meeting4' && characters.length === 0) {
              openModal()
            } else if (
              location === '/Meeting5' &&
              (area.length === 0 || day.length === 0)
            ) {
              openModal()
            } else if (
              location === '/Meeting6' &&
              (appearance.length === 0 ||
                mbti.length === 0 ||
                fashion.length === 0)
            ) {
              openModal()
            } else if (
              location === '/Meeting7' &&
              (preffereduniversity.length === 0 ||
                prefferedjobs.length === 0 ||
                prefferedage === 0)
            ) {
              openModal()
            }
          }}
          to={nextPath}
          style={{ textDecoration: 'none' }}
        >
          {' '}
          <FrontButton>다음으로 </FrontButton>{' '}
        </StyledFrontLink>
      </BackAndFront>
    </Container>
  )
}

export default Footer
