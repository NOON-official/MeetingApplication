import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import theme from '../../style/theme';
import ProgressBar from '../../components/Apply/ProgressBar';
import { ReactComponent as Bottom } from '../../asset/svg/B.svg';
import { submitStep1, APPLY_STORAGE_KEY } from '../../features/apply';
import ApplyButton from '../../components/Button/ApplyButton';
import IsPageCompleteModal from '../../components/Modal/Apply/IsPageCompleteModal';
import ChannelTalk from '../../asset/ChannelTalk';
import BeforeApplyModal from '../../components/Modal/Apply/BeforeApplyModal';
import HeaderLayout from '../../layout/HeaderLayout';

export default function Apply1Page() {
  const [beforeApplyModal, setBeforeApplyModal] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const { accessToken } = useSelector((state) => state.user);
  const { memberCount } = useSelector((store) => store.apply);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [meetingMember, setMeetingMember] = useState(memberCount);

  useEffect(() => {
    if (!accessToken) {
      window.alert('잘못된 접근입니다');
      navigate('/');
    }
    const applyData = JSON.parse(localStorage.getItem(APPLY_STORAGE_KEY));
    const isPreviousVersion = applyData
      ? Object.hasOwn(applyData, 'gender') ||
        Object.hasOwn(applyData, 'universities') ||
        Object.hasOwn(applyData, 'availableDates') ||
        Object.hasOwn(applyData, 'prefSameUniversity')
      : false;

    if (isPreviousVersion) localStorage.removeItem('apply-data');
  }, [accessToken]);

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
    <HeaderLayout>
      <BeforeApplyModal
        open={beforeApplyModal}
        setModal={() => setBeforeApplyModal((prev) => !prev)}
      />
      <IsPageCompleteModal open={openModal} setModal={setModal} />
      <ProgressBar page={1} />
      <Title>
        <Maintitle>
          <Pink>참여 인원</Pink>을 알려주세요
        </Maintitle>
        <Subtitle>나중에 참여 인원은 언제든지 수정할 수 있어요!</Subtitle>
      </Title>
      <ChooseBox>
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
      <Footer>
        <SBottom />
        <ButtonBox>
          <ApplyButton onClick={handleBefore}>이전</ApplyButton>
          <ApplyButton onClick={handleSubmit}>다음</ApplyButton>
        </ButtonBox>
      </Footer>
      <div>{ChannelTalk.hideChannelButton()}</div>
    </HeaderLayout>
  );
}

const Title = styled.div`
  width: 90%;
  height: 40px;
  margin-top: 5%;
`;

const Maintitle = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 22px;
`;

const Subtitle = styled.p`
  margin-top: 5%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 15px;
`;

const Pink = styled.span`
  color: ${theme.pink};
`;

const ChooseBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-bottom: 5%;
`;

const PeopleCountBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

const ThreePeople = styled.button`
  margin-top: 5%;
  background: #f6eeee;
  border-radius: 10px;
  border: none;
  font-family: 'SCoreDream';
  width: 100%;
  height: 45px;
  font-weight: 200;
  font-size: 16px;
  color: ${(props) => (props.isActive ? '#F6EEEE' : '#B79292')};
  background: ${(props) => (props.isActive ? '#EB8888' : 'F6EEEE')};
  &:hover {
    cursor: pointer;
  }
`;

const SBottom = styled(Bottom)`
  margin-top: 10%;
  margin-left: 65%;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: auto 0 10%;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;
