// 1. 로그인 안되었을 때
// 2. 로그인 되었을 때 -2.1: 매칭 진행중, 2.2:매칭 실패: 2.3: 매칭 되었을 때
import { Container } from '../Elements/StyledComponent';
import { MobileBox, StyledDiv, StyledButton } from '../Elements/StyledComponent';
import Inprogress from './matchinginquires/LoginAndInprogress';
import { Link } from 'react-router-dom';
import Done from './matchinginquires/LoginAndDone';
import Fail from './matchinginquires/LoginAndFail';
import NewUser from './matchinginquires/NewUser';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
const MatchingInquire = () => {
  const userState = useSelector((state) => state.userLogin);
  const MatchingInquirePage = useCallback(() => {
    if (userState) {
      return;
    } else {
      return <NewUser />;
    }
  }, userState);
  return (
    <Container height={'100%'} bg="#f8f3f3">
      <MobileBox overflow="auto" justify_content=" center" height="100%">
        {/** white space box */}
        <StyledDiv
          display="flex"
          direction="column"
          justify_content="space-around"
          align_item="center"
          position=" static"
          transform="0"
          left="0"
          height="80%"
          bg="white"
          width="90%"
          border="10px"
        >
          {/** return pages for each section 1.user, 1.1 user and matching in progress, 1.2 matching fail, 1.3matching done 2.not user */}
          {userState ? <Done /> : <NewUser />}
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default MatchingInquire;
