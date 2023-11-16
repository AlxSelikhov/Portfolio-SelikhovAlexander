import styled from "styled-components";

import Project1Image from '../assets/png/image/Project1.png'
import Project2Image from '../assets/png/image/Project2.png'
import LinkIcon from '../assets/svg/icon/Link.svg'
// import ArrowLeftIcon from '../assets/svg/icon/ArrowLeft.svg'
// import ArrowRightIcon from '../assets/svg/icon/ArrowRight.svg'

const Heading = styled.div`position: relative;
line-height: 150%;
font-weight: 600;
`;
const Icon4 = styled.img`position: relative;
width: 34px;
height: 34px;
overflow: hidden;
flex-shrink: 0;
`;
const Button = styled.div`border-radius: var(--br-5xs);
background-color: var(--peach-95);
border: 1px solid var(--peach-85);
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-7xs);
`;
const ButtonsContainer1 = styled.div`display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
gap: 16px;
`;
const Container6 = styled.div`align-self: stretch;
border-bottom: 1px solid var(--peach-85);
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0px 0px 30px;
`;
const Heading1 = styled.div`align-self: stretch;
position: relative;
line-height: 150%;
font-weight: 600;
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
`;
const ImageIcon1 = styled.img`flex: 1;
position: relative;
border-radius: var(--br-7xs);
max-width: 100%;
overflow: hidden;
height: 68px;
object-fit: cover;
`;
const SubContainer4 = styled.div`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-xl);
z-index: 1;
`;
const Icon6 = styled.img`position: relative;
width: 24px;
height: 24px;
overflow: hidden;
flex-shrink: 0;
`;
const Button2 = styled.div`margin: 0 !important;
position: absolute;
right: 10px;
bottom: 98px;
border-radius: var(--br-5xs);
background-color: var(--peach-96);
border: 1px solid var(--peach-90);
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-3xs);
z-index: 2;
`;
const Container8 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
position: relative;
gap: var(--gap-xl);
`;
const Card = styled.div`flex: 1;
border-radius: var(--br-xs);
background-color: var(--peach-96);
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-31xl);
gap: var(--gap-11xl);
`;
const Container7 = styled.div`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-11xl);
font-size: var(--font-size-xl);
`;
const SubContainer3 = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
gap: var(--gap-11xl);
`;
const Container5 = styled.div`width: 1200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const PortfolioExampleRoot = styled.div`position: relative;
width: 100%;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0px 120px;
box-sizing: border-box;
text-align: left;
font-size: 24px;
color: var(--grey-20);
font-family: var(--font-manrope);
margin: 100px 0;
`;


const PortfolioExample = () => {
    return (
        <PortfolioExampleRoot>
            <Container5>
                <SubContainer3>
                    <Container6>
                        <Heading>Проекты, реализованные в 2023 году</Heading>
                        {/* <ButtonsContainer1>
                            <Button>
                                <Icon4 alt="" src={ArrowLeftIcon} />
                            </Button>
                            <Button>
                                <Icon4 alt="" src={ArrowRightIcon} />
                            </Button>
                        </ButtonsContainer1> */}
                    </Container6>
                    <Container7>
                        <Card>
                            <Heading1>Z - Aura Perfume Website Design</Heading1>
                            <Container8>
                                <ImageIcon alt="" src={Project1Image} />
                                <SubContainer4>
                                    <ImageIcon1 alt="" src={Project1Image} />
                                    <ImageIcon1 alt="" src={Project1Image} />
                                    <ImageIcon1 alt="" src={Project1Image} />
                                    <ImageIcon1 alt="" src={Project1Image} />
                                </SubContainer4>
                                <Button2>
                                    <Icon6 alt="" src={LinkIcon} />
                                </Button2>
                            </Container8>
                        </Card>
                        <Card>
                            <Heading1>Forhelp Charity Website Design</Heading1>
                            <Container8>
                                <ImageIcon alt="" src={Project2Image} />
                                <SubContainer4>
                                    <ImageIcon1 alt="" src={Project2Image} />
                                    <ImageIcon1 alt="" src={Project2Image} />
                                    <ImageIcon1 alt="" src={Project2Image} />
                                    <ImageIcon1 alt="" src={Project2Image} />
                                </SubContainer4>
                                <Button2>
                                    <Icon6 alt="" src={LinkIcon} />
                                </Button2>
                            </Container8>
                        </Card>
                    </Container7>
                </SubContainer3>
            </Container5>
        </PortfolioExampleRoot>);
};

export default PortfolioExample;
