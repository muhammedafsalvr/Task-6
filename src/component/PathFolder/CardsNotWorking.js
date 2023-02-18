import React from "react";
import styled from "styled-components";
import SideMenu from "../screens/SideMenu";
import Card from "../../Assets/cards.jpg";

function CardsNotWorking() {
    return (
        <>
            <Container>
                <SideMenu />
                <CDM>
                    <IMAGE src={Card} alt="cards" />
                </CDM>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
`;

const CDM = styled.div`
    width: 80%;
`;

const IMAGE = styled.img`
    display: block;
    width: 100%;
`;
export default CardsNotWorking;



















