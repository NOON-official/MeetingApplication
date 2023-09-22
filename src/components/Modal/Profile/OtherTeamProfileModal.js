import React, { useState } from 'react';
import styled from 'styled-components';

import { Modal } from 'antd';
import { ReactComponent as UniversityMark } from '../../../asset/svg/UniversityMark.svg';
import { ReactComponent as Share } from '../../../asset/svg/Share.svg';
import SliderBoxMembers from '../../Slider/SliderBoxMembers';
import AreaText from '../../MainRecommend/AreaText';
import DateText from '../../MainRecommend/DateText';
import ApplyButton from '../../Button/ApplyButton';
import {
  useGetMyTeamIdQuery,
  useGetProfileQuery,
} from '../../../features/api/userApi';
import ApplyMatchingModal from '../Matching/ApplyMatchingModal';
import RefuseMatchingModal from '../Matching/RefuseMatchingModal';
import AcceptTingModal from '../Ting/AcceptTingModal';
import StopSeeProfileModal from '../Matching/StopSeeProfileModal';
import DrinkText from '../../MainRecommend/DrinkText';
import MemberText from '../../MainRecommend/MemberText';

export default function OtherTeamProfileModal({
  open,
  closeModal,
  teamId,
  state,
  matchingId,
}) {
  const { data: myTeamId } = useGetMyTeamIdQuery();
  const { data: teamProfile } = useGetProfileQuery(teamId);

  const [openApplyModal, setOpenApplyModal] = useState(false);
  const [openStopModal, setOpenStopModal] = useState(false);
  const [openAcceptModal, setOpenAcceptModal] = useState(false);
  const [isRefuseModal, setIsRefuseModal] = useState(false);

  return (
    <div>
      <AcceptTingModal
        open={openAcceptModal}
        setModal={() => setOpenAcceptModal((prev) => !prev)}
        matchingId={matchingId}
        teamId={teamId}
      />
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
          <ApplyMatchingModal
            open={openApplyModal}
            setModal={() => setOpenApplyModal((prev) => !prev)}
            myTeamId={myTeamId}
            teamId={teamId}
          />
          <StopSeeProfileModal
            open={openStopModal}
            setModal={() => setOpenStopModal((prev) => !prev)}
            teamId={teamId}
          />
          <RefuseMatchingModal
            open={isRefuseModal}
            setModal={() => setIsRefuseModal((prev) => !prev)}
            matchingId={matchingId}
            teamId={teamId}
          />
          <TeamProfile>
            <TeamName>{teamProfile.teamName}</TeamName>
            <TextBox>
              <Title>상대 팀 한 줄 어필</Title>
              <Content>{teamProfile.intro}</Content>
            </TextBox>
            <TextBox>
              <Container>
                <Title>상대 팀 기본 정보</Title>
                {teamProfile.approval ? (
                  <>
                    <SUniversityMark />
                    <UniversityMarkText>대학 인증 완료</UniversityMarkText>
                  </>
                ) : null}
              </Container>
              <TeamInfo>
                <Subtitle>일정</Subtitle>
                <SubContent>
                  <DateText availableDates={teamProfile.teamAvailableDate} />
                </SubContent>
              </TeamInfo>
              <TeamInfo>
                <Subtitle>지역</Subtitle>
                <AreaText areaProps={teamProfile.areas} />
              </TeamInfo>
              <TeamInfo>
                <Subtitle>주량</Subtitle>
                <DrinkText drink={teamProfile.drink} />
              </TeamInfo>
              <TeamInfo>
                <Subtitle>인원</Subtitle>
                <MemberText
                  count={teamProfile.memberCount}
                  more={teamProfile.memberCounts}
                />
              </TeamInfo>
            </TextBox>
            <SliderBoxMembers members={teamProfile.members} />
          </TeamProfile>
          <Footer>
            {state === 'recommend' && (
              <ButtonBox>
                <ApplyButton onClick={() => setOpenApplyModal(true)}>
                  신청하기
                </ApplyButton>
                <ApplyButton onClick={() => setOpenStopModal(true)}>
                  다시 안 보기
                </ApplyButton>
              </ButtonBox>
            )}
            {state === 'received' && (
              <ButtonBox>
                <ApplyButton onClick={() => setOpenAcceptModal(true)}>
                  수락하기
                </ApplyButton>
                <ApplyButton onClick={() => setIsRefuseModal(true)}>
                  거절하기
                </ApplyButton>
              </ButtonBox>
            )}
            {/* {state === 'succeed' ? (
              <ButtonBox>
                <ShareButton>
                  <SShare />
                  팀원들에게 공유하기
                </ShareButton>
              </ButtonBox>
            ) : null} */}
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
  justify-content: flex-start;
`;

const SUniversityMark = styled(UniversityMark)`
  margin: 0 10px 0 30px;
`;

const UniversityMarkText = styled.div`
  color: #daadda;
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
  margin-right: 7%;
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
