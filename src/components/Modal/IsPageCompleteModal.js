import styled from "styled-components";
import { ReactComponent as ErrorChar } from "../../asset/svg/ErrorMessageCharacter.svg";
import { TextColorBinary } from "../../util/TextColorBinary";
import { theme } from "../../style/theme";
export const IsPageCompleteModal = (props) => {
  const { open, colse, header } = props;
  const BlackText = styled.text`
    color: black;
    font-size: 35px;
    font-family: "Nanum JungHagSaeng";
  `;
  const ColorText = styled.text`
    color: ${theme.pink};
    font-size: 35px;
    font-family: "Nanum JungHagSaeng";
  `;
  return;

  <div className={open ? "openMidal modal" : "modal"}>
    <div
      style={{
        border: "10px",
        height: "50%",
        width: "90%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ErrorChar></ErrorChar>
      <text>
        {" "}
        <BlackText>아직</BlackText>
        <ColorText>완료하지 않은 답변이</ColorText>
        <BlackText>이 있어요.</BlackText>
      </text>
      <text>모든 항목에 응답해 주세요.</text>
    </div>
  </div>;
};
