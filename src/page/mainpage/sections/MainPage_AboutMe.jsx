import styled from "styled-components";
import table from '../../../assets/png/image/Table.png';

const Image3Icon = styled.img`width: 350px;
position: relative;
height: 350px;
object-fit: cover;

@media (max-width:1200px){
    display:none
}

@media (max-width:768px){

}
`;

const Heading = styled.div`align-self: stretch;
position: relative;
line-height: 150%;
font-weight: 600;
`;
const P = styled.p`margin: 0;
`;
const Paragraph = styled.div`align-self: stretch;
position: relative;
font-size: 18px;
line-height: 150%;
color: var(--grey-30);
text-align: left;
`;
const TextContainer = styled.div`flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 12px;
`;
const Container1 = styled.div`
flex: 1;
border-radius: 12px;
background-color: var(--peach-96);
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
padding: 40px 16px;
gap: 40px;

@media (max-width:768px){
    flex: none;
    width: 320px;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
}

`;
const AboutmeRoot = styled.div`width: 100%;
position: relative;
overflow: hidden;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 0px 120px;
box-sizing: border-box;
text-align: center;
font-size: 48px;
color: var(--grey-20);
font-family: var(--font-manrope);
margin: 100px 0;
`;


const AboutMe = () => {
    return (
        <AboutmeRoot id="about-me">
            <Container1>
                <Image3Icon alt="" src={table} />
                <TextContainer>
                    <Heading>Обо мне</Heading>
                    <Paragraph>
                        <P>Я креативный разработчик из Москвы, и мне нравится создавать потрясающие веб-сайты. Мой опыт заключается в преобразовании дизайна в полнофункциональные веб-сайты, используя при этом свои навыки разработки для улучшения и настройки их функций. Моя цель - создавать визуально привлекательные, удобные для пользователя веб-сайты, которые обеспечивают беспрепятственный просмотр.</P>
                        <P>&nbsp;</P>
                        <P>В свободное время я люблю заниматься спортом, изучать нутрициологию, создавать свои pet-проекты.</P>
                    </Paragraph>
                </TextContainer>
            </Container1>
        </AboutmeRoot>);
};

export default AboutMe;
