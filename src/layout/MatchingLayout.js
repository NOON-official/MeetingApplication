import styled from 'styled-components';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TopHeader from './header/TopHeader';
import BottomTabs from './header/BottomTabs';
import MyTeamProfile from '../components/RecommendBox/MyTeamProfileModal';
import { ReactComponent as MainDoc } from '../asset/svg/MainDoc.svg';
import { ReactComponent as UniversityMarkPink } from '../asset/svg/UniversityMarkPink.svg';

export default function MatchingLayout({ children }) {
  const [openMyTeamProfile, setOpenMyTeamProfile] = useState(false);

  const setModal = (bool) => {
    setOpenMyTeamProfile(bool);
  };

  const activeStyle = {
    padding: '4px',
    borderBottom: '3.5px solid #000000',
    color: '#000000',
    fontSize: '16px',
    fontWeight: '600',
  };

  const inActiveStyle = {
    padding: '4px',
    color: '#6a6a6a',
    fontSize: '16px',
    fontWeight: '400',
  };

  return (
    <Container>
      <Header>
        <TopHeader />
      </Header>
      <Content>
        <MyTeamProfile open={openMyTeamProfile} setModal={setModal} />
        <Section>
          <MainButton onClick={() => setOpenMyTeamProfile(true)}>
            <SMainDoc />
            <BtnMainTitle>우리 팀 프로필 조회</BtnMainTitle>
          </MainButton>
          <MainButton>
            <SUniversityMarkPink />
            <BtnTitle>
              <BtnMainTitle>학교 인증하러 가기</BtnMainTitle>
              <BtnSubtitle>아직 학교 인증 전이에요</BtnSubtitle>
            </BtnTitle>
          </MainButton>
          <Header2>
            <NavLink
              to="/matching/applied"
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              보낸 신청
            </NavLink>
            <NavLink
              to="/matching/received"
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              받은 신청
            </NavLink>
            <NavLink
              to="/matching/succeeded"
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              매칭 완료
            </NavLink>
          </Header2>
        </Section>

        {children}
      </Content>
      <Footer>
        <BottomTabs />
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 425px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

const MainButton = styled.button`
  display: flex;
  align-items: center;
  margin-top: 5%;
  width: 90%;
  height: 70px;
  padding: 30px;
  border: none;
  border-radius: 10px;
  background-color: #ffe8e8;
  cursor: pointer;
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

const Header2 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 6%;
  border-bottom: 1px solid #6a6a6a;
`;

const Content = styled.div`
  border: 1px solid blue;
  max-width: 425px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
  overflow-y: scroll;
`;

const Footer = styled.div`
  max-width: 425px;
  width: 100%;
  background-color: ${(props) => props.theme.background};
`;
