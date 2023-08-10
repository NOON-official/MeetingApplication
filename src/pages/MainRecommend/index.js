import styled from 'styled-components';
import NoProfile from '../../components/MainRecommend/NoProfile';
import Timer from './timer';
import RecommendList from './recommendList';
import RecommendModal from '../../components/Modal/RecommendModal';
import MainMatchingHeader from '../../layout/header/MainMatchingHeader';
import { useGetUserTeamIdDataQuery } from '../../features/backendApi';

export default function Recommend() {
  const { data: myTeamId } = useGetUserTeamIdDataQuery();

  return (
    <>
      <RecommendModal />
      {myTeamId ? (
        <Section>
          <MainMatchingHeader title="프로필 조회" />
        </Section>
      ) : (
        <Section>
          <MainMatchingHeader title="프로필 만들기" />
        </Section>
      )}

      <Container>
        <Title>우리 팀 추천 매칭</Title>
        <Subtitle>
          우리 팀 프로필에 맞는 팀들을 추천해 드려요 <br /> 매일 밤 11시에 추천
          리스트가 업데이트 돼요!
        </Subtitle>
      </Container>

      <Timer />

      {myTeamId ? <RecommendList /> : <NoProfile />}
    </>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 5% auto;
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
