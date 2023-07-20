import { useState } from 'react';
import styled from 'styled-components';
import ChannelTalk from '../../asset/ChannelTalk';
import MatchingLayout from '../../layout/MatchingLayout';
import OtherTeamList from '../../components/MainRecommend/TeamList';

export default function MatchingApplied() {
  const ApplyDATAS = [
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
    {
      id: 3,
      matchingId: 5,
      teamName: '아름이와 아디르들들',
      age: 26,
      memberCount: 4,
      intro:
        '안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합 3인방 함께라면 안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의',
      isVerified: true,
      appliedAt: '2023-07-18T21:37:26.886Z',
    },
  ];

  const RefuseDATAS = [
    {
      id: 1,
      matchingId: 7,
      teamName: 'RefuseTeam',
      age: 24,
      memberCount: 3,
      intro: '안녕하세요',
      isVerified: true,
      appliedAt: '2023-01-20T21:37:26.886Z',
    },
    {
      id: 2,
      matchingId: 8,
      teamName: '아름이와 아이들',
      age: 27,
      memberCount: 2,
      intro:
        '안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합 3인방 함께라면 안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의',
      isVerified: false,
      appliedAt: '2023-01-20T21:37:26.886Z',
    },
    {
      id: 3,
      matchingId: 9,
      teamName: '아름이와 아디르들들',
      age: 26,
      memberCount: 4,
      intro: '안녕하세요. 반가워요.',
      isVerified: true,
      appliedAt: '2023-07-18T21:37:26.886Z',
    },
  ];

  const [selectTab, setSelectTab] = useState(1);
  const [clickEditBtn, setClickEditBtn] = useState(false);
  const [deleteProfile, setDeleteProfile] = useState([]);
  const [deleteRefuseProfile, setDeleteRefuseProfile] = useState([]);

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
          <Pink>{deleteProfile.length}</Pink>/{ApplyDATAS.length}개 선택
        </>
      ) : (
        <>최대 24시간 이내에 상대팀의 미팅 의사를 확인해 볼게요 ⏱</>
      )}
    </Text>
  );

  return (
    <MatchingLayout>
      <Container>
        <Header>
          <Tab selected={selectTab === 1} onClick={() => handleTabChange(1)}>
            응답을 기다려요(4)
          </Tab>
          <Tab selected={selectTab === 2} onClick={() => handleTabChange(2)}>
            거절됐어요(3)
          </Tab>
          {!clickEditBtn ? (
            <EditBtn onClick={() => setClickEditBtn(true)}>편집</EditBtn>
          ) : (
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
          )}
        </Header>
        {selectTab === 1 ? (
          subtitle()
        ) : (
          <Text>아쉽게도 상대팀이 미팅을 거절했어요 😢</Text>
        )}
      </Container>

      <OtherTeamList
        teamList={selectTab === 1 ? ApplyDATAS : RefuseDATAS}
        clickEditBtn={clickEditBtn}
        deleteProfile={selectTab === 1 ? deleteProfile : deleteRefuseProfile}
        setDeleteProfile={
          selectTab === 1 ? setDeleteProfile : setDeleteRefuseProfile
        }
      />

      <div>{ChannelTalk.hideChannelButton()}</div>
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
