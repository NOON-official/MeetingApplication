import styled from 'styled-components';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HeaderIcon } from '../Asset/Header/Header.svg';
import { StyledDiv } from './Elements/StyledComponent';
import { useDispatch, useSelector } from 'react-redux';
import isLogin from '../utils/isLogin';
import client from '../api';
import MainPageLogin from './Auth/MainPageLogin';
import {persistor} from '../index'
const HeaderContainer = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 5%;
  background-color: #F8F3F3;
  border-bottom: 1px solid #FFB9B9;
`;
const HeaderLeft = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: black;
  font-family: 'Single Day', cursive;
  margin: 10px 0 0 10px
`;
const MainPageHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  background-color: #F8F3F3;
  border-bottom: 1px solid #FFB9B9;
`
const MainPageHeaderTop = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  color: black;
  font-family: 'Single Day', cursive;

`
const HeaderRight = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
  color: #666666;
  font-weight: 500;
  font-family: 'Pretendard';
  margin: 0 20px 0 0;
`

const LogIn = () =>{
  return(
       <MainPageLogin/>
  )
}
export const MainPageHeader = () => {
  const pagestate = useSelector((state)=> state.pagestate);
  const dispatch = useDispatch();
  async function logOut () {
       
        window.sessionStorage.clear();
        window.localStorage.clear();
     
         await persistor.purge();
       
};
  const [IsLogin, setIsLogin] = useState(isLogin());
 useEffect(()=>{
    dispatch({type: "SET_LOGIN", payload:IsLogin})
 },[IsLogin])
 
 const MatchingStatusRefresh = async() =>{
          await client
          .get(`api/team/status/${window.sessionStorage.getItem('ourteamId')}`)
          //delete header
          .then((res) => {
            window.localStorage.setItem('matchingStatus',res.data.data.matchingStatus)
          })
          .catch((err) => console.log(err));
      }
  const LogOut = ()=>
      {
        return(
          <div onClick={()=>{logOut(),setIsLogin(false)} }> 로그아웃</div>
        )
      }

  const pageChange=(state)=>{
        return(dispatch({type: 'PAGE', payload: state}));
                            }
  const OnStateColor = ()=>{
      const bg = "#EB8888";
      const font = "#FFFFFF";
      
      return( {bg , font} )
                            }
  const main = useMemo(()=>(pagestate==0&& OnStateColor()),[pagestate]);
  const guide = useMemo(()=>(pagestate==1&& OnStateColor()),[pagestate]);
  const matching = useMemo(()=>(pagestate==2 && OnStateColor()),[pagestate]);
  const myinfo = useMemo(()=>(pagestate==3&& OnStateColor()),[pagestate]);




  return (
    
    <MainPageHeaderContainer>
    <meta name="naver-site-verification" content="e48f4f30d53fb880accd2777448fe7c7d3bd0b9f" />

    <MainPageHeaderTop>
      <HeaderLeft>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <HeaderIcon/>
        </Link>
      </HeaderLeft>
      <HeaderRight>
     { IsLogin? <LogOut/>:<LogIn/>}
      </HeaderRight>
      </MainPageHeaderTop>
      <StyledDiv
        position="static"
          width="100%"
          height="30px"
          display="flex"
          direction="row"
          justify_content="space-around"
          align_item="center"
          left="0%"
          transform="0"
        >
          <StyledDiv onClick={()=>{pageChange(0)}} border="10px"bg={main.bg} color={main.font?main.font:"#666666"} display="flex" justify_content="center" align_item="center" text_align="center"height="23px"position="static" width="23%" transform="0" size="12px" font="Pretendard">
              홈
          </StyledDiv>
          <StyledDiv onClick={()=>{pageChange(1)}} border="10px"bg={guide.bg}  color={guide.font?guide.font:"#666666"}display="flex" justify_content="center" align_item="center" text_align="center"height="23px"position="static" width="23%" transform="0" size="12px" font="Pretendard">
            가이드
          </StyledDiv>
          <StyledDiv onClick={()=>{pageChange(2),isLogin && MatchingStatusRefresh() }}border="10px" bg={matching.bg} color={matching.font?matching.font:"#666666"}display="flex" justify_content="center" align_item="center" text_align="center"height="23px" position="static" width="23%" transform="0" size="12px" font="Pretendard">
            매칭 조회
          </StyledDiv>
          <StyledDiv onClick={()=>{pageChange(3)}} border="10px"bg={myinfo.bg} color={myinfo.font?myinfo.font:"#666666"}display="flex" justify_content="center" align_item="center" text_align="center"height="23px" position="static" width="23%" transform="0" size="12px" font="Pretendard">
             내정보
          </StyledDiv>
        </StyledDiv>
    </MainPageHeaderContainer>
    )
};


export const Header = () => {
  return (
    <HeaderContainer>
    <meta name="naver-site-verification" content="e48f4f30d53fb880accd2777448fe7c7d3bd0b9f" />

      <HeaderLeft>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <HeaderIcon/>
        </Link>
      </HeaderLeft>
    </HeaderContainer>
  );
};


