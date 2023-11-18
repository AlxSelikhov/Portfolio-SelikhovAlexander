import './AboutMe__Timeline.style.css';

import styled from "styled-components";

import PurpleStar from '../assets/svg/icon/PurpleStar.svg';
import OrangeStar from '../assets/svg/icon/OrangeStar.svg';
import PinkStar from '../assets/svg/icon/PinkStar.svg';
import BlueStar from '../assets/svg/icon/BlueStar.svg';

import TipRight from '../assets/svg/icon/TipRight.svg';
import TipLeft from '../assets/svg/icon/TipLeft.svg';
import TipUp from '../assets/svg/icon/TipUp.svg';


const TimelineSection = () => {
    return (
        <>
            <div className="timelinesection">
                <div className="timelinesection1">
                    <div className="timelinesection-text-container">
                        <div className="heading">Основные вехи моей карьеры</div>
                    </div>
                    <div className="timelinesection-container">
                        <div className="sub-container">
                            <div className="progress-line-container">
                                <div className="progress-line-background" />
                                <div className="progress-line" />
                            </div>
                            <div className="container">
                                <div className="text-container">
                                    <div className="text">Now</div>
                                </div>
                                <div className="sub-container1">
                                    <div className="container1">
                                        <div className="sub-container2">
                                            <div className="paragraph">Продолжая свой путь роста и исследований, я расширяю свой набор навыков, вникая в новые технологии и тенденции</div>
                                            <div className="icon-container">
                                                <div className="icon">
                                                    <img className="group-child" alt="" src={PurpleStar} />
                                                </div>
                                            </div>
                                        </div>
                                        <img className="tip-icon" alt="" src={TipRight} />
                                    </div>
                                    <div className="navigator">
                                        <div className="navigator-child" />
                                    </div>
                                    <div className="text-container1">
                                        <div className="date-wrapper">
                                            <div className="date">Путь в web-разработку</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container2">
                                <div className="sub-container3">
                                    <div className="text-container2">
                                        <div className="date-container">
                                            <div className="date">Кадровое агентство Юнити</div>
                                        </div>
                                    </div>
                                    <div className="navigator">
                                        <div className="navigator-item" />
                                    </div>
                                    <div className="container3">
                                        <img className="tip-icon" alt="" src={TipLeft} />
                                        <div className="sub-container4">
                                            <div className="icon-container1">
                                                <div className="icon">
                                                    <img className="group-child" alt="" src={OrangeStar} />
                                                </div>
                                            </div>
                                            <div className="paragraph1">
                                                <p className="fullstack">
                                                    <b>Fullstack разработчик</b>
                                                </p>
                                                <p className="fullstack">&nbsp;</p>
                                                <p className="fullstack">Создал внутренний сайт мониторинга деятельности сотрудников для 3 отделов, что поспособствовало выявлению утерянных, необработанных заявок в CRM.Ускорилась обработка вакансий с 10+ до 2-6 дней;</p>
                                                <p className="fullstack">&nbsp;</p>
                                                <p className="fullstack">Создал страницу мониторинга дебетовой задолженности, благодаря которой сократились сроки задолженностей на десятки дней;</p>
                                                <p className="fullstack">&nbsp;</p>
                                                <p className="fullstack">Создается проект ведения финансовых моделей, которая автоматизирует и ускорит проверку и согласование финансовых моделей;</p>
                                                <p className="fullstack">&nbsp;</p>
                                                <p className="fullstack">Автоматизировал функционал отдела казначейства с помощью Power Query;</p>
                                                <p className="fullstack">&nbsp;</p>
                                                <p className="fullstack">Проверка и создание десяток моделей в месяц;</p>
                                                <p className="fullstack">&nbsp;</p>
                                                <p className="fullstack">Обучил директоров всех отделов работе в web-приложении для контроля сотрудников и планирования работы отдела;</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container4">
                                <div className="text-container">
                                    <div className="text">2022</div>
                                </div>
                                <div className="sub-container1">
                                    <div className="container1">
                                        <div className="sub-container4">
                                            <div className="paragraph">
                                                <p className="fullstack">
                                                    <b>Аналитик отдела реализации проекта интеграции с ЦПЭ (ГПХ)</b>
                                                </p>
                                                <p className="fullstack">
                                                    <b>&nbsp;</b>
                                                </p>
                                                <p className="fullstack">Разработал стандартную форму, позволяющие ускорить и упростить подписание соглашений о деятельности центров поддержки экспорта;</p>
                                                <p className="fullstack">&nbsp;</p>
                                                <p className="fullstack">Обеспечено повышение качества подготовки плановой и отчетной документации центров поддержки экспорта;</p>
                                                <p className="fullstack">&nbsp;</p>
                                                <p className="fullstack">Обучение двух стажеров;</p>
                                                <p className="fullstack">&nbsp;</p>
                                                <p className="fullstack">Созданные презентации дня защиты центров поддержки экспорта;</p>
                                                <p className="fullstack">&nbsp;</p>
                                                <p className="fullstack">Курирование деятельности 26 регионов поддержки экспорта;</p>
                                            </div>
                                            <div className="icon-container2">
                                                <div className="icon">
                                                    <img className="group-child" alt="" src={PinkStar} />
                                                </div>
                                            </div>
                                        </div>
                                        <img className="tip-icon" alt="" src={TipRight} />
                                    </div>
                                    <div className="navigator">
                                        <div className="navigator-inner" />
                                    </div>
                                    <div className="text-container1">
                                        <div className="date-wrapper">
                                            <div className="date">Российский экспортный центр</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-container">
                                    <div className="text">2021</div>
                                </div>
                            </div>
                        </div>
                        <div className="sub-container7">
                            <img className="tip-icon3" alt="" src={TipUp} />
                            <div className="sub-container8">
                                <div className="icon-container3">
                                    <div className="icon">
                                        <img className="group-child" alt="" src={BlueStar} />
                                    </div>
                                </div>
                                <div className="text-container6">
                                    <div className="heading-text-container6">Высшее образование (Бакалавр)</div>
                                    <div className="paragraph3">
                                        <p className="fullstack">Всероссийская академия внешней торговли, Москва</p>
                                        <p className="fullstack">Факультет международных финансов, Финансы и кредит</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TimelineRoot>
                <TimelineContainer2>
                    <TextContainer4>
                        <Heading>Основные вехи моей карьеры</Heading>
                    </TextContainer4>
                    <SubContainer9>
                        <ProgressLineContainer1>
                            <ProgressLineBackground1 />
                            <ProgressLine1 />
                        </ProgressLineContainer1>
                        <Container8>
                            <TextContainer5>
                                <Text3>Сейчас</Text3>
                            </TextContainer5>
                            <SubContainer10>
                                <DateWrapper>
                                    <Date1>Путь в web-разработку</Date1>
                                </DateWrapper>
                                <Container9>
                                    <TipIcon4 alt="" src={TipUp} />
                                    <SubContainer11>
                                        <IconContainer8>
                                            <Icon>
                                                <GroupChild alt="" src={PurpleStar} />
                                            </Icon>
                                        </IconContainer8>
                                        <Paragraph>Продолжая свой путь роста и исследований, я расширяю свой набор навыков, вникая в новые технологии и тенденции</Paragraph>
                                    </SubContainer11>
                                    <Navigator>
                                        <NavigatorChild />
                                    </Navigator>
                                </Container9>
                            </SubContainer10>
                        </Container8>
                        <Container10>
                            <SubContainer12>
                                <DateWrapper>
                                    <Date1>Кадровое агентство Юнити</Date1>
                                </DateWrapper>
                                <Container9>
                                    <TipIcon4 alt="" src={TipUp} />
                                    <SubContainer11>
                                        <IconContainer9>
                                            <Icon>
                                                <GroupChild alt="" src={OrangeStar} />
                                            </Icon>
                                        </IconContainer9>
                                        <Paragraph1>
                                            <Fullstack>
                                                <Fullstack1>Fullstack разработчик</Fullstack1>
                                            </Fullstack>
                                            <Fullstack>&nbsp;</Fullstack>
                                            <Fullstack>Создал внутренний сайт мониторинга деятельности сотрудников для 3 отделов, что поспособствовало выявлению утерянных, необработанных заявок в CRM.Ускорилась обработка вакансий с 10+ до 2-6 дней;</Fullstack>
                                            <Fullstack>&nbsp;</Fullstack>
                                            <Fullstack>Создал страницу мониторинга дебетовой задолженности, благодаря которой сократились сроки задолженностей на десятки дней;</Fullstack>
                                            <Fullstack>&nbsp;</Fullstack>
                                            <Fullstack>Создается проект ведения финансовых моделей, которая автоматизирует и ускорит проверку и согласование финансовых моделей;</Fullstack>
                                            <Fullstack>&nbsp;</Fullstack>
                                            <Fullstack>Разработал frontend и backend внутреннего web-приложения на библиотеке dash (python);</Fullstack>
                                            <Fullstack>&nbsp;</Fullstack>
                                            <Fullstack>Автоматизировал функционал отдела казначейства с помощью Power Query;</Fullstack>
                                            <Fullstack>&nbsp;</Fullstack>
                                            <Fullstack>Проверка и создание десяток моделей в месяц</Fullstack>
                                            <Fullstack>&nbsp;</Fullstack>
                                            <Fullstack>Обучил директоров всех отделов работе в web-приложении для контроля сотрудников и планирования работы отдела;</Fullstack>
                                        </Paragraph1>
                                    </SubContainer11>
                                    <Navigator>
                                        <NavigatorItem />
                                    </Navigator>
                                </Container9>
                            </SubContainer12>
                        </Container10>
                        <Container12>
                            <TextContainer6>
                                <Text3>2022</Text3>
                            </TextContainer6>
                            <SubContainer10>
                                <DateWrapper>
                                    <Date1>Российский экспортный центр</Date1>
                                </DateWrapper>
                                <Container9>
                                    <TipIcon4 alt="" src={TipUp} />
                                    <SubContainer11>
                                        <IconContainer10>
                                            <Icon>
                                                <GroupChild alt="" src={PinkStar} />
                                            </Icon>
                                        </IconContainer10>
                                        <Paragraph>
                                            <Fullstack>
                                                <Fullstack1>Аналитик отдела реализации проекта интеграции с ЦПЭ (ГПХ)</Fullstack1>
                                            </Fullstack>
                                            <Fullstack>
                                                <Fullstack1>&nbsp;</Fullstack1>
                                            </Fullstack>
                                            <Fullstack>Разработал стандартную форму, позволяющие ускорить и упростить подписание соглашений о деятельности центров поддержки экспорта;</Fullstack>
                                            <Fullstack>&nbsp;</Fullstack>
                                            <Fullstack>Обеспечено повышение качества подготовки плановой и отчетной документации центров поддержки экспорта;</Fullstack>
                                            <Fullstack>&nbsp;</Fullstack>
                                            <Fullstack>Обучение двух стажеров— Созданные презентации дня защиты центров поддержки экспорта;</Fullstack>
                                            <Fullstack>&nbsp;</Fullstack>
                                            <Fullstack>Курирование деятельности 26 регионов поддержки экспорта;</Fullstack>
                                        </Paragraph>
                                    </SubContainer11>
                                    <Navigator>
                                        <NavigatorInner />
                                    </Navigator>
                                </Container9>
                            </SubContainer10>
                        </Container12>
                        <Container14>
                            <TextContainer6>
                                <Text3>2021</Text3>
                            </TextContainer6>
                            <SubContainer16>
                                <DateWrapper>
                                    <Date3>Высшее образование (Бакалавр)</Date3>
                                </DateWrapper>
                                <Container15>
                                    <TipIcon4 alt="" src={TipUp} />
                                    <SubContainer11>
                                        <IconContainer11>
                                            <Icon>
                                                <GroupChild alt="" src={BlueStar} />
                                            </Icon>
                                        </IconContainer11>
                                        <Paragraph1>
                                            <Fullstack>Всероссийская академия внешней торговли, Москва</Fullstack>
                                            <Fullstack>Факультет международных финансов, Финансы и кредит</Fullstack>
                                        </Paragraph1>
                                    </SubContainer11>
                                    <Navigator>
                                        <NavigatorChild1 />
                                    </Navigator>
                                </Container15>
                            </SubContainer16>
                        </Container14>
                    </SubContainer9>
                </TimelineContainer2>
            </TimelineRoot>
        </>
    );
};

export default TimelineSection;




const Heading = styled.div`align-self: stretch;
position: relative;
font-weight: 600;
`;
const TextContainer4 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
margin: 100px 0 60px 0;
`;
const ProgressLineBackground1 = styled.div`position: absolute;
margin: 0 !important;
height: 100%;
top: 0px;
bottom: 0px;
left: calc(50% - 1px);
background-color: var(--purple-90);
width: 2px;
z-index: 0;
`;
const ProgressLine1 = styled.div`position: relative;
background-color: var(--other-colors-purple);
width: 2px;
height: 382px;
z-index: 1;
`;
const ProgressLineContainer1 = styled.div`margin: 0 !important;
position: absolute;
height: calc(100% - 17px);
top: 0px;
bottom: 17px;
left: calc(50% - 30px);
width: 60px;
overflow: hidden;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
padding: 0px 30px;
box-sizing: border-box;
gap: 10px;
z-index: 0;
`;
const Text3 = styled.div`align-self: stretch;
position: relative;
line-height: 150%;
font-weight: 500;
`;
const TextContainer5 = styled.div`border-radius: var(--br-7xs);
background-color: var(--peach-96);
width: 88px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: var(--padding-3xs) 14px var(--padding-3xs) var(--padding-base);
box-sizing: border-box;
`;
const Date1 = styled.div`position: relative;
line-height: 146%;
font-weight: 600;
`;
const DateWrapper = styled.div`border-radius: var(--br-7xs);
background-color: var(--peach-96);
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-3xs) var(--padding-base);
margin-top: 60px;
`;
const TipIcon4 = styled.img`position: relative;
width: 23px;
height: 12px;
z-index: 0;
`;
const GroupChild = styled.img`
// position: absolute;
// height: 36.95%;
// width: 62.16%;
top: 2.27%;
right: 13.94%;
bottom: 60.78%;
left: 23.9%;
border-radius: var(--br-12xs);
// max-width: 100%;
// overflow: hidden;
max-height: 100%;
`;
const Icon = styled.div`position: relative;
width: 50px;
height: 50px;
overflow: hidden;
flex-shrink: 0;
`;
const IconContainer8 = styled.div`border-radius: var(--br-5xs);
background-color: var(--other-colors-purple);
box-shadow: 0px 0px 14px 4px rgba(255, 255, 255, 0.5) inset;
overflow: hidden;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-3xs);
`;
const Paragraph = styled.div`align-self: stretch;
position: relative;
line-height: 150%;
`;
const SubContainer11 = styled.div`align-self: stretch;
border-radius: var(--br-3xs);
background-color: var(--peach-96);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: var(--padding-21xl);
gap: var(--gap-5xl);
z-index: 1;
`;
const NavigatorChild = styled.div`position: relative;
border-radius: var(--br-81xl);
background-color: var(--other-colors-purple);
width: 10px;
height: 10px;
`;
const Navigator = styled.div`margin: 0 !important;
position: absolute;
top: -3px;
left: calc(50% - 17px);
border-radius: var(--br-81xl);
background-color: var(--absolute-white);
border: 4px solid var(--peach-96);
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-5xs);
z-index: 2;
`;
const Container9 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
position: relative;
text-align: center;
color: var(--grey-20);
`;
const SubContainer10 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: var(--gap-11xl);
text-align: left;
font-size: var(--font-size-sm);
color: var(--grey-30);
`;
const Container8 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: var(--gap-21xl);
z-index: 1;
`;
const IconContainer9 = styled.div`border-radius: var(--br-5xs);
background-color: var(--other-colors-orange);
box-shadow: 0px 0px 14px 4px rgba(255, 255, 255, 0.5) inset;
overflow: hidden;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-3xs);
`;
const Fullstack1 = styled.b`
`;
const Fullstack = styled.p`margin: 0;
`;
const Paragraph1 = styled.div`align-self: stretch;
position: relative;
`;
const NavigatorItem = styled.div`position: relative;
border-radius: var(--br-81xl);
background-color: var(--other-colors-orange);
width: 10px;
height: 10px;
`;
const SubContainer12 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: var(--gap-11xl);
`;
const Container10 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
z-index: 2;
text-align: left;
font-size: var(--font-size-sm);
color: var(--grey-30);
`;
const TextContainer6 = styled.div`border-radius: var(--br-7xs);
background-color: var(--peach-96);
width: 88px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: var(--padding-3xs) var(--padding-base);
box-sizing: border-box;
margin-top: 60px;
`;
const IconContainer10 = styled.div`border-radius: var(--br-5xs);
background-color: var(--other-colors-pink);
box-shadow: 0px 0px 14px 4px rgba(255, 255, 255, 0.5) inset;
overflow: hidden;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-3xs);
`;
const NavigatorInner = styled.div`position: relative;
border-radius: var(--br-81xl);
background-color: var(--other-colors-pink);
width: 10px;
height: 10px;
`;
const Container12 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: var(--gap-21xl);
z-index: 3;
`;
const Date3 = styled.div`position: relative;
font-weight: 600;
`;
const IconContainer11 = styled.div`border-radius: var(--br-5xs);
background-color: var(--other-colors-blue);
box-shadow: 0px 0px 14px 4px rgba(255, 255, 255, 0.5) inset;
overflow: hidden;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-3xs);
`;
const NavigatorChild1 = styled.div`position: relative;
border-radius: var(--br-81xl);
background-color: var(--other-colors-blue);
width: 10px;
height: 10px;
`;
const Container15 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
position: relative;
text-align: center;
`;
const SubContainer16 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: var(--gap-11xl);
text-align: left;
font-size: var(--font-size-sm);
`;
const Container14 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: var(--gap-21xl);
z-index: 4;
`;
const SubContainer9 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
position: relative;
gap: var(--gap-41xl);
font-size: var(--font-size-base);
`;
const TimelineContainer2 = styled.div`width: 768px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: var(--gap-41xl);

@media(max-width:768px){
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-41xl);
}
`;
const TimelineRoot = styled.div`
position: relative;
width: 100%;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0px 128px;
box-sizing: border-box;
text-align: center;
font-size: 28px;
color: var(--grey-20);
font-family: var(--font-manrope);

@media(max-width:768px){
    position: relative;
width: 100%;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0px 35px;
box-sizing: border-box;
text-align: center;
font-size: 28px;
color: var(--grey-20);
font-family: var(--font-manrope);
}

@media (min-width:1200px){
    display:none;
}
`;
