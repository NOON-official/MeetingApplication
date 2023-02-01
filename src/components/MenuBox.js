import { Button } from 'antd';
import styled from 'styled-components';

export const MenuItem = styled.div``;

export const LinkButton = styled(Button).attrs({ type: 'text', block: true })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 4px 8px;
  > span {
    font-weight: 600;
    font-size: 14px;
    color: ${(props) => props.theme.grey};
  }
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border: 1px solid #f1ecec;
  border-radius: 10px;
  margin-top: 20px;
  padding: 4px 20px;

  > ${MenuItem} {
    border-bottom: 3px solid #f8f3f3;
    :last-child {
      border: none;
    }
  }
`;

export default MenuBox;
