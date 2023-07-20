import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { Modal } from 'antd';
import { ReactComponent as UniversityMark } from '../../asset/svg/UniversityMark.svg';
import SliderBoxMembers from '../SliderBoxMembers';
import ApplyButton from '../ApplyButton';
import ModifyProfileModal from '../Modal/ModifyProfileModal';
import StopMatchingModal from '../Modal/StopMatchingModal';
import backend from '../../util/backend';

export default function MyTeamProfileModal({ open, setModal }) {
  const members = [
    { role: 1, age: 21, university: 198 },
    { age: 22, university: 198, role: 2, mbti: 14, appearance: '룰루' },
  ];

  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  const [isStopMatchingModalOpen, setIsStopMatchingModalOpen] = useState(false);

  const [myTeamId, setMyTeamId] = useState('');
  const [myTeamProfile, setMyTeamProfile] = useState();

  const getInformation = useCallback(async () => {
    const teamid = await backend.get(`/users/team-id`);
    const ourteam = await backend.get(`/teams/${myTeamId}`);
    setMyTeamId(teamid.data.teamId);
    setMyTeamProfile(ourteam.data);
  }, []);

  useEffect(() => {
    // getInformation();
  }, []);

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
            teamId={myTeamId}
          />
          <TeamProfile>
            <TeamName>한솔이와 바보들</TeamName>
            <TextBox>
              <Title>한 줄 어필</Title>
              <Content>
                안녕하세요. 한국대학교 손석구, 최준, 뷔입니다!최강의 조합
                3인방과 함께라면 그 날은 꿀잼 보장.만약 재미없다면 집까지
                앞구르기 하면서 가겠습니다.(아, 참고로 잘생겼습니다^^)
              </Content>
            </TextBox>
            <TextBox>
              <Container>
                <Title>기본 정보</Title>
                <SUniversityMark />
                <UniversityMarkText>대학 인증 완료</UniversityMarkText>
              </Container>
              <TeamInfo>
                <Subtitle>일정</Subtitle>
                <SubContent>주말</SubContent>
              </TeamInfo>
              <TeamInfo>
                <Subtitle>지역</Subtitle>
                <div>
                  <AreaCity>서울 / 경기</AreaCity>
                  <SubContent>강남 신촌</SubContent>
                </div>
              </TeamInfo>
              <TeamInfo>
                <Subtitle>주량</Subtitle>
                <SubContent>한 병 반 (Lv.3)</SubContent>
              </TeamInfo>
            </TextBox>
            <SliderBoxMembers members={members} />
          </TeamProfile>
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

const UniversityMarkText = styled.div`
  color: #daadda;
  font-size: 14px;
`;

const TeamInfo = styled.div`
  width: 90%;
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
