import styled from 'styled-components';

/**
 * mx: margin x축
 * my: margin y축
 */
const Section = styled.section`
  margin: ${({ my }) => my || '0px'} ${({ mx }) => mx || '20px'};
`;

export default Section;
