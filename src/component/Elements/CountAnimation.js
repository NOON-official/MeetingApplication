import { useEffect, useState } from 'react';
import { StyledDiv } from './StyledComponent';
const Counter = (props) => {
  function counter(end = props.end, start = 0) {
    const [count, setCount] = useState(start);

    useEffect(() => {
      let currentNumber = end;
      const counter = setInterval(() => {
        setCount(Math.ceil(end - currentNumber));

        if (currentNumber < 1) {
          clearInterval(counter);
        }
        const step = currentNumber / 10;
        currentNumber -= step;
      }, 50);
    }, [end, start]);
    return count;
  }
  return (
    <StyledDiv
      font="Nanum JungHagSaeng"
      size="1rem"
      color="#515151"
      top="82%"
      left="43%"
      transform="translate(-50%, 0)"
      letter_spacing="9px"
      height="25px"
      width="250px"
      display="flex"
      justify_content="end"
    >
      {counter(props.end)}팀이 대기중이에요
    </StyledDiv>
  );
};

export default Counter;
