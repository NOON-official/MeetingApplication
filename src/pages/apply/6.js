import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/ApplyButton';

function Apply6() {
  const navigate = useNavigate();

  const handleBefore = useCallback(() => {
    navigate('/apply/5');
  });

  const handleSubmit = useCallback(() => {
    navigate('/apply/certification');
  });

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
              <SmallContent>남성</SmallContent>
            </Info>
            <Info>
              <SmallTitle>인원수</SmallTitle>
              <SmallContent>남성</SmallContent>
            </Info>
            <Info>
              <SmallTitle>학교</SmallTitle>
              <SmallContent>남성</SmallContent>
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
              <SmallContent>십세</SmallContent>
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
              <SmallContent>십세</SmallContent>
            </Info>
            <Info>
              <SmallTitle>학교</SmallTitle>
              <SmallContent>남성</SmallContent>
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
              <SmallContent>십세</SmallContent>
            </Info>
            <Info>
              <SmallTitle>주량 레벨</SmallTitle>
              <SmallContent>남성</SmallContent>
            </Info>
          </InfoContent>
        </InfoBox>
        <InfoBox>
          <InfoTitle>
            4. 우리팀 <Pink>한 줄 어필</Pink>
          </InfoTitle>
          <InfoContent>
            <Info>
              <SmallContent>
                dhodksehlrhwlfkdlwasfdsfsfsfdsffdsdfsfssdfsdsfsdfsf
              </SmallContent>
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

const SLink = styled(Link)`
  padding: 10px 58.6px;
  text-decoration: 'none';
  color: ${(props) => props.theme.lightPink};
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;
