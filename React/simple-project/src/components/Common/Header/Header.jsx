import styled from "styled-components";
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <>
        <HeaderContainer>
            <Logo>Main</Logo>
{/*             <NavLinks>
                <StyledLink>게시판</StyledLink>
                <StyledLink>게시글 작성</StyledLink>
                <StyledLink>로그인</StyledLink>
                <StyledLink>회원가입</StyledLink>
            </NavLinks> */}

            <NavBar>
              <Nav />
            </NavBar>
        </HeaderContainer>
        </>
    );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  width: 100%; 
  padding: 20px 65px;
  align-items: center;
  justify-content: space-evenly;
  height: 70px;
  background-color: lightgreen;
  font-family: 'Pretendard';
  border-bottom: 1px solid #dee2e6;
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 50px;
`;

const StyledLink = styled.p`
  font-size: 18px;
  color: #000;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const NavBar = styled.div`
  display: block;
`;
