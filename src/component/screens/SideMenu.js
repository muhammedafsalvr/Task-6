import styled from "styled-components";
import Logo from "../../Assets/Wallet.png";
import Dash from "../../Assets/menu.svg";
import Card from "../../Assets/credit.svg";
import Locker from "../../Assets/lock.svg";
import Tranc from "../../Assets/transaction.svg";
import Setting from "../../Assets/gear.svg";
import Person from "../../Assets/rectangle.jpg";
import Dot from "../../Assets/dot.svg";
import { NavLink } from "react-router-dom";

import React from "react";

function SideMenu() {
    return (
        <MainContainer>
            <SecondContainer>
                <LogoImageContainer>
                    <LogoImg src={Logo} alt="Logo" />
                </LogoImageContainer>
                <List>
                    <ListItems>
                        <CreditImage src={Dash} alt="Menu" />
                        <AllName to="/">Dashboard</AllName>
                    </ListItems>
                    <ListItems>
                        <CreditImage src={Card} alt="card" />
                        <AllName to="/Cardss">Cards</AllName>
                    </ListItems>
                    <ListItems>
                        <CreditImage src={Locker} alt="Lock" />
                        <AllName to="/SaviNgg">Saving</AllName>
                    </ListItems>
                    <ListItems>
                        <CreditImage src={Tranc} alt="Transaction" />
                        <AllName to="/Trancee">Transaction</AllName>
                    </ListItems>
                    <ListItems>
                        <CreditImage src={Setting} alt="Setting" />
                        <AllName to="/Setting">Setting</AllName>
                    </ListItems>
                    <ListItems></ListItems>
                </List>
                <Bord></Bord>
                <OtherList>
                    <OtherListItems>
                        <MainPerson>
                            <PersonOne src={Person} alt="PersonOne" />
                        </MainPerson>
                        <Jenni>jennifer connelly</Jenni>
                        <Dotcont>
                            <DubleDot src={Dot} alt="dot" />
                        </Dotcont>
                    </OtherListItems>
                </OtherList>
            </SecondContainer>
        </MainContainer>
    );
}
const Dotcont = styled.div`
    display: flex;
    justify-content: space-between;
    width: 12%;
    margin-left: 62px;
    @media all and (max-width: 1280px) {
        display: none;
    }
`;
const DubleDot = styled.img`
    width: 100%;
    display: block;
`;
const OtherList = styled.ul`
    padding-left: 35px;
`;
const OtherListItems = styled.li`
    display: flex;
    align-items: center;
    @media all and (max-width: 1440px) {
        position: absolute;
        left: 25px;
    }
    @media all and (max-width: 1280px) {
        left: 30px;
        width: 16%;
    }
`;
const MainPerson = styled.div`
    width: 60px;
    border-radius: 50%;
    @media all and (max-width: 1280px) {
        width: 40px;
    }
`;
const PersonOne = styled.img`
    width: 100%;
    display: block;
    border-radius: 50%;
`;
const Jenni = styled.h6`
    width: 20px;
    margin-left: 25px;
    font-size: 13px;
    font-weight: unset;
`;

const Bord = styled.div`
    border-bottom: 1px solid black;
    height: 5px;
    width: 188px;
    margin-left: 36px;
    margin-bottom: 44px;
    color: #707070;
    @media all and (max-width: 1440px) {
        width: 180px;
        margin-bottom: 43px;
    }
    @media all and (max-width: 1280px) {
        width: 109px;
    }
    @media all and (max-width: 1080px) {
        width: 133px;
    }
`;
const AllName = styled(NavLink)`
    font-size: 20px;
    font-weight: 500;
    margin-left: 20px;
    &:hover {
        color: #000;
    }
    &.active {
        color: #000000;
        font-weight: bolder;
        
    }
    @media all and (max-width: 1280px) {
        font-size: 15px;
        margin-left: 15px;
    }
`;
const List = styled.ul`
    margin-bottom: 70%;
    padding-left: 35px;
`;
const ListItems = styled.li`
    display: flex;
    align-items: center;
    width: 10%;
    margin-bottom: 33px;
`;
const CreditImage = styled.img`
    display: block;
    width: 100%;
    cursor: pointer;

    &:hover {
        filter: invert(80%);
    }
`;
const MainContainer = styled.section`
    background: hsl(0, 0%, 90%);
    width: 18%;
    height: 100vh;
    @media all and (max-width: 1440px) {
        height: 760px;
        width: 23%;
    }
    @media all and (max-width: 1280px) {
        height: 821px;
    }
    @media all and (max-width: 1080px) {
        height: 756px;
    }
    @media all and (max-width: 980px) {
        display: none;
    }
`;
const SecondContainer = styled.div``;
const LogoImageContainer = styled.div`
    width: 80%;
    margin-bottom: 30px;
`;
const LogoImg = styled.img`
    width: 100%;
    display: block;
`;

export default SideMenu;
