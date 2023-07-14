import { useState } from 'react';

import styled from 'styled-components';
import ChannelTalk from '../../asset/ChannelTalk';
import MatchingLayout from '../../layout/MatchingLayout';
import OtherTeamList from '../../components/RecommendBox/OtherTeamList';

export default function MatchingApplied() {
  const [selectTab, setSelectTab] = useState(1);

  return (
    <MatchingLayout>
      <Container>
        <Header>
          <Tab selected={selectTab === 1} onClick={() => setSelectTab(1)}>
            응답을 기다려요(4)
          </Tab>
          <Tab selected={selectTab === 2} onClick={() => setSelectTab(2)}>
            거절됐어요(3)
          </Tab>
          <EditBtn>편집</EditBtn>
        </Header>
        {selectTab === 1 ? (
          <Text>최대 24시간 이내에 상대팀의 미팅 의사를 확인해 볼게요 ⏱</Text>
        ) : (
          <Text>아쉽게도 상대팀이 미팅을 거절했어요 😢</Text>
        )}
      </Container>

      {selectTab === 1 ? <OtherTeamList isRecommend={false} /> : null}

      <div>{ChannelTalk.hideChannelButton()}</div>
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
  margin-left: auto;
  font-weight: 500;
`;

const Text = styled.div`
  width: 100%;
  color: #777777;
  font-size: 14px;
  font-weight: 300;
`;
