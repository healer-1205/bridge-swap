import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { createClient, configureChains, defaultChains, WagmiConfig } from "wagmi"
import { publicProvider } from "wagmi/providers/public"

import "./index.scss"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import i18next from "i18next"
import { I18nextProvider } from "react-i18next"
import en from "./languages/en.json"
import ar from "./languages/ar.json"
import ch from "./languages/ch.json"
import fr from "./languages/fr.json"
import ru from "./languages/ru.json"
import sp from "./languages/sp.json"

const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()])

const wagmiClient = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
})

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
    ch: {
      translation: ch,
    },
    fr: {
      translation: fr,
    },
    ru: {
      translation: ru,
    },
    sp: {
      translation: sp,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <WagmiConfig client={wagmiClient}>
          <App />
        </WagmiConfig>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
