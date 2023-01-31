import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/ApplyButton';

function Apply6() {
  const {
    intro,
    gender,
    memberCount,
    universities,
    members,
    drink,
    prefSameUniversity,
    prefAge,
    prefVibe,
  } = useSelector((store) => store.apply);
  const navigate = useNavigate();

  const handleBefore = useCallback(() => {
    navigate('/apply/5');
  });

  const handleSubmit = useCallback(() => {
    navigate('/apply/certification');
  });

  const VibeContent = {
    1: '코로나 때문에 못한 연애오늘?!',
    2: '친구는 다다익선! 찐친 만들어 보자',
    3: '왁자지껄 이 밤이 떠나가라!',
    4: '술게임 한 수 배우러 왔습니다',
    5: '술게임 못해도 챙겨주는 훈훈한 분위기',
  };

  return (
    <ApplyLayout>
      <Title>
        <Maintitle>
          <Pink>당신만의 미팅학개론</Pink>을 정리해 드립니다
        </Maintitle>
      </Title>
      <Content>
        <InfoBox>
          <InfoTitle>
            1. <Pink>우리는</Pink> 이런 팀이에요!
          </InfoTitle>
          <InfoContent>
            <Info>
              <SmallTitle>성별</SmallTitle>
              <SmallContent>{gender === 1 ? '남성' : '여성'}</SmallContent>
            </Info>
            <Info>
              <SmallTitle>인원수</SmallTitle>
              <SmallContent>{memberCount === 2 ? '2명' : '3명'}</SmallContent>
            </Info>
            <Info>
              <SmallTitle>학교</SmallTitle>
              <SmallContent>
                {universities.map((a) => {
                  return <School key={a['key']}>{a['univ']}</School>;
                })}
              </SmallContent>
            </Info>
            <Info>
              <SmallTitle>선호 날짜</SmallTitle>
              <SmallContent>남성</SmallContent>
            </Info>
            <Info>
              <SmallTitle>선호 지역</SmallTitle>
              <SmallContent>남성</SmallContent>
            </Info>
          </InfoContent>
          <InfoContent>
            <Info>
              <SmallTitle>나이</SmallTitle>
              <SmallContent>
                {prefAge[0]} ~ {prefAge[1]}세
              </SmallContent>
            </Info>
            <Info>
              <SmallTitle>MBTI</SmallTitle>
              <SmallContent>남성</SmallContent>
            </Info>
            <Info>
              <SmallTitle>포지션</SmallTitle>
              <SmallContent>십세</SmallContent>
            </Info>
            <Info>
              <SmallTitle>닮은꼴</SmallTitle>
              <SmallContent>남성</SmallContent>
            </Info>
          </InfoContent>
        </InfoBox>
        <InfoBox>
          <InfoTitle>
            2. <Pink>상대</Pink>는 이런 팀을 원해요!
          </InfoTitle>
          <InfoContent>
            <Info>
              <SmallTitle>평균 나이</SmallTitle>
              <SmallContent>
                {prefAge[0]} ~ {prefAge[1]}세
              </SmallContent>
            </Info>
            <Info>
              <SmallTitle>학교</SmallTitle>
              <SmallContent>
                {prefSameUniversity === 0 ? '같은학교는 싫어요' : '상관없어요'}
              </SmallContent>
            </Info>
          </InfoContent>
        </InfoBox>
        <InfoBox>
          <InfoTitle>
            3. <Pink>미팅</Pink>은 이랬으면 좋겠어요!
          </InfoTitle>
          <InfoContent>
            <Info>
              <SmallTitle>분위기</SmallTitle>
              <SmallContent>
                {prefVibe.map((a) => {
                  return <div key={a}>{VibeContent[a]}</div>;
                })}
              </SmallContent>
            </Info>
            <Info>
              <SmallTitle>주량 레벨</SmallTitle>
              <SmallContent>Level {drink}</SmallContent>
            </Info>
          </InfoContent>
        </InfoBox>
        <InfoBox>
          <InfoTitle>
            4. 우리팀 <Pink>한 줄 어필</Pink>
          </InfoTitle>
          <InfoContent>
            <Info>
              <SmallContent>{intro}</SmallContent>
            </Info>
          </InfoContent>
        </InfoBox>
      </Content>
      <Footer>
        <ButtonBox>
          <ApplyButton onClick={handleBefore}>이전</ApplyButton>
          <ApplyButton onClick={handleSubmit}>다음</ApplyButton>
        </ButtonBox>
      </Footer>
    </ApplyLayout>
  );
}

export default Apply6;

const Title = styled.div`
  width: 90%;
  margin-top: 8%;
  height: 13%;
  min-height: 13%;
`;

const Maintitle = styled.div`
  width: 100%;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 35px;
`;

const Pink = styled.span`
  color: ${theme.pink};
`;

const Content = styled.div`
  width: 90%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoBox = styled.div`
  margin-top: 8%;
  width: 90%;
  padding: 17px;
  background-color: white;
  border: 1px solid #f1ecec;
  border-radius: 10px;
`;

const InfoTitle = styled.div`
  padding-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
`;

const School = styled.div`
  width: 100%;
`;

const InfoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 5px;
  border-top: 1px solid #f1ecec;
`;

const Info = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
`;

const SmallTitle = styled.span`
  width: 25%;
  font-family: 'Nanum JungHagSaeng';
  color: #bbbbbb;
  font-weight: 400;
  font-size: 21px;
`;

const SmallContent = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid red;
  max-width: 80%;
  word-break: break-all;
  font-family: 'Nanum JungHagSaeng';
  color: #777777;
  font-weight: 400;
  font-size: 21px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10%;
  padding-bottom: 5%;
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;
