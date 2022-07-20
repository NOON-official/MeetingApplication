import styled from 'styled-components'
import AreaGyenggiNorth from './AreaGyenggiNorth'
import AreaGyenggiSouth from './AreaGyenggiSouth'
import AreaSeoulSouth from './AreaSeoulSouth'
import AreaSeoulNorth from './AreaSeoulNorth'
const Container = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  height: 60%;
  left: 50%;
  margin: 0 0 0 -150.5px;
  position: absolute;
  top: 10%;
  width: 301px;
`
const ChooseArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 10%;
  margin-bottom: 10px;
  border-bottom: 2px solid #c9c9c9;
  font-weight: 900;
  font-size: 15px;
`
const AreaText = (props) => {
  return <div style={{ marginBottom: '7px' }}>{props.text}</div>
}
const AreaContainer = () => {
  return (
    <Container>
      <ChooseArea>
        <AreaText text={'지역선택'}></AreaText>
      </ChooseArea>
      <AreaGyenggiSouth></AreaGyenggiSouth>
      <AreaGyenggiNorth> </AreaGyenggiNorth>
      <AreaSeoulSouth></AreaSeoulSouth>
      <AreaSeoulNorth></AreaSeoulNorth>
    </Container>
  )
}

export default AreaContainer
