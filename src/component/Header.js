import styled from 'styled-components'
import React,{useState} from "react";
import { Link } from 'react-router-dom'
import audio_file from '../sound/y2mate.com - 기억의 습작.mp3';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
var audio= new Audio(audio_file);
const HeaderContainer= styled.div`

display: flex;
justify-content: space-between;
margin: 20px;

`
const HeaderLeft= styled.div`
justify-content:center;
align-items: center;
text-align: center;
font-size: 20px;
font-weight:bold;
color:black;
`
const HeaderRight=styled.div`
`
const MyPage= styled.div`
`

const Header=()=>{
  const [Music, setMusic]= useState(true);
function MusicOff(){
  setMusic(false);
  audio.pause();
}
const MusicOn=()=>{
  setMusic(true);
  audio.play()
}

  return(
<HeaderContainer>
  
  <Link to="/" style={{ textDecoration: 'none' }}>
<HeaderLeft>미팅학개론 {Music?<VolumeOffIcon onClick={()=>MusicOff()}/>:<VolumeDownIcon onClick={()=>MusicOn()}/>} </HeaderLeft>
</Link>
<HeaderRight>
  <MyPage>내 정보</MyPage>
</HeaderRight>
</HeaderContainer>
  )
}

export default Header