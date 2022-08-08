import styled from 'styled-components'

export const SubTitle = styled.div`
  font-size: var(--font-size-subtitle);
  font-weight: 100;
  position: absolute;
  max-width: 768px;
  width: 100%;
  top: ${(props) => props.top};
  left: ${(props) => props.left || '50%'};
  transform: translate(-50%, 0);
`
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.display || 'row'};
  justify-content: space-between;
  position: absolute;
  top: ${(props) => props.top};
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 250px;
  width: 100%;
`
export const SliderBox = styled.div`
  width: 200px;
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
  border-radius: 34px;
  height: 40px;
  width: ${(props) => props.width || '50%'};
  background-color: ${(props) => props.background_color || 'transparent'};
  color: ${(props) => props.color};
  border-color: var(--color-gray);
  font-family: var(--font);
  font-size: var(--font-size-button);
`
//Basic
export const Container = styled.div`
  height: 80%;
  width: 100%;
  position: absolute;
  overflow-x: hidden;
  overflow-y: ${(props) => props.overflow};
`
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
