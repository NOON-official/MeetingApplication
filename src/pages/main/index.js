import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../Style/theme";
import { ReactComponent as MainImg } from "../../asset/svg/MainImg.svg";
import MainLayOut from "../../layout/mainlayout";


const Main = () => {
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
          <SubTitle>3 : 3</SubTitle>
        </MatchingBox>
        <SLink to ="/apply/team">매칭 시작하기</SLink>
      </MainLayOut>
    </>
  );
};

export default Main;

const ImgBox = styled.div`
  position: relative;
  margin-right:40px;
  width:100%;
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
  height: 40px;
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

const SLink = styled(Link)`
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


