import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Modal } from 'antd';
import { ReactComponent as UniversityMarkBlack } from '../../asset/svg/UniversityMarkBlack.svg';
import { ReactComponent as Share } from '../../asset/svg/Share.svg';
import SliderBoxMembers from '../SliderBoxMembers';
import backend from '../../util/backend';
import AreaText from './AreaText';
import DateText from './DateText';
import ApplyButton from '../ApplyButton';

export default function OtherTeamProfileModal({
  open,
  closeModal,
  teamId,
  state,
}) {
  const [teamProfile, setTeamProfile] = useState(null);

  const myTeamId = localStorage.getItem('myTeamId');

  const getProfile = useCallback(async () => {
    const profile = await backend.get(`/teams/${teamId}`);
    setTeamProfile(profile.data);
  }, []);

  // console.log(teamId);

  const applyMatching = async () => {
    try {
      await backend.post(`/matchings/${myTeamId}/${teamId}`);
      alert('신청이 완료되었습니다!');
      closeModal();
    } catch (err) {
      alert('잠시 후에 다시 시도해주세요');
      console.log(err);
    }
  };

  const refuseTeam = async () => {
    try {
      await backend.put(`/teams/${teamId}`);
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const AlcholContent = {
    1: '반 병',
    2: '한 병',
    3: '한 병 반',
    4: '두 병',
    5: '술고래',
  };

  return (
    <div>
      {open ? (
        <SModal
          open={open}
          footer={null}
          centered
          width="380px"
          bodyStyle={{ backgroundColor: '#FBFAF9' }}
          closable
          onCancel={() => closeModal()}
        >
          <TeamProfile>
            <TeamName>{teamProfile?.teamName}</TeamName>
            <TextBox>
              <Title>상대 팀 한 줄 어필</Title>
              <Content>{teamProfile?.intro}</Content>
            </TextBox>
            <TextBox>
              <Container>
                <Title>상대 팀 기본 정보</Title>
                {teamProfile?.isVerified ? (
                  <>
                    <SUniversityMark />
                    <UniversityMarkText>대학 인증 완료</UniversityMarkText>
                  </>
                ) : null}
              </Container>
              <TeamInfo>
                <Subtitle>일정</Subtitle>
                <SubContent>
                  <DateText availableDates={teamProfile?.teamAvailableDate} />
                </SubContent>
              </TeamInfo>
              <TeamInfo>
                <Subtitle>지역</Subtitle>
                <AreaText areaProps={teamProfile?.areas} />
              </TeamInfo>
              <TeamInfo>
                <Subtitle>주량</Subtitle>
                <SubContent>{`${AlcholContent[teamProfile?.drink]} (Lv.${
                  teamProfile?.drink
                })`}</SubContent>
              </TeamInfo>
            </TextBox>
            <SliderBoxMembers members={teamProfile?.members} />
          </TeamProfile>

          <Footer>
            {state === 'received' ? (
              <ButtonBox>
                <ApplyButton onClick={() => applyMatching()}>
                  수락하기
                </ApplyButton>
                <ApplyButton onClick={() => refuseTeam()}>거절하기</ApplyButton>
              </ButtonBox>
            ) : null}
            {state === 'succeed' ? (
              <ButtonBox>
                <ShareButton>
                  <SShare />
                  팀원들에게 공유하기
                </ShareButton>
              </ButtonBox>
            ) : null}
          </Footer>
        </SModal>
      ) : null}
    </div>
  );
}

const SModal = styled(Modal)`
  .ant-modal-content {
    padding: 1%;
    background-color: #fbfaf9;
  }
`;

const TeamProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  margin: 0 auto;
`;

const TeamName = styled.span`
  margin: 5% auto;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: #ffd3d3;
  font-weight: 600;
  font-size: 16px;
`;

const TextBox = styled.div`
  margin-bottom: 6%;
  border: 1px solid #f1ecec;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 7%;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const Content = styled.div`
  margin-top: 5%;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  word-break: keep-all;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SUniversityMark = styled(UniversityMarkBlack)`
  margin: 0 10px 0 30px;
`;

const UniversityMarkText = styled.div`
  color: #777777;
  font-size: 14px;
`;

const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5%;
`;

const Subtitle = styled.span`
  background-color: #ffeded;
  border-radius: 10px;
  padding: 3px 7px;
  margin-right: 10%;
  font-weight: 600;
  font-size: 14px;
  color: #eb8888;
`;

const SubContent = styled.div`
  font-size: 14px;
  font-weight: 500;
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
  justify-content: space-between;
  margin-top: 5%;
`;

const ShareButton = styled.div`
  position: sticky;
  bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 5%;
  border-radius: 10px;
  color: #ffffff;
  background-color: #eb8888;
  font-size: 18px;
  font-weight: 400;
`;

const SShare = styled(Share)`
  margin-right: 4%;
`;
