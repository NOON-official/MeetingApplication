import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/ApplyButton';

function Apply6() {
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
            <Info>fsdf</Info>
          </InfoContent>
        </InfoBox>
        <InfoBox>
          <InfoTitle>
            2. <Pink>상대</Pink>는 이런 팀을 원해요!
          </InfoTitle>
          <InfoContent>
            <Info>fsdf</Info>
          </InfoContent>
        </InfoBox>
        <InfoBox>
          <InfoTitle>
            3. <Pink>미팅</Pink>은 이랬으면 좋겠어요!
          </InfoTitle>
          <InfoContent>
            <Info>fsdf</Info>
          </InfoContent>
        </InfoBox>
        <InfoBox>
          <InfoTitle>
            4. 우리팀 <Pink>한 줄 어필</Pink>
          </InfoTitle>
          <InfoContent>
            <Info>fsdf</Info>
          </InfoContent>
        </InfoBox>
      </Content>
      <Footer>
        <ButtonBox>
          <ApplyButton>
            <SLink to="/apply/5">이전</SLink>
          </ApplyButton>
          <ApplyButton>
            <SLink to="/apply/certification">다음</SLink>
          </ApplyButton>
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
  border: 1px solid red;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const InfoBox = styled.div`
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
  border-bottom: 1px solid #f1ecec;
`;

const InfoContent = styled.div`
  padding: 0 10px;
  font-weight: 600;
  font-size: 14px;
`;

const Info = styled.div`
  padding-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
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
