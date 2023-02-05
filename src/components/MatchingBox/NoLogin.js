import styled from 'styled-components';

import { ReactComponent as BigO } from '../../asset/svg/BigO.svg';

export default function NoLogin() {
  return (
    <WhiteBox>
      <SBigO />
      <TextBox>매칭결과를 확인하려면 로그인을 해주세요.</TextBox>
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

const TextBox = styled.div`
  margin-top: 20%;
  text-align: center;
  width: 60%;
  color: #1a1a1a;
  font-weight: 400;
  font-size: 30px;
  font-family: 'Nanum JungHagSaeng';
`;
