import styled from "styled-components";

import EmailIcon from '../../assets/svg/icon/EmailIcon.svg';
import LocationIcon from '../../assets/svg/icon/LocationIcon.svg';
import TelegramImage from '../../assets/png/image/TelegramImage.png';
import CustomLink from "../link/Link";

const Logo = styled.div`position: relative;
font-weight: 600;
z-index: 0;
`;
const Image2Icon1 = styled.img`position: relative;
width: 24px;
height: 24px;
object-fit: cover;
`;
const Button = styled.div`border-radius: var(--br-5xs);
background-color: var(--purple-50);
box-shadow: 0px 0px 14px 4px rgba(255, 255, 255, 0.5) inset;
overflow: hidden;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: 12px;
`;
const ButtonsContainer2 = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
z-index: 1;

@media (max-width:1200px){
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
`;
const TextButton3 = styled.div`
position: relative;
line-height: 150%;
font-weight: 500;

@media (max-width:768px){
font-size: 14px;
}
`;
const ButtonsContainer3 = styled.div`margin: 0 !important;
position: absolute;
top: calc(50% - 13px);
left: calc(50% - 152px);
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-11xl);
z-index: 2;
font-size: var(--font-size-lg);
color: var(--grey-20);

@media (max-width:1200px){
top: 0;
left: 0;
position: relative;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 30px;
text-align: left;
// font-size: var(--font-size-lg);
color: var(--grey-20);
font-family: var(--font-manrope);
}
`;
const Container2 = styled.div`align-self: stretch;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
position: relative;

@media (max-width:1200px){
align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 25px;
// position: static;
}
`;
const Icon2 = styled.img`position: relative;
width: 24px;
height: 24px;
overflow: hidden;
flex-shrink: 0;
`;
const Button1 = styled.div`border-radius: var(--br-5xs);
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
gap: var(--gap-5xs);
`;
const ContainerChild = styled.div`align-self: stretch;
position: relative;
border-right: 1px solid var(--peach-85);
box-sizing: border-box;
width: 1px;
`;
const Container3 = styled.div`border-radius: var(--br-5xs);
border: 1px solid var(--peach-85);
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: 24px 32px;
gap: 40px;
font-size: var(--font-size-lg);
color: var(--grey-30);

@media (max-width:1200px){
display: none;
}
`;
const Text5 = styled.div`position: relative;
font-size: 16px;
line-height: 150%;
color: var(--grey-50);
text-align: center;
`;
const FooterRoot = styled.div`position: relative;
border-top: 1px solid var(--peach-85);
box-sizing: border-box;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 60px 120px 20px;
gap: var(--gap-11xl);
text-align: left;
font-size: 24px;
color: var(--purple-50);
font-family: var(--font-manrope);

@media (max-width:1200px){
    position: relative;
    border-top: 1px solid var(--peach-85);
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 128px;
    gap: var(--gap-11xl);
    text-align: left;
    font-size: 24px;
    color: var(--purple-50);
    font-family: var(--font-manrope);
}
@media (max-width:768px){
    position: relative;
    border-top: 1px solid var(--peach-85);
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 38px;
    gap: var(--gap-11xl);
    text-align: left;
    font-size: 24px;
    color: var(--purple-50);
    font-family: var(--font-manrope);
}
`;


const Footer = () => {
    return (
        <FooterRoot>
            <Container2>
                <CustomLink>
                    <Logo>Selikhov Alexander.</Logo>
                </CustomLink>
                <ButtonsContainer2>
                    <CustomLink to="https://web.telegram.org/k/#@alxbisanpy">
                        <Button>
                            <Image2Icon1 alt="" src={TelegramImage} />
                        </Button>
                    </CustomLink>
                </ButtonsContainer2>
                <ButtonsContainer3>
                    <CustomLink to="/"><TextButton3>Главная</TextButton3></CustomLink>
                    <CustomLink to="/aboutme"><TextButton3>Обо мне</TextButton3></CustomLink>
                    <CustomLink to="/portfolio"><TextButton3>Портфолио</TextButton3></CustomLink>
                </ButtonsContainer3>
            </Container2>
            <Container3>
                <Button1>
                    <Icon2 alt="" src={EmailIcon} />
                    <TextButton3>alxselikhov.job@gmail.com</TextButton3>
                </Button1>
                <ContainerChild />
                <Button1>
                    <Icon2 alt="" src={LocationIcon} />
                    <TextButton3>Москва</TextButton3>
                </Button1>
            </Container3>
            <Text5>Copyright © 2023 Selikhov Alexander. All rights reserved.</Text5>
        </FooterRoot>);
};

export default Footer;
