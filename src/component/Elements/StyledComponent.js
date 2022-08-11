import { PropaneSharp } from '@mui/icons-material'
import styled from 'styled-components'
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
  border-bottom: ${(props) => props.borderBottom || '0'};
  align-items: ${(props) => props.align_item};
`
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
`
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.display || 'row'};
  justify-content: space-around;
  position: ${(props) => props.position || 'absolute'};
  top: ${(props) => props.top};
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 375px;
  width: 100%;
  z-index: ${(props) => props.z_index};
`
export const SliderBox = styled.div`
  width: 90%;
  max-width: 350px;
  position: absolute;
  top: ${(props) => props.top};
  left: 50%;
  transform: translate(-50%, 0);
`
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
`
export const ContentsAge = styled.div`
  display: flex;
  flex-direction: column;
  color: 'black';
`
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
`
//Basic
export const Container = styled.div`
  height: ${(props) => props.height || '92%'};
  width: ${(props) => props.width || '100%'};

  position: absolute;
  overflow-x: hidden;
  overflow-y: ${(props) => props.overflow};
  background-color: ${(props) => props.bg || '#F5F5F5'};
`
export const MobileBox = styled.div`
  max-width: 768px;
  width: 100%;
  height: ${(props) => props.height || '100%'};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  font-family: var(--font);
  left: 50%;
  transform: translate(-50%, 0);
  overflow-x: hidden;
  overflow-y: ${(props) => props.overflow || 'hidden'};
`
export const Title = styled.div`
  font-size: var(--font-size-title);
  font-weight: bold;
  position: absolute;
  max-width: 768px;
  width: 100%;
  top: ${(props) => props.top || '0%'};
  left: 50%;
  transform: translate(-50%, 0);
`
export const StyledText = styled.text`
  position: ${(props) => props.position || 'absolute'};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-family: ${(props) => props.font || 'var(--font-family)'};
  font-style: normal;
  line-height: ${(props) => props.line};
  font-weight: ${(props) => props.fontWeight};
  align-items: ${(props) => props.align_item};
  justify-content: ${(props) => props.justify_content};
`
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
`
