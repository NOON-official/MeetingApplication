import React, { useState } from 'react';
import styled from 'styled-components';
import MatchingLayout from '../../layout/MatchingLayout';
import { ReactComponent as SadFace } from '../../asset/svg/SadFace.svg';
import OtherTeamList from '../../components/MainRecommend/TeamList';

export default function MatchingReceived() {
  const DATAS = [
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
      intro:
        '안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합 3인방 함께라면 안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의',
      isVerified: false,
      appliedAt: '2023-01-20T21:37:26.886Z',
    },
    {
      id: 3,
      matchingId: 5,
      teamName: '아름이와 아디르들들',
      age: 26,
      memberCount: 4,
      intro: '안녕하세요 반가워요',
      isVerified: true,
      appliedAt: '2023-07-18T21:37:26.886Z',
    },
  ];

  const [clickEditBtn, setClickEditBtn] = useState(false);
  const [deleteProfile, setDeleteProfile] = useState([]);

  return (
    <MatchingLayout>
      {DATAS ? (
        <>
          <Container>
            <Header>
              {!clickEditBtn ? (
                <EditBtn onClick={() => setClickEditBtn(true)}>편집</EditBtn>
              ) : (
                <EditBtn>
                  <Delete selected={deleteProfile.length > 0}>삭제</Delete>
                  <Cancel onClick={() => setClickEditBtn(false)}>취소</Cancel>
                </EditBtn>
              )}
            </Header>
            {clickEditBtn ? (
              <Text>
                <Pink>{deleteProfile.length}</Pink>/{DATAS.length}개 선택
              </Text>
            ) : (
              <Text>상대팀의 프로필을 살펴본 뒤 미팅 의사를 알려주세요 😉</Text>
            )}
          </Container>
          <OtherTeamList
            isRecommend={false}
            teamList={DATAS}
            clickEditBtn={clickEditBtn}
            deleteProfile={deleteProfile}
            setDeleteProfile={setDeleteProfile}
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
