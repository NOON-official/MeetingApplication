import styled from 'styled-components';
export const StyledDiv = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform || 'translate(-50%, 0)'};
  background-color: ${(props) => props.bg};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.border};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justify_content};
  flex-direction: ${(props) => props.direction};
  border-color: ${(props) => props.border_color};
`;
export const SubTitle = styled.div`
  font-size: ${(props) => props.size || '14px'};
  position: absolute;
  max-width: 768px;
  width: 100%;
  top: ${(props) => props.top};
  left: ${(props) => props.left || '50%'};
  transform: translate(-50%, 0);
  color: ${(props) => props.color || '#777777'};
  font-family: ${(props) => props.font || 'var(--font-family)'};
  font-weight: ${(props) => props.weight || '700'};
  line-height: ${(props) => props.line_height || '20px'};
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.display || 'row'};
  justify-content: space-around;
  position: absolute;
  top: ${(props) => props.top};
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 375px;
  width: 100%;
`;
export const SliderBox = styled.div`
  width: 90%;
  max-width: 350px;
  position: absolute;
  top: ${(props) => props.top};
  left: 50%;
  transform: translate(-50%, 0);
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'column'};
  color: 'black';
  justify-content: center;
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
  height: 45px;
  width: ${(props) => props.width || '50%'};
  max-width: 162px;
  background-color: ${(props) => props.background_color || 'transparent'};
  color: ${(props) => props.color};
  border-color: transparent;
  font-family: var(--font-family);
  font-size: 20px;
`;
//Basic
export const Container = styled.div`
  height: ${(props) => props.height || '92%'};
  width: ${(props) => props.width || '100%'};
  position: absolute;
  overflow-x: hidden;
  overflow-y: ${(props) => props.overflow};
  background-color: ${(props) => props.bg || '#F5F5F5'};
`;
export const MobileBox = styled.div`
  max-width: 768px;
  width: 100%;
  height: ${(props) => props.height || '100%'};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  font-family: var(--font);
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
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-family: ${(props) => props.font || 'var(--font-family)'};
  font-style: normal;
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.line};
`;
export const StyledButton = styled.button`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: 50%;
  font-family: var(--font-family);
  font-size: ${(props) => props.size};
  transform: translate(-50%, 0);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
  background-color: var(--color-ClickedPink);
  color: ${(props) => props.color || 'white'};
`;
