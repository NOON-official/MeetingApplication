import Wants from '../SelectWants/Wants';
//import CircularSlider from '@fseehawer/react-circular-slider';
import { ReactComponent as Character } from '../../Asset/page9/Character.svg';
import Drink from '../TeamMate/Drink';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';

const Body9 = () => {
  return (
    <Container>
      <MobileBox>
      <StyledDiv display="flex" direction="column" top="2%" width="90%" height="15%" left="50%">
          {/* HeaderBox*/}
          <StyledDiv
            position="static"
            display="flex"
            direction="column"
            transform="0"
            width="100%"
            margin="5px 0 0 10px"
          >
            <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0" width="100%">
              <StyledText position=" static" size="0.8em" color="#F49393">
                미팅의 분위기
              </StyledText>
              <StyledText position=" static" size="0.8em">
                는
              </StyledText>
            </StyledDiv>
            <StyledDiv position="static" display="flex" direction="row" transform="0" width="100%">
              {/* TitleBox*/}
              <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0">
                {/* TextTitle*/}

                <StyledText position=" static" size="0.8em">
                  어땠으면 좋겠어요?
                </StyledText>
              </StyledDiv>
              <StyledDiv
                position="static"
                transform="0"
                direction="row"
                size="20px"
                justify_content="center"
                align_item="center"
                margin=" 10px 0 0 10px"
              >
                {/*TextNumber*/}
                <StyledText position="static" weight="400" size="0.8em" font="Nanum JungHagSaeng" color="#BBBBBB">
                  8/9
                </StyledText>
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>
          </StyledDiv>
        <Wants></Wants>
        <StyledDiv top="63%" height="15%" width="105%" display="flex" justify_content="center" align_item="center"left="50%">
        <Drink ></Drink>
        </StyledDiv>
        
       {/**  <StyledDiv top="47%" height="30%" width="100%" display="flex" justify_content="center" align_item="center"left="50%">
        <CircularSlider
        width="140"
        height="140"
            label=" "
            min={0}
            labelFontSize='24px'
            valueFontSize='20px'
            labelColor="#B79292"
            knobColor="#eb8888"
            progressColorFrom="#F6EEEE"
            progressColorTo="#eb8888"
            progressSize={10}
            trackColor="#eeeeee"
            trackSize={10}
            data={["소주 반병","소주 한병","소주 한병반","소주 두병","그 이상"]} //...
            dataIndex={5}
        />
        </StyledDiv>
       */}
        <StyledDiv
          display="flex"
          justify_content="flex-end"
          align_item="flex-end"
          top="80%"
          height="auto"
          width="100%"
          left="40%"
          margin
        >
          <Character />
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body9;
