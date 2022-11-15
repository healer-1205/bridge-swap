import React, { useState, FC } from "react"

interface ITokenContext {
  sendAddress: string
  sendAmount: number
  receiveAmount: number
  setSendWalletAddress: (param: string) => void
  setSendTokenAmount: (param: number) => void
  setReceiveTokenAmount: (param: number) => void
}

const defaultState = {
  sendAddress: "",
  sendAmount: 0,
  receiveAmount: 0,
  setSendWalletAddress: (param: string) => {},
  setSendTokenAmount: (param: number) => {},
  setReceiveTokenAmount: (param: number) => {},
}

export const TokenContext = React.createContext<ITokenContext>(defaultState)

export const TokenProvider: FC = ({ children }) => {
  const [sendAddress, setSendAddress] = useState(defaultState.sendAddress)
  const [sendAmount, setSendAmount] = useState(defaultState.sendAmount)
  const [receiveAmount, setReceiveAmount] = useState(defaultState.receiveAmount)

  const setSendWalletAddress = (param: string) => {
    setSendAddress(param)
  }
  const setSendTokenAmount = (param: number) => {
    setSendAmount(param)
  }
  const setReceiveTokenAmount = (param: number) => {
    setReceiveAmount(param)
  }

  return (
    <TokenContext.Provider
      value={{
        sendAddress,
        sendAmount,
        receiveAmount,
        setSendWalletAddress,
        setSendTokenAmount,
        setReceiveTokenAmount,
      }}
    >
      {children}
    </TokenContext.Provider>
  )
}
