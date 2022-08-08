import styled from 'styled-components'
import * as React from 'react'
import DATA from '../mbti'
import { useState } from 'react'

const Container = styled.div`
  left: 0;
  overflow: hidden;
  overflow-x: hidden;
  position: absolute;
  top: 10%;
  width: 100%;
  height: 75%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  display: flex;
  top: 10%;
  font-size: 17px;
  font-weight: bold;
  height: auto;
  margin: 0;
  color: #000;
  font-style: normal;
  letter-spacing: -0.015em;
  line-height: 149.8%;
  position: absolute;
  text-align: center;
  justify-content: center;
  width: auto;
`
const StyledInput = styled.input`
  margin: 10px;
  padding: 5px;
`

const Body12 = () => {
  const [compatibility, setCompatibility] = useState(0)
  const [ourTeam, setourTeam] = useState()
  const [opposingTeam, setopposingTeam] = useState([])
  const [mbti1, setMbti1] = useState('')
  const [mbti2, setMbti2] = useState('')
  //const [mbti3, setMbti3] = useState('')
  const [mbti4, setMbti4] = useState('')
  const [mbti5, setMbti5] = useState('')
  //const [mbti6, setMbti6] = useState('')

  const result = React.useMemo(() =>
    compatibility >= 60 ? '궁합이 너무 좋아요' : '최악이에요'
  )
  const OnChange = (e) => {
    if (e.target.id === 'mbti1') {
      setMbti1(e.target.value)
    } else if (e.target.id === 'mbti2') {
      setMbti2(e.target.value)
    } //else if (e.target.id === 'mbti3') {
    //setMbti3(e.target.value)}
    else if (e.target.id === 'mbti4') {
      setMbti4(e.target.value)
    } else if (e.target.id === 'mbti5') {
      setMbti5(e.target.value)
    } // else if (e.target.id === 'mbti6') {
    //setMbti6(e.target.value)}
  }
  const OnClick = () => {
    setourTeam([mbti1, mbti2])
    setopposingTeam([mbti4, mbti5])
    mbtiCompatibility(ourTeam, opposingTeam)
  }

  function mbtiCompatibility(ourTeam, opposingTeam) {
    let num = 0
    ourTeam.map((ourTeamMbti) => {
      opposingTeam.map((opposingTeamMbti) => {
        num += DATA[ourTeamMbti][opposingTeamMbti]
      })
    })
    setCompatibility(num)
  }

  return (
    <Container>
      <Title> 드디어 끝이 났어요... 많이 사랑해주세요</Title>
      <div className="mbtiCombatibilityBox">
        <p>우리팀과 상대팀의 MBTI 궁합을 점수로 알아봐요!</p>
        <div>
          <span>우리팀원 MBTI</span>
          <StyledInput
            placeholder="mbti1"
            id="mbti1"
            onChange={OnChange}
          ></StyledInput>
          <StyledInput
            placeholder="mbti2"
            id="mbti2"
            onChange={OnChange}
          ></StyledInput>
          <StyledInput
            placeholder="mbti3"
            id="mbti3"
            onChange={OnChange}
          ></StyledInput>
        </div>
        <div>
          <span>상대팀원 MBTI</span>
          <StyledInput
            placeholder="mbti4"
            id="mbti4"
            onChange={OnChange}
          ></StyledInput>
          <StyledInput
            placeholder="mbti5"
            id="mbti5"
            onChange={OnChange}
          ></StyledInput>
          <StyledInput
            placeholder="mbti6"
            id="mbti6"
            onChange={OnChange}
          ></StyledInput>
        </div>
        <button onClick={OnClick}>mbti 점수 확인하기</button>
        <p>점수:{compatibility}</p>
        <p>{result}</p>
      </div>
    </Container>
  )
}

export default Body12
