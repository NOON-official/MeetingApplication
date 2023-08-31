import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ReactComponent as UniversityMark } from '../../asset/svg/UniversityMark.svg';
import { ReactComponent as UniversityMarkGray } from '../../asset/svg/UniversityMarkGray.svg';
import useModalState from '../../hooks/useModalState';
import OtherTeamProfileModal from '../../components/Modal/Profile/OtherTeamProfileModal';
import backend from '../../util/backend';
import StudentCardModal from '../../components/Modal/Studentcard/StudentCardModal';
import {
  useGetMyInfoQuery,
  useGetMyTeamIdQuery,
} from '../../features/api/userApi';

export default function RecommendList() {
  const { data: myTeamId } = useGetMyTeamIdQuery();
  const { data: myinfo } = useGetMyInfoQuery();
  const [teamList, setTeamList] = useState([]);
  const [modalState, openModal, closeModal] = useModalState(teamList);
  const [studentCardModal, setStudentCardModal] = useState(false);

  const handleOpen = (id) => {
    if (myinfo?.approval) {
      openModal(id);
    } else {
      setStudentCardModal(true);
    }
  };

  useEffect(() => {
    const getList = async () => {
      if (myTeamId && myTeamId !== undefined) {
        const recommend = await backend.get(`/users/teams/recommended`);
        setTeamList(recommend.data.teams);
      }
    };

    getList();
  }, [myTeamId]);

  return (
    <Container>
      {teamList?.map((team) => {
        const { id, teamName, age, memberCount, intro, approval } = team;

        return (
          <TeamCard key={id}>
            <StudentCardModal
              open={studentCardModal}
              setModal={setStudentCardModal}
            />

            <OtherTeamProfileModal
              open={
                modalState.find((state) => state.teamId === id)?.open || false
              }
              closeModal={() => closeModal(id)}
              teamId={id}
              state="recommend"
            />
            <Title>
              <TeamName>{teamName}</TeamName>
              {approval ? <SUniversityMark /> : <SUniversityMarkGray />}
            </Title>
            <Subtitle>
              <Age>{`평균 ${age}세`}</Age>
              <MemberCount>{`${memberCount}명`}</MemberCount>
            </Subtitle>
            <Info>{`${intro}`}</Info>
            <Button onClick={() => handleOpen(id)}>자세히 보기</Button>
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
  border: 1px solid ${(props) => (props.isOpen ? '#ececec' : '#D74683')};
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
