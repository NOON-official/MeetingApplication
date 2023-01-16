import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from '../../style/theme';
import { ReactComponent as MainImg } from '../../asset/svg/MainImg.svg';
import MainLayOut from '../../layout/mainlayout';
import BottomFooter from '../../layout/footer/bottomFooter';
import MainFooter from '../../layout/footer/mainFooter';

function Main() {
  const twoman = 25;
  const twogirl = 10;
  const threeman = 3;
  const threegirl = 24;

  return (
    <MainLayOut>
      <ImgBox>
        <Users>최근 일주일 사용자 수 10명</Users>
        <MainImg />
      </ImgBox>
      <MatchingBox>
        <Title>50명이 채워지면 바로 매칭됩니다.</Title>
        <SubTitle>2 : 2</SubTitle>
        <TotalBar>
          <Number>{twoman}</Number>
          <LeftBar>
            <LeftBarProgress progress={twoman} />
          </LeftBar>
          <RightBar>
            <RightBarProgress progress={twogirl} />
          </RightBar>
          <Number>{twogirl}</Number>
        </TotalBar>
        <SubTitle>3 : 3</SubTitle>
        <TotalBar>
          <Number>{threeman}</Number>
          <LeftBar>
            <LeftBarProgress progress={threeman} />
          </LeftBar>
          <RightBar>
            <RightBarProgress progress={threegirl} />
          </RightBar>
          <Number>{threegirl}</Number>
        </TotalBar>
      </MatchingBox>
      <SLink to="/apply/team">매칭 시작하기</SLink>
      <MainFooter />
      <BottomFooter />
    </MainLayOut>
  );
}

export default Main;

const ImgBox = styled.div`
  position: relative;
  margin-right: 40px;
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

const Users = styled.div`
  text-align: center;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 24px;
  position: absolute;
  margin-left: 25px;
  width: 260px;
  height: 43px;
  line-height: 30px;
  top: 15%;
  background-color: ${theme.background};
`;

const MatchingBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 20px;
  padding: 11px 10px 8px 9px;
  width: 332px;
  height: 140px;
  background: #ffffff;
  border-radius: 10px;
  text-align: center;
`;

const Title = styled.p`
  width: 100%;
  color: ${theme.pink};
`;

const SubTitle = styled.p`
  width: 100%;
  color: black;
  margin-top: 5px;
`;

const TotalBar = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const LeftBar = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 110px;
  height: 18px;
  background: white;
  border: 1px solid #f1ecec;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const RightBar = styled.div`
  position: relative;
  width: 110px;
  height: 18px;
  background: white;
  border: 1px solid #f1ecec;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const LeftBarProgress = styled.div`
  position: absolute;
  max-width: 110px;
  ${({ progress }) => {
    return progress ? `width: ${progress * 4.4}px` : `width: 0`;
  }};
  height: 18px;
  background: #bfe0ff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const RightBarProgress = styled.div`
  position: absolute;
  max-width: 110px;
  ${({ progress }) => {
    return progress ? `width: ${progress * 4.4}px` : `width: 0`;
  }};
  height: 18px;
  background: #ffbfbf;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Number = styled.p`
  width: 10px;
  padding: 0 10px;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 15px;
`;

const SLink = styled(Link)`
  width: 90px;
  height: 30px;
  font-family: 'Nanum JungHagSaeng';
  margin-top: 48px;
  padding: 15px 50px;
  font-weight: 400;
  font-size: 24px;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  background-color: ${theme.pink};
`;
