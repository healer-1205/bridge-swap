import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { svgIcons, Images } from "../../assets"
import "./Benefit.scss"

export const Benefit: React.FC = () => {
  return (
    <div className="benefit" id="benefit">
      <Container>
        <Row className="pt-60">
          <Col>
            <div className="benefit__box">
              <Row>
                <Col>
                  <h1>Your Best Ctypro Exchange</h1>
                </Col>
              </Row>
              <Row className="pt-60">
                <Col sm={12} md={4} lg={4}>
                  <div className="imageContainer">
                    <img src={svgIcons.OneNumber} alt="OneNumber" />
                    <img src={svgIcons.RightArrow} alt="RightArrow" style={{ marginLeft: "10px" }} />
                  </div>
                  <p className="font-25 pt-20">Choose currency</p>
                  <p>Pick one of 50 000+ supported currency pairs from the list</p>
                </Col>
                <Col sm={12} md={4} lg={4}>
                  <div className="imageContainer">
                    <img src={svgIcons.TwoNumber} alt="TwoNumber" />
                    <img src={svgIcons.RightArrow} alt="RightArrow" style={{ marginLeft: "10px" }} />
                  </div>
                  <p className="font-25 pt-20">Make Deposit</p>
                  <p>Confirm details and send your assets to the generated address</p>
                </Col>
                <Col sm={12} md={4} lg={4}>
                  <div className="imageContainer">
                    <img src={svgIcons.ThreeNumber} alt="ThreeNumber" />
                    <img src={svgIcons.DoubleCheck} alt="DoubleCheck" style={{ marginLeft: "10px" }} />
                  </div>
                  <p className="font-25 pt-20">Get your coins</p>
                  <p>Receive exchanged crypto with the best possible rate</p>
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
                  <h1 className="pt-20">Fast Ctypro Exchange</h1>
                  <p className="pt-60 font-25">
                    The average time for exchange is about 5 minutes. You can track the progress on the exchange page.
                  </p>
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
                <Col sm={12} md={4}>
                  <img src={Images.Limitless} alt="Limitless" className="benefit__image" />
                </Col>
                <Col sm={12} md={8}>
                  <h1 className="pt-60">Limitless Exchange</h1>
                  <p className="pt-60 font-25">
                    The average time for exchange is about 5 minutes. You can track the progress on the exchange page.
                  </p>
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
                  <h1 className="pt-60">Save Money</h1>
                  <p className="pt-60 font-25">Best exchange rates and minimum commissions.</p>
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
