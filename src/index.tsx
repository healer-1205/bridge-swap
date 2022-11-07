import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
])

const wagmiClient = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WagmiConfig client={wagmiClient}>
        <App />
      </WagmiConfig>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
