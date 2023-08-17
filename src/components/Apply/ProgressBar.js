import styled from 'styled-components';

import { ReactComponent as HappyFaceWithText2 } from '../../asset/svg/HappyFaceWithText2.svg';
import { ReactComponent as ProgressText3 } from '../../asset/svg/ProgressText3.svg';
import { ReactComponent as HappyFace } from '../../asset/svg/HappyFace.svg';
import { ReactComponent as HappyFaceWithText1 } from '../../asset/svg/HappyFaceWithText1.svg';

const Progress = styled.div`
  margin-top: 40px;
  width: 90%;
  height: 18px;
  background-color: #f1ecec;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IngBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 18px;
  ${({ progress }) => {
    return progress ? `width: ${progress * 12.5}%` : `width: 0`;
  }};
  background-color: ${(props) => props.theme.lightPink};
  border-radius: 20px;
`;

const SHappyFace = styled(HappyFace)`
  position: absolute;
  right: 0;
`;

const SHappyFaceWithText1 = styled(HappyFaceWithText1)`
  height: 54px;
  position: absolute;
  right: -70px;
  bottom: -12%;
`;

const SHappyFaceWithText2 = styled(HappyFaceWithText2)`
  height: 54px;
  position: absolute;
  right: -70px;
  bottom: -12%;
`;

const SProgressText3 = styled(ProgressText3)`
  position: absolute;
  bottom: 80%;
  left: 80%;
`;

export default function ProgressBar({ page }) {
  return (
    <Progress>
      <IngBar progress={page}>
        {page === 4 ? <SHappyFaceWithText1 /> : null}
        {page === 6 ? <SHappyFaceWithText2 /> : null}
        {page === 8 ? <SProgressText3 /> : null}
        {page !== 4 && page !== 6 ? <SHappyFace /> : null}
      </IngBar>
    </Progress>
  );
}
