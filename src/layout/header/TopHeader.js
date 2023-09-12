/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Header } from '../../asset/svg/Header.svg';
import theme from '../../style/theme';
import { setAccessToken } from '../../features/user';
import AgeLimitationModal from '../../components/Modal/AgeLimitationModal';

export default function TopHeader() {
  const { accessToken } = useSelector((state) => state.user);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const access = searchParams.get('access');

    if (access) {
      dispatch(setAccessToken(access));

      // query에 남아있는 access token 삭제
      searchParams.delete('access');
      setSearchParams(searchParams);
    }
  }, [dispatch, searchParams, setSearchParams]);

  const setModal = (bool) => {
    setOpenModal(bool);
  };

  return (
    <Container>
      <AgeLimitationModal open={openModal} setModal={setModal} />
      <Logo>
        <Link to="/">
          <Header />
        </Link>
      </Logo>
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

const Logo = styled.div`
  padding-left: ${theme.width * 5}px;
`;
