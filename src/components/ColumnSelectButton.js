import styled from 'styled-components';
import { useState } from 'react';

export default function ColumnSelectButton(props) {
  const { area, state, selectedArea } = props;

  return (
    <Column>
      {area.map((data) => (
        <AreaButton selectedArea={selectedArea} data={data} state={state} />
      ))}
    </Column>
  );
}
function AreaButton(props) {
  const { data, state, selectedArea } = props;
  const [clicked, setClicked] = useState(false);
  return (
    <Button
      color={clicked ? 'white' : null}
      backgroundcolor={clicked ? '#EB8888' : null}
      onClick={() => {
        setClicked(!clicked);

        state([...selectedArea, data]);
      }}
      key={data}
    >
      {' '}
      {data}
    </Button>
  );
}
const Column = styled.div`
  width: 100%;
  height: auto;
`;
const Button = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundcolor || '#F6EEEE'};
  color: ${(props) => props.color || '#B79292'};
`;
