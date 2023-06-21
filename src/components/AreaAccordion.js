import styled from 'styled-components';
import { ReactComponent as PinkDownArrow } from '../asset/svg/PinkDownArrow.svg';
import { ReactComponent as PinkUpArrow } from '../asset/svg/PinkUpArrow.svg';

export default function AreaAccordion(props) {
  const {
    id,
    title,
    content,
    selectedArea,
    setSelectedArea,
    openCity,
    setOpenCity,
  } = props;

  const isOpen = openCity === id;

  const isAllSelected =
    selectedArea.area.length !== 0 &&
    selectedArea.area.every((value, idx) => value === content[idx]);

  const handleCity = () => {
    setOpenCity(id);
  };

  const handleArea = (x) => {
    if (selectedArea.city === id && selectedArea.area.includes(x)) {
      setSelectedArea({
        city: id,
        area: selectedArea.area.filter((area) => area !== x).sort(),
      });
    } else {
      setSelectedArea({
        city: id,
        area: [...selectedArea.area, x].sort(),
      });
    }
  };

  const selectAllAreas = () => {
    if (selectedArea.area === content) {
      setSelectedArea({ city: id, area: [] });
      return;
    }
    setSelectedArea({ city: id, area: content });
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
                isActive={selectedArea.area.includes(x)}
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
  max-height: 420px;
  display: flex;
  flex-direction: column;
`;

const AreaButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 22px;
  margin-top: 5%;
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
  margin: 10px auto;
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
