/* eslint-disable react/function-component-definition */
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const CounterBox = (props) => {
  function Counter(end = props.end, start = 0) {
    const [count, setCount] = useState(start);

    useEffect(() => {
      let currentNumber = end;
      const counter = setInterval(() => {
        setCount(Math.ceil(end - currentNumber));

        if (currentNumber < 1) {
          clearInterval(counter);
        }
        const step = currentNumber / 30;
        currentNumber -= step;
      }, 20);
    }, [end, start]);

    return count;
  }
  const memberCount = `${Counter() || 0}`.padStart(4, '0');
  Counter();
  return (
    <UserCountText>
      <CountBox>{memberCount[0]}</CountBox>
      <CountBox>{memberCount[1]}</CountBox>
      <CountBox>{memberCount[2]}</CountBox>
      <CountBox>{memberCount[3]}</CountBox>
    </UserCountText>
  );
};
const UserCountText = styled.div`
  position: absolute;
  top: 7.5%;
  right: 25%;
  display: flex;
`;

const CountBox = styled.span`
  position: relative;
  width: 8px;
  display: inline-block;
  border: 0.3px solid rgba(197, 200, 206, 0.5);
  border-radius: 20px;
  padding: 0.5px;
  margin-left: 0.5px;
  font-size: 13px;
  background-color: white;
`;
export default CounterBox;
