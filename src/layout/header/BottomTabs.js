import styled from 'styled-components';
import { Link, useMatch } from 'react-router-dom';
import { ReactComponent as MainHome } from '../../asset/svg/MainHome.svg';
import { ReactComponent as MainHeart } from '../../asset/svg/MainHeart.svg';
import { ReactComponent as MainMyPage } from '../../asset/svg/MainMyPage.svg';

export default function BottomTabs() {
  const homeMatch = useMatch('/');
  const matchingMatch = useMatch('/matching');
  const myinfoMatch = useMatch('/myinfo');

  return (
    <Container>
      <Menu isactive={homeMatch}>
        <SLink to="/" isactive={homeMatch}>
          <MainHome />
          <Text>홈</Text>
        </SLink>
      </Menu>

      <Menu isactive={matchingMatch}>
        <SLink to="/matching/applied" isactive={matchingMatch}>
          <MainHeart />
          <Text>매칭조회</Text>
        </SLink>
      </Menu>

      <Menu isactive={myinfoMatch}>
        <SLink to="/myinfo" isactive={myinfoMatch}>
          <MainMyPage />
          <Text>마이 페이지</Text>
        </SLink>
      </Menu>
    </Container>
  );
}

const Text = styled.div`
  margin-top: 10%;
  font-size: 14px;
`;

const Container = styled.div`
  max-width: 425px;
  border-top: 2px solid #bfbfbf;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #ffffff;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
  width: 23%;
  /* height: 30px; */
  /* background-color: ${(props) =>
    `${props.isactive ? props.theme.pink : props.theme.background}`}; */
`;

const SLink = styled(Link)`
  color: ${(props) => `${props.isactive ? '#6A6A6A' : '#6A6A6A'}`};
  font-weight: 400;
  font-size: 13px;
  width: 100%;
  text-decoration: none;
`;
