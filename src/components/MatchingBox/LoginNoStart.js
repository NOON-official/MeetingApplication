import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

import { Button } from 'antd';
import { ReactComponent as BigO } from '../../asset/svg/BigO.svg';
import { ReactComponent as RightArrow } from '../../asset/svg/RightArrow.svg';
import { ReactComponent as MatchingText2 } from '../../asset/svg/MatchingText2.svg';
import backend from '../../util/backend';

// 로그인하고 매칭시작안했을 때 매칭조회페이지

export default function LoginNoStart() {
  const navigate = useNavigate();

  const handleStart = useCallback(async () => {
    try {
      await backend.get('/users/agreements');
      navigate('/apply/1');
    } catch {
      navigate('/apply/agree');
    }
  }, []);

  return (
    <>
      <WhiteBox>
        <SBigO />
        <SMatchingText2 />
        <MeetingButton onClick={handleStart}>미팅할래요</MeetingButton>
      </WhiteBox>
      <WhiteBox2
        onClick={() => {
          navigate('/myinfo/ticket');
        }}
      >
        이용권 구매하러 가기 <RightArrow />
      </WhiteBox2>
    </>
  );
}

const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  padding: 40px 22px 70px 22px;
  background: #ffffff;
  border-radius: 10px;
`;

const SBigO = styled(BigO)`
  margin-right: 5%;
`;

const SMatchingText2 = styled(MatchingText2)`
  margin-top: 20%;
`;

const MeetingButton = styled(Button)`
  font-family: 'Nanum JungHagSaeng';
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  border: none;
  margin-top: 20%;
  width: 160px;
  height: 50px;
  background: #eb8888;
  border-radius: 10px;
`;

const WhiteBox2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
  padding: 20px 35px;
  background: #ffffff;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  color: #777777;
  &:hover {
    cursor: pointer;
  }
`;
