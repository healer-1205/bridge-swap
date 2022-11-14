import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import "./Swap.scss"

export const Swap: React.FC = () => {
  const { t } = useTranslation("translation")
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
              <input type="text" placeholder="Enter your wallet address" />
              <p className="pt-40">{t("swap.deposit-wallet")}</p>
              <input type="text" placeholder="Enter your wallet address" readOnly />
              <button className="custom_button mt-20">{t("swap.back-to-home")}</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
