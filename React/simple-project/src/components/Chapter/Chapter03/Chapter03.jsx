/*
    컴포넌트 내부에서 변경이 가능한 데이터값을 관리해야 할 경우
    props는 불변객체기 때문에 건들면 안됨

    React에서 화면에 표시하는 데이터, 변화해야하는 값, 상태 등은 모두 State를 이용해서 관리함
    예시) 버튼을 클릭했는가? / 값이 null인가? / 모달창이 열렸는가? 에러가 발생했는가?
        숫자값이 증가/감소했는가? 문자값이 작성되었나? 배열에 요소가 추가? 객체가 생김?

    함수형 컴포넌트는 State를 관리하기 위해서 useState라는 Hook을 사용함

    Hook : react 16.8 버전부터 새롭게 추가된 기능
            React를 사용하면서 쓸 수 있는 유용한 함수들 (내장함수)
*/
import { useState } from "react";



const Chapter03 = () => {
    // let count = 0;

    const [count, setCount] = useState(0);   // <-- Hook
    // useState 호출 시 두 개의 반환 값이 존재하는데
    // [인자값으로 전달한 값이 대입되어 있는 변수, 변수값을 조작할 수 있는 setter]
    // state라는 것을 이용해서 값을 사용해야 한다고 머리속에 꼭 기억해두면 됨
    // userState는 반드시 호출할 때 인자값을 전달해야 함 --> 초기값
    // 문자, 숫자, 논리, 객체, 배열, NaN

    const onClickButton = () => {
        // count += 1;
        // console.log(count);

        setCount((count) => count + 1);
    };

    /*
        버튼을 클릭했을 때 setter 함수를 이용해서 state 값을 변경했더니
        화면을 새로고침 하지 않더라도 수치가 바뀌고 화면이 변경됨

        컴포넌트가 재렌더링 되었기 때문에 
        함수형 컴포넌트는 상태(state)가 변경될 때마다 처음부터 다시 수행됨
        
        React는 가상 DOM을 사용하여 변경된 부분만 실제 DOM에 반영
        => 이 과정을 재렌더링이라고 표현함

        state에 변동 생김 => 함수 컴포넌트 다시 실행 => 실제 DOM 가상 DOM 비교
            => 바뀐 부분만 다시 재렌더링 => state에 변동이 생김 => 함수 컴포넌트 다시 실행
        
        React의 재렌더링 조건

        1. setter를 이용한 state의 변경
        2. props값이 변경
        3. 재렌더링된 컴포넌트의 모든 하위 컴포넌트

        ※※ 주의 ※※ : state는 항상 setter를 이용해서 변경해야 하며 절대 값을 대입하면 안됨 !!!!

    */


    return (
        <>
            <h1>완전 중요한 친구</h1>
            <br />
            <h3>{ count }</h3>
            <button onClick={onClickButton}>클릭</button>
        </>
    );
};

export default Chapter03;