import styled from 'styled-components';

import { useMemo, useState } from 'react';
import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import Teambox from '../../components/Teambox';

function Apply2() {
  const people = 3;
  const [member1, setMember1] = useState({});
  const [member2, setMember2] = useState({});
  const [member3, setMember3] = useState({});

  const teamboxcount = useMemo(() => {
    if (people === 2) {
      return (
        <>
          <Teambox member={member1} setMember={setMember1} name="대표자" />
          <Teambox member={member2} setMember={setMember2} name="팀원 1" />
        </>
      );
    }
    if (people === 3) {
      return (
        <>
          <Teambox member={member1} setMember={setMember1} name="대표자" />
          <Teambox member={member2} setMember={setMember2} name="팀원 2" />
          <Teambox member={member3} setMember={setMember3} name="팀원 3" />
        </>
      );
    }
    return <div />;
  });

  console.log(member1);
  console.log(member2);
  return (
    <ApplyLayout>
      <Title>
        <Maintitle>
          <Pink>우리팀의 구성원</Pink>을 소개해 주세요!
        </Maintitle>
        <Subtitle>나와 팀원들의 개별 ID카드를 완성해 주세요</Subtitle>
        {teamboxcount}
      </Title>
    </ApplyLayout>
  );
}

export default Apply2;

const Title = styled.div`
  margin-top: 8%;
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
  margin-top: 5%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 13px;
`;
