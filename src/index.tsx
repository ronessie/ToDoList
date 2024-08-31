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

function App() {
    const navigator = useMemo(() => initNavigator('app-navigation-state'), []);

    const [location, reactNavigator] = useIntegration(navigator);

    return (
        <NextUIProvider>
            <Router location={location} navigator={reactNavigator}>
                <Routes>
                    <Route path={"/"} element={<LogIn />} />
                    <Route path={"/Main"} element={<Main />} />
                    <Route path={"/SignIn"} element={<SignIn />} />
                </Routes>
            </Router>
        </NextUIProvider>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App /> {/* Оборачиваем все в один главный компонент */}
    </React.StrictMode>
);

reportWebVitals();