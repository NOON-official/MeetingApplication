import styled from "styled-components"
import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Fab } from "@mui/material";
import Link from "@mui/material/Link";
import CharactorContainer from "../Characters/CharactorContainer";
const Container= styled.div`
    left: 0;
    overflow: scroll;
    overflow-x:hidden;
    position: absolute;
    top: 10%;
    width: 100%;
    height: 75%;
    padding: 0;
        display: block;
`
const Title=styled.div`
 top: 30px;
    font-size: 18px;
    font-weight: bold;
    height: 27px;
    left: calc(50% - 175px);
    margin: 0;
    color: #000;
    
    font-style: normal;
    letter-spacing: -.015em;
    line-height: 149.8%;
    position: absolute;
    text-align: center;
    width: 350px;
`
const Contents= styled.div`
    top: 80%;
    font-size: 18px;
    font-weight: 400;
    height: 20px;
    left: calc(50% - 175px);
    margin: 0;
    color: #000;
    
    font-style: normal;
    letter-spacing: -.015em;
    line-height: 149.8%;
    position: absolute;
    text-align: center;
    width: 350px;
`
const Warning= styled.div`
color: red;
`
const Modals= styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function ModalComedy() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} >개그맨</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            개그맨은 어떤 사람인가요?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            남다른 입담을 자랑하여 상대의 마음을 흔들어요.
            하지만 주의하세요. 당신의 개그본능은 미팅을 성공적으로 이끌지만 상대방에게 너무 가벼운 이미지를 남길 수 있어요.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
function ModalModerator() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>사회자</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            사회자는 어떤 사람인가요?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            어색한 분위기를 풀어주는 미팅의 진행자에요.
            당신은 모르는 사람들과의 대화를 이끌어 나가고 상대방의 마음을 녹여줘요.
            적절한 발언권을 부여하여 미팅을 주도할 수 있어요.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
function ModalFace() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>배우</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            배우는 어떤 사람인가요?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            출중한 외모로 상대를 매혹시켜요.
            당신의 무기는 얼굴이에요. 바라만 보고 있어도 웃음이 나고 상대를 기분좋게 해줍니다.
            미팅에서 당신은 팀원들의 견제 대상이에요.
            하지만 주의하세요. 당신의 외모만 믿고 가만히 앉아있으면 상대방이 흥미를 잃을 수 있어요!
            <Warning>주의! 주위에 물어볼 것 </Warning>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
function ModalNerd() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>깍두기</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            깍두기는 어떤 사람인가요?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            당신은 너드미를 소유하고 있어요.
            당신은 말주변이 없고 처음본 상대에게 어색함을 느끼며 출중한 외모를 가지지 않았어요.
            하지만 이러한 당신의 순수한 모습이 상대에게 매력적으로 다가올 수 있어요.
            <Warning>주의! 너무 많은 깍두기는 매칭률을 낮춰요!</Warning>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
const Body4=()=>{
  return(

  <Container>
      <Title>우리 팀원을 소개해요</Title>
      <CharactorContainer></CharactorContainer>
      
      <Contents>우리팀은 <Fab>개그맨</Fab><Fab>배우</Fab><Fab>사회자</Fab><Fab>깍두기</Fab>으로 구성되어 있어요 
        
   </Contents>
    
</Container>
)
}

export default Body4