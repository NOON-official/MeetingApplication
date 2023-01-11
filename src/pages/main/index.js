import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../Style/theme";
import { ReactComponent as MainImg } from "../../asset/svg/MainImg.svg";
import MainLayOut from "../../layout/mainlayout";
import BottomFooter from "../../layout/footer/bottomFooter";
import MainFooter from "../../layout/footer/mainFooter";


const Main = () => {
  
  const a = 19;
  const b = 35;
  const c = 19;
  const d = 35;

  return (
    <>
      <MainLayOut>
        <ImgBox>
          <Users>최근 일주일 사용자 수 10명</Users>
          <MainImg />
        </ImgBox>
        <MatchingBox>
          <Title>50명이 채워지면 바로 매칭됩니다.</Title>
          <SubTitle>2 : 2</SubTitle>
          <TotalBar>
            <Number>3</Number>
            <LeftBar/>
            <LeftBarProgress progress={a}/>
            <RightBar></RightBar>
            <RightBarProgress progress={b}/>
            <Number>18</Number>
          </TotalBar>
          <SubTitle>3 : 3</SubTitle>
          <TotalBar>
            <Number>3</Number>
            <LeftBar/>
            <LeftBarProgress progress={c}/>
            <RightBar></RightBar>
            <RightBarProgress progress={d}/>
            <Number>18</Number>
          </TotalBar>
        </MatchingBox>
        <SLink to ="/apply/team">매칭 시작하기</SLink>
        <MainFooter/>
        <BottomFooter/>
      </MainLayOut>
    </>
  );
};

export default Main;

const ImgBox = styled.div`
  position: relative;
  margin-right:40px;
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

const Users = styled.div`
  text-align:center;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 24px;
  position:absolute;
  margin-left:25px;
  width: 260px;
  height: 43px;
  line-height:30px;
  top:15%;
  background-color: ${theme.background};
`;

const MatchingBox = styled.div`
  margin-top:20px;
  font-family: "Nanum JungHagSaeng";
  font-weight: 400;
  font-size: 20px;
  padding: 11px 10px 8px 9px;
  width: 332px;
  height: 140px;
  background: #FFFFFF;
  border-radius: 10px;
  text-align:center;
`;

const Title = styled.p`
  color: ${theme.pink};
`;

const SubTitle = styled.p`
  color:black;
  margin-top:5px;
`;

const TotalBar = styled.div`
  margin-top:10px;
  display:flex;
  justify-content:center;
`;

const LeftBar = styled.div`
  position:relative;
  width: 107px;
  height: 18px;
  background: white;
  border: 1px solid #F1ECEC;
  border-top-left-radius:10px;
  border-bottom-left-radius:10px;
`;

const RightBar = styled.div`
  width: 107px;
  height: 18px;
  background: white;
  border: 1px solid #F1ECEC;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
`;

const LeftBarProgress = styled.div`
  position:absolute;
  margin-right:112px;
  width: 107px;
  height: 18px;
  background: #BFE0FF;
  border: 1px solid #F1ECEC;
  border-top-left-radius:10px;
  border-bottom-left-radius:10px;
`;

const RightBarProgress = styled.div`
  position:absolute;
  margin-left:107px;
  width: 107px;
  height: 18px;
  background: #FFBFBF;
  border: 1px solid #F1ECEC;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
`;

const Number = styled.p`
  padding: 0 10px;
  font-family: "Nanum JungHagSaeng";
  font-weight: 400;
  font-size: 15px;
`;

const SLink = styled(Link)`
  width:90px;
  height:30px;
  font-family: "Nanum JungHagSaeng";
  margin-top:48px;
  padding: 15px 50px;
  font-weight: 400;
  font-size: 24px;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  background-color:${theme.pink};
`;


