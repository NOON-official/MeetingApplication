// props = intro.lenth
export function introTextAreaComment(textLength){
    console.log("f",textLength)
    if (textLength<10){
        return "최소 글자수 10자"
    }
   else if (textLength<20){
    console.log("it")
        return "10글자만 더 쓰면 매칭률이 올라가요!"
    }
    else if (textLength<40){
        return "벌써 상대방이 좋아할 것 같아요"
    }
    else if (textLength<70){
        return "이렇게까지 길게 쓰다니 상대가 홀딱 반하겠는데요!!"
    }
    else if (textLength<151){
        return "너 마음에 든다."
    }
    else {
       return  "아름아 돌아와~~~"
    }
}