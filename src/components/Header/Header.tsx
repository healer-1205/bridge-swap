import React, { useState } from "react"
import { Row, Col, Offcanvas } from "react-bootstrap"
import { Link } from "react-router-dom"
import { HiMenu } from "react-icons/hi"
import { useTranslation } from "react-i18next"
import { Logos, svgIcons } from "../../assets"
import "./Header.scss"
import "bootstrap/dist/css/bootstrap.min.css"

export const Header: React.FC = () => {
  const [show, setShow] = useState(false)
  const [isShowLanguage, setIsShowLanguage] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [activeIndex, setActiveIndex] = useState(-1)

  const { t, i18n } = useTranslation("translation")

  const navLinks = [
    {
      name: "Benefit",
      link: "#benefit",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
    {
      name: "Support",
      link: "#support",
    },
  ]

  return (
    <div className="header-nav-container">
      <Offcanvas className="nav-offcanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeVariant="white" closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-li-small">
            {navLinks.map((nav, index) => {
              return (
                <li key={index}>
                  <a
                    href={nav.link}
                    className={activeIndex === index ? "cool-link active" : "cool-link"}
                    onClick={(e) => {
                      setActiveIndex(index)
                    }}
                  >
                    {nav.name}
                  </a>
                </li>
              )
            })}
            <li>
              <Link to="/" className="cool-link">
                <img src={svgIcons.videoIcon} width="30" alt="discord" />
              </Link>
            </li>
            <li>
              <Link to="/" className="cool-link">
                <img src={svgIcons.discordIcon} width="30" alt="discord" />
              </Link>
            </li>
            <li>
              <Link to="/" className="cool-link">
                <img src={svgIcons.twitterIcon} width="30" alt="twitter" />
              </Link>
            </li>
            <li>{/* <button className="select-btn">SELECT WALLET</button> */}</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <Row className="justify-content-center">
        <Col xs={5} lg={5}>
          <Link to="/">
            <img width="100px" src={Logos.Logo} alt="Logo" />
          </Link>
        </Col>
        <Col xs={2} lg={5} style={{ zIndex: 2 }}>
          <ul className="navbar-li">
            {navLinks.map((nav, index) => {
              return (
                <li key={index}>
                  <a
                    href={nav.link}
                    className={activeIndex === index ? "cool-link active" : "cool-link"}
                    onClick={(e) => {
                      setActiveIndex(index)
                    }}
                  >
                    {nav.name}
                  </a>
                </li>
              )
            })}
            <li>
              <Link to="/" className="cool-link">
                <img src={svgIcons.videoIcon} width="30" alt="discord" />
              </Link>
            </li>
            <li>
              <Link to="/" className="cool-link">
                <img src={svgIcons.discordIcon} width="30" alt="discord" />
              </Link>
            </li>
            <li>
              <Link to="/" className="cool-link">
                <img src={svgIcons.twitterIcon} width="30" alt="twitter" />
              </Link>
            </li>
          </ul>
        </Col>
        <Col
          xs={4}
          lg={2}
          className="btnContainer"
          onMouseEnter={() => {
            setIsShowLanguage(true)
          }}
          onMouseLeave={() => {
            setIsShowLanguage(false)
          }}
        >
          <button className="select-btn">{t("navbar.language")}</button>
          <div className={isShowLanguage ? "language-list" : "d-none"}>
            <p
              onClick={() => {
                i18n.changeLanguage("en")
                setIsShowLanguage(false)
              }}
            >
              English
            </p>
            <p
              onClick={() => {
                i18n.changeLanguage("ru")
                setIsShowLanguage(false)
              }}
            >
              Русский
            </p>
            <p
              onClick={() => {
                i18n.changeLanguage("ch")
                setIsShowLanguage(false)
              }}
            >
              漢語
            </p>
            <p
              onClick={() => {
                i18n.changeLanguage("fr")
                setIsShowLanguage(false)
              }}
            >
              Français
            </p>
            <p
              onClick={() => {
                i18n.changeLanguage("ar")
                setIsShowLanguage(false)
              }}
            >
              عربي
            </p>
            <p
              onClick={() => {
                i18n.changeLanguage("sp")
                setIsShowLanguage(false)
              }}
            >
              Española
            </p>
          </div>
        </Col>
        <Col xs={1} className="menu-icon">
          <div onClick={handleShow}>
            <HiMenu />
          </div>
        </Col>
      </Row>
    </div>
  )
}
