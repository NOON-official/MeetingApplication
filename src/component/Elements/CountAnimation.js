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
      color="#EB8888"
      top="82%"
      left="35%"
      transform="translate(-50%, 0)"
      letter_spacing="3px"
      height="25px"
      width="300px"
      display="flex"
      justify_content="end"
    >
      {counter(props.end)}팀이 당신을 기다리고 있어요
    </StyledDiv>
  );
};

export default Counter;
