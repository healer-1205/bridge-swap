import React, { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import axios from "axios"
import config from "../../config"
import { svgIcons, Gifs } from "../../assets"
import { Benefit } from "../../components/Benefit"
import { Faq } from "../../components/Faq"
import { Support } from "../../components/Support"
import "./Home.scss"

export const Home: React.FC = () => {
  const [isSendOpen, setIsSendOpen] = useState(false)
  const [isReceiveOpen, setIsReceiveOpen] = useState(false)

  const [currencies, setCurrencies] = useState([])
  const [selectedSendCurrency, setSelectedSendCurrency] = useState()
  const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState()
  useEffect(() => {
    axios
      .get("https://titanex.io/api/coinInfo")
      .then((res) => {
        setCurrencies(res.data)
        setSelectedSendCurrency(res.data[7])
        setSelectedReceiveCurrency(res.data[8])
      })
      .catch(console.error)
  }, [])

  const { t } = useTranslation("translation")
  return (
    <div className="home">
      <div className="home__gradient1"></div>
      <div className="home__gradient2"></div>
      <div className="home__gradient3"></div>
      <div className="home__gradient4"></div>
      <Container style={{ maxWidth: "960px" }}>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <p className="home__title">{t("homepage.main-title")}</p>
          </Col>
        </Row>
      </Container>
      <Container className="swapbox_container">
        <Row>
          <Col sm={12} md={1} lg={3}>
            <img src={Gifs.Bitcoin2} alt="Bitcoin" className="home__swapImage" />
          </Col>
          <Col sm={12} md={10} lg={6}>
            <div className="swapBox">
              <Row>
                <Col>
                  <p className="text-white">{t("homepage.your-send")}</p>
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
                      <div className={isSendOpen ? "dropdown_content" : "dropdown_content d-none"}>
                        <div className="exchange_search">
                          <img src={svgIcons.Search} alt="Search" />
                          <input type="text" placeholder="Enter token name" />
                        </div>
                        <div className="exchange_options">
                          {currencies.map((currency, index) => (
                            <div
                              className="currency_list align-items-center"
                              key={index}
                              onClick={(e) => {
                                e.preventDefault()
                                setSelectedSendCurrency(currency)
                                setIsSendOpen(false)
                              }}
                            >
                              <div className="d-flex align-items-center">
                                <img width="41" height="41" alt="tokenImg" src={currency["icon"]} className="mr-10" />
                                <h6 className="mb-0">
                                  {currency["ticker"]} <span>{currency["network"]}</span>
                                </h6>
                              </div>
                              <h6 className="mb-0">{currency["name"]}</h6>
                            </div>
                          ))}
                        </div>
                      </div>
                      <img src={svgIcons.DownArrow} alt="DownArrow" className="downArrow" />
                      <div className="swapBox__exchangeInput__dropdown__selected">
                        <img src={selectedSendCurrency && selectedSendCurrency["icon"]} alt="Token" />
                        <div className="d-flex flex-column">
                          <h6>{selectedSendCurrency && selectedSendCurrency["ticker"]}</h6>
                          <span>{selectedSendCurrency && selectedSendCurrency["network"]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={1} className="px-0" style={{ position: "relative" }}>
                  <img src={svgIcons.Swap} alt="Swap" className="swapImage" />
                </Col>
                <Col>
                  <p className="text-white">{t("homepage.your-receive")}</p>
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
                      <div className={isReceiveOpen ? "dropdown_content" : "dropdown_content d-none"}>
                        <div className="exchange_search">
                          <img src={svgIcons.Search} alt="Search" />
                          <input type="text" placeholder="Enter token name" />
                        </div>
                        <div className="exchange_options">
                          {currencies.map((currency, index) => (
                            <div
                              className="currency_list align-items-center"
                              key={index}
                              onClick={(e) => {
                                e.preventDefault()
                                setSelectedReceiveCurrency(currency)
                                setIsReceiveOpen(false)
                              }}
                            >
                              <div className="d-flex align-items-center">
                                <img width="41" height="41" alt="tokenImg" src={currency["icon"]} className="mr-10" />
                                <h6 className="mb-0">
                                  {currency["ticker"]} <span>{currency["network"]}</span>
                                </h6>
                              </div>
                              <h6 className="mb-0">{currency["name"]}</h6>
                            </div>
                          ))}
                        </div>
                      </div>
                      <img src={svgIcons.DownArrow} alt="DownArrow" className="downArrow" />
                      <div className="swapBox__exchangeInput__dropdown__selected">
                        <img src={selectedReceiveCurrency && selectedReceiveCurrency["icon"]} alt="Token" />
                        <div className="d-flex flex-column">
                          <h6>{selectedReceiveCurrency && selectedReceiveCurrency["ticker"]}</h6>
                          <span>{selectedReceiveCurrency && selectedReceiveCurrency["network"]}</span>
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
                  <button className="custom_button mt-20">{t("homepage.swap-now")}</button>
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
      <Support />
    </div>
  )
}
