import React,  { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import {
  BrowserRouter,
} from "react-router-dom";
import i18n from './components/i18n';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback="...">
      <React.StrictMode>
      <I18nextProvider i18n={i18n}>
          <App />
      </I18nextProvider>
      </React.StrictMode>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
