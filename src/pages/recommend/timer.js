import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ClockSeparator } from '../../asset/svg/MainClockSeparator.svg';
import { ReactComponent as MainClock } from '../../asset/svg/MainClock.svg';

export default function Timer() {
  const [remainingTime, setRemainingTime] = useState([]);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const deadline = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        0,
        0,
      ); // 밤 11시로 설정

      const diff = deadline - now;
      const hours = Math.floor(diff / (1000 * 60 * 60))
        .toString()
        .padStart(2, '0');
      const minutes = (Math.floor(diff / (1000 * 60)) % 60)
        .toString()
        .padStart(2, '0');
      const seconds = Math.floor((diff / 1000) % 60)
        .toString()
        .padStart(2, '0');

      setRemainingTime([hours, minutes, seconds]);
    };

    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <Content>
        업데이트까지 <SMainClock />
        <Clock>
          <Box>{remainingTime[0]}</Box>
          <SSeparator />
          <Box>{remainingTime[1]}</Box>
          <SSeparator />
          <Box>{remainingTime[2]}</Box>
        </Clock>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 5% auto;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Clock = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100px;
`;

const Box = styled.div`
  width: 17px;
  height: 17px;
  padding: 6px 4px 3px 4px;
  border-radius: 5px;
  color: #eb8888;
  background-color: #ffd8d8;
`;

const SMainClock = styled(MainClock)`
  margin: 7px;
`;

const SSeparator = styled(ClockSeparator)`
  margin: 0 2px;
`;
