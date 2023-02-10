import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import theme from '../style/theme';
import { ReactComponent as MainImg } from '../asset/svg/MainImg.svg';
import MainLayout from '../layout/MainLayout';
import BottomFooter from '../layout/footer/BottomFooter';
import MainFooter from '../layout/footer/MainFooter';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';

function Main() {
  const { finishedStep } = useSelector((store) => store.apply);

  const navigate = useNavigate();

  const handleStart = useCallback(() => {
    navigate('/apply/agree');
  }, [finishedStep]);

  const twoman = 25;
  const twogirl = 10;
  const threeman = 3;
  const threegirl = 24;

  return (
    <MainLayout>
      <Section mx="10px" my="12px">
        <ImgBox>
          <UserCountText>
            <span>1</span>
            <span>0</span>
            <span>0</span>
          </UserCountText>
          <MainImg />
        </ImgBox>
      </Section>

      <Section>
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
      </Section>

      <Section my="32px" center>
        <PrimaryButton onClick={handleStart}>매칭 시작하기</PrimaryButton>
      </Section>

      <MainFooter />
      <BottomFooter />
    </MainLayout>
  );
}

export default Main;

const ImgBox = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: center;

  > svg {
    width: 100%;
    height: auto;
  }
`;

const UserCountText = styled.div`
  position: absolute;
  top: 9.3%;
  right: 27%;

  > span {
    font-family: 'Nanum JungHagSaeng';
    font-weight: 400;
    font-size: 26px;
  }
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
