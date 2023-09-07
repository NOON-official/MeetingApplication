import styled from 'styled-components';

const AlcholContent = {
  1: '반 병',
  2: '한 병',
  3: '한 병 반',
  4: '두 병',
  5: '술고래',
};

export default function DrinkText({ drink }) {
  return (
    <Content>
      {AlcholContent[drink]} (Lv.{drink})
    </Content>
  );
}

const Content = styled.div`
  font-weight: 500;
`;
