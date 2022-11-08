import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Tokens, svgIcons, Gifs } from "../../assets"
import { Benefit } from "../../components/Benefit"
import { Faq } from "../../components/Faq"
import "./Home.scss"

export const Home: React.FC = () => {
  const [isSendOpen, setIsSendOpen] = useState(false)
  const [isReceiveOpen, setIsReceiveOpen] = useState(false)
  return (
    <div className="home">
      <div className="home__gradient1"></div>
      <div className="home__gradient2"></div>
      <div className="home__gradient3"></div>
      <div className="home__gradient4"></div>
      <Container style={{ maxWidth: "960px" }}>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <p className="home__title">Swap your favorite CTYPTO without KYC</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <span className="home__description">Fixed rate 0.1%.</span>
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={1} lg={3}>
            <img src={Gifs.Bitcoin2} alt="Bitcoin" className="home__swapImage" />
          </Col>
          <Col sm={12} md={10} lg={6}>
            <div className="swapBox">
              <Row>
                <Col>
                  <p className="text-white">Your Send</p>
                  <div className="swapBox__exchangeInput d-flex align-items-center">
                    <input type="number" placeholder="0" />
                    <div
                      className="swapBox__exchangeInput__dropdown"
                      onMouseEnter={(e) => {
                        e.preventDefault()
                        setIsSendOpen(true)
                      }}
                      onMouseLeave={(e) => {
                        e.preventDefault()
                        setIsSendOpen(false)
                      }}
                    >
                      <div className={isSendOpen ? "send_dropdown_content" : "send_dropdown_content d-none"}>
                        <div className="exchange_search">
                          <img src={svgIcons.Search} alt="Search" />
                          <input type="text" placeholder="Enter token name" />
                        </div>
                        <div className="exchange_options"></div>
                      </div>
                      <img src={svgIcons.DownArrow} alt="DownArrow" className="downArrow" />
                      <div className="swapBox__exchangeInput__dropdown__selected">
                        <img src={Tokens.BTC} alt="BTC" />
                        <div className="d-flex flex-column">
                          <h6>BTC</h6>
                          <span>BTC</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={1} className="px-0" style={{ position: "relative" }}>
                  <img src={svgIcons.Swap} alt="Swap" className="swapImage" />
                </Col>
                <Col>
                  <p className="text-white">Your receive</p>
                  <div className="swapBox__exchangeInput d-flex align-items-center">
                    <input type="number" placeholder="0" />
                    <div
                      className="swapBox__exchangeInput__dropdown"
                      onMouseEnter={(e) => {
                        e.preventDefault()
                        setIsReceiveOpen(true)
                      }}
                      onMouseLeave={(e) => {
                        e.preventDefault()
                        setIsReceiveOpen(false)
                      }}
                    >
                      <div className={isReceiveOpen ? "receive_dropdown_content" : "receive_dropdown_content d-none"}>
                        <div className="exchange_search">
                          <img src={svgIcons.Search} alt="Search" />
                          <input type="text" placeholder="Enter token name" />
                        </div>
                        <div className="exchange_options"></div>
                      </div>
                      <img src={svgIcons.DownArrow} alt="DownArrow" className="downArrow" />
                      <div className="swapBox__exchangeInput__dropdown__selected">
                        <img src={Tokens.ETH} alt="BTC" />
                        <div className="d-flex flex-column">
                          <h6>ETH</h6>
                          <span>ERC20</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input type="text" placeholder="Enter your wallet address" className="addressInput mt-20" />
                </Col>
              </Row>
              <Row>
                <Col sm={0} md={2} lg={3}></Col>
                <Col sm={12} md={8} lg={6}>
                  <button className="custom_button mt-20">Swap Now</button>
                </Col>
                <Col sm={0} md={2} lg={3}></Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={1} lg={3}>
            <img src={Gifs.BNB} alt="Bitcoin" className="home__swapImage" />
          </Col>
        </Row>
      </Container>
      <Benefit />
      <Faq />
    </div>
  )
}
