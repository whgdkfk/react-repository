import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navi = useNavigate();

    return (
        <NavContainer>
            <NavLink onClick={() => navi("/")}>Home</NavLink>
            <NavLink onClick={() => navi("/chap01")}>Chapter01</NavLink>
            <NavLink onClick={() => navi("/chap02")}>Chapter02</NavLink>
            <NavLink onClick={() => navi("/chap03")}>Chapter03</NavLink>
            <NavLink onClick={() => navi("/memo")}>오후실습</NavLink>
            <NavLink onClick={() => navi("/foods")}>부산맛집보기</NavLink>
        </NavContainer>
    );
};

export default Nav;

const NavContainer = styled.div`
  align-items: center;
  padding: 10px 0;
  background-color: #f8f9fa;
`;

const NavLink = styled.span`
  font-size: 18px;
  color: #333;
  cursor: pointer;
  padding: 0px 20px;

  &:hover {
    color: #007bff;
  }
`;
