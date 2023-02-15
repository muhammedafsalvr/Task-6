import './App.css';
import styled from 'styled-components';
import MainSection from './component/MainSection';
import SideMenu from './component/screens/SideMenu';
import Graph from './component/screens/Graph';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CardsNotWorking from './component/PathFolder/CardsNotWorking';
import SavingNoWorking from './component/PathFolder/SavingNoWorking';
import TransationNotWorking from './component/PathFolder/TransationNotWorking';
import SettingNotWorking from './component/PathFolder/SettingNotWorking';
import SearchOops from './component/PathFolder/SearchOops';

function App() {
    return (
        <Div ClassName="container">
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Mark>
                                <SideMenu />
                                {/* <MainSection /> */}
                                <Graph />
                            </Mark>
                        }
                    />
                    <Route
                        path="/Task--6"
                        element={
                            <Mark>
                                <SideMenu />
                                <MainSection />
                                <Graph />
                            </Mark>
                        }
                    />
                    <Route path="/Cardss" element={<CardsNotWorking />} />
                    <Route path="/SaviNgg" element={<SavingNoWorking />} />
                    <Route path="/Trancee" element={<TransationNotWorking />} />
                    <Route path="/Setting" element={<SettingNotWorking />} />
                    <Route path="/Ooops" element={<SearchOops />} />
                </Routes>
            </Router>
        </Div>
    );
}

const Mark = styled.section`
    display: flex;
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
        align-items: center;
    }
`;
const Div = styled.div``;

export default App;