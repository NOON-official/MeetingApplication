import styled from 'styled-components';
import { Button } from 'antd';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LeftArrow } from '../../asset/svg/LeftArrow.svg';

export default function MyinfoHeader({ title }) {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    // 이용권 구매 페이지인 경우
    if (window.location.pathname === '/myinfo/ticket/buy') {
      navigate('/myinfo/ticket');
    }
    // 이용권 현황 페이지인 경우
    else if (window.location.pathname === '/myinfo/ticket') {
      navigate('/myinfo');
    } else {
      navigate('/myinfo');
    }
  }, [navigate]);

  return (
    <Container title={title}>
      <IconButton type="text" icon={<LeftArrow />} onClick={goBack}>
        {title}
      </IconButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 425px;
  height: 4vh;
  padding: 20px 0;
  background-color: ${(props) =>
    props.title === '학교 인증' ? props.theme.white : props.theme.background};
`;

const IconButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5%;
  width: 100%;
  > svg {
    vertical-align: middle;
  }
  > span {
    margin-right: 45%;
    vertical-align: middle;
    font-weight: 500;
    font-size: 16px;
  }
`;
