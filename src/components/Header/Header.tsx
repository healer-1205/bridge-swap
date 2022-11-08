import React, { useState } from "react"
import { Row, Col, Offcanvas } from "react-bootstrap"
import { Link } from "react-router-dom"
import { HiMenu } from "react-icons/hi"
import { Logos, svgIcons } from "../../assets"
import "./Header.scss"
import "bootstrap/dist/css/bootstrap.min.css"

export const Header: React.FC = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [activeIndex, setActiveIndex] = useState(-1)

  const navLinks = [
    {
      name: "Benefit",
      link: "#benefit",
    },
    {
      name: "FAQ",
      link: "#faq",
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
        <Col xs={5} lg={7} style={{ zIndex: 2 }}>
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
        <Col xs={1} className="menu-icon">
          <div onClick={handleShow}>
            <HiMenu />
          </div>
        </Col>
      </Row>
    </div>
  )
}
