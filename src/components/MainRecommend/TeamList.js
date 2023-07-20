import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as UniversityMark } from '../../asset/svg/UniversityMark.svg';
import { ReactComponent as UniversityMarkGray } from '../../asset/svg/UniversityMarkGray.svg';
import { ReactComponent as CheckBoxUnfilled } from '../../asset/svg/CheckboxUnfilled.svg';
import { ReactComponent as CheckBoxFilled } from '../../asset/svg/CheckboxFilled.svg';
import OtherTeamProfileModal from './OtherTeamProfileModal';

export default function OtherTeamList(props) {
  const { teamList, clickEditBtn, deleteProfile, setDeleteProfile } = props;

  const [openOtherTeamProfile, setOpenOtherTeamProfile] = useState(false);

  const handleModal = (bool) => {
    setOpenOtherTeamProfile(bool);
  };

  const editUI = (id) => {
    if (deleteProfile.includes(id)) {
      return (
        <SCheckBoxFilled
          onClick={() =>
            setDeleteProfile(deleteProfile.filter((x) => x !== id))
          }
        />
      );
    }
    return (
      <SCheckboxUnfilled
        onClick={() => setDeleteProfile([...deleteProfile, id])}
      />
    );
  };

  return (
    <Container>
      {teamList.map((team) => {
        const {
          id,
          matchingId,
          teamName,
          age,
          memberCount,
          intro,
          isVerified,
          appliedAt,
        } = team;

        return (
          <TeamCardWrapper key={id}>
            {deleteProfile.includes(id) && clickEditBtn && <TeamCardOverlay />}
            <OtherTeamProfileModal
              open={openOtherTeamProfile}
              setModal={handleModal}
            />
            <TeamCard>
              <Title>
                <TeamName>{teamName}</TeamName>
                {isVerified ? <SUniversityMark /> : <SUniversityMarkGray />}
              </Title>
              <Subtitle>
                <Age>{`평균 ${age}세`}</Age>
                <MemberCount>{`${memberCount}명`}</MemberCount>
              </Subtitle>
              <Info>{`${intro}`}</Info>
              {clickEditBtn ? editUI(id) : <Button>자세히 보기</Button>}
            </TeamCard>
          </TeamCardWrapper>
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
  margin: 1% auto;
`;

const TeamCardWrapper = styled.div`
  position: relative;
  width: 48%;
  height: 100%;
  margin: 2% 0;
`;

const TeamCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background-color: rgba(73, 73, 73, 0.4);
  pointer-events: none;
`;

const TeamCard = styled.div`
  padding: 6%;
  border: 1px solid #0000001a;
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

const SCheckboxUnfilled = styled(CheckBoxUnfilled)`
  width: 100%;
  margin: 7% auto 0;
  cursor: pointer;
`;

const SCheckBoxFilled = styled(CheckBoxFilled)`
  width: 100%;
  margin: 7% auto 0;
  background-color: transparent;
  position: relative;
  z-index: 1;
  cursor: pointer;
`;

const Button = styled.div`
  padding: 5px 15px;
  width: 37%;
  margin: 7% auto 0;
  border-radius: 15px;
  color: #eb8888;
  background-color: #ffeded;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;
