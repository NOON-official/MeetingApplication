import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";

import { theme } from "../../Style/theme";

const MainHeader = () => {
  const homeMatch = useMatch("/");
  const guideMatch = useMatch("/guide");
  const matchingMatch = useMatch("/matching");
  const myinfoMatch = useMatch("/myinfo");

  return (
    <Container>
      <Menu isActive={homeMatch}>
        <SLink to="/">홈</SLink>
      </Menu>
      <Menu isActive={guideMatch}>
        <SLink to="/guide">가이드</SLink>
      </Menu>
      <Menu isActive={matchingMatch}>
        <SLink to="/matching">매칭조회</SLink>
      </Menu>
      <Menu isActive={myinfoMatch}>
        <SLink to="/myinfo">내정보</SLink>
      </Menu>
    </Container>
  );
};

export default MainHeader;

const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.pink};
  padding: 0 20px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  line-height: 50px;
  width: 25%;
  background-color: ${(props) => `${props.isActive ? `${theme.pink}` : `${theme.background}`}`};
`;

const SLink = styled(Link)`
  font-weight: 400;
  font-size: 13px;
  color: #858585;
  width: 100%;
  text-decoration: none;
`;
