import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { validate } from "crypto-address-validator-ts"
import { TokenContext } from "../../context/TokenContext"
import "./Swap.scss"

export const Swap: React.FC = () => {
  const { t } = useTranslation("translation")
  const navigate = useNavigate()
  const { receiveAddress, setReceiveWalletAddress } = useContext(TokenContext)
  const { selectedReceiveCurrency } = useContext(TokenContext)

  const [isInvalidAddress, setIsInvalidAddress] = useState(false)

  useEffect(() => {
    const currencyName = selectedReceiveCurrency?.ticker.toLowerCase()
    const chainType = selectedReceiveCurrency?.network
    validate(receiveAddress, currencyName, { networkType: "prod", chainType: chainType })
      ? setIsInvalidAddress(false)
      : setIsInvalidAddress(true)
  }, [receiveAddress, selectedReceiveCurrency])
  return (
    <div className="swap">
      <div className="home__gradient1"></div>
      <div className="home__gradient2"></div>
      <div className="home__gradient3"></div>
      <div className="home__gradient4"></div>
      <Container style={{ maxWidth: "700px" }}>
        <Row>
          <Col>
            <div className="box">
              <Row>
                <Col className="text-center text-success">{t("swap.await-deposit")}</Col>
                <Col className="text-center">{t("swap.confirming")}</Col>
                <Col className="text-center">{t("swap.swapping")}</Col>
                <Col className="text-center">{t("swap.sending")}</Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="mt-20">
          <Col>
            <div className="box">
              <p>{t("swap.receive-wallet")}</p>
              <input
                type="text"
                placeholder="Enter your wallet address"
                onChange={(e) => {
                  setReceiveWalletAddress(e.target.value)
                }}
              />
              {isInvalidAddress && <span className="text-danger">{t("homepage.invalid-address")}</span>}
              <p className="pt-40">{t("swap.deposit-wallet")}</p>
              <input type="text" placeholder="Enter your wallet address" readOnly />
              <button
                className="custom_button mt-20"
                onClick={(e) => {
                  e.preventDefault()
                  navigate("/")
                }}
              >
                {t("swap.back-to-home")}
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
