// 로그인하고 매칭증에 상대방의 수락여부기다릴때 매칭조회페이지
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as BigO } from '../../asset/svg/BigO.svg';
import { ReactComponent as CircleArrow } from '../../asset/svg/CircleArrow.svg';
import { ReactComponent as MatchingText10 } from '../../asset/svg/MatchingText10.svg';

export default function LoginWaitOtherTeam() {
  const navigate = useNavigate();

  return (
    <>
      <Top>
        <LeftTop>
          매칭결과
          <SCircleArrow
            onClick={() => {
              window.location.reload();
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
        <SMatchingText10 />
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

const SMatchingText10 = styled(MatchingText10)`
  margin-top: 20%;
`;
