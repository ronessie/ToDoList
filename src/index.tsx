import React, {useMemo} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LogIn from './pages/LogIn';
import reportWebVitals from './reportWebVitals';
import {NextUIProvider} from "@nextui-org/react";
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
        <NextUIProvider>
            <Router location={location} navigator={reactNavigator}>
                <Routes>
                    <Route path={ROUTER_PATH.ROOT} element={<LogIn/>}/>
                    <Route path={ROUTER_PATH.MAIN} element={<Main/>}/>
                    <Route path={ROUTER_PATH.SETTINGS} element={<Settings/>}/>
                    <Route path={ROUTER_PATH.SIGN_IN} element={<SignIn/>}/>
                </Routes>
            </Router>
        </NextUIProvider>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <main className="dark">
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </main>
)
;

reportWebVitals();