import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as PinkDownArrow } from '../asset/svg/PinkDownArrow.svg';
import { ReactComponent as PinkUpArrow } from '../asset/svg/PinkUpArrow.svg';

export default function AreaAccordion(props) {
  const [isShown, setIsShown] = useState(false);

  const handleToggle = () => {
    setIsShown((prev) => !prev);
  };

  const [selected, setSelected] = useState([]);
  console.log(selected);
  return (
    <ChooseBox>
      <AreaButton onClick={handleToggle}>
        <AreaTitle>{props.title}</AreaTitle>
        {isShown ? (
          <PinkDownArrow style={{ color: 'f6eeee' }} />
        ) : (
          <PinkUpArrow style={{ color: 'f6eeee' }} />
        )}
      </AreaButton>
      {isShown ? (
        <MoreArea>
          {props.content.map((x) => {
            return (
              <Area
                key={x}
                onClick={() => {
                  if (selected.includes(x)) {
                    setSelected(selected.filter((a) => a !== x));
                    return;
                  }
                  setSelected([...selected, x]);
                }}
              >
                {x}
              </Area>
            );
          })}

          {props.option === 'hidden' ? null : (
            <AllArea
              onClick={() => {
                if (selected.length === 6) {
                  setSelected([]);
                  return;
                }
                setSelected(props.content);
              }}
            >
              모두 좋아요
            </AllArea>
          )}
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
