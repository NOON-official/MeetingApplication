import styled from 'styled-components';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'antd';
import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/Button/ApplyButton';
import ProgressBar from '../../components/Apply/ProgressBar';
import { submitStep5 } from '../../features/apply';
import NotEnoughIntroModal from '../../components/Modal/Apply/NotEnoughInroModal';
import IsPageCompleteModal from '../../components/Modal/Apply/IsPageCompleteModal';
import ChannelTalk from '../../asset/ChannelTalk';

export default function Apply5Page() {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const { finishedStep, intro, teamName } = useSelector((store) => store.apply);
  const [introduce, setIntroduce] = useState(intro);
  const [name, setName] = useState(teamName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (finishedStep < 4) {
      window.alert('잘못된 접근입니다');
      navigate(`/apply/${finishedStep + 1}`);
    }
  }, [finishedStep]);

  const handleChange = useCallback((e) => {
    setIntroduce(e.target.value);
  }, []);

  const handleTeamName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleBefore = () => {
    navigate('/apply/4members');
  };

  const handleSubmit = useCallback(() => {
    if (!name) {
      setOpenModal2(true);
      return;
    }
    if (introduce.length < 10) {
      setOpenModal(true);
      return;
    }
    dispatch(
      submitStep5({
        intro: introduce,
        teamName: name,
      }),
    );
    navigate('/apply/6prefAge');
  }, [introduce, name]);

  const setModal = (bool) => {
    setOpenModal(bool);
  };

  const setModal2 = (bool) => {
    setOpenModal2(bool);
  };

  return (
    <ApplyLayout>
      <NotEnoughIntroModal open={openModal} setModal={setModal} />
      <IsPageCompleteModal open={openModal2} setModal={setModal2} />
      <ProgressBar page={5} />
      <Title>
        <Maintitle>
          <Pink>우리 팀 이름</Pink>을 지어주세요
        </Maintitle>
      </Title>
      <Text>
        <SInput
          value={name}
          onChange={handleTeamName}
          maxLength={10}
          placeholder="미팅이와 아이들 (10자 이내)"
        />
      </Text>
      <Title2>
        <Maintitle>
          우리팀을 소개하는 <Pink>마지막 한 줄 어필</Pink>
        </Maintitle>
        <Subtitle>
          센스 넘치게 우리 팀을 소개할수록 매칭률이 올라가요!
          <br /> 길게 쓰면 운명의 짝을 만날지도?
        </Subtitle>
      </Title2>
      <Text2>
        <Alert>최소 글자수 10자</Alert>
        <STextArea
          value={introduce}
          bordered={false}
          style={{
            border: '1px solid #f1ecec',
            backgroundColor: '#ffffff',
            height: '150px',
            resize: 'none',
            padding: '20px',
          }}
          showCount
          minLength={10}
          maxLength={150}
          onChange={handleChange}
          placeholder="안녕하세요. 한국대학교 손석구, 최준, 뷔입니다!
          최강의 조합 3인방과 함께라면 그 날은 꿀잼 보장.
          만약 재미없다면 집까지 앞구르기 하면서 가겠습니다.
          (아, 참고로 잘생겼습니다^^)"
        />
      </Text2>
      <Footer>
        <ButtonBox>
          <ApplyButton onClick={handleBefore}>이전</ApplyButton>
          <ApplyButton onClick={handleSubmit}>다음</ApplyButton>
        </ButtonBox>
      </Footer>
      <div>{ChannelTalk.hideChannelButton()}</div>
    </ApplyLayout>
  );
}

const Title = styled.div`
  width: 90%;
  height: 30px;
  margin-top: 7%;
`;

const Title2 = styled.div`
  width: 90%;
  height: 110px;
  margin-top: 10%;
`;

const Maintitle = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 22px;
`;

const Pink = styled.span`
  color: ${theme.pink};
`;

const Subtitle = styled.p`
  margin: 8% 0;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  height: 5%;
`;

const SInput = styled(Input)`
  text-align: center;
  background-color: white;
  width: 90%;
  border: 1px solid #f1ecec;
  border-radius: 10px;
`;

const Text2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const STextArea = styled(Input.TextArea)`
  width: 90%;
  border-radius: 10px;
`;

const Alert = styled.p`
  z-index: 10;
  position: absolute;
  top: 6%;
  right: 10%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 10px;
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
