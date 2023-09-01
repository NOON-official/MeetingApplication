import React, { useState } from 'react';
import styled from 'styled-components';
import MatchingLayout from '../../layout/MatchingLayout';
import { ReactComponent as SadFace } from '../../asset/svg/SadFace.svg';
import OtherTeamList from '../../components/MainRecommend/TeamList';
import DeleteProfileModal from '../../components/Modal/Profile/DeleteProfileModal';
import NoProfile from '../../components/MainRecommend/NoProfile';
import {
  useGetMyTeamIdQuery,
  useGetReceivedDataQuery,
} from '../../features/api/userApi';

export default function MatchingReceived() {
  const { data: myTeamId } = useGetMyTeamIdQuery();

  const { data: receivedData, isLoading } = useGetReceivedDataQuery(undefined, {
    skip: !myTeamId,
  });

  const [clickEditBtn, setClickEditBtn] = useState(false);
  const [deleteProfileList, setDeleteProfileList] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);

  const setModal = (bool) => {
    setDeleteModal(bool);
  };

  if (!myTeamId) {
    return (
      <MatchingLayout>
        <NoProfile>프로필을 만든 후 신청을 받을 수 있어요</NoProfile>
      </MatchingLayout>
    );
  }

  if (isLoading)
    return (
      <MatchingLayout>
        <Container>Loading...</Container>
      </MatchingLayout>
    );

  return (
    <MatchingLayout>
      <DeleteProfileModal
        open={deleteModal}
        setModal={setModal}
        state="received"
        data={deleteProfileList}
      />
      {receivedData.length !== 0 ? (
        <>
          <Container>
            <Header>
              {clickEditBtn ? (
                <EditBtn>
                  <Delete
                    selected={deleteProfileList?.length > 0}
                    onClick={() => setDeleteModal(true)}
                  >
                    삭제
                  </Delete>
                  <Cancel
                    onClick={() => {
                      setClickEditBtn(false);
                      setDeleteProfileList([]);
                    }}
                  >
                    취소
                  </Cancel>
                </EditBtn>
              ) : (
                <EditBtn onClick={() => setClickEditBtn(true)}>편집</EditBtn>
              )}
            </Header>
            {clickEditBtn ? (
              <Text>
                <Pink>{deleteProfileList?.length}</Pink>/{receivedData?.length}
                개 선택
              </Text>
            ) : (
              <Text>상대팀의 프로필을 살펴본 뒤 미팅 의사를 알려주세요 😉</Text>
            )}
          </Container>
          <OtherTeamList
            state="received"
            teamList={receivedData}
            clickEditBtn={clickEditBtn}
            deleteProfile={deleteProfileList}
            setDeleteProfile={setDeleteProfileList}
          />
        </>
      ) : (
        <NoMeetingContainer>
          <Title>신청 받은 미팅이 없어요</Title>
          <SSadFace />
        </NoMeetingContainer>
      )}
    </MatchingLayout>
  );
}

const NoMeetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 15% auto;
`;

const Title = styled.div`
  margin: 2% 0;
  font-size: 18px;
  font-weight: 500;
`;

const SSadFace = styled(SadFace)`
  width: 45%;
`;

const Container = styled.div`
  width: 90%;
  margin: 5% auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5%;
`;

const EditBtn = styled.span`
  display: flex;
  margin-left: auto;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`;

const Text = styled.div`
  width: 100%;
  color: #777777;
  font-size: 14px;
  font-weight: 300;
`;

const Delete = styled.div`
  margin-right: 15px;
  color: ${({ selected }) => (selected ? '#EB8888' : '#b7b7b7')};
`;

const Cancel = styled.div``;

const Pink = styled.span`
  margin-left: 5%;
  color: #eb8888;
`;
