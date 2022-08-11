import PrefferedUnivBox from '../Universities/PrefferedUnivBox';
import { Container, MobileBox, Title } from '../Elements/StyledComponent';
import { JobSelect, AgeSelect } from '../Elements/PrefferedSelect';
const Body7 = () => {
  return (
    <Container overflow={'scroll'}>
      <MobileBox height={'150%'}>
        <Title>어떤 상대방을 원하시나요?</Title>
        <Title top={'8%'}>상대팀의 직업은?</Title>
        <JobSelect></JobSelect>
        <Title top={'20%'}>상대팀의 평균나이는?</Title>
        <AgeSelect></AgeSelect>
        <Title top={'34%'}>이런 학교는 피하고 싶어요</Title>
        <PrefferedUnivBox top={'44%'}></PrefferedUnivBox>
      </MobileBox>
    </Container>
  );
};

export default Body7;
