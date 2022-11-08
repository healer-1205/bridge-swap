import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { svgIcons, Images } from "../../assets"
import "./Benefit.scss"

export const Benefit: React.FC = () => {
  const { t } = useTranslation("translation")
  return (
    <div className="benefit" id="benefit">
      <Container>
        <Row className="pt-60">
          <Col>
            <div className="benefit__box">
              <Row>
                <Col>
                  <h1>{t("homepage.your-best-crypto-exchange")}</h1>
                </Col>
              </Row>
              <Row className="pt-60">
                <Col sm={12} md={4} lg={4}>
                  <div className="imageContainer">
                    <img src={svgIcons.OneNumber} alt="OneNumber" />
                    <img src={svgIcons.RightArrow} alt="RightArrow" style={{ marginLeft: "10px" }} />
                  </div>
                  <p className="font-25 pt-20">{t("homepage.choose-currency")}</p>
                  <p>{t("homepage.choose-currency-description")}</p>
                </Col>
                <Col sm={12} md={4} lg={4}>
                  <div className="imageContainer">
                    <img src={svgIcons.TwoNumber} alt="TwoNumber" />
                    <img src={svgIcons.RightArrow} alt="RightArrow" style={{ marginLeft: "10px" }} />
                  </div>
                  <p className="font-25 pt-20">{t("homepage.make-deposit")}</p>
                  <p>{t("homepage.make-deposit-description")}</p>
                </Col>
                <Col sm={12} md={4} lg={4}>
                  <div className="imageContainer">
                    <img src={svgIcons.ThreeNumber} alt="ThreeNumber" />
                    <img src={svgIcons.DoubleCheck} alt="DoubleCheck" style={{ marginLeft: "10px" }} />
                  </div>
                  <p className="font-25 pt-20">{t("homepage.get-your-coins")}</p>
                  <p>{t("homepage.get-your-coins-description")}</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="pt-120">
          <Col>
            <div className="benefit__box">
              <Row>
                <Col sm={12} md={8}>
                  <h1 className="pt-20">{t("homepage.fast-crypto-exchange")}</h1>
                  <p className="pt-60 font-25">{t("homepage.fast-crypto-exchange-description")}</p>
                </Col>
                <Col sm={12} md={4}>
                  <img src={Images.Fast} alt="Fast" className="benefit__image" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="pt-120">
          <Col>
            <div className="benefit__box">
              <Row>
                <Col sm={12} md={8}>
                  <h1 className="responsive-padding">{t("homepage.limitless-exchange")}</h1>
                  <p className="responsive-padding font-25">{t("homepage.limitless-exchange-description")}</p>
                </Col>
                <Col sm={12} md={4}>
                  <img src={Images.Limitless} alt="Limitless" className="benefit__image" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="pt-120">
          <Col>
            <div className="benefit__box">
              <Row>
                <Col sm={12} md={8}>
                  <h1 className="responsive-padding">{t("homepage.save-money")}</h1>
                  <p className="responsive-padding font-25">{t("homepage.save-money-description")}</p>
                </Col>
                <Col sm={12} md={4}>
                  <img src={Images.Save} alt="Save" className="benefit__image" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
