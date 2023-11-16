import styled from "styled-components";

import Skill1 from '../../../assets/svg/icon/Skills1.svg';
import Skill2 from '../../../assets/svg/icon/Skills2.svg';
import Skill3 from '../../../assets/svg/icon/Skills3.svg';
import Skill4 from '../../../assets/png/image/Skills4.png';
import Skill5 from '../../../assets/svg/icon/Skills5.svg';


const HeadingContainer = styled.div`
width: 100%;
position: relative;
font-size: 48px;
line-height: 150%;
font-weight: 600;
font-family: var(--font-manrope);
color: var(--grey-20);
text-align: center;
display: inline-block;

@media (max-width: 1200px){
    // width: 100%;
    // position: relative;
    // font-size: 48px;
    // line-height: 150%;
    // font-weight: 600;
    // font-family: var(--font-manrope);
    // color: var(--grey-20);
    // text-align: center;
    // display: inline-block;
}
`;
const ParagraphContainer = styled.div`
width: 100%;
position: relative;
font-size: 18px;
line-height: 150%;
font-family: var(--font-manrope);
color: var(--grey-30);
text-align: center;
display: inline-block;

@media (max-width: 1200px){
    // width: 100%;
    // position: relative;
    // font-size: 16px;
    // line-height: 150%;
    // font-family: var(--font-manrope);
    // color: var(--grey-30);
    // text-align: center;
    // display: inline-block;
}
`;
const Heading = styled.div`align-self: stretch;
position: relative;
line-height: 150%;
font-weight: 600;

@media (max-width: 1200px){
    align-self: stretch;
    position: relative;
    line-height: 150%;
    font-weight: 600;
}
`;
const Paragraph = styled.div`align-self: stretch;
position: relative;
font-size: var(--font-size-lg);
line-height: 150%;
color: var(--grey-30);

@media (max-width: 1200px){
width: 100%;
position: relative;
font-size: 18px;
line-height: 150%;
font-family: var(--font-manrope);
color: var(--grey-30);
text-align: center;
display: inline-block;
}
`;
const TextContainer6 = styled.div`
align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 0px 300px;
gap: 6px;
@media (max-width: 1200px){
    padding: 0px 100px;
}
`;
const Icon4 = styled.img`position: relative;
width: 45px;
height: 45px;
overflow: hidden;
flex-shrink: 0;

@media (max-width: 1200px){
    position: relative;
    width: 45px;
    height: 45px;
    overflow: hidden;
    flex-shrink: 0;
}
`;
const IconContainer5 = styled.div`border-radius: var(--br-5xs);
background-color: var(--purple-50);
box-shadow: 0px 0px 14px 4px rgba(255, 255, 255, 0.5) inset;
overflow: hidden;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-base);

@media (max-width: 1200px){
    border-radius: var(--br-5xs);
    background-color: var(--purple-50);
    box-shadow: 0px 0px 14px 4px rgba(255, 255, 255, 0.5) inset;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base);
}
`;
const TextContainer7 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: var(--gap-3xs);
`;
const Card = styled.div`flex: 1;
border-radius: var(--br-xs);
background-color: var(--peach-96);
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: var(--padding-31xl);
gap: var(--gap-11xl);
`;
const Card1 = styled.div`flex: 1;
border-radius: var(--br-xs);
background-color: var(--peach-96);
height: 361px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: var(--padding-31xl);
box-sizing: border-box;
gap: var(--gap-11xl);
`;
const SubContainer2 = styled.div`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
gap: var(--gap-11xl);

@media (max-width: 1200px){
flex-direction: column;
}
`;
const Frontend = styled.p`margin: 0;
`;
const Paragraph3 = styled.div`align-self: stretch;
position: relative;
font-size: var(--font-size-lg);
line-height: 150%;
color: var(--grey-30);
white-space: pre-wrap;

`;
const Card2 = styled.div`align-self: stretch;
flex: 1;
border-radius: var(--br-xs);
background-color: var(--peach-96);
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: var(--padding-31xl);
gap: var(--gap-11xl);
`;
const Image1Icon1 = styled.img`position: relative;
width: 43.85px;
height: 45px;
object-fit: cover;

@media (max-width: 1200px){
    position: relative;
    width: 43.85px;
    height: 45px;
    object-fit: cover;
}
`;
const SubContainer3 = styled.div`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-11xl);

@media (max-width: 1200px){
flex-direction: column;
}
`;
const Container3 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-11xl);
font-size: var(--font-size-5xl);

@media (max-width: 1200px){
    width: 768px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-11xl);
    font-size: var(--font-size-5xl);
}
`;
const Container2 = styled.div`width: 1198px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 80px;


@media (max-width: 1200px){
    width: 767px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 80px;
}
`;
const SkillsSectionRoot = styled.div`position: relative;
width: 100%;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0px 120px;
box-sizing: border-box;
text-align: center;
font-size: 48px;
color: var(--grey-20);
font-family: var(--font-manrope);
margin-top: 100px;

@media (max-width:1200px){
position: relative;
width: 100%;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
font-size: 48px;
color: var(--grey-20);
font-family: var(--font-manrope);
margin-top: 100px;
}
`;


const SkillsSection = () => {
    return (
        <SkillsSectionRoot>
            <Container2>
                <TextContainer6>
                    <HeadingContainer>Мои Навыки</HeadingContainer>
                    <ParagraphContainer>Как frontend разработчик, я обладаю широким спектром навыков и экспертных знаний, чтобы превратить ваши идеи в уникальные и интуитивно понятные веб-приложения.</ParagraphContainer>
                </TextContainer6>
                <Container3>
                    <SubContainer2>
                        <Card>
                            <IconContainer5>
                                <Icon4 alt="" src={Skill1} />
                            </IconContainer5>
                            <TextContainer7>
                                <Heading>Принципы frontend разработки</Heading>
                                <Paragraph>Владение основными принципами frontend разработки, такими как HTML-верстка, CSS-стилизация, JavaScript-интерактивность и оптимизация пользовательского интерфейса.</Paragraph>
                            </TextContainer7>
                        </Card>
                        <Card1>
                            <IconContainer5>
                                <Icon4 alt="" src={Skill2} />
                            </IconContainer5>
                            <TextContainer7>
                                <Heading>Адаптивный дизайн</Heading>
                                <Paragraph>Мои знания  позволяют создавать адаптивные интерфейсы, которые легко функционируют на различных устройствах .</Paragraph>
                            </TextContainer7>
                        </Card1>
                    </SubContainer2>
                    <SubContainer3>
                        <Card2>
                            <IconContainer5>
                                <Icon4 alt="" src={Skill3} />
                            </IconContainer5>
                            <TextContainer7>
                                <Heading>Языки программирования</Heading>
                                <Paragraph3>
                                    <Frontend>Frontend  : JS, Typescript, HTML, CSS</Frontend>
                                    <Frontend>Backend:  Python</Frontend>
                                </Paragraph3>
                            </TextContainer7>
                        </Card2>
                        <Card2>
                            <IconContainer5>
                                <Image1Icon1 alt="" src={Skill4} />
                            </IconContainer5>
                            <TextContainer7>
                                <Heading>Библиотеки</Heading>
                                <Paragraph>
                                    <Frontend>{`Frontend: React.js, Axios, React-Router; `}</Frontend>
                                    <Frontend>Backend: FastAPI, Dash, Pundas, Numpy;</Frontend>
                                </Paragraph>
                            </TextContainer7>
                        </Card2>
                        <Card2>
                            <IconContainer5>
                                <Icon4 alt="" src={Skill5} />
                            </IconContainer5>
                            <TextContainer7>
                                <Heading>UI-библиотеки</Heading>
                                <Paragraph>
                                    <Frontend>Ant Design, MUI,</Frontend>
                                    <Frontend>Styled components</Frontend>
                                </Paragraph>
                            </TextContainer7>
                        </Card2>
                    </SubContainer3>
                </Container3>
            </Container2>
        </SkillsSectionRoot>



    );
};

export default SkillsSection;