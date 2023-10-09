import styled from 'styled-components';
import { Link, useMatch } from 'react-router-dom';
import { ReactComponent as MainHome } from '../../asset/svg/MainHome.svg';
import { ReactComponent as MainHeart } from '../../asset/svg/MainHeart.svg';
import { ReactComponent as MainMyPage } from '../../asset/svg/MainMyPage.svg';

export default function BottomTabs() {
  const homeMatch = useMatch('/');
  const matchingMatch = useMatch('/matching/:id');
  const myinfoMatch = useMatch('/myinfo');

  return (
    <Footer>
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
    </Footer>
  );
}

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 425px;
  width: 100%;
  background-color: ${(props) => props.theme.background};
  z-index: 10;
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
  justify-content: center;
  width: 23%;
  border-radius: 10px;
  text-align: center;
`;

const SLink = styled(Link)`
  width: 100%;
  color: ${(props) => `${props.isactive ? '#eb8888' : '#6A6A6A'}`};
  font-weight: 400;
  font-size: 13px;
  text-decoration: none;

  > svg {
    ${({ isactive }) => (isactive ? `fill: #eb8888` : `fill: #6A6A6A`)};
  }
`;

const Text = styled.div`
  margin-top: 10%;
  font-size: 14px;
`;
