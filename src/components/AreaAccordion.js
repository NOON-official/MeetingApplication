import styled from 'styled-components';
import { ReactComponent as PinkDownArrow } from '../asset/svg/PinkDownArrow.svg';
import { ReactComponent as PinkUpArrow } from '../asset/svg/PinkUpArrow.svg';

export default function AreaAccordion(props) {
  const {
    id,
    title,
    content,
    selectCity,
    selectArea,
    setSelectArea,
    setSelectCity,
    openCity,
    setOpenCity,
  } = props;

  const isOpen = openCity === id;
  const isAllSelected = content.every((x) => selectArea.includes(x));

  const handleCity = () => {
    setOpenCity(id);
  };

  const handleArea = (x) => {
    setSelectCity(id);
    if (selectCity === id && selectArea?.includes(x)) {
      setSelectArea(selectArea?.filter((a) => x !== a).sort());
      return;
    }
    if (selectCity !== id) {
      setSelectArea([x]);
    } else {
      setSelectArea([...selectArea, x].sort());
    }
  };

  const selectAllAreas = () => {
    setSelectCity(id);
    if (selectArea === content) {
      setSelectArea([]);
      return;
    }
    setSelectArea(content);
  };

  return (
    <ChooseBox>
      <AreaButton onClick={handleCity}>
        <AreaTitle>{title}</AreaTitle>
        {isOpen ? (
          <PinkDownArrow style={{ color: 'f6eeee' }} />
        ) : (
          <PinkUpArrow style={{ color: 'f6eeee' }} />
        )}
      </AreaButton>
      {isOpen ? (
        <MoreArea>
          {content.map((x) => {
            return (
              <Area
                key={x}
                isActive={selectArea?.includes(x)}
                onClick={() => handleArea(x)}
              >
                {x}
              </Area>
            );
          })}

          <AllArea isActive={isAllSelected} onClick={selectAllAreas}>
            모두 좋아요
          </AllArea>
        </MoreArea>
      ) : null}
    </ChooseBox>
  );
}

const ChooseBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const AreaButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 22px;
  margin-top: 3%;
  background: #f6eeee;
  border-radius: 10px;
  border: none;
  font-family: 'Nanum JungHagSaeng';
  width: 100%;
  height: 45px;
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => (props.isActive ? '#F6EEEE' : '#B79292')};
  background: ${(props) => (props.isActive ? '#EB8888' : 'F6EEEE')};
  &:hover {
    cursor: pointer;
  }
`;

const AreaTitle = styled.span`
  font-size: 20px;
  flex-grow: 2;
`;

const MoreArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 2% auto;
`;

const Area = styled.button`
  width: 45%;
  margin-bottom: 10px;
  background: #eeeeee;
  border-radius: 10px;
  border: none;
  font-family: 'Nanum JungHagSaeng';
  height: 45px;
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => (props.isActive ? '#F6EEEE' : '#B79292')};
  background: ${(props) => (props.isActive ? '#EB8888' : 'F6EEEE')};
  &:hover {
    cursor: pointer;
  }
`;

const AllArea = styled.button`
  width: 95%;
  background: #eeeeee;
  border-radius: 10px;
  border: none;
  font-family: 'Nanum JungHagSaeng';
  height: 45px;
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => (props.isActive ? '#F6EEEE' : '#B79292')};
  background: ${(props) => (props.isActive ? '#EB8888' : 'F6EEEE')};
  &:hover {
    cursor: pointer;
  }
`;
