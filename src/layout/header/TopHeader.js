/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Header } from '../../asset/svg/Header.svg';
import theme from '../../style/theme';
import KakaoLoginLink from '../../components/Auth/KakaoLoginLink';
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
    <Container>
      <Logo>
        <Link to="/">
          <Header />
        </Link>
      </Logo>
      <LoginBox>
        {accessToken ? null : (
          <KakaoLoginLink>
            <LoginText>로그인</LoginText>
          </KakaoLoginLink>
        )}
      </LoginBox>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px 30px;
  background-color: #f8f3f3;
  height: 4vh;
  max-width: 425px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    border-bottom: 1px solid ${(props) => props.theme.lightPink};
  }
`;

const LoginBox = styled.button`
  all: unset;
  padding-right: ${theme.width * 5}px;
  font-size: 15px;
  :hover {
    cursor: pointer;
  }
`;

const Logo = styled.div`
  padding-left: ${theme.width * 5}px;
`;

const LoginText = styled.div`
  font-weight: 400;
  font-size: 11px;
  color: #858585;
`;
