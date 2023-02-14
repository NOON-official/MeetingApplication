import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';
import { ReactComponent as Meetinge } from '../../asset/svg/RainBowMeetinge.svg';
import { ReactComponent as CircleArrow } from '../../asset/svg/CircleArrow.svg';

// 로그인하고 매칭증에 상대방이랑 매칭됬을 때 매칭조회페이지

export default function LoginMatchOk() {
  const navigate = useNavigate();

  return (
    <>
      <Top>
        <LeftTop>
          매칭결과
          <SCircleArrow
            onClick={() => {
              navigate('/matching');
            }}
          />
        </LeftTop>
        <RightTop
          onClick={() => {
            navigate('/matching/myteam');
          }}
        >
          우리 팀 프로필 조회하기
        </RightTop>
      </Top>
      <WhiteBox>
        <Meetinge />
        <TextBox>여러분의 상대팀이 매칭되었습니다.</TextBox>
        <TextBox2>상대팀의 미팅학개론을 확인해 주세요!</TextBox2>
        <MeetingButton
          onClick={() => {
            navigate('/matching/otherteam');
          }}
        >
          결과 조회하기
        </MeetingButton>
      </WhiteBox>
    </>
  );
}
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
  color: #777777;
`;

const LeftTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  font-weight: 600;
  font-size: 14px;
`;

const SCircleArrow = styled(CircleArrow)`
  &:hover {
    cursor: pointer;
  }
`;

const RightTop = styled.div`
  display: flex;
  font-weight: 300;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;

const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  padding: 40px 22px 70px 22px;
  background: #ffffff;
  border-radius: 10px;
`;

const TextBox = styled.div`
  margin-top: 10%;
  text-align: center;
  width: 93%;
  color: #1a1a1a;
  font-weight: 400;
  font-size: 30px;
  font-family: 'Nanum JungHagSaeng';
`;

const TextBox2 = styled.div`
  text-align: center;
  width: 100%;
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
