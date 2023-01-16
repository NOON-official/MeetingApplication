import styled from 'styled-components';

function TextColorBinary(props) {
  const firstText = props.text.substring(0, props.num);
  const secondText = props.text.substring(props.num);
  const FirstText = styled.text`
    color: ${props.colorFirst};
    font-size: 35px;
    font-family: 'Nanum JungHagSaeng';
  `;
  const SecondText = styled.text`
    color: ${props.colorSecond};
    font-size: 35px;
    font-family: 'Nanum JungHagSaeng';
  `;
  return (
    <text>
      {' '}
      <FirstText>{firstText}</FirstText> <SecondText>{secondText}</SecondText>
    </text>
  );
}

export default TextColorBinary;
