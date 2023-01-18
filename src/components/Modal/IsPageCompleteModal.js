import { Button } from 'antd';
import styled from 'styled-components';
import { ReactComponent as ErrorChar } from '../../asset/svg/ErrorMessageCharacter.svg';
import theme from '../../style/theme';

const BlackText = styled.text`
  color: black;
  font-size: 35px;
  font-family: 'Nanum JungHagSaeng';
`;
const ColorText = styled.text`
  color: ${theme.pink};
  font-size: 35px;
  font-family: 'Nanum JungHagSaeng';
`;
export default function IsPageCompleteModal(props) {
  const { open, colse, setModal } = props;

  return (
    <div className={open ? 'openMidal modal' : 'modal'}>
      {open ? (
        <div
          style={{
            transform: 'translate(-50%, -50%)',
            position: 'fixed',

            top: '50%',
            left: '50%',

            borderRadius: '10px',
            height: '50%',
            width: '90%',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ErrorChar />
          <text>
            {' '}
            <BlackText>아직</BlackText>
            <ColorText>완료하지 않은 답변이</ColorText>
            <BlackText>이 있어요.</BlackText>
          </text>
          <text>모든 항목에 응답해 주세요.</text>
          <Button style={{}} onClick={() => setModal(false)}>
            닫기
          </Button>
        </div>
      ) : null}
    </div>
  );
}
