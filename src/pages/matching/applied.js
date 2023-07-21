import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ChannelTalk from '../../asset/ChannelTalk';
import MatchingLayout from '../../layout/MatchingLayout';
import SigninView from '../../components/Auth/SigninView';
import MainLayout from '../../layout/MainLayout';
import { ReactComponent as SadFace } from '../../asset/svg/SadFace.svg';
import OtherTeamList from '../../components/MainRecommend/TeamList';
import backend from '../../util/backend';

export default function MatchingApplied() {
  const { accessToken } = useSelector((state) => state.user);
  const [selectTab, setSelectTab] = useState(1);
  const [clickEditBtn, setClickEditBtn] = useState(false);
  const [deleteProfile, setDeleteProfile] = useState([]);
  const [deleteRefuseProfile, setDeleteRefuseProfile] = useState([]);

  const [applyData, setApplyData] = useState([]);
  const [refuseData, setRefuseData] = useState(null);

  const getApplyData = useCallback(async () => {
    const apply = await backend.get(`/users/matchings/applied`);
    setApplyData(apply.data.teams);
    const refuse = await backend.get(`/users/matchings/refused`);
    setRefuseData(refuse.data.teams);
  }, []);

  useEffect(() => {
    getApplyData();
  }, []);

  const handleTabChange = (tabIdx) => {
    if (selectTab === 1 && tabIdx === 2) {
      setDeleteProfile([]);
    } else if (selectTab === 2 && tabIdx === 1) {
      setDeleteRefuseProfile([]);
    }
    setSelectTab(tabIdx);
  };

  const subtitle = () => (
    <Text>
      {clickEditBtn ? (
        <>
          <Pink>{deleteProfile.length}</Pink>/{applyData?.length}개 선택
        </>
      ) : (
        <>최대 24시간 이내에 상대팀의 미팅 의사를 확인해 볼게요 ⏱</>
      )}
    </Text>
  );

  if (!accessToken) {
    return (
      <MainLayout>
        <SigninView />
      </MainLayout>
    );
  }

  return (
    <MatchingLayout>
      {applyData.length !== 0 ? (
        <>
          <Container>
            <Header>
              <Tab
                selected={selectTab === 1}
                onClick={() => handleTabChange(1)}
              >
                {`응답을 기다려요(${applyData.length})`}
              </Tab>
              <Tab
                selected={selectTab === 2}
                onClick={() => handleTabChange(2)}
              >
                {`거절됐어요(${refuseData.length})`}
              </Tab>
              {clickEditBtn ? (
                <EditBtn>
                  <Delete selected={deleteProfile.length > 0}>삭제</Delete>
                  <Cancel
                    onClick={() => {
                      setClickEditBtn(false);
                      if (selectTab === 1) setDeleteProfile([]);
                      else setDeleteRefuseProfile([]);
                    }}
                  >
                    취소
                  </Cancel>
                </EditBtn>
              ) : (
                <EditBtn onClick={() => setClickEditBtn(true)}>편집</EditBtn>
              )}
            </Header>
            {selectTab === 1 ? (
              subtitle()
            ) : (
              <Text>아쉽게도 상대팀이 미팅을 거절했어요 😢</Text>
            )}
          </Container>
          <OtherTeamList
            teamList={selectTab === 1 ? applyData : refuseData}
            clickEditBtn={clickEditBtn}
            deleteProfile={
              selectTab === 1 ? deleteProfile : deleteRefuseProfile
            }
            setDeleteProfile={
              selectTab === 1 ? setDeleteProfile : setDeleteRefuseProfile
            }
          />
        </>
      ) : (
        <NoMeetingContainer>
          <Title>신청한 미팅이 없어요</Title>
          <SSadFace />
          <Button>
            <CreateTeamBtn>신청하러 가기</CreateTeamBtn>
          </Button>
        </NoMeetingContainer>
      )}

      <div>{ChannelTalk.hideChannelButton()}</div>
    </MatchingLayout>
  );
}

const NoMeetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 20% auto;
`;

const Title = styled.div`
  margin: 2% 0;
  font-size: 18px;
  font-weight: 500;
`;

const SSadFace = styled(SadFace)`
  width: 45%;
`;

const Button = styled.div`
  width: 40%;
`;

const CreateTeamBtn = styled.button`
  width: 100%;
  padding: 10px 5px;
  border: none;
  border-radius: 20px;
  background-color: #ffcdcd;
  color: #eb8888;
  font-size: 14px;
  font-weight: 600;
`;

const Container = styled.div`
  width: 90%;
  margin: 5% auto 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5%;
`;

const Tab = styled.span`
  margin-right: 15px;
  padding: 6px 9px;
  border-radius: 14px;
  color: ${({ selected }) => (selected ? '#ffffff' : '#333333')};
  background-color: ${({ selected }) => (selected ? '#333333' : '#E5E5E5')};
  font-size: 14px;
  cursor: pointer;
`;

const EditBtn = styled.span`
  display: flex;
  margin-left: auto;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`;

const Delete = styled.div`
  margin-right: 15px;
  color: ${({ selected }) => (selected ? '#EB8888' : '#b7b7b7')};
`;

const Cancel = styled.div``;

const Text = styled.div`
  width: 100%;
  color: #777777;
  font-size: 14px;
  font-weight: 300;
`;

const Pink = styled.span`
  margin-left: 5%;
  color: #eb8888;
`;
