import React, {useMemo} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@mantine/core/styles.css';
import LogIn from './pages/LogIn';
import {MantineProvider} from '@mantine/core';
import reportWebVitals from './reportWebVitals';
import {initNavigator} from "@telegram-apps/sdk-react";
import {useIntegration} from "@telegram-apps/react-router-integration";
import {Router, Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Main from "./pages/Main";
import Settings from "./pages/Settings";
import {ROUTER_PATH} from "./shared/constants";

function App() {
    const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
    const [location, reactNavigator] = useIntegration(navigator);

    return (
        <MantineProvider defaultColorScheme="dark">
            <Router location={location} navigator={reactNavigator}>
                <Routes>
                    <Route path={ROUTER_PATH.ROOT} element={<LogIn/>}/>
                    <Route path={ROUTER_PATH.MAIN} element={<Main/>}/>
                    <Route path={ROUTER_PATH.SETTINGS} element={<Settings/>}/>
                    <Route path={ROUTER_PATH.SIGN_IN} element={<SignIn/>}/>
                </Routes>
            </Router>
        </MantineProvider>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
;

reportWebVitals();