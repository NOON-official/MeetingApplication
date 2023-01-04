import styled from "styled-components";

import { Link, useMatch } from "react-router-dom";
import { useState } from "react";

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
  padding: 0 20px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.pink};
`;

const Menu = styled.div`
  background-color: ${(props) => `${props.isActive ? "blue" : ""}`};
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
