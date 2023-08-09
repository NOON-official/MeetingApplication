import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MyinfoLayout from '../../../layout/MyinfoLayout';
import { ReactComponent as TingImg } from '../../../asset/svg/TingImg.svg';
import { useGetUserTingCountQuery } from '../../../features/backendApi';

export default function Ting() {
  const navigate = useNavigate();
  const { data: ting } = useGetUserTingCountQuery();


  return (
    <MyinfoLayout title="보유 팅">
      <Section>
        <TeamBox>
          <TingImg />
          <Count>{ting.tingCount}팅</Count>
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
    </MyinfoLayout>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.div`
  margin: 10% 0 5%;
  font-weight: 500;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
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
  font-weight: 400;
  cursor: pointer;

`;
