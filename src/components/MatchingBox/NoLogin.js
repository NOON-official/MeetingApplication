import styled from 'styled-components';

import { ReactComponent as BigO } from '../../asset/svg/BigO.svg';
import { ReactComponent as MatchingText1 } from '../../asset/svg/MatchingText1.svg';

// 로그인안했을 때 매칭조회페이지

export default function NoLogin() {
  return (
    <WhiteBox>
      <SBigO />
      <SMatchingText1 />
    </WhiteBox>
  );
}

const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  padding: 40px 22px 100px 22px;
  background: #ffffff;
  border-radius: 10px;
`;

const SBigO = styled(BigO)`
  margin-right: 5%;
`;

const SMatchingText1 = styled(MatchingText1)`
  margin-top: 20%;
`;
