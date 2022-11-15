import React, { useState, FC } from "react"

interface ICurrencyInfo {
  ticker: string
  name: string
  icon: string
  network: string
  addressRegex: string
  swapMinimum: string
}

interface ITokenContext {
  sendAddress: string
  receiveAddress: string
  sendAmount: number
  receiveAmount: number
  selectedSendCurrency: ICurrencyInfo
  selectedReceiveCurrency: ICurrencyInfo
  setSendWalletAddress: (param: string) => void
  setReceiveWalletAddress: (param: string) => void
  setSendTokenAmount: (param: number) => void
  setReceiveTokenAmount: (param: number) => void
  setSelectedSendToken: (param: ICurrencyInfo) => void
  setSelectedReceiveToken: (param: ICurrencyInfo) => void
}

const defaultState = {
  sendAddress: "",
  receiveAddress: "",
  sendAmount: 0,
  receiveAmount: 0,
  selectedSendCurrency: {
    ticker: "",
    name: "",
    icon: "",
    network: "",
    addressRegex: "",
    swapMinimum: "",
  },
  selectedReceiveCurrency: {
    ticker: "",
    name: "",
    icon: "",
    network: "",
    addressRegex: "",
    swapMinimum: "",
  },
  setSendWalletAddress: (param: string) => {},
  setReceiveWalletAddress: (param: string) => {},
  setSendTokenAmount: (param: number) => {},
  setReceiveTokenAmount: (param: number) => {},
  setSelectedSendToken: (param: ICurrencyInfo) => {},
  setSelectedReceiveToken: (param: ICurrencyInfo) => {},
}

export const TokenContext = React.createContext<ITokenContext>(defaultState)

export const TokenProvider: FC = ({ children }) => {
  const [sendAddress, setSendAddress] = useState(defaultState.sendAddress)
  const [receiveAddress, setReceiveAddress] = useState(defaultState.sendAddress)
  const [sendAmount, setSendAmount] = useState(defaultState.sendAmount)
  const [receiveAmount, setReceiveAmount] = useState(defaultState.receiveAmount)
  const [selectedSendCurrency, setSelectedSendCurrency] = useState(defaultState.selectedSendCurrency)
  const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState(defaultState.selectedReceiveCurrency)

  const setSendWalletAddress = (param: string) => {
    setSendAddress(param)
  }
  const setReceiveWalletAddress = (param: string) => {
    setReceiveAddress(param)
  }
  const setSendTokenAmount = (param: number) => {
    setSendAmount(param)
  }
  const setReceiveTokenAmount = (param: number) => {
    setReceiveAmount(param)
  }
  const setSelectedSendToken = (param: ICurrencyInfo) => {
    setSelectedSendCurrency(param)
  }
  const setSelectedReceiveToken = (param: ICurrencyInfo) => {
    setSelectedReceiveCurrency(param)
  }

  return (
    <TokenContext.Provider
      value={{
        sendAddress,
        receiveAddress,
        sendAmount,
        receiveAmount,
        selectedSendCurrency,
        selectedReceiveCurrency,
        setSendWalletAddress,
        setReceiveWalletAddress,
        setSendTokenAmount,
        setReceiveTokenAmount,
        setSelectedSendToken,
        setSelectedReceiveToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  )
}
