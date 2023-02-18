import React from "react";
import styled from "styled-components";
import Suns from "../../Assets/sun.svg";
import fire from "../../Assets/fire.svg";
import gaming from "../../Assets/console.svg";

function Popup() {
    return (
        <Div>
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
        </Div>
    );
}

export default Popup;

const Div = styled.div`
    width: 500px;
    background: #4b4b4ba8;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 640px) {
        width: 400px;
    }
    @media all and (max-width: 480px) {
        width: 300px;
    }
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
const SunImg = styled.img`
    width: 100%;
    display: block;
`;
