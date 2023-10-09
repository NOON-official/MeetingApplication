import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MainMatchingHeader from './header/MainMatchingHeader';
import { useGetMyTeamIdQuery } from '../features/api/userApi';
import HeaderBottomLayout from './HeaderBottomLayout';

export default function MatchingLayout({ children }) {
  const { data: myTeamId } = useGetMyTeamIdQuery();

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
    <HeaderBottomLayout>
      <Section>
        {myTeamId ? (
          <MainMatchingHeader title="프로필 조회" />
        ) : (
          <MainMatchingHeader title="프로필 만들기" />
        )}

        <Header>
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
        </Header>
      </Section>
      <Content>{children}</Content>
    </HeaderBottomLayout>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 425px;
  background-color: #ffffff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 5%;
  border-bottom: 1px solid #6a6a6a;
`;

const Content = styled.div`
  max-width: 425px;
  width: 100%;
  padding-bottom: 85px;
  background-color: ${(props) => props.theme.background};
`;
