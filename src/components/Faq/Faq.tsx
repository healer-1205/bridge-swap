import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import "./Faq.scss"

export const Faq: React.FC = () => {
  const { t } = useTranslation("translation")
  return (
    <div className="faq" id="faq">
      <Container>
        <Row className="pt-120">
          <Col>
            <h1 className="text-center">FAQ</h1>
          </Col>
        </Row>
        <Row className="pt-20">
          <Col sm={12} md={4} className="pt-20">
            <div className="faq__box">
              <h5>{t("faq.faq1-question")}</h5>
              <p>{t("faq.faq1-answer")}</p>
            </div>
          </Col>
          <Col sm={12} md={4} className="pt-20">
            <div className="faq__box">
              <h5>{t("faq.faq2-question")}</h5>
              <p>{t("faq.faq2-answer")}</p>
            </div>
          </Col>
          <Col sm={12} md={4} className="pt-20">
            <div className="faq__box">
              <h5>{t("faq.faq3-question")}</h5>
              <p>{t("faq.faq3-question")}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
