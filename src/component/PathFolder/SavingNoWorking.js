import React from "react";
import styled from "styled-components";
import SideMenu from "../screens/SideMenu";
import Savings from "../../Assets/savings.jpg";

function SavingNoWorking() {
    return (
        <>
            <Container>
                <SideMenu />
                <CDM>
                    <IMAGE src={Savings} alt="Savings" />
                </CDM>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
`;

const CDM = styled.div`
    width: 70%;
`;
const IMAGE = styled.img`
    display: block;
    width: 100%;
`;

export default SavingNoWorking;
