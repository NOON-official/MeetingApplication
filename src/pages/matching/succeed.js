import styled from 'styled-components';
import dayjs from 'dayjs';
import utc from 'dayjs-plugin-utc';
import MatchingLayout from '../../layout/MatchingLayout';
import { ReactComponent as UniversityMark } from '../../asset/svg/UniversityMark.svg';
import { ReactComponent as UniversityMarkGray } from '../../asset/svg/UniversityMarkGray.svg';
import OtherTeamNumberModal from '../../components/Modal/Matching/OtherTeamNumberModal';
import { ReactComponent as NoSucceedMatching } from '../../asset/svg/NoSucceedMatching.svg';
import OtherTeamProfileModal from '../../components/Modal/Profile/OtherTeamProfileModal';
import useModalState from '../../hooks/useModalState';
import { useGetSucceedDataQuery } from '../../features/api/userApi';

export default function MatchingSucceed() {
  const { data: succeedData, isSuccess } = useGetSucceedDataQuery();

  const [modalState, openModal, closeModal] = useModalState(succeedData);
  const [modalState2, openModal2, closeModal2] = useModalState(succeedData);
  dayjs.extend(utc); // dayjs utc 플러그인 사용하여 로컬시간으로 변환

  const remainingDays = (date) => {
    const today = dayjs();
    const dueDate = dayjs(date).add(7, 'day');

    return dueDate.diff(today, 'day');
  };

  if (isSuccess)
    return (
      <MatchingLayout>
        {succeedData.length === 0 ? (
          <NoMeetingContainer>
            <Title2>최종 성사된 미팅이 없어요</Title2>
            <NoSucceedMatching />
          </NoMeetingContainer>
        ) : (
          <>
            <Container>
              <Text>
                상대팀도 수락하여 미팅이 최종 성사되었어요!🎉
                <br />
                7일 동안 상대팀의 카카오톡 ID/전화번호 확인이 가능해요
              </Text>
            </Container>
            <Container2>
              {succeedData.map((team) => {
                const {
                  id,
                  teamName,
                  age,
                  memberCount,
                  intro,
                  approval,
                  matchedAt,
                } = team;

                return (
                  <TeamCard key={id}>
                    <OtherTeamNumberModal
                      open={
                        modalState?.find((state) => state.teamId === id)
                          ?.open || false
                      }
                      closeModal={() => closeModal(id)}
                      teamName={teamName}
                      teamId={id}
                    />
                    <OtherTeamProfileModal
                      open={
                        modalState2?.find((state) => state.teamId === id)
                          ?.open || false
                      }
                      closeModal={() => closeModal2(id)}
                      teamId={id}
                      state="succeed"
                    />
                    <ApplicationDate>
                      {dayjs(matchedAt).format('M월 DD일')}
                      <RemainingDate>
                        {remainingDays(matchedAt)}일 남음
                      </RemainingDate>
                    </ApplicationDate>
                    <Content>
                      <Title>
                        <TeamName>{teamName}</TeamName>
                        {approval ? (
                          <SUniversityMark />
                        ) : (
                          <SUniversityMarkGray />
                        )}
                      </Title>
                      <Subtitle>
                        <Age>{`평균 ${age}세`}</Age>
                        <MemberCount>{`${memberCount}명`}</MemberCount>
                      </Subtitle>
                      <Info>{`${intro}`}</Info>
                      <ButtonBox>
                        <Button1 onClick={() => openModal(id)}>
                          연락처 확인
                        </Button1>
                        <Button2 onClick={() => openModal2(id)}>
                          자세히 보기
                        </Button2>
                      </ButtonBox>
                    </Content>
                  </TeamCard>
                );
              })}
            </Container2>
          </>
        )}
      </MatchingLayout>
    );
}

const Container = styled.div`
  width: 90%;
  margin: 5% auto;
`;

const Text = styled.div`
  width: 100%;
  color: #777777;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  margin: 5% auto;
`;

const TeamCard = styled.div`
  width: 49%;
  margin: 2% 0;
`;

const ApplicationDate = styled.div`
  margin: 0 0 5px 10px;
  font-size: 11px;
`;

const RemainingDate = styled.span`
  margin-left: 10px;
  color: rgba(255, 157, 157, 1);
`;

const Content = styled.div`
  padding: 8%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background-color: #ffffff;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TeamName = styled.span`
  padding: 5px 8px;
  background-color: #ececec;
  border-radius: 2px;
  font-weight: 600;
  font-size: 13px;
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
`;

const SUniversityMark = styled(UniversityMark)`
  margin-left: 1%;
`;

const SUniversityMarkGray = styled(UniversityMarkGray)`
  margin-left: 1%;
`;

const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: #626262;
  font-size: 10px;
  width: 50%;
  margin: 5% 10%;
`;

const Age = styled.div``;

const MemberCount = styled.div``;

const Info = styled.div`
  margin-top: 5%;
  font-size: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.3;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;

  @media (max-width: 365px) {
    flex-direction: column;
  }
`;

const Button1 = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 15px;
  color: #ffffff;
  background-color: #ff9d9d;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;

  @media (max-width: 365px) {
    padding: 5px 20px;
  }
`;

const Button2 = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 15px;
  color: #eb8888;
  background-color: #ffeded;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;

  @media (max-width: 365px) {
    margin-top: 5%;
    padding: 5px 20px;
  }
`;

const NoMeetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 15% auto;
`;

const Title2 = styled.div`
  margin: 5% 0;
  color: #9b9b9b;
  font-size: 15px;
  font-weight: 500;
`;
