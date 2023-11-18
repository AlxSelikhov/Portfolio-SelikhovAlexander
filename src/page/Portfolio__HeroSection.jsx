import styled from "styled-components";

import BarsIcon from '../assets/svg/icon/Bars.svg';
import CheckIcon from '../assets/svg/icon/Check.svg';
import StarsIcon from '../assets/svg/icon/Stars.svg';

const Icon3 = styled.img`position: relative;
width: 34px;
height: 34px;
overflow: hidden;
flex-shrink: 0;
`;
const IconContainer1 = styled.div`border-radius: var(--br-5xs);
background-color: var(--purple-50);
box-shadow: 0px 0px 14px 4px rgba(255, 255, 255, 0.5) inset;
overflow: hidden;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-base);

@media (max-width:768px){
    border-radius: var(--br-5xs);
    background-color: var(--purple-50);
    box-shadow: 0px 0px 14px 4px rgba(255, 255, 255, 0.5) inset;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
}
`;
const Heading = styled.div`align-self: stretch;
position: relative;
line-height: 150%;
font-weight: 600;

@media (max-width:768px){
    align-self: stretch;
    position: relative;
    line-height: 150%;
    font-weight: 600;
}
`;
const Paragraph = styled.div`align-self: stretch;
position: relative;
font-size: 20px;
line-height: 150%;
color: var(--grey-30);

@media (max-width:768px){
    align-self: stretch;
    position: relative;
    font-size: 16px;
    line-height: 150%;
    color: var(--grey-30);
}
`;
const TextContainer1 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 8px;

@media (max-width:768px){
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
}
`;
const Text2 = styled.div`position: relative;
line-height: 150%;
font-weight: 500;

@media (max-width:768px){
position: relative;
font-size: 12px;
line-height: 150%;
font-weight: 500;
font-family: var(--font-manrope);
color: var(--grey-20);
text-align: left;
}
`;
const Container4 = styled.div`
border-radius: var(--br-5xs);
border: 1px solid var(--peach-90);
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
padding: var(--padding-xs) var(--padding-base);
gap: var(--gap-7xs);

@media (max-width:768px){
border-radius: var(--br-5xs);
border: 1px solid var(--peach-90);
box-sizing: border-box;
width: 227px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
padding: var(--padding-xs) var(--padding-base);
gap: var(--gap-7xs);
}
`;
const SubContainer1 = styled.div`align-self: stretch;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 20px;
text-align: left;
font-size: var(--font-size-lg);

@media (max-width:768px){
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-align: left;
    font-size: var(--font-size-xs);
}
`;
const Container3 = styled.div`border-radius: 12px;
background-color: var(--peach-96);
width: 1200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 80px 0px;
box-sizing: border-box;
gap: 40px;

@media (max-width:1200px){
    border-radius: 12px;
    background-color: var(--peach-96);
    width: 769px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 0px;
    box-sizing: border-box;
    gap: 40px;
    }

@media (max-width:768px){
border-radius: 12px;
background-color: var(--peach-96);
width: 319px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 80px 0px;
box-sizing: border-box;
gap: 40px;
}
`;
const PortfolioRoot = styled.div`position: relative;
width: 100%;
overflow: hidden;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
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
padding: 0px 128px;
box-sizing: border-box;
text-align: center;
font-size: 48px;
color: var(--grey-20);
font-family: var(--font-manrope);
}

@media (max-width:768px){
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
    font-size: 36px;
    color: var(--grey-20);
    font-family: var(--font-manrope);
}
`;


const Portfolio_Hero = () => {
    return (
        <PortfolioRoot>
            <Container3>
                <IconContainer1>
                    <Icon3 alt="" src={StarsIcon} />
                </IconContainer1>
                <TextContainer1>
                    <Heading>Мои творческие портфолио</Heading>
                    <Paragraph>Некоторые проекты, которые я сделал:</Paragraph>
                </TextContainer1>
                <SubContainer1>
                    <Container4>
                        <Icon3 alt="" src={CheckIcon} />
                        <Text2>5+ Завершенных проектов (commercial + pet)</Text2>
                    </Container4>
                    <Container4>
                        <Icon3 alt="" src={BarsIcon} />
                        <Text2>01+ Лет опыта работы</Text2>
                    </Container4>
                </SubContainer1>
            </Container3>
        </PortfolioRoot>);
};

export default Portfolio_Hero;
