import styled from 'styled-components';

import { ReactComponent as NotSelectCheck } from '../asset/svg/NotSelectCheck.svg';
import { ReactComponent as OurTeamCheck } from '../asset/svg/OurTeamCheck.svg';
import { ReactComponent as SelectCheck } from '../asset/svg/SelectCheck.svg';

export default function ChangeCountButton(props) {
  const { count, changeCount, setChangeCount } = props;

  const handleCount = (x) => {
    if (changeCount.includes(x)) {
      setChangeCount(changeCount.filter((a) => x !== a));
      return;
    }
    setChangeCount([...changeCount, x]);
  };

  const handleAllSelected = (a, b) => {
    if (changeCount.includes(a) && changeCount.includes(b)) {
      setChangeCount([]);
      return;
    }
    setChangeCount([...changeCount, a, b]);
  };

  return (
    <>
      {count === 2 ? (
        <ButtonBox>
          <SingleButton>
            <OurTeamCheck />
            <SelectButton>2:2 미팅</SelectButton>
            {count === 2 ? (
              <TeamSubTitle>현재 우리 팀 인원이에요</TeamSubTitle>
            ) : null}
          </SingleButton>
          <SingleButton>
            {changeCount.includes(3) ? <SelectCheck /> : <NotSelectCheck />}
            <CountButton
              isActive={changeCount.includes(3)}
              onClick={() => handleCount(3)}
            >
              3:3 미팅
            </CountButton>
          </SingleButton>
          <SingleButton>
            {changeCount.includes(4) ? <SelectCheck /> : <NotSelectCheck />}
            <CountButton
              isActive={changeCount.includes(4)}
              onClick={() => handleCount(4)}
            >
              4:4 미팅
            </CountButton>
          </SingleButton>
          <SingleButton>
            {changeCount.includes(3) && changeCount.includes(4) ? (
              <SelectCheck />
            ) : (
              <NotSelectCheck />
            )}
            <CountButton
              isActive={changeCount.includes(3) && changeCount.includes(4)}
              onClick={() => handleAllSelected(3, 4)}
            >
              모두 가능해요
            </CountButton>
          </SingleButton>
        </ButtonBox>
      ) : null}

      {count === 3 ? (
        <ButtonBox>
          <SingleButton>
            {changeCount.includes(2) ? <SelectCheck /> : <NotSelectCheck />}
            <CountButton
              isActive={changeCount.includes(2)}
              onClick={() => handleCount(2)}
            >
              2:2 미팅
            </CountButton>
          </SingleButton>
          <SingleButton>
            <OurTeamCheck />
            <SelectButton>3:3 미팅</SelectButton>
            <TeamSubTitle>현재 우리 팀 인원이에요</TeamSubTitle>
          </SingleButton>
          <SingleButton>
            {changeCount.includes(4) ? <SelectCheck /> : <NotSelectCheck />}
            <CountButton
              isActive={changeCount.includes(4)}
              onClick={() => handleCount(4)}
            >
              4:4 미팅
            </CountButton>
          </SingleButton>
          <SingleButton>
            {changeCount.includes(2) && changeCount.includes(4) ? (
              <SelectCheck />
            ) : (
              <NotSelectCheck />
            )}
            <CountButton
              isActive={changeCount.includes(2) && changeCount.includes(4)}
              onClick={() => handleAllSelected(2, 4)}
            >
              모두 가능해요
            </CountButton>
          </SingleButton>
        </ButtonBox>
      ) : null}

      {count === 4 ? (
        <ButtonBox>
          <SingleButton>
            {changeCount.includes(2) ? <SelectCheck /> : <NotSelectCheck />}
            <CountButton
              isActive={changeCount.includes(2)}
              onClick={() => handleCount(2)}
            >
              2:2 미팅
            </CountButton>
          </SingleButton>
          <SingleButton>
            {changeCount.includes(3) ? <SelectCheck /> : <NotSelectCheck />}
            <CountButton
              isActive={changeCount.includes(3)}
              onClick={() => handleCount(3)}
            >
              3:3 미팅
            </CountButton>
          </SingleButton>
          <SingleButton>
            <OurTeamCheck />
            <SelectButton>4:4 미팅</SelectButton>
            <TeamSubTitle>현재 우리 팀 인원이에요</TeamSubTitle>
          </SingleButton>
          <SingleButton>
            {changeCount.includes(2) && changeCount.includes(3) ? (
              <SelectCheck />
            ) : (
              <NotSelectCheck />
            )}
            <CountButton
              isActive={changeCount.includes(2) && changeCount.includes(3)}
              onClick={() => handleAllSelected(2, 3)}
            >
              모두 가능해요
            </CountButton>
          </SingleButton>
        </ButtonBox>
      ) : null}
    </>
  );
}

const ButtonBox = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const SingleButton = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  margin-bottom: 15px;
`;

const SelectButton = styled.button`
  margin: 0 6px;
  border-radius: 5px;
  height: 30px;
  max-width: 90px;
  background-color: #dfdfdf;
  border-color: transparent;
  font-family: 'Nanum JungHagSaeng';
  font-size: 18px;
`;

const TeamSubTitle = styled.div`
  margin-top: 4%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 8px;
  position: absolute;
  top: 30px;
  left: 30px;
`;

const CountButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 6px;
  border-radius: 5px;
  height: 27px;
  background-color: ${(props) => (props.isActive ? '#EB8888' : '#F6EEEE')};
  color: ${(props) => (props.isActive ? '#F6EEEE' : '#B79292')};
  border-color: transparent;
  font-family: 'Nanum JungHagSaeng';
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;
