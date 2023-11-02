import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import MyinfoLayout from '../../../layout/MyinfoLayout';
import { ReactComponent as TingImg } from '../../../asset/svg/TingImg.svg';
import {
  useGetTingCountQuery,
  useGetTingHistoryQuery,
} from '../../../features/api/userApi';
import Section from '../../../components/Section';
import Flex from '../../../components/Flex';

export default function Ting() {
  const navigate = useNavigate();
  const { data: ting } = useGetTingCountQuery();
  const { data: history, isSuccess } = useGetTingHistoryQuery();

  return (
    <MyinfoLayout title="보유 팅">
      <Section style={{ textAlign: 'center' }}>
        <TeamBox>
          <TingImg />
          <Count>{ting}팅</Count>
          보유
        </TeamBox>
        <Title>
          <Pink>팅</Pink>으로 미팅 신청/수락을 할 수 있어요!
        </Title>
        <Content>
          <Label>미팅 신청 시</Label>
          <Bold>
            <Pink>2팅</Pink> 사용
          </Bold>
        </Content>
        <Content>
          <Label>미팅 수락 시</Label>
          <Bold>
            <Pink>4팅</Pink> 사용
          </Bold>
        </Content>
        <ChargeTingBtn onClick={() => navigate('/myinfo/ting/buy')}>
          팅 충전하러 가기
        </ChargeTingBtn>
      </Section>
      {isSuccess && (
        <Section mx="50px" my="24px" style={{ textAlign: 'left' }}>
          <Title>나의 팅 이용 내역</Title>
          <HistoryListBox>
            {history.length === 0 ? (
              <NoOrderText>결제 내역이 없습니다</NoOrderText>
            ) : (
              history.map((order) => (
                <HistoryItem key={order.id}>
                  <Flex>
                    <div>
                      <HistoryTitle>{order.case}</HistoryTitle>
                      <HistoryDate>
                        {dayjs(order.createdAt).format('YYYY/MM/DD HH:mm:ss')}
                      </HistoryDate>
                    </div>
                    <Flex>
                      {order.usingTing < 0 ? (
                        <HistoryPriceBlack>
                          {order.usingTing} 팅
                        </HistoryPriceBlack>
                      ) : (
                        <HistoryPrice>+ {order.usingTing} 팅</HistoryPrice>
                      )}
                    </Flex>
                  </Flex>
                </HistoryItem>
              ))
            )}
          </HistoryListBox>
        </Section>
      )}
    </MyinfoLayout>
  );
}

const HistoryListBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px 0;
  gap: 16px;
`;

const HistoryItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const HistoryTitle = styled.div`
  font-size: 15px;
  font-weight: 400;
`;

const HistoryPrice = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #eb8888;
`;

const HistoryPriceBlack = styled(HistoryPrice)`
  color: #000000;
`;

const HistoryDate = styled.div`
  margin-top: 7px;
  font-size: 12px;
  color: #999;
`;

const NoOrderText = styled.div`
  font-size: 14px;
  color: #777777;
  padding: 12px 0;
  text-align: center;
`;

const Title = styled.div`
  margin: 10% 0 5%;
  font-weight: 500;
`;

const Content = styled.div`
  margin: 2% 0;
  font-size: 15px;
  font-weight: 300;
`;

const TeamBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 70%;
  padding: 4% 0;
  border: 1px solid #ffc6c6;
  border-radius: 14px;
  background-color: #ffe8e8;
`;

const Count = styled.span`
  margin: 0 3%;
  font-size: 22px;
  font-weight: 700;
  color: #eb8888;
`;

const Label = styled.span``;

const Bold = styled.span`
  margin-left: 10%;
  font-weight: 500;
`;

const Pink = styled.span`
  color: #eb8888;
`;

const ChargeTingBtn = styled.button`
  width: 80%;
  padding: 10px;
  margin: 5% 0;
  border: none;
  border-radius: 20px;
  color: #ffffff;
  background-color: #eb8888;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;
