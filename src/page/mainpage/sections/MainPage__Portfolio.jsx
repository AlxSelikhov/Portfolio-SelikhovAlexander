import styled from "styled-components";

import Project1 from '../../../assets/png/image/Project1.png';
import Project2 from '../../../assets/png/image/Project2.png';
import LinkIcon from '../../../assets/svg/icon/Link.svg';
import CustomLink from "../../../components/link/Link";

const Heading = styled.div`align-self: stretch;
position: relative;
line-height: 150%;
font-weight: 600;
`;
const Paragraph = styled.div`align-self: stretch;
position: relative;
font-size: var(--font-size-lg);
line-height: 150%;
color: var(--grey-30);

@media (max-width:1200px){

}
`;
const TextContainer1 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 0px 300px;
gap: 6px;

@media (max-width:1200px){
padding: 0;
}

@media (max-width:768px){
    padding: 0;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2px;
}
`;
const ImageIcon = styled.img`align-self: stretch;
position: relative;
border-radius: var(--br-xs);
max-width: 100%;
overflow: hidden;
height: 311px;
flex-shrink: 0;
object-fit: cover;
z-index: 0;

@media (max-width:1200px){

}
`;
const ImageIcon1 = styled.img`flex: 1;
position: relative;
border-radius: var(--br-7xs);
max-width: 100%;
overflow: hidden;
height: 68px;
object-fit: cover;

@media (max-width:1200px){

}
`;
const SubContainer4 = styled.div`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-xl);
z-index: 1;

@media (max-width:1200px){

}
`;
const Icon2 = styled.img`position: relative;
width: 24px;
height: 24px;
overflow: hidden;
flex-shrink: 0;

@media (max-width:1200px){

}
`;
const Button = styled.div`margin: 0 !important;
position: absolute;
right: 10px;
bottom: 115px;
border-radius: var(--br-5xs);
background-color: var(--peach-96);
border: 1px solid var(--peach-90);
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-3xs);
z-index: 2;

@media (max-width:1200px){

}
`;
const Container6 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
position: relative;
gap: var(--gap-xl);

@media (max-width:1200px){

}
`;
const Card = styled.div`
flex: 1;
border-radius: var(--br-xs);
background-color: var(--peach-96);
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-31xl);
gap: var(--gap-11xl);

@media (max-width:1200px){
    align-self: stretch;
}

@media (max-width:768px){

}
`;
const SubContainer3 = styled.div`
align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-11xl);

@media (max-width:1200px){
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

@media (max-width:768px){

}
`;
const Text1 = styled.div`position: relative;
line-height: 150%;
font-weight: 500;
`;
const Button2 = styled.div`border-radius: var(--br-5xs);
background-color: var(--purple-50);
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
padding: 18px 24px;
font-size: var(--font-size-lg);
color: var(--peach-99);

@media (max-width:1200px){

}
`;
const Container5 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 50px;
text-align: left;
font-size: var(--font-size-xl);

@media (max-width:768px){
align-self: stretch;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: var(--gap-21xl);
text-align: left;
font-size: var(--font-size-xl);
}
`;
const Container4 = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: 80px;

@media (max-width:1200px){
width: 768px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: var(--gap-21xl);
}

@media (max-width:768px){
width: 320px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: var(--gap-21xl);
}
`;
const MyProjectsSection1Root = styled.div`
width: 100%;
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
font-size: 40px;
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
font-size: 40px;
color: var(--grey-20);
font-family: var(--font-manrope);
margin: 60px 0;
}
`;


const MyProjectsSection = () => {
    return (
        <MyProjectsSection1Root id="projects">
            <Container4>
                <TextContainer1>
                    <Heading>Мои проекты</Heading>
                    <Paragraph>Вот некоторые pet-проектые, которые я сделал:</Paragraph>
                </TextContainer1>
                <Container5>
                    <SubContainer3>
                        <Card>
                            <Heading>DnDoverlord</Heading>
                            <Container6>
                                <ImageIcon alt="" src={Project1} />
                                <SubContainer4>
                                    <ImageIcon1 alt="" src={Project1} />
                                    <ImageIcon1 alt="" src={Project1} />
                                    <ImageIcon1 alt="" src={Project1} />
                                    <ImageIcon1 alt="" src={Project1} />
                                </SubContainer4>
                                <CustomLink
                                    to="http://dndoverlord.ru/"
                                >
                                    <Button>
                                        <Icon2 alt="" src={LinkIcon} />
                                    </Button>
                                </CustomLink>
                            </Container6>
                        </Card>
                        <Card>
                            <Heading>Food Diary</Heading>
                            <Container6>
                                <ImageIcon alt="" src={Project2} />
                                <SubContainer4>
                                    <ImageIcon1 alt="" src={Project2} />
                                    <ImageIcon1 alt="" src={Project2} />
                                    <ImageIcon1 alt="" src={Project2} />
                                    <ImageIcon1 alt="" src={Project2} />
                                </SubContainer4>
                                <CustomLink
                                    to="https://github.com/AlxSelikhov/FoodDiary"
                                >
                                    <Button>
                                        <Icon2 alt="" src={LinkIcon} />
                                    </Button>
                                </CustomLink>

                            </Container6>
                        </Card>
                    </SubContainer3>
                </Container5>
            </Container4>
        </MyProjectsSection1Root>);
};

export default MyProjectsSection;
