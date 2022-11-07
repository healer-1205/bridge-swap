import React from "react"
import { Container } from "react-bootstrap"
import { Logos, svgIcons } from "../../assets"
import "./Footer.scss"

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Container>
        <div style={{ paddingTop: "16px", paddingBottom: "16px" }}>
          <hr className="divider" />
        </div>
      </Container>
      <Container className="footer__content">
        <div className="footer__content__item">
          <img src={Logos.Logo} alt="logo" width="150px" />
        </div>
        <div className="footer__content__item">
          <a href="https://discord.com/" target="_blank" rel="noreferrer" className="footer__content__item__icon">
            <span className="footer__content__item__icon__span">
              <img src={svgIcons.discordIcon} alt="discord" width="30" height="30" />
            </span>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="footer__content__item__icon">
            <span className="footer__content__item__icon__span">
              <img src={svgIcons.twitterIcon} alt="twitter" width="30" height="30" />
            </span>
          </a>
        </div>
        <div className="footer__content__item">
          <p className="footer__content__item__title">©2022 Looties. All rights reserved.</p>
        </div>
      </Container>
    </div>
  )
}
