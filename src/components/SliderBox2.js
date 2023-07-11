import styled from 'styled-components';
import Award from '../asset/img/Award.png';

function SliderBox2({ rank, text }) {
  return (
    <Box>
      <Top>
        <img src={Award} />
        <Tag>{rank}위</Tag>
      </Top>
      <Text>
        {text.split('\n').map((txt) => (
          <span key={txt}>
            {txt}
            <br />
          </span>
        ))}
      </Text>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px 15px 10px 15px;
  height: 165px;
  background: #ffffff;
  border: 1px solid #ffe3e3;
  box-shadow: 2px 2px 10px 5px rgba(216, 216, 216, 0.25);
  border-radius: 8px;
`;

const Top = styled.div`
  margin-top: 3px;
  width: 80%;
  display: flex;
`;

const Tag = styled.div`
  margin-left: 8px;
  padding: 3px 10px;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #eb8888;
  height: 23px;
  background: #ffeded;
  border-radius: 15px;
`;

const Text = styled.p`
  min-height: 80px;
  margin-top: 8px;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  color: #4a4a4a;
  white-space: pre-wrap;
`;

export default SliderBox2;
