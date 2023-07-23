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
import DeleteProfileModal from '../../components/Modal/DeleteProfileModal';

export default function MatchingApplied() {
  const data = [
    {
      id: 1,
      matchingId: 1,
      teamName: '기웅내세요',
      age: 24,
      memberCount: 3,
      intro: '안녕하세요',
      isVerified: true,
      appliedAt: '2023-01-20T21:37:26.886Z',
    },
    {
      id: 2,
      matchingId: 3,
      teamName: '아름이와 아이들',
      age: 27,
      memberCount: 2,
      intro: '안녕하세요',
      isVerified: false,
      appliedAt: '2023-01-20T21:37:26.886Z',
    },
  ];
  const { accessToken } = useSelector((state) => state.user);
  const [selectTab, setSelectTab] = useState(1);
  const [clickEditBtn, setClickEditBtn] = useState(false);
  const [deleteProfileList, setDeleteProfileList] = useState([]);
  const [deleteRefuseProfileList, setDeleteRefuseProfileList] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [applyData, setApplyData] = useState(data);
  const [refuseData, setRefuseData] = useState(data);

  const setModal = (bool) => {
    setOpenDeleteModal(bool);
  };

  const getApplyData = useCallback(async () => {
    const apply = await backend.get(`/users/matchings/applied`);
    setApplyData(apply.data.teams);
    const refuse = await backend.get(`/users/matchings/refused`);
    setRefuseData(refuse.data.teams);
  }, []);

  useEffect(() => {
    // getApplyData();
  }, []);

  const handleTabChange = (tabIdx) => {
    if (selectTab === 1 && tabIdx === 2) {
      setDeleteProfileList([]);
    } else if (selectTab === 2 && tabIdx === 1) {
      setDeleteRefuseProfileList([]);
    }
    setSelectTab(tabIdx);
  };

  const subtitle = () => (
    <Text>
      {clickEditBtn ? (
        <>
          <Pink>{deleteProfileList.length}</Pink>/{applyData?.length}개 선택
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
      <DeleteProfileModal
        open={openDeleteModal}
        setModal={setModal}
        data={selectTab === 1 ? deleteProfileList : deleteRefuseProfileList}
      />
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
                  <Delete
                    selected={deleteProfileList.length > 0}
                    onClick={() => setOpenDeleteModal(true)}
                  >
                    삭제
                  </Delete>
                  <Cancel
                    onClick={() => {
                      setClickEditBtn(false);
                      if (selectTab === 1) setDeleteProfileList([]);
                      else setDeleteRefuseProfileList([]);
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
              selectTab === 1 ? deleteProfileList : deleteRefuseProfileList
            }
            setDeleteProfile={
              selectTab === 1
                ? setDeleteProfileList
                : setDeleteRefuseProfileList
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
