import { useState } from "react";

const Chapter03Input = () => {
    //  사용자가 값을 입력할 때마다 적절한 메시지를 화면 상에 출력

    const [message, setMessage] = useState("값을 입력해주세요.");
    const [text, setText] = useState("");

    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setText(e.target.value);
        
        if(e.target.value.length > 10){
            setMessage("너무 많은 글자를 입력하셨습니다.");
        } else{
            setMessage("값을 입력해주세요!");
        }
    };

    return(
        <>
            <h1>값을 입력받는 경우가 많음</h1>
            <br />
            <br />
            <input type="text" onChange={inputTextHandler} />
            <br /><br />

            <span>입력값 : {text}</span> <br />
            <span>안내 메시지 : {message}</span>

        </>
    );
};

export default Chapter03Input;