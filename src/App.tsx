// node_modules
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// pages
import { HomePage, StakingPage, ClaimingPage } from "./pages";

// components
import LayoutComponent from "./components/Layout";

// consts
import { PATH } from "./consts";

// styles
import "./styles/global.css";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <LayoutComponent>
                <Switch>
                    <Route path={PATH.HOME} exact>
                        <HomePage />
                    </Route>
                    <Route path={PATH.STAKING}>
                        <StakingPage />
                    </Route>
                    <Route path={PATH.CLAIMING}>
                        <ClaimingPage />
                    </Route>
                </Switch>
            </LayoutComponent>
        </BrowserRouter>
    );
};

export default App;
