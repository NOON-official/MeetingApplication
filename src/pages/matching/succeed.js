import React from 'react';
import styled from 'styled-components';
import MatchingLayout from '../../layout/MatchingLayout';
import { ReactComponent as UniversityMark } from '../../asset/svg/UniversityMark.svg';

export default function MatchingSucceed() {
  return (
    <MatchingLayout>
      <Container>
        <Text>
          상대팀도 수락하여 미팅이 최종 성사되었어요!🎉
          <br />
          7일 동안 상대팀의 카카오톡 ID/전화번호 확인이 가능해요
        </Text>
      </Container>

      <Container2>
        <TeamCard>
          <Date>
            7월 3일 <RemainingDate>7일 남음</RemainingDate>
          </Date>
          <Content>
            <Title>
              <TeamName>아름이와 아이들들들</TeamName>
              <SUniversityMark />
            </Title>
            <Subtitle>
              <Age>평균 24세</Age>
              <MemberCount>3명</MemberCount>
            </Subtitle>
            <Info>
              안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합
              3인방과 함께라면 안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다!
              최강의 조합 3인방과 함께라면
            </Info>
            <ButtonBox>
              <Button1>연락처 확인</Button1>
              <Button2>자세히 보기</Button2>
            </ButtonBox>
          </Content>
        </TeamCard>
        <TeamCard>
          <Date>
            7월 3일 <RemainingDate>7일 남음</RemainingDate>
          </Date>
          <Content>
            <Title>
              <TeamName>아름이와 아이들들들</TeamName>
              <SUniversityMark />
            </Title>
            <Subtitle>
              <Age>평균 24세</Age>
              <MemberCount>3명</MemberCount>
            </Subtitle>
            <Info>
              안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합
              3인방과 함께라면 안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다!
              최강의 조합 3인방과 함께라면
            </Info>
            <ButtonBox>
              <Button1>연락처 확인</Button1>
              <Button2>자세히 보기</Button2>
            </ButtonBox>
          </Content>
        </TeamCard>
        <TeamCard>
          <Date>
            7월 3일 <RemainingDate>7일 남음</RemainingDate>
          </Date>
          <Content>
            <Title>
              <TeamName>아름이와 아이들들들</TeamName>
              <SUniversityMark />
            </Title>
            <Subtitle>
              <Age>평균 24세</Age>
              <MemberCount>3명</MemberCount>
            </Subtitle>
            <Info>
              안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합
              3인방과 함께라면 안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다!
              최강의 조합 3인방과 함께라면
            </Info>
            <ButtonBox>
              <Button1>연락처 확인</Button1>
              <Button2>자세히 보기</Button2>
            </ButtonBox>
          </Content>
        </TeamCard>
      </Container2>
    </MatchingLayout>
  );
}

const Date = styled.div`
  margin: 0 0 5px 10px;
  font-size: 11px;
`;

const RemainingDate = styled.span`
  margin-left: 10px;
  color: rgba(255, 157, 157, 1);
`;

const Container = styled.div`
  width: 90%;
  margin: 5% auto;
`;

const Text = styled.div`
  width: 100%;
  color: #777777;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  margin: 5% auto;
`;

const TeamCard = styled.div`
  width: 49%;
  margin: 2% 0;
`;

const Content = styled.div`
  padding: 8%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background-color: #ffffff;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TeamName = styled.span`
  background-color: #ececec;
  padding: 5px 8px;
  font-weight: 600;
  font-size: 13px;
  border-radius: 2px;
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
`;

const SUniversityMark = styled(UniversityMark)`
  margin-left: 1%;
`;

const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: #626262;
  font-size: 10px;
  width: 50%;
  margin: 5% 10%;
`;

const Age = styled.div``;

const MemberCount = styled.div``;

const Info = styled.div`
  margin-top: 5%;
  font-size: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.3;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
`;

const Button1 = styled.button`
  padding: 5px 8px;
  border: none;
  border-radius: 15px;
  color: #ffffff;
  background-color: rgba(255, 157, 157, 1);
  font-size: 10px;
  font-weight: 400;
  text-align: center;
`;

const Button2 = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 15px;
  color: rgba(235, 136, 136, 1);
  background-color: rgba(255, 237, 237, 1);
  font-size: 10px;
  font-weight: 400;
  text-align: center;
`;
