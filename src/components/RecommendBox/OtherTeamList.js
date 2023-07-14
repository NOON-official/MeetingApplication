import styled from 'styled-components';
import { ReactComponent as UniversityMark } from '../../asset/svg/UniversityMark.svg';

export default function OtherTeamList({ isRecommend }) {
  return (
    <Container>
      <TeamCard>
        <Title>
          <TeamName>아름이와 아이들들들</TeamName>
          <SUniversityMark />
        </Title>
        <Subtitle>
          <Age>평균 24세</Age>
          <MemberCount>3명</MemberCount>
        </Subtitle>
        <Info>
          안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합 3인방과
          함께라면 안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합
          3인방과 함께라면
        </Info>
        <Button>자세히 보기</Button>
      </TeamCard>
      <TeamCard>
        <Title>
          <TeamName>아름이와</TeamName>
          <SUniversityMark />
        </Title>
        <Subtitle>
          <Age>평균 24세</Age>
          <MemberCount>3명</MemberCount>
        </Subtitle>
        <Info>
          안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합 3인방과
          함께라면안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합
          3인방과 함께라면
        </Info>
        <Button>자세히 보기</Button>
      </TeamCard>
      <TeamCard>
        <Title>
          <TeamName>아름이와아이들들들들</TeamName>
          <SUniversityMark />
        </Title>
        <Subtitle>
          <Age>평균 24세</Age>
          <MemberCount>3명</MemberCount>
        </Subtitle>
        <Info>
          안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합 3인방과
          함께라면안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합
          3인방과 함께라면
        </Info>
        <Button>자세히 보기</Button>
      </TeamCard>
      <TeamCard>
        <Title>
          <TeamName>서울대생 3명</TeamName>
          <SUniversityMark />
        </Title>
        <Subtitle>
          <Age>평균 24세</Age>
          <MemberCount>3명</MemberCount>
        </Subtitle>
        <Info>
          안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합 3인방과
          함께라면안녕하세요. 한국대학교 손석구, 최준, 뷔 입니다! 최강의 조합
          3인방과 함께라면
        </Info>
        <Button>자세히 보기</Button>
      </TeamCard>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  margin: 5% auto;
`;

const TeamCard = styled.div`
  width: 40%;
  margin: 2% 0;
  padding: 4%;
  border: 1px solid
    ${({ isRecommend }) => (isRecommend ? '#d74683' : 'rgba(0, 0, 0, 0.1)')};
  border-radius: 6px;
  background-color: #ffffff;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TeamName = styled.span`
  padding: 5px 8px;
  border-radius: 2px;
  background-color: #ececec;
  font-size: 13px;
  font-weight: 600;
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
  width: 50%;
  margin: 5% 10%;
  color: #626262;
  font-size: 10px;
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
  color: ${({ isRecommend }) =>
    isRecommend ? '#ffffff' : 'rgba(235, 136, 136, 1)'};
  background-color: ${({ isRecommend }) =>
    isRecommend ? '#ff7ab2' : 'rgba(255, 237, 237, 1)'};
  font-size: 10px;
  font-weight: 500;
  text-align: center;
`;
