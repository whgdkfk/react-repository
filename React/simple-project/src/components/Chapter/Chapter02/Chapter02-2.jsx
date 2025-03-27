
const ChildComponent = (props) => {
    console.log(props);
    // props.name = props.name + 2;
    return (
        <>
            <p>조심할점</p>
            <p>공부하기</p>
        </>
    );
};

const Chapter02_2 = () => {

    /*
        주의할 점

        React의 함수 컴포넌트는 항상 Pure해야 하기 때문에 절대로 props값을 변경해서는 안됨

        ** React의 사용 목적 : 웹 애플리케이션의 U.I(User Interface) => MVC(V)
                                                                        필요한 값 입력받기
                                                                        요청 보내기
                                                                        요청 결과 출력
                                만들 용도로 사용
    */

    return(
        <>
            <ChildComponent name={1} age={15}/>
            <ChildComponent name={2} age={16}/>
        </>
    );
};

export default Chapter02_2;