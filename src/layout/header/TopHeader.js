/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Icon } from '../../asset/svg/Header.svg';
import theme from '../../style/theme';
import { setAccessToken } from '../../features/user';

export default function TopHeader() {
  const { accessToken } = useSelector((state) => state.user);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const access = searchParams.get('access');

    if (access) {
      dispatch(setAccessToken(access));

      // query에 남아있는 access token 삭제
      searchParams.delete('access');
      setSearchParams(searchParams);
    }
  }, [dispatch, searchParams, setSearchParams]);

  return (
    <Header>
      <Container>
        <Logo>
          <Link to="/">
            <Icon />
          </Link>
        </Logo>
      </Container>
    </Header>
  );
}

const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 425px;
  z-index: 1;
`;

const Container = styled.div`
  padding: 15px 30px;
  background-color: #f8f3f3;
  height: 20px;
  max-width: 425px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    border-bottom: 1px solid ${(props) => props.theme.lightPink};
  }
`;

const Logo = styled.div`
  padding-left: ${theme.width * 5}px;
`;
