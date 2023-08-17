import styled from 'styled-components';
import { ReactComponent as Star } from '../../asset/svg/Star.svg';

function CountingStar(n) {
  if (n === 1) {
    return (
      <div>
        <Star />
      </div>
    );
  }
  if (n === 2) {
    return (
      <div>
        <Star />
        <Star />
      </div>
    );
  }
  if (n === 3) {
    return (
      <div>
        <Star />
        <Star />
        <Star />
      </div>
    );
  }
  if (n === 4) {
    return (
      <div>
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    );
  }
  if (n === 5) {
    return (
      <div>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    );
  }
}

function SliderBox({ gender, age, star, text }) {
  const count = Number(star);
  return (
    <Box>
      <Top>
        <Tag>{gender}</Tag>
        <Tag>3:3</Tag>
        <Tag>20대 {age}</Tag>
      </Top>
      <StarBox>{CountingStar(count)}</StarBox>
      <Text>
        {text.split('\n').map((txt) => {
          return (
            <span key={txt}>
              {txt}
              <br />
            </span>
          );
        })}
      </Text>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 18px 15px;
  height: 140px;
  background: #ffffff;
  border: 1px solid #ffe3e3;
  box-shadow: 2px 2px 10px 5px rgba(216, 216, 216, 0.25);
  border-radius: 8px;
`;

const Top = styled.div`
  margin-top: 5px;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Tag = styled.div`
  padding: 3px 10px;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #eb8888;
  height: 23px;
  background: #ffeded;
  border-radius: 15px;
`;

const StarBox = styled.div`
  width: 80%;
  margin-top: 8px;
  margin-left: 5px;
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

export default SliderBox;
