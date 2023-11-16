import styled from "styled-components";

const Text3 = styled.div`position: relative;
line-height: 150%;
font-weight: 500;
`;
const Container5 = styled.div`border-radius: 8px;
background-color: var(--peach-96);
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
padding: 14px 18px;
`;
const Heading = styled.div`align-self: stretch;
position: relative;
line-height: 150%;
font-weight: 600;
`;
const P = styled.p`margin: 0;
`;
const Paragraph = styled.div`align-self: stretch;
flex: 1;
position: relative;
font-size: var(--font-size-lg);
line-height: 150%;
color: var(--grey-30);
`;
const TextContainer3 = styled.div`align-self: stretch;
height: 259px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: 10px;
font-size: 58px;
color: var(--grey-10);
`;
const SubContainer2 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: 20px;
`;
const Span2 = styled.span`
`;
const Span = styled.span`color: var(--purple-50);
`;
const Number1 = styled.b`position: relative;
line-height: 150%;
`;
const Text4 = styled.div`position: relative;
font-size: var(--font-size-lg);
line-height: 150%;
font-weight: 500;
color: var(--grey-30);
`;
const TextContainer4 = styled.div`display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
`;
const SubContainer3 = styled.div`align-self: stretch;
border-top: 1px solid var(--purple-50);
border-bottom: 1px solid var(--purple-50);
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: 20px 0px;
gap: 50px;
font-size: var(--font-size-29xl);
`;
const Container4 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: 60px;
`;
const Container3 = styled.div`width: 1200px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`;
const AboutSectionRoot = styled.div`position: relative;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: left;
font-size: 24px;
color: var(--grey-20);
font-family: var(--font-manrope);
margin-top: 100px;
`;


const AboutMe__HeroSection = () => {
    return (
        <AboutSectionRoot>
            <Container3>
                <Container4>
                    <SubContainer2>
                        <Container5>
                            <Text3>Добро пожаловать в мир захватывающей веб-разработки!</Text3>
                        </Container5>
                        <TextContainer3>
                            <Heading>Я Селихов Александр</Heading>
                            <Paragraph>
                                <P>{`Опытный веб-разработчик, преданный созданию функциональных и инновационных веб-сайтов. С моим глубоким пониманием технологий и страстью к программированию, я специализируюсь на создании динамических и отзывчивых веб-приложений. Я стремлюсь к совершенству в каждой детали и уделяю особое внимание оптимизации производительности и безопасности. `}</P>
                                <P>Я уверенно работаю с различными языками программирования и фреймворками, чтобы обеспечить гибкость и масштабируемость проектов. Готов помочь вам воплотить ваше видение в жизнь, создавая уникальные и привлекательные веб-сайты. Мой опыт и профессионализм позволят вам расширить ваше присутствие в Интернете и достичь ваших целей в онлайн-мире.</P>
                            </Paragraph>
                        </TextContainer3>
                    </SubContainer2>
                    <SubContainer3>
                        <TextContainer4>
                            <Number1>
                                <Span2>5</Span2>
                                <Span>+</Span>
                            </Number1>
                            <Text4>Завершенных проектов (commercial + pet)</Text4>
                        </TextContainer4>
                        <TextContainer4>
                            <Number1>
                                <Span2>01</Span2>
                                <Span>+</Span>
                            </Number1>
                            <Text4>Лет опыта работы</Text4>
                        </TextContainer4>
                    </SubContainer3>
                </Container4>
            </Container3>
        </AboutSectionRoot>);
};

export default AboutMe__HeroSection;