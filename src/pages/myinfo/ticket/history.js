import styled from 'styled-components';
import Flex from '../../../components/Flex';
import Section from '../../../components/Section';
import MyinfoLayout from '../../../layout/MyinfoLayout';

export default function TicketHistoryPage() {
  return (
    <MyinfoLayout title="결제 내역">
      <Section>
        <HistoryListBox>
          <HistoryItem>
            <Flex>
              <HistoryTitle>이용권 5장 구매</HistoryTitle>
              <HistoryPrice>20,000원</HistoryPrice>
            </Flex>
            <Flex gap="10px">
              <HistoryTip />
              <HistoryDate>2023. 01. 17 12:50AM 결제</HistoryDate>
            </Flex>
          </HistoryItem>
          <HistoryItem>
            <Flex>
              <HistoryTitle>이용권 1장 구매</HistoryTitle>
              <HistoryPrice>2,500원</HistoryPrice>
            </Flex>
            <Flex gap="10px">
              <HistoryTip>*50% 할인 쿠폰 사용</HistoryTip>
              <HistoryDate>2023. 01. 17 12:50AM 결제</HistoryDate>
            </Flex>
          </HistoryItem>
        </HistoryListBox>
      </Section>
    </MyinfoLayout>
  );
}

const HistoryListBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  border: 1px solid #f8f3f3;
  border-radius: 10px;
  padding: 44px 22px;
  gap: 16px;
`;

const HistoryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 3px;
  padding: 24px;
  background: #fff5f5;
  border: 1px solid #eb8888;
`;

const HistoryTitle = styled.div`
  font-size: 13px;
  color: #777777;
`;

const HistoryPrice = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #eb8888;
`;

const HistoryTip = styled.div`
  font-weight: 300;
  font-size: 10px;
  color: #777777;
`;

const HistoryDate = styled.div`
  font-size: 10px;
  color: #777777;
`;
