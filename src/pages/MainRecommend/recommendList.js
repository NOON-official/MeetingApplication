import styled from 'styled-components';
import { useEffect } from 'react';
import { ReactComponent as UniversityMark } from '../../asset/svg/UniversityMark.svg';
import { ReactComponent as UniversityMarkGray } from '../../asset/svg/UniversityMarkGray.svg';
import useModalState from '../../hooks/useModalState';
import OtherTeamProfileModal from '../../components/MainRecommend/OtherTeamProfileModal';
import backend from '../../util/backend';

export default function RecommendList({ teamId }) {
  const teamList = [
    {
      id: 1,
      teamName: '기웅내세요',
      age: 24,
      memberCount: 3,
      intro: '안녕하세요',
      isVerified: true,
      appliedAt: '2023-01-20T21:37:26.886Z',
    },
    {
      id: 2,
      teamName: '아름이와 아이들',
      age: 27,
      memberCount: 2,
      intro: '안녕하세요',
      isVerified: false,
      appliedAt: '2023-01-20T21:37:26.886Z',
    },
  ];

  const [modalState, openModal, closeModal] = useModalState(teamList);

  const getList = async () => {
    const recommend = await backend.get(`/users/teams/today`);
    // console.log(recommend);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Container>
      {teamList.map((team) => {
        const { id, teamName, age, memberCount, intro, isVerified } = team;

        return (
          <TeamCard key={id}>
            <OtherTeamProfileModal
              open={modalState.find((state) => state.teamId === id).open}
              closeModal={() => closeModal(id)}
              teamId={id}
              succeed={false}
            />
            <Title>
              <TeamName>{teamName}</TeamName>
              {isVerified ? <SUniversityMark /> : <SUniversityMarkGray />}
            </Title>
            <Subtitle>
              <Age>{`평균 ${age}세`}</Age>
              <MemberCount>{`${memberCount}명`}</MemberCount>
            </Subtitle>
            <Info>{`${intro}`}</Info>
            <Button onClick={() => openModal(id)}>자세히 보기</Button>
          </TeamCard>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  margin: 2% auto;
`;

const TeamCard = styled.div`
  width: 42%;
  margin: 2% 0;
  padding: 3%;
  border: 1px solid #d74683;
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
  border-radius: 2px;
  background-color: #ececec;
  font-size: 13px;
  font-weight: 600;
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
  width: 50%;
  margin: 5% 10%;
  color: #626262;
  font-size: 10px;
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

const Button = styled.div`
  padding: 5px 15px;
  width: 37%;
  margin: 7% auto 0;
  border-radius: 15px;
  color: #ffffff;
  background-color: #ff7ab2;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;
