import styled from 'styled-components';
import { Link, useMatch } from 'react-router-dom';

import { theme } from '../../style/theme';

function MainHeader() {
  const homeMatch = useMatch('/');
  const guideMatch = useMatch('/guide');
  const matchingMatch = useMatch('/matching');
  const myinfoMatch = useMatch('/myinfo');

  return (
    <Container>
      <Menu isactive={homeMatch}>
        <SLink to="/" isactive={homeMatch}>
          홈
        </SLink>
      </Menu>
      <Menu isactive={guideMatch}>
        <SLink to="/guide" isactive={guideMatch}>
          가이드
        </SLink>
      </Menu>
      <Menu isactive={matchingMatch}>
        <SLink to="/matching" isactive={matchingMatch}>
          매칭조회
        </SLink>
      </Menu>
      <Menu isactive={myinfoMatch}>
        <SLink to="/myinfo" isactive={myinfoMatch}>
          내정보
        </SLink>
      </Menu>
    </Container>
  );
}

export default MainHeader;

const Container = styled.div`
  height: 60px;
  max-height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${theme.pink};
  padding-bottom: 8px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  line-height: 50px;
  width: 300px;
  background-color: ${(props) =>
    `${props.isactive ? `${theme.pink}` : `${theme.background}`}`};
`;

const SLink = styled(Link)`
  color: ${(props) => `${props.isactive ? 'white' : '#858585'}`};
  font-weight: 400;
  font-size: 13px;
  width: 100%;
  text-decoration: none;
`;
