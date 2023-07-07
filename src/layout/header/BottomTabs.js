import styled from 'styled-components';
import { Link, useMatch } from 'react-router-dom';

export default function BottomTabs() {
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

      <Menu isactive={matchingMatch}>
        <SLink to="/matching" isactive={matchingMatch}>
          매칭조회
        </SLink>
      </Menu>
      <Menu isactive={myinfoMatch}>
        <SLink to="/myinfo" isactive={myinfoMatch}>
          마이 페이지
        </SLink>
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  padding: 10px 30px 3px 30px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  width: 23%;
  height: 30px;
  background-color: ${(props) =>
    `${props.isactive ? props.theme.pink : props.theme.background}`};
`;

const SLink = styled(Link)`
  color: ${(props) => `${props.isactive ? 'white' : '#858585'}`};
  font-weight: 400;
  font-size: 13px;
  width: 100%;
  text-decoration: none;
`;
