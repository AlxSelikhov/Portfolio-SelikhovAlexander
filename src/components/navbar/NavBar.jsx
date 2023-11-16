import styled from "styled-components";
import CustomNavLink from "../navlink/NavLink";
import CustomLink from "../link/Link";

const SelikhovAlexander = styled.div`position: relative;
font-weight: 600;
`;
const Text2 = styled.div`position: relative;
line-height: 150%;
font-weight: 500;
`;
const Button = styled.div`border-radius: var(--br-5xs);
background-color: var(--peach-95);
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: 14px 24px;
`;
const ButtonsContainer1 = styled.div`display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
gap: 30px;
`;
const Button1 = styled.div`border-radius: var(--br-5xs);
background-color: var(--purple-50);
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
padding: 16px 18px;
color: var(--peach-99);
`;
const Container1 = styled.div`display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
gap: 50px;
font-size: var(--font-size-lg);
color: var(--grey-20);
`;
const NavbarRoot = styled.div`position: relative;
border-bottom: 1px solid var(--peach-85);
box-sizing: border-box;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 20px 120px;
text-align: left;
font-size: 24px;
color: var(--purple-50);
font-family: var(--font-manrope);
`;
const Navbar = () => {
    return (
        <NavbarRoot>
            <CustomLink
                to={"/"}
            >
                <SelikhovAlexander>
                    Selikhov Alexander.
                </SelikhovAlexander>
            </CustomLink>
            <Container1>
                <ButtonsContainer1>
                    <CustomNavLink to='/'>Главная</CustomNavLink>
                    <CustomNavLink to='/aboutme'>Обо мне</CustomNavLink>
                    <CustomNavLink to='/portfolio'>Портфолио</CustomNavLink>
                </ButtonsContainer1>
                <Button1>
                    <Text2>Скачать резюме</Text2>
                </Button1>
            </Container1>
        </NavbarRoot>
    );
};
export default Navbar;