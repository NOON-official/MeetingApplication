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

  const selectButton = (member, title) => {
    return (
      <SingleButton>
        <CheckIcon onClick={() => handleCount(member)}>
          {changeCount.includes(member) ? <SelectCheck /> : <NotSelectCheck />}
        </CheckIcon>
        <CountButton
          isActive={changeCount.includes(member)}
          onClick={() => handleCount(member)}
        >
          {title}
        </CountButton>
      </SingleButton>
    );
  };

  const selectAllButton = (member1, member2) => {
    return (
      <SingleButton>
        <CheckIcon onClick={() => handleAllSelected(member1, member2)}>
          {changeCount.includes(member1) && changeCount.includes(member2) ? (
            <SelectCheck />
          ) : (
            <NotSelectCheck />
          )}
        </CheckIcon>
        <CountButton
          isActive={
            changeCount.includes(member1) && changeCount.includes(member2)
          }
          onClick={() => handleAllSelected(member1, member2)}
        >
          모두 가능해요
        </CountButton>
      </SingleButton>
    );
  };

  const ourTeamButton = (title) => {
    return (
      <SingleButton>
        <OurTeamCheck />
        <SelectButton>{title}</SelectButton>
        <TeamSubTitle>현재 우리 팀 인원이에요</TeamSubTitle>
      </SingleButton>
    );
  };

  return (
    <>
      {count === 2 && (
        <ButtonBox>
          {ourTeamButton('2:2 미팅')}
          {selectButton(3, '3:3 미팅')}
          {selectButton(4, '4:4 미팅')}
          {selectAllButton(3, 4)}
        </ButtonBox>
      )}

      {count === 3 && (
        <ButtonBox>
          {selectButton(2, '2:2 미팅')}
          {ourTeamButton('3:3 미팅')}
          {selectButton(4, '4:4 미팅')}
          {selectAllButton(2, 4)}
        </ButtonBox>
      )}

      {count === 4 && (
        <ButtonBox>
          {selectButton(2, '2:2 미팅')}
          {selectButton(3, '3:3 미팅')}
          {ourTeamButton('4:4 미팅')}
          {selectAllButton(2, 3)}
        </ButtonBox>
      )}
    </>
  );
}

const ButtonBox = styled.div`
  width: 90%;
  margin-left: 20px;
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
  margin-bottom: 35px;
`;

const CheckIcon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const SelectButton = styled.button`
  margin: 0 6px;
  border-radius: 5px;
  height: 30px;
  max-width: 120px;
  background-color: #dfdfdf;
  border-color: transparent;
  color: #555555;
  font-family: 'SCoreDream';
  font-size: 16px;
`;

const TeamSubTitle = styled.div`
  margin: 5% 0;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 12px;
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
  font-family: 'SCoreDream';
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;
