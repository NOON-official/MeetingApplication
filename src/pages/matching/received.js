import React from 'react';
import styled from 'styled-components';
import MatchingLayout from '../../layout/MatchingLayout';
import OtherTeamList from '../../components/MainRecommend/TeamList';
import NoProfile from '../../components/MainRecommend/NoProfile';
import {
  useGetMyTeamIdQuery,
  useGetReceivedDataQuery,
} from '../../features/api/userApi';
import NoMatching from './NoMatching';

export default function MatchingReceived() {
  const { data: myTeamId } = useGetMyTeamIdQuery();

  const { data: receivedData, isSuccess } = useGetReceivedDataQuery(undefined, {
    skip: !myTeamId,
  });

  if (!myTeamId) {
    return (
      <MatchingLayout>
        <NoProfile>프로필을 만든 후 신청을 받을 수 있어요</NoProfile>
      </MatchingLayout>
    );
  }

  if (isSuccess)
    return (
      <MatchingLayout>
        {receivedData.length !== 0 ? (
          <>
            <Container>
              <Header>
                <Text>
                  상대팀의 프로필을 살펴본 뒤 미팅 의사를 알려주세요 😉
                </Text>
              </Header>
            </Container>
            <OtherTeamList state="received" teamList={receivedData} />
          </>
        ) : (
          <NoMatching>신청 받은 미팅이 없어요</NoMatching>
        )}
      </MatchingLayout>
    );
}

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

const Text = styled.div`
  width: 100%;
  color: #777777;
  font-size: 14px;
  font-weight: 300;
`;
