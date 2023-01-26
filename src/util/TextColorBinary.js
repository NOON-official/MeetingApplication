import styled from 'styled-components';

function TextColorBinary(props) {
  const firstText = props.text.substring(0, props.num);
  const secondText = props.text.substring(props.num);
  const FirstText = styled.span`
    color: ${props.colorFirst};
    font-size: 35px;
    font-family: 'Nanum JungHagSaeng';
    font-weight: 400;
  `;
  const SecondText = styled.span`
    color: ${props.colorSecond};
    font-size: 35px;
    font-family: 'Nanum JungHagSaeng';
    font-weight: 400;
  `;
  return (
    <span>
      {' '}
      <FirstText>{firstText}</FirstText> <SecondText>{secondText}</SecondText>
    </span>
  );
}

export default TextColorBinary;
