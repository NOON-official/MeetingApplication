import { Button } from 'antd';
import styled from 'styled-components';

const PrimaryButton = styled(Button)`
  height: auto;
  padding: 10px 50px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.pink};
  border: none;
  box-shadow: none;

  > span {
    font-weight: 400;
    font-size: 18px;
    color: white;
  }
`;

export default PrimaryButton;
