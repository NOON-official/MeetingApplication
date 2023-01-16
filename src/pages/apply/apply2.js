import styled from 'styled-components';

import { theme } from '../../style/theme';
import ApplyLayout from '../../layout/mainlayout/apply';
import Teambox from '../../components/teameBox';

function Apply2() {
  return (
    <ApplyLayout>
      <Title>
        <Maintitle>
          <Pink>우리팀의 구성원</Pink>을 소개해 주세요!
        </Maintitle>
        <Subtitle>나와 팀원들의 개별 ID카드를 완성해 주세요</Subtitle>
      </Title>
      <Teambox />
    </ApplyLayout>
  );
}

export default Apply2;

const Title = styled.div`
  display: flex;
  height: 30px;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

const Maintitle = styled.div`
  width: 100%;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 35px;
`;

const Pink = styled.span`
  color: ${theme.pink};
`;

const Subtitle = styled.p`
  margin-top: 15px;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 13px;
`;
