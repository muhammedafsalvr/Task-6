import React from "react";
import styled from "styled-components";
import Suns from "../Assets/sun.svg";
import fire from "../Assets/fire.svg";
import gaming from "../Assets/console.svg";
import Uparrow from "../Assets/uparrow.svg";
import GraphOne from "../Assets/graph1.png";
import DowArrow from "../Assets/down-arrow-white.svg";
import MAinLOgo from "../Assets/logo.svg";
import Nav from "./screens/Nav";

function MainSection() {
    return (
        <DashBoard>
            <HotSection>
                <SecondSection>
                    <DiplyBlok>
                        <LogoImgs>
                            <Nav />
                        </LogoImgs>
                        <Begerr>
                            <BergerImg src={MAinLOgo} alt="Logo" />
                        </Begerr>
                    </DiplyBlok>
                    <Buger></Buger>
                    <ColdHeading>Dashboard</ColdHeading>

                    <Static>
                        <SubList>
                            <SubListItem>
                                <FirstDom>Available amount</FirstDom>
                                <Dollor>$6,550</Dollor>
                            </SubListItem>
                            <SubListItem>
                                <Line />
                            </SubListItem>
                            <SubListItem>
                                <FirstDom>Card Balance</FirstDom>
                                <Dollor>$4,208</Dollor>
                            </SubListItem>
                            <SubListItem>
                                <Line />
                            </SubListItem>
                            <SubListItem>
                                <FirstDom>credit limit</FirstDom>
                                <Dollor>$20,000</Dollor>
                            </SubListItem>
                        </SubList>
                    </Static>
                </SecondSection>
            </HotSection>

            <ThirdContainer>
                <SecondDivision>
                    <FourthDivision>
                        <LeftSec>Saving</LeftSec>
                        <RightSec>Total 5 Walets</RightSec>
                    </FourthDivision>
                    <FifthDivision>
                        <BoxList>
                            <BoxListItem>
                                <Imagecon>
                                    <SunImg src={Suns} alt="Sun" />
                                </Imagecon>
                                <MonyExe>$2250</MonyExe>
                                <Summersec>Summer trip</Summersec>
                            </BoxListItem>
                            <BoxListItem>
                                <Imagecon>
                                    <SunImg src={fire} alt="Sun" />
                                </Imagecon>
                                <MonyExe>$2250</MonyExe>
                                <Summersec>Summer trip</Summersec>
                            </BoxListItem>
                            <BoxListItem>
                                <Imagecon>
                                    <SunImg src={gaming} alt="Sun" />
                                </Imagecon>
                                <MonyExe>$2250</MonyExe>
                                <Summersec>Summer trip</Summersec>
                            </BoxListItem>
                        </BoxList>
                    </FifthDivision>
                </SecondDivision>
            </ThirdContainer>
            {/* tirdcontainer end */}

            {/*  */}
            <StatiStics>
                <TopContainer>
                    <HeadingStatic>Statistics</HeadingStatic>
                    <select>
                        <option>March 2022</option>
                        <option>April 2022</option>
                        <option>May 2022</option>
                        <option>June 2022</option>
                    </select>
                </TopContainer>
                <StaticItems>
                    <StaticList>
                        <UpArrow>
                            <UpImage src={Uparrow} alt="uparrow" />
                        </UpArrow>
                        <Incom>Total income $235</Incom>
                        <ColorBlue></ColorBlue>
                        <BackGroundImg>
                            <GraphImg src={GraphOne} alt="Graphone" />
                        </BackGroundImg>
                        <Plus>+20%</Plus>
                    </StaticList>
                    <StaticList>
                        <UpArrow>
                            <UpImage src={Uparrow} alt="uparrow" />
                        </UpArrow>
                        <Incom>Total income $235</Incom>
                        <ColorGreen></ColorGreen>
                        <BackGroundImg>
                            <GraphImg src={GraphOne} alt="Graphone" />
                        </BackGroundImg>
                        <PlusT>+8%</PlusT>
                    </StaticList>
                    <StaticList>
                        <UpArrow>
                            <UpImage src={DowArrow} alt="uparrow" />
                        </UpArrow>
                        <Incom>Total income $235</Incom>
                        <ColorRed></ColorRed>
                        <BackGroundImg>
                            <GraphImg src={GraphOne} alt="Graphone" />
                        </BackGroundImg>
                        <PlusTo>-18%</PlusTo>
                    </StaticList>
                </StaticItems>
            </StatiStics>
        </DashBoard>
    );
}

const LogoImgs = styled.div`
    @media all and (max-width: 980px) {
        display: block;
        width: 15%;
    }
`;
const Begerr = styled.div`
    @media all and (max-width: 980px) {
        width: 15%;
    }
`;
const BergerImg = styled.img`
    width: 100%;
    display: block;
`;
const Buger = styled.div``;

const DiplyBlok = styled.div`
    display: none;
    @media all and (max-width: 980px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
`;

const PlusTo = styled.h3`
    margin-left: 156px;
    font-size: 20px;
    @media all and (max-width: 1080px) {
        margin-left: 225px;
        font-size: 15px;
    }
    @media all and (max-width: 980px) {
        margin-left: 292px;
        font-size: 20px;
    }
    @media all and (max-width: 480px) {
        display: none;
    }
`;

const PlusT = styled.h4`
    margin-left: 202px;
    font-size: 20px;
    @media all and (max-width: 1080px) {
        margin-left: 225px;
        font-size: 15px;
    }
    @media all and (max-width: 980px) {
        margin-left: 291px;
        font-size: 20px;
    }
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const ColorGreen = styled.div`
    background-color: #98dbe5;
    border-radius: 5px;
    width: 10px;
    display: inline-block;
    padding: 15px 39px;
    z-index: 2;
    &:hover {
        transform: scalex(1.1);
        transition-duration: 0.4s;
    }
    @media all and (max-width: 1280px) {
        padding: 15px 25px;
    }
    @media all and (max-width: 1080px) {
        position: absolute;
        left: 301px;
        padding: 13px 55px;
    }
    @media all and (max-width: 640px) {
        left: 135px;
    }
    @media all and (max-width: 360px) {
        left: 98px;
    }
`;
const ColorRed = styled.div`
    background-color: #fec0a7;
    border-radius: 5px;
    width: 10px;
    display: inline-block;
    padding: 15px 60px;
    z-index: 2;
    &:hover {
        transform: scalex(1.1);
        transition-duration: 0.4s;
    }
    @media all and (max-width: 1280px) {
        padding: 15px 45px;
    }
    @media all and (max-width: 1080px) {
        position: absolute;
        left: 300px;
        padding: 13px 55px;
    }
    @media all and (max-width: 640px) {
        left: 135px;
    }
    @media all and (max-width: 360px) {
        left: 100px;
    }
`;
const StatiStics = styled.section`
    padding: 0px 18px 8px 25px;
    background: #fff;
    box-shadow: 0 0 53px -11px rgb(0 0 0 / 70%);
    border-radius: 10px;
    @media all and (max-width: 980px) {
        padding: 13px 18px 12px 25px;
    }
    @media all and (max-width: 640px) {
        padding: 8px 7px 7px 21px;
    }
`;
const StaticItems = styled.ul``;
const StaticList = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`;
const UpArrow = styled.div`
    background: #000;
    padding: 15px;
    border-radius: 5px;
    &:hover {
        transform: scale(1.1);
        transition-duration: 0.4s;
    }

    @media all and (max-width: 1440px) {
        padding: 13px;
    }
    @media all and (max-width: 1280px) {
        display: none;
    }
    @media all and (max-width: 980px) {
        display: block;
    }
    @media all and (max-width: 640px) {
        display: none;
    }
`;
const UpImage = styled.img`
    display: block;
    width: 100%;
`;
const Incom = styled.h3`
    width: 19%;
    margin-left: 30px;
    font-size: 16px;
    @media all and (max-width: 1440px) {
        width: 21%;
    }
    @media all and (max-width: 1440px) {
        margin-left: 6px;
    }
    @media all and (max-width: 1080px) {
        font-size: 13px;
    }
    @media all and (max-width: 980px) {
        font-size: 19px;
        margin-left: 20px;
    }
    @media all and (max-width: 640px) {
        font-size: 15px;
    }
`;
// const Doll = styled.span``;
const BackGroundImg = styled.div`
    display: flex;
    align-items: center;
    width: 15%;
    position: absolute;
    left: 506px;
    z-index: 1;
    @media all and (max-width: 1440px) {
        left: 499px;
    }
    @media all and (max-width: 1080px) {
        width: 19%;
        left: 300px;
    }
    @media all and (max-width: 980px) {
        width: 24%;
        left: 335px;
    }
    @media all and (max-width: 640px) {
        width: 35%;
        left: 173px;
    }
    @media all and (max-width: 360px) {
        width: 35%;
    }
`;
const ColorBlue = styled.div`
    background-color: #98bde5;
    border-radius: 5px;
    width: 10px;
    display: inline-block;
    padding: 15px 70px;
    z-index: 2;
    &:hover {
        transform: scalex(1.1);
        transition-duration: 0.4s;
    }
    @media all and (max-width: 1280px) {
        padding: 15px 55px;
    }
    @media all and (max-width: 1080px) {
        position: absolute;
        left: 300px;
        padding: 13px 55px;
    }
    @media all and (max-width: 640px) {
        left: 133px;
    }
    @media all and (max-width: 360px) {
        left: 99px;
    }
`;
const GraphImg = styled.img`
    width: 100%;
    display: block;
`;
const Plus = styled.span`
    margin-left: 134px;
    font-size: 20px;
    @media all and (max-width: 1080px) {
        margin-left: 202px;
        font-size: 15px;
    }
    @media all and (max-width: 980px) {
        margin-left: 282px;
        font-size: 19px;
    }
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 0px 21px 1px;
`;

const HeadingStatic = styled.h2`
    font-size: 25px;
    font-weight: 700;
`;
const DashBoard = styled.section`
    width: 38%;
    padding: 20px 15px;
    @media all and (max-width: 1440px) {
        width: 49%;
    }
    @media all and (max-width: 1280px) {
        width: 43%;
    }
    @media all and (max-width: 980px) {
        width: 90%;
        padding-left: 9%;
    }
    @media all and (max-width: 640px) {
        width: 100%;
        padding-left: 2%;
    }
`;

const HotSection = styled.section`
    margin-bottom: 30px;
`;
const SecondSection = styled.div``;
const ColdHeading = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
`;
const Static = styled.div``;
const SubList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #000;
    padding: 20px 0;
    border-radius: 15px;
`;
const SubListItem = styled.li`
    color: #fff;
`;
const Line = styled.hr`
    border-left: 1px solid #fff;
    height: 20px;
`;
const FirstDom = styled.h4`
    font-size: 14px;
    margin-bottom: 20px;
`;
const Dollor = styled.span`
    font-size: 18px;
    font-weight: bold;
`;

const ThirdContainer = styled.section`
    padding: 19px 27px 24px 29px;
    background: #fff;
    box-shadow: 0 0 53px -11px rgb(0 0 0 / 70%);
    border-radius: 10px;
    width: 100%;
    margin-bottom: 15px;
`;

const SecondDivision = styled.div``;

const FourthDivision = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

const LeftSec = styled.h4`
    font-size: 24px;
    font-weight: bold;
`;

const RightSec = styled.h6`
    font-size: 20px;
    border-bottom: 1px solid grey;
    color: #747474;
`;

const BoxList = styled.ul`
    display: flex;
    justify-content: space-between;
`;

const BoxListItem = styled.li`
    background: #98bde5;
    padding: 15px;
    width: 30%;
    border-radius: 7px;
    &:hover {
        transform: scale(1.1);
        transition-duration: 0.5s;
    }

    &:last-child {
        background-color: #98dbe5;
    }

    &:first-child {
        background-color: #fec0a7;
    }
`;

const Imagecon = styled.div`
    width: 30%;
    margin-bottom: 30px;
`;

const Summersec = styled.h6``;
const MonyExe = styled.h3`
    margin-bottom: 10px;
    font-size: 25px;
    @media all and (max-width: 1080px) {
        font-size: 20px;
    }
    @media all and (max-width: 360px) {
        font-size: 15px;
    }
`;
const FifthDivision = styled.div``;
const SunImg = styled.img`
    width: 100%;
    display: block;
`;
export default MainSection;
