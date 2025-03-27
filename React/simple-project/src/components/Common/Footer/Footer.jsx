import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterText>© 2025 LSM. All rights reserved.</FooterText>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
  width: 100%; 
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: lightgreen;
  color: #6c757d;
  font-size: 14px;
  font-family: 'Pretendard';
  border-top: 1px solid #dee2e6;
`;

const FooterText = styled.p`
  margin: 0;
`;
