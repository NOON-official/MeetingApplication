import styled from 'styled-components';

import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import Teambox from '../../components/Teambox';
import ApplyButton from '../../components/ApplyButton';
import ProgressBar from '../../components/ProgressBar';

function Apply3() {
  const people = 2;
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
    return null;
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
      </Title>
      {teamboxcount}
      <Footer>
        <ProgressBar page={3} />
        <ButtonBox>
          <ApplyButton>
            <SLink to="/apply/2">이전</SLink>
          </ApplyButton>
          <ApplyButton>
            <SLink to="/apply/4">다음</SLink>
          </ApplyButton>
        </ButtonBox>
      </Footer>
    </ApplyLayout>
  );
}

export default Apply3;

const Title = styled.div`
  width: 90%;
  margin-top: 8%;
  height: 13%;
  min-height: 13%;
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
  margin-top: 4%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 13px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10%;
  padding-bottom: 5%;
`;

const SLink = styled(Link)`
  padding: 10px 58px;
  text-decoration: 'none';
  color: ${(props) => props.theme.lightPink};
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;
