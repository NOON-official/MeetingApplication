import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCallback, useState } from 'react';

import { Slider } from 'antd';
import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/ApplyButton';
import ProgressBar from '../../components/ProgressBar';
import { ReactComponent as Bottom } from '../../asset/svg/Apply5Bottom.svg';

function Apply5() {
  const marks = {
    20: { label: <SliderText>20세</SliderText> },
    29: { label: <SliderText>29세</SliderText> },
  };
  const marks2 = {
    1: { label: <SliderText>Level 1</SliderText> },
    2: { label: <SliderText>2</SliderText> },
    3: { label: <SliderText>3</SliderText> },
    4: { label: <SliderText>4</SliderText> },
    5: { label: <SliderText>5</SliderText> },
  };

  const [school, setschool] = useState(false);

  const schoolhandler = useCallback(() => {
    setschool(false);
  }, [school]);

  console.log({ school });

  return (
    <ApplyLayout>
      <Title>
        <Maintitle>
          <Pink>어떤 상대팀</Pink>을 원하시나요?
        </Maintitle>
        <Subtitle>중복 선택이 가능해요</Subtitle>
      </Title>
      <Title2>
        <Maintitle2>평균 나이</Maintitle2>
        <Subtitle2>범위를 넓게 선택해야 매칭확률이 상승해요</Subtitle2>
      </Title2>
      <SSlider
        tooltip={{ placement: 'bottom' }}
        marks={marks}
        max={29}
        min={20}
        range
        defaultValue={[23, 25]}
      />
      <Title2>
        <Maintitle2>상대팀 학교</Maintitle2>
      </Title2>
      <ChooseBox>
        <SmallButton onClick={schoolhandler}>같은 학교는 싫어요</SmallButton>
        <SmallButton>상관없어요</SmallButton>
      </ChooseBox>
      <Title>
        <Maintitle>
          <Pink>미팅</Pink>은 어땠으면 좋겠어요?
        </Maintitle>
        <Subtitle>중복 선택이 가능해요</Subtitle>
      </Title>
      <Title2>
        <Maintitle2>분위기</Maintitle2>
      </Title2>
      <ChooseBox2>
        <BigButton>코로나 때문에 못한 연애오늘?!</BigButton>
        <BigButton>친구는 다다익선! 찐친 만들어 보자</BigButton>
        <BigButton>왁자지껄 이 밤이 떠나가라!</BigButton>
        <BigButton>술게임 한 수 배우러 왔습니다</BigButton>
        <BigButton>술게임 못해도 챙겨주는 훈훈한 분위기</BigButton>
      </ChooseBox2>
      <Title2>
        <Maintitle2>주량 레벨</Maintitle2>
        <Subtitle2>우리팀의 평균 주량을 알려주세요</Subtitle2>
      </Title2>
      <SSlider dots marks={marks2} max={5} min={1} defaultValue={3} />
      <SBottom />
      <Footer>
        <ProgressBar page={5} />
        <ButtonBox>
          <ApplyButton>
            <SLink to="/apply/4">이전</SLink>
          </ApplyButton>
          <ApplyButton>
            <SLink to="/apply/6">다음</SLink>
          </ApplyButton>
        </ButtonBox>
      </Footer>
    </ApplyLayout>
  );
}

export default Apply5;

const Title = styled.div`
  width: 90%;
  margin-top: 8%;
  height: 13%;
  min-height: 13%;
`;
const Title2 = styled.div`
  margin-top: 3%;
  width: 90%;
  height: 10%;
  min-height: 10%;
`;

const Maintitle = styled.div`
  width: 100%;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 35px;
`;

const Maintitle2 = styled.div`
  margin-top: 8%;
  width: 100%;
  height: 10%;
  font-weight: 500;
  font-size: 14px;
  color: #777777;
`;

const Pink = styled.span`
  color: ${theme.pink};
`;

const Subtitle = styled.p`
  margin-top: 4%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 13px;
`;

const Subtitle2 = styled.p`
  margin-top: 3%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 12px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 6%;
  padding-bottom: 5%;
`;

const SLink = styled(Link)`
  padding: 10px 58px;
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

const SSlider = styled(Slider)`
  margin-top: 6%;
  width: 85%;
`;

const SliderText = styled.p`
  font-weight: 400;
  color: #b79292;
  font-size: 16px;
  font-family: 'Nanum JungHagSaeng';
`;

const ChooseBox = styled.div`
  margin-top: 4%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  padding-bottom: 10%;
`;

const SmallButton = styled.button`
  background-color: ${(props) => (props.color ? 'red' : '#f6eeee')};
  color: ${(props) => (props.fontcolor ? 'white' : '#b79292')};
  border-radius: 10px;
  border: none;
  font-family: 'Nanum JungHagSaeng';
  width: 162px;
  height: 45px;
  font-weight: 400;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const ChooseBox2 = styled.div`
  margin-top: 3%;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const BigButton = styled.button`
  margin-top: 3%;
  background: #f6eeee;
  border-radius: 10px;
  border: none;
  font-family: 'Nanum JungHagSaeng';
  width: 360px;
  height: 45px;
  font-weight: 400;
  font-size: 20px;
  color: #b79292;
  background: '#f6eeee';
  &:hover {
    cursor: pointer;
  }
`;

const SBottom = styled(Bottom)`
  margin-left: 57%;
  margin-top: 4%;
`;
