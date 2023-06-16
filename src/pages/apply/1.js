import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/ApplyButton';
import ProgressBar from '../../components/ProgressBar';
import { ReactComponent as Bottom } from '../../asset/svg/B.svg';
import { submitStep1 } from '../../features/apply';
import IsPageCompleteModal from '../../components/Modal/IsPageCompleteModal';
import ChannelTalk from '../../asset/ChannelTalk';

export default function Apply1Page() {
  const { accessToken } = useSelector((state) => state.user);
  const { memberCount } = useSelector((store) => store.apply);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [meetingMember, setMeetingMember] = useState(memberCount);

  useEffect(() => {
    if (!accessToken) {
      window.alert('잘못된 접근입니다');
      navigate('/');
    }
    // if (memberCount === 2) {
    //   localStorage.removeItem('apply-data');
    //   window.location.reload();
    // }
  }, [accessToken, memberCount]);

  const setModal = (bool) => {
    setOpenModal(bool);
  };

  const handleBefore = () => {
    navigate('/');
  };

  const handleSubmit = useCallback(() => {
    if (meetingMember === null) {
      setOpenModal(true);
      return;
    }
    dispatch(
      submitStep1({
        memberCount: meetingMember,
      }),
    );
    navigate('/apply/2');
  }, [meetingMember]);

  return (
    <ApplyLayout>
      <IsPageCompleteModal open={openModal} setModal={setModal} />
      <ProgressBar page={1} />
      <Title>
        <Maintitle>
          <Pink>참여 인원</Pink>을 알려주세요
        </Maintitle>
        <Subtitle>나중에 참여 인원은 언제든지 수정할 수 있어요!</Subtitle>
      </Title>
      <ChooseBox>
        <ChooseTitle>인원 수</ChooseTitle>
        <PeopleCountBox>
          <ThreePeople
            isActive={meetingMember === 2}
            onClick={() => {
              setMeetingMember(2);
            }}
          >
            2:2 미팅
          </ThreePeople>
          <ThreePeople
            isActive={meetingMember === 3}
            onClick={() => {
              setMeetingMember(3);
            }}
          >
            3:3 미팅
          </ThreePeople>
          <ThreePeople
            isActive={meetingMember === 4}
            onClick={() => {
              setMeetingMember(4);
            }}
          >
            4:4 미팅
          </ThreePeople>
        </PeopleCountBox>
      </ChooseBox>
      <SBottom />
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
  min-height: 8%;
  margin-top: 20px;
`;

const Maintitle = styled.div`
  width: 100%;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 35px;
`;

const Subtitle = styled.p`
  margin-top: 4%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 13px;
`;

const Pink = styled.span`
  color: ${theme.pink};
`;

const ChooseBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-bottom: 10%;
`;

const ChooseTitle = styled.span`
  padding-bottom: 5%;
  color: #777777;
  font-size: 14px;
  font-weight: 500;
`;

const PeopleCountBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ThreePeople = styled.button`
  margin: 0 5px 15px 0;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  background: ${(props) => (props.isActive ? '#EB8888' : 'F6EEEE')};
  color: ${(props) => (props.isActive ? '#F6EEEE' : '#B79292')};
  border-color: transparent;
  font-family: 'Nanum JungHagSaeng';
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;

const SBottom = styled(Bottom)`
  margin-left: 57%;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 6%;
  padding-bottom: 5%;
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;
