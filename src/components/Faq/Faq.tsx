import React from "react"
import { Col, Container, Row, Accordion } from "react-bootstrap"
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
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{t("faq.faq1-question")}</Accordion.Header>
                <Accordion.Body>{t("faq.faq1-answer")}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>{t("faq.faq2-question")}</Accordion.Header>
                <Accordion.Body>{t("faq.faq2-answer")}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>{t("faq.faq3-question")}</Accordion.Header>
                <Accordion.Body>{t("faq.faq3-answer")}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
