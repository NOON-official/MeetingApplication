import { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import MatchingLayout from '../../layout/MatchingLayout';
import OtherTeamList from '../../components/MainRecommend/TeamList';
import DeleteProfileModal from '../../components/Modal/Profile/DeleteProfileModal';
import NoProfile from '../../components/MainRecommend/NoProfile';
import {
  useGetApplyDataQuery,
  useGetMyTeamIdQuery,
  useGetRefusedDataQuery,
} from '../../features/api/userApi';
import NoMatching from './NoMatching';
import MatchingIntro from './MatchingIntro';

export default function MatchingApplied() {
  const { accessToken } = useSelector((state) => state.user);

  const { data: myTeamId } = useGetMyTeamIdQuery(undefined, {
    skip: !accessToken,
  });
  const { data: applyData, isSuccess: applyDataSuccess } = useGetApplyDataQuery(
    undefined,
    {
      skip: !myTeamId,
    },
  );
  const { data: refuseData, isSuccess: refuseDataSuccess } =
    useGetRefusedDataQuery(undefined, {
      skip: !myTeamId,
    });

  const [selectTab, setSelectTab] = useState(1);
  const [clickEditBtn, setClickEditBtn] = useState(false);
  const [deleteRefuseList, setDeleteRefuseList] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const setModal = (bool) => {
    setOpenDeleteModal(bool);
  };

  const handleTabChange = (tabIdx) => {
    setSelectTab(tabIdx);
    setClickEditBtn(false);
  };

  // 로그인 안했을 때
  if (!accessToken) {
    return <MatchingIntro />;
  }

  // 로그인했으나 프로필 없을 때
  if (!myTeamId) {
    return (
      <MatchingLayout>
        <NoProfile>프로필을 만든 후 신청을 보낼 수 있어요</NoProfile>
      </MatchingLayout>
    );
  }

  if (applyDataSuccess && refuseDataSuccess)
    return (
      <MatchingLayout>
        <DeleteProfileModal
          open={openDeleteModal}
          setModal={setModal}
          state="applied"
          data={deleteRefuseList}
        />
        <Container>
          <Header>
            <Tab selected={selectTab === 1} onClick={() => handleTabChange(1)}>
              {`응답을 기다려요(${applyData.length})`}
            </Tab>
            <Tab selected={selectTab === 2} onClick={() => handleTabChange(2)}>
              {`거절됐어요(${refuseData.length})`}
            </Tab>
            {selectTab === 2 && refuseData.length !== 0 && (
              <EditBtn>
                {clickEditBtn ? (
                  <>
                    <Delete
                      selected={deleteRefuseList.length > 0}
                      onClick={() => setOpenDeleteModal(true)}
                    >
                      삭제
                    </Delete>
                    <Cancel
                      onClick={() => {
                        setClickEditBtn(false);
                        setDeleteRefuseList([]);
                      }}
                    >
                      취소
                    </Cancel>
                  </>
                ) : (
                  <EditBtn onClick={() => setClickEditBtn(true)}>편집</EditBtn>
                )}
              </EditBtn>
            )}
          </Header>
          {selectTab === 1 && applyData.length !== 0 && (
            <Text>최대 48시간 이내에 상대팀의 미팅 의사를 확인해 볼게요 ⏱</Text>
          )}
          {selectTab === 2 && refuseData.length !== 0 && (
            <Text>
              {clickEditBtn ? (
                <>
                  <Pink>{deleteRefuseList.length}</Pink>/{refuseData.length}개
                  선택
                </>
              ) : (
                <>아쉽게도 상대팀이 미팅을 거절했어요 😢</>
              )}
            </Text>
          )}
        </Container>
        <OtherTeamList
          state="apply"
          teamList={selectTab === 1 ? applyData : refuseData}
          clickEditBtn={clickEditBtn}
          deleteProfile={deleteRefuseList}
          setDeleteProfile={setDeleteRefuseList}
        />
        {selectTab === 1 && applyData.length === 0 && (
          <NoMatching>신청한 미팅이 없어요</NoMatching>
        )}
        {selectTab === 2 && refuseData.length === 0 && (
          <NoMatching>거절 당한 미팅이 없어요</NoMatching>
        )}
      </MatchingLayout>
    );
}

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
