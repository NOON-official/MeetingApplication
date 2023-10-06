import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';
import { ReactComponent as UniversityMark } from '../../../asset/svg/UniversityMark.svg';
import { ReactComponent as UniversityMarkGray } from '../../../asset/svg/UniversityMarkGray.svg';
import { ReactComponent as Info } from '../../../asset/svg/Info.svg';
import ApplyButton from '../../Button/ApplyButton';
import ModifyProfileModal from './ModifyProfileModal';
import SliderBoxMembers from '../../Slider/SliderBoxMembers';
import AreaText from '../../MainRecommend/AreaText';
import DateText from '../../MainRecommend/DateText';
import {
  useGetMyTeamIdQuery,
  useGetProfileQuery,
} from '../../../features/api/userApi';
import DrinkText from '../../MainRecommend/DrinkText';
import MemberText from '../../MainRecommend/MemberText';
import DeleteMyProfileModal from './DeleteMyProfileModal';
import NoticeModal from './NoticeModal';

export default function MyTeamProfileModal(props) {
  const { open, setModal } = props;
  const { data: myTeamId } = useGetMyTeamIdQuery();
  const { data: myProfile } = useGetProfileQuery(myTeamId, {
    skip: !myTeamId,
  });

  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  const [isStopMatchingModalOpen, setIsStopMatchingModalOpen] = useState(false);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);

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
          <DeleteMyProfileModal
            open={isStopMatchingModalOpen}
            setModal={() => {
              setIsStopMatchingModalOpen((prev) => !prev);
            }}
            teamId={myTeamId}
          />
          <NoticeModal
            open={isNoticeModalOpen}
            setModal={() => {
              setIsNoticeModalOpen((prev) => !prev);
            }}
          />
          {myProfile && (
            <>
              <TeamProfile>
                <TeamIntro>
                  <TeamName>{myProfile.teamName}</TeamName>
                  <EditBtn onClick={() => setIsModifyModalOpen(true)}>
                    수정
                  </EditBtn>
                  <EditBtn onClick={() => setIsStopMatchingModalOpen(true)}>
                    삭제
                  </EditBtn>
                  <SInfo onClick={() => setIsNoticeModalOpen(true)} />
                </TeamIntro>
                <TextBox>
                  <Title>한 줄 어필</Title>
                  <Content>{myProfile.intro}</Content>
                </TextBox>
                <TextBox>
                  <Container>
                    <Title>기본 정보</Title>
                    {myProfile.approval ? (
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
                      <DateText availableDates={myProfile.teamAvailableDate} />
                    </SubContent>
                  </TeamInfo>
                  <TeamInfo>
                    <Subtitle>지역</Subtitle>
                    <AreaText areaProps={myProfile.areas} />
                  </TeamInfo>
                  <TeamInfo>
                    <Subtitle>주량</Subtitle>
                    <DrinkText drink={myProfile.drink} />
                  </TeamInfo>
                  <TeamInfo>
                    <Subtitle>인원</Subtitle>
                    <MemberText
                      count={myProfile.memberCount}
                      more={myProfile.memberCounts}
                    />
                  </TeamInfo>
                </TextBox>
                <SliderBoxMembers members={myProfile.members} />
              </TeamProfile>
              {/* <Footer> */}
              {/* <ButtonBox> */}
              {/* <ApplyButton onClick={() => setIsStopMatchingModalOpen(true)}>
                    매칭 중단하기
                  </ApplyButton> */}
              {/* <ApplyButton2 onClick={() => setIsModifyModalOpen(true)}>
                  수정하기
                </ApplyButton2> */}
              {/* </ButtonBox> */}
              {/* </Footer> */}
            </>
          )}
        </SModal>
      ) : null}
    </div>
  );
}

const SModal = styled(Modal)`
  .ant-modal-content {
    padding: 5% 1%;
    background-color: #fbfaf9;
  }
`;

const TeamProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  margin: 0 auto 6%;
`;

const TeamIntro = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 5% 0;
`;

const TeamName = styled.span`
  padding: 5px 10px;
  border-radius: 3px;
  background-color: #ffd3d3;
  font-weight: 600;
  font-size: 16px;
`;

const EditBtn = styled.button`
  margin-left: 15px;
  padding: 3px 7px;
  border: none;
  border-radius: 5px;
  color: #777777;
  background-color: #e6e6e6;
  font-size: 14px;
`;

const SInfo = styled(Info)`
  margin-left: 10px;
  cursor: pointer;
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
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;

const ApplyButton2 = styled(ApplyButton)`
  width: 90%;
  margin-top: 5%;
`;
