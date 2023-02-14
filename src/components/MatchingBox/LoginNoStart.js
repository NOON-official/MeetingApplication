import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

import { Button } from 'antd';
import { ReactComponent as BigO } from '../../asset/svg/BigO.svg';
import { ReactComponent as RightArrow } from '../../asset/svg/RightArrow.svg';
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
        <TextBox>여러분을 기다리는 분들이 있어요.</TextBox>
        <TextBox2>미팅 한 번!?</TextBox2>
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

const TextBox = styled.div`
  margin-top: 20%;
  text-align: center;
  width: 85%;
  color: #1a1a1a;
  font-weight: 400;
  font-size: 30px;
  font-family: 'Nanum JungHagSaeng';
`;

const TextBox2 = styled.div`
  text-align: center;
  width: 80%;
  color: #1a1a1a;
  font-weight: 400;
  font-size: 30px;
  font-family: 'Nanum JungHagSaeng';
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
