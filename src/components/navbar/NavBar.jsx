import React, { useState } from 'react';
import styled from "styled-components";

import CustomNavLink from "../navlink/NavLink";
import CustomLink from "../link/Link";

import BurgerMenu from '../../assets/svg/icon/BurgerMenu.svg';
import CloseIcon from '../../assets/svg/icon/CloseIcon.svg';
import { Link } from 'react-router-dom';


const SelikhovAlexander = styled.div`position: relative;
font-weight: 600;
`;
const Icon1Root = styled.img`
@media (max-width:1200px){
    position: relative;
    width: 34px;
    height: 34px;
    overflow: hidden;
    flex-shrink: 0;
}
@media (min-width:1200px){
    display:none;
}
`;
const Text2 = styled.div`position: relative;
line-height: 150%;
font-weight: 500;
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
cursor: pointer;
`;
const Container1 = styled.div`display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
gap: 50px;
font-size: var(--font-size-lg);
color: var(--grey-20);

@media (max-width:1200px){
    display:none;
}
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

@media (max-width:1200px){
    position: relative;
    border-bottom: 1px solid var(--peach-85);
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 128px;
    text-align: left;
    font-size: 18px;
    color: var(--purple-50);
    font-family: var(--font-manrope);
}
@media (max-width:768px){
position: relative;
border-bottom: 1px solid var(--peach-85);
box-sizing: border-box;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 20px 36px;
text-align: left;
font-size: 18px;
color: var(--purple-50);
font-family: var(--font-manrope);
}
`;
const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen)
        document.body.style.overflow = 'hidden';
    };
    const closeModal = () => {
        setIsModalOpen(!isModalOpen);
        document.body.style.overflow = 'auto';
    };

    const handleDownload = () => {
        // Создаем ссылку для скачивания
        const link = document.createElement('a');
        link.href = '../../assets/files/CV-SelikhovAlexander.pdf'; // Укажи путь к твоему PDF файлу
        link.download = 'CV-Selikhov_Alexander.pdf'; // Укажи имя файла для скачивания
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                    <a href='/#about-me' style={{ "text-decoration": "none", "color": "currentColor" }}>Обо мне</a>
                    <a href='/#skills' style={{ "text-decoration": "none", "color": "currentColor" }}>Мои навыки</a>
                    <a href='/#projects' style={{ "text-decoration": "none", "color": "currentColor" }}>Проекты</a>
                </ButtonsContainer1>
                <Button1 onClick={handleDownload}>
                    <Text2>Скачать резюме</Text2>
                </Button1>
            </Container1>
            <Icon1Root alt="" src={BurgerMenu} onClick={openModal} />
            {isModalOpen &&
                <ModalPage>
                    <ModalpageRoot>
                        <Modalpagecontainer>
                            <Modalpagecontainer1>
                                <HeroiconsOutlinexMarkWrapper >
                                    <HeroiconsOutlinexMark1 alt="" src={CloseIcon} onClick={closeModal} />
                                </HeroiconsOutlinexMarkWrapper>
                            </Modalpagecontainer1>
                            <Modalpagecontainer2>
                                <div onClick={closeModal}>
                                    <CustomLink
                                        to={"/"}
                                    >
                                        <ModalpageselikhovAlexander>Selikhov Alexander.</ModalpageselikhovAlexander>
                                    </CustomLink>
                                </div>
                                <Modalpagesubcontainer>
                                    <ModalpagebuttonsContainer>
                                        <div onClick={closeModal}><CustomNavLink to='/' >Главная</CustomNavLink></div>
                                        <div onClick={closeModal}><a href='/#about-me' style={{ "text-decoration": "none", "color": "currentColor" }}>Обо мне</a></div>
                                        <div onClick={closeModal}><a href='/#skills' style={{ "text-decoration": "none", "color": "currentColor" }}>Мои навыки</a></div>
                                        <div onClick={closeModal}><a href='/#projects' style={{ "text-decoration": "none", "color": "currentColor" }}>Проекты</a></div>
                                    </ModalpagebuttonsContainer>
                                    <Modalpagebutton1 onClick={handleDownload}>
                                        <ModalpagetextButton>Скачать резюме</ModalpagetextButton>
                                    </Modalpagebutton1>
                                </Modalpagesubcontainer>
                            </Modalpagecontainer2>
                        </Modalpagecontainer>
                    </ModalpageRoot>
                </ModalPage>}
        </NavbarRoot>
    );
};
export default Navbar;

const HeroiconsOutlinexMark1 = styled.img`position: relative;
                    width: 24px;
                    height: 24px;
                    overflow: hidden;
                    flex-shrink: 0;
                    `;
const HeroiconsOutlinexMarkWrapper = styled.div`flex: 1;
                    overflow: hidden;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: var(--padding-3xs);
                    `;
const Modalpagecontainer1 = styled.div`align-self: stretch;
                    overflow: hidden;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    `;
const ModalpageselikhovAlexander = styled.div`position: relative;
                    font-weight: 600;
                    `;
const ModalpagetextButton = styled.div`position: relative;
                    line-height: 150%;
                    font-weight: 500;
                    `;
const ModalpagebuttonsContainer = styled.div`width: 180px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 30px;
                    `;
const Modalpagebutton1 = styled.div`border-radius: var(--br-5xs);
                    background-color: var(--purple-50);
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: 16px 18px;
                    color: var(--peach-99);
                    cursor: pointer;
                    `;
const Modalpagesubcontainer = styled.div`height: 290px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 50px;
                    font-size: var(--font-size-lg);
                    color: var(--grey-20);
                    overflow: hidden;
                    `;
const Modalpagecontainer2 = styled.div`align-self: stretch;
                    flex: 1;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 60px;
                    `;
const Modalpagecontainer = styled.div`align-self: stretch;
                    flex: 1;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    padding: var(--padding-3xs);
                    `;
const ModalpageRoot = styled.div`position: relative;
                    background-color: #eeebe5;
                    width: 100%;
                    height: 689px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    text-align: left;
                    font-size: 24px;
                    color: var(--purple-50);
                    font-family: var(--font-manrope);
                    `;
const ModalPage = styled.div`
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: var(--peach-92);
                    z-index: 100;
                    `;