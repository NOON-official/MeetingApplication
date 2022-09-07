import styled from 'styled-components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HeaderIcon } from '../Asset/Header/Header.svg';
import { StyledDiv } from './Elements/StyledComponent';
import { useDispatch } from 'react-redux';
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

export const MainPageHeader = ()=>{

  const dispatch = useDispatch();
  const pageChange=(state)=>{
    
 return(dispatch({type: 'PAGE', payload: state}));
                            }
  return (
    
    <MainPageHeaderContainer>
    <meta name="naver-site-verification" content="e48f4f30d53fb880accd2777448fe7c7d3bd0b9f" />

    <MainPageHeaderTop>
      <HeaderLeft>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <HeaderIcon/>
        </Link>
      </HeaderLeft>
      <HeaderRight>로그아웃</HeaderRight>
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
          <StyledDiv onClick={()=>{pageChange(0)}} display="flex" justify_content="center" align_item="center"color="#666666" text_align="center"height="23px"position="static" width="25%" transform="0" size="12px" font="Pretendard">
              홈
          </StyledDiv>
          <StyledDiv onClick={()=>{pageChange(1)}}display="flex" justify_content="center" align_item="center" color="#666666" text_align="center"height="23px"position="static" width="25%" transform="0" size="12px" font="Pretendard">
            가이드
          </StyledDiv>
          <StyledDiv onClick={()=>{pageChange(2)}} display="flex" justify_content="center" align_item="center"color="#666666" text_align="center"height="23px" position="static" width="25%" transform="0" size="12px" font="Pretendard">
            매칭 조회
          </StyledDiv>
          <StyledDiv onClick={()=>{pageChange(3)}}display="flex" justify_content="center" align_item="center"color="#666666" text_align="center"height="23px" position="static" width="25%" transform="0" size="12px" font="Pretendard">
            우리팀 정보
          </StyledDiv>
        </StyledDiv>
    </MainPageHeaderContainer>)
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


