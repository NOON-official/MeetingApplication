import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../layout/MainLayout';
import { ReactComponent as MainDoc } from '../../asset/svg/MainDoc.svg';
import { ReactComponent as MainClock } from '../../asset/svg/MainClock.svg';
import { ReactComponent as ClockSeparator } from '../../asset/svg/MainClockSeparator.svg';
import { ReactComponent as UniversityMark } from '../../asset/svg/UniversityMark.svg';
import { ReactComponent as UniversityMarkPink } from '../../asset/svg/UniversityMarkPink.svg';

export default function Recommend() {
  return (
    <MainLayout>
      {/* <RecommendModal /> */}
      <Section>
        <MainButton>
          <SMainDoc />
          <BtnMainTitle>우리 팀 프로필 만들기</BtnMainTitle>
        </MainButton>
        <MainButton>
          <SUniversityMarkPink />
          <BtnTitle>
            <BtnMainTitle>우리 팀 프로필 조회</BtnMainTitle>
            <BtnSubtitle>아직 학교 인증 전이에요</BtnSubtitle>
          </BtnTitle>
        </MainButton>
      </Section>

      <Container>
        <Title>우리 팀 추천 매칭</Title>
        <Subtitle>
          우리 팀 프로필에 맞는 팀들을 추천해 드려요 <br /> 새벽 5시에 매일
          업데이트 돼요!
        </Subtitle>
      </Container>

      <Container>
        <Content>
          업데이트까지 <SMainClock />
          <Clock>
            <Box>22</Box>
            <SSeparator />
            <Box>19</Box>
            <SSeparator />
            <Box>51</Box>
          </Clock>
        </Content>
      </Container>

      {/* <RecommendNoProfile /> */}

      <Container2>
        <TeamCard>
          <Title2>
            <TeamName>아름이와 아이들들들</TeamName>
            <SUniversityMark />
          </Title2>
          <Subtitle2>
            <Age>평균 24세</Age>
            <MemberCount>3명</MemberCount>
          </Subtitle2>
          <Info>
            안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합 3인방과
            함께라면 안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합
            3인방과 함께라면
          </Info>
          <Button>자세히 보기</Button>
        </TeamCard>
        <TeamCard>
          <Title2>
            <TeamName>아름이와</TeamName>
            <SUniversityMark />
          </Title2>
          <Subtitle2>
            <Age>평균 24세</Age>
            <MemberCount>3명</MemberCount>
          </Subtitle2>
          <Info>
            안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합 3인방과
            함께라면안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합
            3인방과 함께라면
          </Info>
          <Button>자세히 보기</Button>
        </TeamCard>
        <TeamCard>
          <Title2>
            <TeamName>아름이와아이들들들들</TeamName>
            <SUniversityMark />
          </Title2>
          <Subtitle2>
            <Age>평균 24세</Age>
            <MemberCount>3명</MemberCount>
          </Subtitle2>
          <Info>
            안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합 3인방과
            함께라면안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합
            3인방과 함께라면
          </Info>
          <Button>자세히 보기</Button>
        </TeamCard>
        <TeamCard>
          <Title2>
            <TeamName>서울대생 3명</TeamName>
            <SUniversityMark />
          </Title2>
          <Subtitle2>
            <Age>평균 24세</Age>
            <MemberCount>3명</MemberCount>
          </Subtitle2>
          <Info>
            안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합 3인방과
            함께라면안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합
            3인방과 함께라면
          </Info>
          <Button>자세히 보기</Button>
        </TeamCard>
      </Container2>
    </MainLayout>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 5% auto;
`;

const MainButton = styled.button`
  display: flex;
  align-items: center;
  margin-top: 5%;
  width: 100%;
  height: 70px;
  padding: 30px;
  border: none;
  border-radius: 10px;
  background-color: #ffe8e8;
`;

const SMainDoc = styled(MainDoc)`
  margin-right: 15px;
`;

const SUniversityMarkPink = styled(UniversityMarkPink)`
  margin-right: 15px;
`;

const BtnTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const BtnMainTitle = styled.div`
  font-weight: 500;
`;

const BtnSubtitle = styled.div`
  color: #777777;
  font-size: 12px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 90%;
  margin: 5% auto;
`;

const Title = styled.div`
  margin: 5% 0;
  font-size: 18px;
  font-weight: 500;
`;

const Subtitle = styled.div`
  margin: 5% 0;
  color: #777777;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const SMainClock = styled(MainClock)`
  margin: 7px;
`;

const Clock = styled.span``;

const Box = styled.span`
  width: 16px;
  height: 17px;
  padding: 3px;
  border-radius: 5px;
  color: #eb8888;
  background-color: #ffd8d8;
`;

const SSeparator = styled(ClockSeparator)`
  margin: 0 2px;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  margin: 5% auto;
`;

const TeamCard = styled.div`
  border: 1px solid #d74683;
  border-radius: 6px;
  background-color: #ffffff;
  width: 40%;
  margin: 2% 0;
  padding: 4%;
`;

const Title2 = styled.div`
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

const Subtitle2 = styled.div`
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

const Button = styled.div`
  padding: 5px 15px;
  width: 37%;
  margin: 7% auto 0;
  border-radius: 15px;
  color: #ffffff;
  background-color: #ff7ab2;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
`;
