import { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import MatchingLayout from '../../layout/MatchingLayout';
import { ReactComponent as UniversityMark } from '../../asset/svg/UniversityMark.svg';
import { ReactComponent as UniversityMarkGray } from '../../asset/svg/UniversityMarkGray.svg';
import OtherTeamNumberModal from '../../components/Modal/OtherTeamNumberModal';

export default function MatchingSucceed() {
  const DATAS = [
    {
      id: 1,
      matchingId: 1,
      teamName: '기웅내세요',
      age: 24,
      memberCount: 3,
      intro: '안녕하세요',
      isVerified: true,
      matchedAt: '2023-07-15T21:37:26.886Z',
      contact: 'meet',
    },
    {
      id: 2,
      matchingId: 3,
      teamName: '아름이와 아이들',
      age: 27,
      memberCount: 2,
      intro: '안녕하세요',
      isVerified: false,
      matchedAt: '2023-07-17T21:37:26.886Z',
      contact: '0109934',
    },
    {
      id: 3,
      matchingId: 3,
      teamName: '서울서울서울',
      age: 27,
      memberCount: 2,
      intro: '안녕하세요',
      isVerified: false,
      matchedAt: '2023-07-14T21:37:26.886Z',
      contact: '12341234',
    },
  ];

  const [modalState, setModalState] = useState(
    DATAS.map((team) => ({ teamId: team.id, open: false })),
  );

  const openModal = (teamId) => {
    setModalState((prev) =>
      prev.map((state) =>
        state.teamId === teamId ? { ...state, open: true } : state,
      ),
    );
  };

  const closeModal = (teamId) => {
    setModalState((prev) =>
      prev.map((state) =>
        state.teamId === teamId ? { ...state, open: false } : state,
      ),
    );
  };

  const remainingDays = (date) => {
    const appliedDate = new Date(date);
    const dueDate = new Date(appliedDate.getTime() + 7 * 24 * 60 * 60 * 1000);

    const currentDate = new Date();

    return Math.ceil((dueDate - currentDate) / (24 * 60 * 60 * 1000));
  };

  return (
    <MatchingLayout>
      <Container>
        <Text>
          상대팀도 수락하여 미팅이 최종 성사되었어요!🎉
          <br />
          7일 동안 상대팀의 카카오톡 ID/전화번호 확인이 가능해요
        </Text>
      </Container>

      <Container2>
        {DATAS.map((team) => {
          const {
            id,
            matchingId,
            teamName,
            age,
            memberCount,
            intro,
            isVerified,
            matchedAt,
            contact,
          } = team;

          return (
            <TeamCard key={id}>
              <OtherTeamNumberModal
                open={modalState.find((state) => state.teamId === id).open}
                closeModal={() => closeModal(id)}
                teamName={teamName}
                contact={contact}
              />
              <ApplicationDate>
                {dayjs(matchedAt).format('M월 DD일')}
                <RemainingDate>{remainingDays(matchedAt)}일 남음</RemainingDate>
              </ApplicationDate>
              <Content>
                <Title>
                  <TeamName>{teamName}</TeamName>
                  {isVerified ? <SUniversityMark /> : <SUniversityMarkGray />}
                </Title>
                <Subtitle>
                  <Age>{`평균 ${age}세`}</Age>
                  <MemberCount>{`${memberCount}명`}</MemberCount>
                </Subtitle>
                <Info>{`${intro}`}</Info>
                <ButtonBox>
                  <Button1 onClick={() => openModal(id)}>연락처 확인</Button1>
                  <Button2>자세히 보기</Button2>
                </ButtonBox>
              </Content>
            </TeamCard>
          );
        })}
      </Container2>
    </MatchingLayout>
  );
}

const ApplicationDate = styled.div`
  margin: 0 0 5px 10px;
  font-size: 11px;
`;

const RemainingDate = styled.span`
  margin-left: 10px;
  color: rgba(255, 157, 157, 1);
`;

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
`;

const Button1 = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 15px;
  color: #ffffff;
  background-color: rgba(255, 157, 157, 1);
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
`;

const Button2 = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 15px;
  color: rgba(235, 136, 136, 1);
  background-color: rgba(255, 237, 237, 1);
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
`;
