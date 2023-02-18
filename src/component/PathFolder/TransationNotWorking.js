import React from "react";
import styled from "styled-components";
import Transactions from "../../Assets/transactions.jpg";
import SideMenu from "../screens/SideMenu";

function TransationNotWorking() {
    return (
        <>
            <Container>
                <SideMenu />
                <CDM>
                    <IMAGE src={Transactions} alt="Transactions" />
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

export default TransationNotWorking;
