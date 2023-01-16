import styled from "styled-components";
export const TextColorBinary = (props) => {
  let firstText = props.text.substring(0, props.num);
  let secondText = props.text.substring(props.num);
  const FirstText = styled.text`
    color: ${props.colorFirst};
    font-size: 35px;
    font-family: "Nanum JungHagSaeng";
  `;
  const SecondText = styled.text`
    color: ${props.colorSecond};
    font-size: 35px;
    font-family: "Nanum JungHagSaeng";
  `;
  return (
    <text>
      {" "}
      <FirstText>{firstText}</FirstText> <SecondText>{secondText}</SecondText>
    </text>
  );
};
