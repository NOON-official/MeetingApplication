import React, { useState } from 'react';
import styled from 'styled-components';

import { Modal } from 'antd';
import { ReactComponent as UniversityMark } from '../../asset/svg/UniversityMark.svg';
import { ReactComponent as UniversityMarkGray } from '../../asset/svg/UniversityMarkGray.svg';

import ApplyButton from '../ApplyButton';
import ModifyProfileModal from '../Modal/ModifyProfileModal';
import StopMatchingModal from '../Modal/StopMatchingModal';
import SliderBoxMembers from '../SliderBoxMembers';
import AreaText from './AreaText';
import DateText from './DateText';

export default function MyTeamProfileModal(props) {
  const { open, setModal, teamId, profile } = props;

  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  const [isStopMatchingModalOpen, setIsStopMatchingModalOpen] = useState(false);

  const AlcholContent = {
    1: '반 병',
    2: '한 병',
    3: '한 병 반',
    4: '두 병',
    5: '술고래',
  };
  console.log(profile);
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
          onCancel={() => setModal(false)}
        >
          <ModifyProfileModal
            open={isModifyModalOpen}
            setModal={() => {
              setIsModifyModalOpen((prev) => !prev);
            }}
          />
          <StopMatchingModal
            open={isStopMatchingModalOpen}
            setModal={() => {
              setIsStopMatchingModalOpen((prev) => !prev);
            }}
            teamId={teamId}
          />
          {profile && (
            <TeamProfile>
              <TeamName>{profile?.teamName}</TeamName>
              <TextBox>
                <Title>한 줄 어필</Title>
                <Content>{profile?.intro}</Content>
              </TextBox>
              <TextBox>
                <Container>
                  <Title>기본 정보</Title>
                  {profile.isVerified ? (
                    <>
                      <SUniversityMark />
                      <UniversityMarkText>대학 인증 완료</UniversityMarkText>
                    </>
                  ) : (
                    <>
                      <SUniversityMarkGray />
                      <UniversityNoMarkText>대학 미인증</UniversityNoMarkText>
                    </>
                  )}
                </Container>
                <TeamInfo>
                  <Subtitle>일정</Subtitle>
                  <SubContent>
                    <DateText availableDates={profile.teamAvailableDate} />
                  </SubContent>
                </TeamInfo>
                <TeamInfo>
                  <Subtitle>지역</Subtitle>
                  <AreaText areaProps={profile.areas} />
                </TeamInfo>
                <TeamInfo>
                  <Subtitle>주량</Subtitle>
                  <SubContent>{`${AlcholContent[profile.drink]} (Lv.${
                    profile.drink
                  })`}</SubContent>
                </TeamInfo>
              </TextBox>
              <SliderBoxMembers members={profile.members} />
            </TeamProfile>
          )}

          <Footer>
            <ButtonBox>
              <ApplyButton onClick={() => setIsStopMatchingModalOpen(true)}>
                매칭 중단하기
              </ApplyButton>
              <ApplyButton onClick={() => setIsModifyModalOpen(true)}>
                수정하기
              </ApplyButton>
            </ButtonBox>
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

const SUniversityMark = styled(UniversityMark)`
  margin: 0 10px 0 30px;
`;

const SUniversityMarkGray = styled(UniversityMarkGray)`
  margin: 0 10px 0 30px;
`;

const UniversityMarkText = styled.div`
  color: #daadda;
  font-size: 14px;
`;

const UniversityNoMarkText = styled.div`
  color: #ababab;
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

const AreaCity = styled.div`
  margin-bottom: 5px;
  color: #777777;
  font-weight: 400;
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

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;
