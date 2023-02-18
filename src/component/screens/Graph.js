import styled from "styled-components";
import React from "react";
import LenS from "../../Assets/food-site.svg";
import Grafity from "../../Assets/graph.png";
import DowArrow from "../../Assets/down-arrow-white.svg";
import Uparrow from "../../Assets/uparrow.svg";
import Dots from "../../Assets/dot.svg";
import { NavLink } from "react-router-dom";

function Graph() {
    return (
        <SevnthCon>
            <ConDiv>
                <SearchBar>
                    <SearchPut
                        type="text"
                        placeholder="Search document,keywords etc..."
                    />
                </SearchBar>
                <SearchLen to="/Ooops">
                    <LensImg src={LenS} alt="lens" />
                </SearchLen>
                <AnelDiv>
                    <AnelyticDiv>
                        <Anelytic>Analytics</Anelytic>
                        <BlackDot></BlackDot>
                        <Incom>Income</Incom>
                        <GreenDot></GreenDot>
                        <Savi>Saving</Savi>
                    </AnelyticDiv>
                    <SecDivImg>
                        <SecDivImgge src={Grafity} alt="Graph" />
                    </SecDivImg>
                </AnelDiv>
            </ConDiv>

            <StatiStics>
                <TopContainer>
                    <HeadingStatic>Transaction</HeadingStatic>
                    <select>
                        <option>March 2023</option>
                        <option>April 2023</option>
                        <option>May 2023</option>
                        <option>June 2023</option>
                    </select>
                </TopContainer>
                <StaticItems>
                    <StaticList>
                        <UpArrow>
                            <UpImage src={DowArrow} alt="uparrow" />
                        </UpArrow>
                        <NextD>
                            <Month>Monthly Groceries</Month>
                            <Times>3Apr 2022 at 3.15 pm</Times>
                        </NextD>
                        <Plus>+$2,20</Plus>
                        <DottedM>
                            <DottedIM src={Dots} />
                        </DottedM>
                    </StaticList>

                    <StaticList>
                        <UpArrow>
                            <UpImage src={Uparrow} alt="uparrow" />
                        </UpArrow>
                        <NextD>
                            <Month>Zabka Cashback</Month>
                            <Times>3Apr 2022 at 3.15 pm</Times>
                        </NextD>
                        <PlusT>+$220</PlusT>
                        <DottedM>
                            <DottedIM src={Dots} />
                        </DottedM>
                    </StaticList>

                    <StaticList>
                        <UpArrow>
                            <UpImage src={DowArrow} alt="uparrow" />
                        </UpArrow>
                        <NextD>
                            <Month>Transfer to card</Month>
                            <Times>3Apr 2022 at 3.15 pm</Times>
                        </NextD>
                        <PlusW>+$80</PlusW>
                        <DottedM>
                            <DottedIM src={Dots} />
                        </DottedM>
                    </StaticList>
                </StaticItems>
            </StatiStics>
        </SevnthCon>
    );
}

const NextD = styled.div`
    margin-right: 100px;
    @media all and (max-width: 1080px) {
        font-size: 12px;
    }
`;
const Month = styled.h4`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    @media all and (max-width: 1440px) {
        font-size: 15px;
    }
    @media all and (max-width: 1080px) {
        font-size: 11px;
    }
    @media all and (max-width: 980px) {
        font-size: 16px;
    }
    @media all and (max-width: 480px) {
        font-size: 12px;
    }
    @media all and (max-width: 360px) {
        font-size: 11px;
    }
`;
const Times = styled.h6`
    font-size: 14px;
    @media all and (max-width: 1080px) {
        font-size: 12px;
    }
    @media all and (max-width: 980px) {
        font-size: 15px;
    }
    @media all and (max-width: 480px) {
        font-size: 12px;
    }
`;
const Plus = styled.span`
    color: green;
    font-size: 20px;
    @media all and (max-width: 1440px) {
        font-size: 15px;
    }
    @media all and (max-width: 1080px) {
        margin-right: 18px;
    }
`;
const PlusT = styled.span`
    color: red;
    font-size: 20px;
    @media all and (max-width: 1440px) {
        font-size: 15px;
    }
    @media all and (max-width: 1080px) {
        margin-right: 18px;
    }
`;
const PlusW = styled.span`
    color: green;
    font-size: 20px;
    @media all and (max-width: 1440px) {
        font-size: 15px;
    }
    @media all and (max-width: 1080px) {
        margin-right: 18px;
    }
`;
const DottedM = styled.h4``;
const DottedIM = styled.img`
    display: block;
    width: 100%;
`;
const StatiStics = styled.section`
    padding: 0px 18px 9px 25px;
    background: #fff;
    box-shadow: 0 0 53px -11px rgb(0 0 0 / 70%);
    border-radius: 10px;
    width: 91%;
    @media all and (max-width: 1440px) {
        padding: 8px 18px 8px 22px;
    }
    @media all and (max-width: 1280px) {
        height: 34%;
    }
    @media all and (max-width: 1080px) {
        height: 33%;
    }
    @media all and (max-width: 980px) {
        padding: 29px 43px 15px 53px;
        height: 260px;
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
    @media all and (max-width: 480px) {
        padding: 5px 10px 3px 22px;
    }
`;
const StaticItems = styled.ul``;
const StaticList = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    justify-content: space-between;
`;
const UpArrow = styled.div`
    background: #000;
    padding: 15px;
    border-radius: 5px;
    &:hover {
        transform: scale(1.1);
        transition-duration: 0.5s;
    }
    @media all and (max-width: 1440px) {
        padding: 11px;
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
const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 0px 21px 1px;
    @media all and (max-width: 1080px) {
        padding: 9px 0px 10px 1px;
    }
`;
const HeadingStatic = styled.h2`
    font-size: 25px;
    font-weight: 700;
`;

const AnelDiv = styled.div`
    background: #fff;
    box-shadow: 0 0 53px -11px rgb(0 0 0 / 70%);
    border-radius: 10px;
    height: 377px;
    width: 91%;
    padding-top: 20px;
    margin-bottom: 14px;
    position: relative;
    @media all and (max-width: 1280px) {
        height: 363px;
    }
    @media all and (max-width: 1080px) {
        height: 351px;
    }
    @media all and (max-width: 980px) {
        width: 92%;
    }
    @media all and (max-width: 480px) {
        height: 280px;
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const SevnthCon = styled.section`
    padding: 23px 10px 10px 10px;
    width: 44%;
    @media all and (max-width: 980px) {
        width: 93%;
        margin: 0 auto;
        padding: 23px 10px 9px 47px;
    }
    @media all and (max-width: 640px) {
        padding: 1px 10px 9px 0px;
    }
`;
const ConDiv = styled.div`
    position: relative;
`;
const SearchLen = styled(NavLink)`
    width: 4%;
    position: absolute;
    top: 11px;
    right: 621px;
    @media all and (max-width: 1440px) {
        right: 435px;
    }
    @media all and (max-width: 1280px) {
        top: 10px;
        left: 10px;
        width: 24px;
    }
    @media all and (max-width: 1080px) {
        right: 352px;
    }
`;
const LensImg = styled.img`
    width: 100%;
    display: block;
`;
const AnelyticDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 14px;
`;
const Anelytic = styled.h1`
    font-size: 30px;
    font-weight: bold;
    @media all and (max-width: 1440px) {
        font-size: 23px;
    }
`;
const BlackDot = styled.div`
    background: #000;
    width: 10px;
    height: 10px;
    position: absolute;
    left: 64%;
    border-radius: 2px;
    @media all and (max-width: 1440px) {
        left: 55%;
    }
    @media all and (max-width: 980px) {
        left: 75%;
    }
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const Incom = styled.div`
    margin-left: 169px;
    @media all and (max-width: 1440px) {
        margin-left: 75px;
    }
    @media all and (max-width: 1280px) {
        margin-left: 57px;
    }
`;
const GreenDot = styled.div`
    background: green;
    width: 10px;
    height: 10px;
    position: absolute;
    left: 81%;
    border-radius: 2px;
    @media all and (max-width: 1440px) {
        left: 76%;
    }
    @media all and (max-width: 980px) {
        left: 52%;
    }
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const Savi = styled.div``;
const SecDivImg = styled.div`
    width: 83%;
    position: absolute;
    right: 62px;
    @media all and (max-width: 1440px) {
        position: absolute;
        right: 42px;
        top: 80px;
        width: 86%;
    }
    @media all and (max-width: 1280px) {
        width: 86%;
    }
    @media all and (max-width: 980px) {
        width: 74%;
        right: 109px;
    }
    @media all and (max-width: 640px) {
        width: 80%;
        right: 65px;
    }
    @media all and (max-width: 480px) {
        width: 79%;
        right: 42px;
    }
`;
const SecDivImgge = styled.img`
    width: 100%;
    display: block;
`;
const SearchBar = styled.form`
    border: 1px solid #747474;
    padding: 12px 10px;
    width: 90%;
    border-radius: 5px;
    color: #747474;
    margin-bottom: 16px;
    @media all and (max-width: 980px) {
        display: none;
    }
`;
const SearchPut = styled.input`
    font-size: 15px;
    margin-left: 30px;
    width: 40%;
    @media all and (max-width: 1440px) {
        width: 55%;
    }
    @media all and (max-width: 1280px) {
        width: 69%;
    }
`;

export default Graph;
