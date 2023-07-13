import React from 'react';
import styled from 'styled-components';

import { ReactComponent as UniversityMarkBlack } from '../../asset/svg/UniversityMarkBlack.svg';
import SliderBoxMembers from '../../components/SliderBoxMembers';
import TeamProfileLayout from '../../layout/TeamProfileLayout';
import ApplyButton from '../../components/ApplyButton';

export default function OtherTeamProfile() {
  const members = [
    { role: 1, age: 21, university: 198 },
    { age: 22, university: 198, role: 2, mbti: 14, appearance: '룰루' },
  ];

  return (
    <TeamProfileLayout>
      <TeamProfile>
        <TeamName>아름이와 아이들</TeamName>
        <TextBox>
          <Title>상대 팀 한 줄 어필</Title>
          <Content>
            안녕하세요. 한국대학교 손석구, 최준, 뷔입니다!최강의 조합 3인방과
            함께라면 그 날은 꿀잼 보장.만약 재미없다면 집까지 앞구르기 하면서
            가겠습니다.(아, 참고로 잘생겼습니다^^)
          </Content>
        </TextBox>
        <TextBox>
          <Container>
            <Title>상대 팀 기본 정보</Title>
            <SUniversityMark />
            <UniversityMarkText>대학 인증 완료</UniversityMarkText>
          </Container>
          <TeamInfo>
            <Subtitle>일정</Subtitle>
            <SubContent>주말</SubContent>
          </TeamInfo>
          <TeamInfo>
            <Subtitle>지역</Subtitle>
            <div>
              <AreaCity>서울 / 경기</AreaCity>
              <SubContent>강남 신촌</SubContent>
            </div>
          </TeamInfo>
          <TeamInfo>
            <Subtitle>주량</Subtitle>
            <SubContent>한 병 반 (Lv.3)</SubContent>
          </TeamInfo>
        </TextBox>
        <SliderBoxMembers members={members} />
      </TeamProfile>
      <Footer>
        <ButtonBox>
          <ApplyButton>신청하기</ApplyButton>
          <ApplyButton>다시 안 보기</ApplyButton>
        </ButtonBox>
      </Footer>
    </TeamProfileLayout>
  );
}

const TeamProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  margin: 0 auto;
`;

const TeamName = styled.span`
  margin: 5% auto;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: #ffd3d3;
  font-weight: 600;
  font-size: 16px;
`;

const TextBox = styled.div`
  margin-bottom: 6%;
  border: 1px solid #f1ecec;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 7%;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const Content = styled.div`
  margin-top: 5%;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  word-break: keep-all;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SUniversityMark = styled(UniversityMarkBlack)`
  margin: 0 10px 0 30px;
`;

const UniversityMarkText = styled.div`
  color: #777777;
  font-size: 14px;
`;

const TeamInfo = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5%;
`;

const Subtitle = styled.span`
  background-color: #ffeded;
  border-radius: 10px;
  padding: 3px 7px;
  margin-right: 10%;
  font-weight: 600;
  font-size: 14px;
  color: #eb8888;
`;

const SubContent = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const AreaCity = styled.div`
  margin-bottom: 5px;
  color: #777777;
  font-weight: 400;
  font-size: 14px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10%;
  padding-bottom: 5%;
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;
