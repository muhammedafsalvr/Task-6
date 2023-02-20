import React from "react";
import styled from "styled-components";
import SideMenu from "../screens/SideMenu";
import Settings from "../../Assets/settings.jpg";

function SettingNotWorking() {
    return (
        <>
            <Container>
                <SideMenu />
                <CDM>
                    <IMAGE src={Settings} alt="Settings" />
                </CDM>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
`;
const CDM = styled.div`
    width: 75%;
`;
const IMAGE = styled.img`
    display: block;
    width: 100%;
`;

export default SettingNotWorking;
