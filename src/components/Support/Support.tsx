import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { Images } from "../../assets"
import "./Support.scss"

export const Support: React.FC = () => {
  const { t } = useTranslation("translation")
  return (
    <div className="support" id="support">
      <Container>
        <Row className="pt-120">
          <Col>
            <h1 className="text-center">{t("homepage.get-in-touch")}</h1>
          </Col>
        </Row>
        <Row className="responsive-padding">
          <Col sm={12} md={8}>
            <Row className="pt-20">
              <Col>
                <input type="email" name="email" required className="support-input" placeholder="enter your email" />
              </Col>
            </Row>
            <Row className="pt-20">
              <Col>
                <textarea name="support" rows={5} className="support-area"></textarea>
              </Col>
            </Row>
            <Row className="pt-20">
              <Col>
                <button type="submit" className="support-button pt-20">
                  Submit
                </button>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={4}>
            <img src={Images.GetInTouch} alt="GetInTouch" className="w-100 d-md-block d-none" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
