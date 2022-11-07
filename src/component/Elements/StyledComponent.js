import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: ${(props) => props.position || 'absolute'};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform || 'translate(-50%, 0)'};
  background-color: ${(props) => props.bg};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-width: ${(props) => props.border_width};
  border-radius: ${(props) => props.border};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justify_content};
  flex-direction: ${(props) => props.direction};
  border-color: ${(props) => props.border_color};
  overflow-y: ${(props) => props.overflow || 'hidden'};
  overflow-x: hidden;
  border-style: ${(props) => props.border_style};
  max-width: ${(props) => props.max_width};
  max-height: ${(props) => props.max_height};
  min-height: ${(props) => props.minHeight};
  min-width: ${(props)=>props.min_width};
  border-bottom: ${(props) => props.borderBottom};
  align-items: ${(props) => props.align_item};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.text_align};
  border-top: ${(props) => props.border_top};
  font-family: ${(props) => props.font};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  letter-spacing: ${(props) => props.letter_spacing};
  overflow:${(props)=>props.border_overflow};
  font-weight: ${(props)=> props.weight};
  padding: ${(props)=> props.padding};
`;

export const SubTitle = styled.div`
  font-size: ${(props) => props.size || '12px'};
  position: ${(props) => props.position || 'absolute'};
  max-width: 768px;

  width: ${(props) => props.width || 'auto'};
  top: ${(props) => props.top};
  left: ${(props) => props.left || '50%'};
  transform: ${props=>props.transform ||"translate(-50%, 0)"};
  color: ${(props) => props.color || '#777777'};
  font-family: ${(props) => props.font || 'var(--font-family)'};
  font-weight: ${(props) => props.weight || '700'};
  line-height: ${(props) => props.line_height || '20px'};
  margin: ${props=> props.margin};
  display: flex;
  justify-content: ${props=> props.justify_content};
  align-items: ${props=> props.align_item};
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.display || 'row'};
  justify-content: space-around;
  position: ${(props) => props.position || 'absolute'};
  top: ${(props) => props.top};
  left: ${props=> props.left||"50%"};
  transform: ${props=>props.transform ||"translate(-50%, 0)"};
  max-width: 375px;
  width: 100%;
  z-index: ${(props) => props.z_index};
`;

export const SliderBox = styled.div`
  width: 90%;
  max-width: 350px;
  position: ${(props)=> props.position ||"absolute"};
  top: ${(props) => props.top};
  left: ${(props)=> props.left ||"50%"};
  transform: ${(props)=> props.transform ||"translate(-50%, 0)"};
  display: ${props=> props.display};
  flex-direction: ${props=> props.direction};
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'column'};
  color: 'black';
  justify-content: ${props=> props.justify_content||"center"};
  align-items: center;
  white-space: pre-wrap;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
`;
export const ContentsAge = styled.div`
  display: flex;
  flex-direction: column;
  color: 'black';
`;
export const SelectButton = styled.button`
  margin-right: 5px;
  border-radius: 14px;
  height: 40px;
  width: ${(props) => props.width || '50%'};
  max-width: 162px;
  background-color: ${(props) => props.background_color || 'transparent'};
  color: ${(props) => props.color};
  border-color: transparent;
  font-family: var(--font-family);
  font-size: 18px;
`;
//Basic
export const Container = styled.div`
  height: ${(props) => props.height || '87%'};
  width: ${(props) => props.width || '100%'};

  position: absolute;
  overflow-x: hidden;
  overflow-y: ${(props) => props.overflow};
  background-color: ${(props) => props.bg || '#F5F5F5'};
`;
export const MobileBox = styled.div`
  max-width: 400px;
  width: 100%;
  height: ${(props) => props.height || '100%'};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  justify-content: ${props=> props.justify_content};
  font-family: var(--font);
  left: 50%;
  transform: translate(-50%, 0);
  overflow-x: hidden;
  overflow-y: ${(props) => props.overflow || 'hidden'};
`;
export const Title = styled.div`
  font-size: var(--font-size-title);
  font-weight: bold;
  position: absolute;
  max-width: 768px;
  width: 100%;
  top: ${(props) => props.top || '0%'};
  left: 50%;
  transform: translate(-50%, 0);
`;
export const StyledText = styled.text`
  position: ${(props) => props.position || 'absolute'};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size || '18px'};
  font-family: ${(props) => props.font || 'var(--font-family)'};
  font-style: normal;
  line-height: ${(props) => props.line};
  font-weight: ${(props) => props.fontWeight};
  align-items: ${(props) => props.align_item};
  justify-content: ${(props) => props.justify_content};
  margin: ${(props) => props.margin};
  word-break: ${(props) => props.word_break};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: ${(props) => props.transform};
  text-align: ${(props)=>props.text_align||"start"};

  z-index: 1;
`;

export const StyledButton = styled.button`
  position: ${(props) => props.position || 'absolute'};
  top: ${(props) => props.top};
  left: ${(props) => props.left || '50%'};
  font-family: var(--font-family);
  font-size: ${(props) => props.size || 'var(--font-size-button)'};
  transform: ${(props)=>props.transform||"translate(-50%, 0)"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: var(--round-borderradious);
  background-color: var(--color-ClickedPink);
  color: ${(props) => props.color || 'white'};
  line-height: var(--line-height-button);
  border-color: var(--color-gray);
`;

export const BoxContainer = styled.div`

  border-radius: 20px;
  height: 244px;
  padding: 0 10px 10px 10px;
  overflow: scroll;
`;
export const TableContainer = styled.div`

height: 244px;
overflow: scroll;
`;

