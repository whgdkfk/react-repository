// AJAX 요청을 보내서 응답을 받아올 것
// 주제 : 유저정보 => 회원들의 정보
import styled from "styled-components";

const StyleDiv = styled.div`
    width: 400px;
    height: 140px;
    border: 1px solid lightgray;
    display: inline-block;
    margin: 40px;
    background-color: ${(props) => (props.color ? props.color : "white")};
`;

/* 함수형 컴포넌트 */
const MemberInfo = (props) => {
    console.log(props);
    const { memberId, memberName, email, color } = props.member;
    // const member = props.member;
    // console.log(memberId, memberName, email);

    return (
        <>
            <StyleDiv color={color}>
                <h4>아이디 : {memberId}</h4>
                <strong>이름 : {memberName}</strong>
                <p>이메일 : {email}</p>
            </StyleDiv>
        </>
    )
};


const Chapter02 = () => {

    const response = [
        {
            memberId : "admin",
            memberName : "짱구",
            email : "jjang9@naver.com",
            color : "lightyellow",
        },
        {
            memberId : "user01",
            memberName : "철수",
            email : "ironwater@naver.com",
            color : "lightblue",
        },
        {
            memberId : "user02",
            memberName : "유리",
            email : "class@naver.com",
        }
    ];

    return(
        <>
            {response ? (
              response.map((e) => 
                <MemberInfo member = {e} key={e.memberId} />)
            ) : (
                <div>조회결과가 존재하지 않습니다.</div>
            )}

            {/*
            <MemberInfo {...response[0]} />
            <MemberInfo {...response[1]} />
            <MemberInfo {...response[2]} />
            */}

            {/*
            <StyleDiv>
                <h4>아이디 : {response[0].memberId}</h4>
                <strong>이름 : {response[0].memberName}</strong>
                <p>이메일 : {response[0].email}</p>
            </StyleDiv>

            <StyleDiv>
                <h4>아이디 : {response[1].memberId}</h4>
                <strong>이름 : {response[1].memberName}</strong>
                <p>이메일 : {response[1].email}</p>
            </StyleDiv>

            <StyleDiv>
                <h4>아이디 : {response[2].memberId}</h4>
                <strong>이름 : {response[2].memberName}</strong>
                <p>이메일 : {response[2].email}</p>
            </StyleDiv>
            */}
        </>
    )

}

export default Chapter02;