import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LogIn from './pages/LogIn';
import reportWebVitals from './reportWebVitals';
import {NextUIProvider} from "@nextui-org/react";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <NextUIProvider>
            <LogIn/>
        </NextUIProvider>
    </React.StrictMode>
);

reportWebVitals();
