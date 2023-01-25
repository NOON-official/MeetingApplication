import styled from 'styled-components';
import theme from '../../style/theme';

const BasicContainer = styled.div`
  background-color: ${theme.background};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export default BasicContainer;
