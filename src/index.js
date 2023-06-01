
import React from 'react';
import App from './App';
import "typeface-noto-sans";
import {createRoot} from 'react-dom/client';

import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

class ErrorBoundary extends React.Component {
    render() {
        return this.props.children;
    }  
}
 
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>,
);