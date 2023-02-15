import React from "react";
import styled from "styled-components";
import SideMenu from "../screens/SideMenu";

function SavingNoWorking() {
    return (
        <>
            <Container>
                <SideMenu />
                <CDM> Saving Not Working !!!</CDM>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
`;

const CDM = styled.h1`
    font-size: 40px;
    color: red;
    text-align: center;
    font-weight: bold;
`;

export default SavingNoWorking;
