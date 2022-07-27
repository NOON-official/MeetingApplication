import styled from 'styled-components'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import audio_file from '../sound/y2mate.com - 기억의 습작.mp3'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
var audio = new Audio(audio_file)
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`
const HeaderLeft = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: black;
  font-family: 'Single Day', cursive;
`
const HeaderRight = styled.div``
const MyPage = styled.div``

const Header = () => {
  const [Music, setMusic] = useState(false)
  function MusicOff() {
    setMusic(true)
    audio.pause()
  }
  const MusicOn = () => {
    setMusic(false)
    audio.play()
  }

  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          미팅학개론{' '}
        </Link>
      </HeaderLeft>

      <HeaderRight>
        <MyPage>내 정보</MyPage>
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
