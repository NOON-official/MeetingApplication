import styled from 'styled-components';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TopHeader from './header/TopHeader';
import BottomTabs from './header/BottomTabs';
import MyTeamProfile from '../components/Modal/Profile/MyTeamProfileModal';
import MainMatchingHeader from './header/MainMatchingHeader';
import { useGetUserTeamIdDataQuery } from '../features/backendApi';

export default function MatchingLayout({ children }) {
  const [openMyTeamProfile, setOpenMyTeamProfile] = useState(false);
  const { data: myTeamId } = useGetUserTeamIdDataQuery();

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
          {myTeamId?.teamId !== null ? (
            <MainMatchingHeader title="프로필 조회" />
          ) : (
            <MainMatchingHeader title="프로필 만들기" />
          )}

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
  justify-content: space-between;
  max-width: 425px;
  width: 100%;
  background-color: #ffffff;
`;

const Header2 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 5%;
  border-bottom: 1px solid #6a6a6a;
`;

const Content = styled.div`
  max-width: 425px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
  overflow-y: auto;
`;

const Footer = styled.div`
  max-width: 425px;
  width: 100%;
  background-color: ${(props) => props.theme.background};
`;
