import styled from 'styled-components';
import { useMemo, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import Teambox from '../../components/Apply/Teambox';
import ApplyButton from '../../components/Button/ApplyButton';
import ProgressBar from '../../components/Apply/ProgressBar';
import IsPageCompleteModal from '../../components/Modal/Apply/IsPageCompleteModal';
import { submitStep4 } from '../../features/apply';
import ChannelTalk from '../../asset/ChannelTalk';

export default function Apply4Page() {
  const { finishedStep, members, memberCount } = useSelector(
    (store) => store.apply,
  );
  const [openModal, setOpenModal] = useState(false);
  const [member1, setMember1] = useState(members[0] || {});
  const [member2, setMember2] = useState(members[1] || {});
  const [member3, setMember3] = useState(members[2] || {});
  const [member4, setMember4] = useState(members[3] || {});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (finishedStep < 3) {
      window.alert('잘못된 접근입니다');
      navigate(`/apply/${finishedStep + 1}`);
    }
  }, [finishedStep]);

  const setModal = (bool) => {
    setOpenModal(bool);
  };

  const handleBefore = () => {
    navigate('/apply/3area');
  };

  const handleSubmit = useCallback(() => {
    if (memberCount === 2) {
      if (
        !member1.age ||
        !member1.role ||
        !member1.university ||
        !member2.age ||
        !member2.role ||
        !member2.university
      ) {
        setOpenModal(true);
      } else {
        dispatch(
          submitStep4({
            members: [member1, member2],
          }),
        );
        navigate('/apply/5teamName');
      }
    } else if (memberCount === 3) {
      if (
        !member1.age ||
        !member1.role ||
        !member1.university ||
        !member2.age ||
        !member2.role ||
        !member2.university ||
        !member3.age ||
        !member3.role ||
        !member3.university
      ) {
        setOpenModal(true);
      } else {
        dispatch(
          submitStep4({
            members: [member1, member2, member3],
          }),
        );
        navigate('/apply/5teamName');
      }
    } else if (
      !member1.age ||
      !member1.role ||
      !member1.university ||
      !member2.age ||
      !member2.role ||
      !member2.university ||
      !member3.age ||
      !member3.role ||
      !member3.university ||
      !member4.age ||
      !member4.role ||
      !member4.university
    ) {
      setOpenModal(true);
    } else {
      dispatch(
        submitStep4({
          members: [member1, member2, member3, member4],
        }),
      );
      navigate('/apply/5teamName');
    }
  });
  const teamboxcount = useMemo(() => {
    if (memberCount === 2) {
      return (
        <>
          <Teambox member={member1} setMember={setMember1} name="대표자" />
          <Teambox member={member2} setMember={setMember2} name="팀원 2" />
        </>
      );
    }
    if (memberCount === 3) {
      return (
        <>
          <Teambox member={member1} setMember={setMember1} name="대표자" />
          <Teambox member={member2} setMember={setMember2} name="팀원 2" />
          <Teambox member={member3} setMember={setMember3} name="팀원 3" />
        </>
      );
    }
    if (memberCount === 4) {
      return (
        <>
          <Teambox member={member1} setMember={setMember1} name="대표자" />
          <Teambox member={member2} setMember={setMember2} name="팀원 2" />
          <Teambox member={member3} setMember={setMember3} name="팀원 3" />
          <Teambox member={member4} setMember={setMember4} name="팀원 4" />
        </>
      );
    }
    return null;
  });

  return (
    <ApplyLayout>
      <IsPageCompleteModal open={openModal} setModal={setModal} />
      <ProgressBar page={4} />
      <Title>
        <Maintitle>
          <Pink>우리팀의 구성원</Pink>을 소개해 주세요!
        </Maintitle>
        <Subtitle>나와 팀원들의 개별 ID카드를 완성해 주세요</Subtitle>
      </Title>
      {teamboxcount}
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
  position: relative;
  width: 90%;
  height: 60px;
  margin-top: 8%;
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
  margin-top: 5%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 15px;
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
