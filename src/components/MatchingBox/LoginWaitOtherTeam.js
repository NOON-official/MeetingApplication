// 로그인하고 매칭증에 상대방의 수락여부기다릴때 매칭조회페이지
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as BigO } from '../../asset/svg/BigO.svg';
import { ReactComponent as CircleArrow } from '../../asset/svg/CircleArrow.svg';

// 로그인하고 매칭증에 상대방찾고 있을 때 매칭조회페이지

export default function LoginWaitOtherTeam({ status }) {
  const navigate = useNavigate();

  console.log(status);

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
        <SBigO />
        <TextBox>상대팀의 수락 여부를 확인하고 있어요.</TextBox>
        <TextBox2>조금만 기다려 주세요!</TextBox2>
        <TextBox3>확인 후 알람을 드릴게요.</TextBox3>
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

const SBigO = styled(BigO)`
  margin-right: 5%;
`;

const TextBox = styled.div`
  margin-top: 20%;
  text-align: center;
  width: 100%;
  color: #1a1a1a;
  font-weight: 400;
  font-size: 30px;
  font-family: 'Nanum JungHagSaeng';
`;

const TextBox2 = styled.div`
  text-align: center;
  width: 60%;
  color: #1a1a1a;
  font-weight: 400;
  font-size: 30px;
  font-family: 'Nanum JungHagSaeng';
`;

const TextBox3 = styled.div`
  text-align: center;
  width: 65%;
  color: #1a1a1a;
  font-weight: 400;
  font-size: 30px;
  font-family: 'Nanum JungHagSaeng';
`;
