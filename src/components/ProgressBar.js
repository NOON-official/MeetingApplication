import styled from 'styled-components';

import { ReactComponent as HappyFace } from '../asset/svg/HappyFace.svg';

const Progress = styled.div`
  position: relative;
  width: 330px;
  height: 24px;
  background-color: ${(props) => props.theme.grey};
  border-radius: 20px;
`;

const IngBar = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  ${({ progress }) => {
    return progress ? `width: ${progress * 55}px` : `width: 0`;
  }};
  background-color: ${(props) => props.theme.lightPink};
  border-radius: 20px;
`;

export default function ProgressBar({ page }) {
  return (
    <Progress>
      <IngBar progress={page}>
        <HappyFace />
      </IngBar>
    </Progress>
  );
}
