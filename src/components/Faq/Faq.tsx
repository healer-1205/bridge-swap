import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Faq.scss"

export const Faq: React.FC = () => {
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
              <h5>What is my sending address and my receiving address?</h5>
              <p>
                Your sending address is the address that you will use to send your crypto. Your receiving address will
                be the address you want to receive your crypto on.
              </p>
            </div>
          </Col>
          <Col sm={12} md={4} className="pt-20">
            <div className="faq__box">
              <h5>Does this guarantee my anonymity and untraceability?</h5>
              <p>
                YES. We allow our users to trade their crypto without revealing their identity or being tracked on the
                blockchain. The swap won’t be traceable and you will receive your funds from a legitimate risk-free
                source.
              </p>
            </div>
          </Col>
          <Col sm={12} md={4} className="pt-20">
            <div className="faq__box">
              <h5>Will Titanex ever block or freeze my funds?</h5>
              <p>Titanex will never block, freeze or restrict your funds.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
