import React from "react"
import { Col, Container, Row } from "react-bootstrap"
// import { useNavigate } from "react-router-dom"
import { NFTs, Tokens } from "../../assets"
import "./Home.scss"

export const Home: React.FC = () => {
  // const navigate = useNavigate()
  const solanaNftData = [
    {
      imageUrl: NFTs.Lootbox1,
      token: Tokens.Solana,
      price: 0.05,
    },
    {
      imageUrl: NFTs.Lootbox2,
      token: Tokens.Solana,
      price: 0.1,
    },
    {
      imageUrl: NFTs.Lootbox3,
      token: Tokens.Solana,
      price: 0.25,
    },
    {
      imageUrl: NFTs.Lootbox4,
      token: Tokens.Solana,
      price: 0.5,
    },
    {
      imageUrl: NFTs.Lootbox5,
      token: Tokens.Solana,
      price: 0.75,
    },
    {
      imageUrl: NFTs.Lootbox6,
      token: Tokens.Solana,
      price: 1,
    },
  ]
  return (
    <div className="home">
      <div className="home__gradient1"></div>
      <div className="home__gradient2"></div>
      <div className="home__gradient3"></div>
      <div className="home__gradient4"></div>
      <Container style={{ maxWidth: "960px" }}>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <p className="home__title">Open Looties to win up to 100X in SOL</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <span className="home__description">No house edge, with 100% RTP.</span>
      </Container>
      <Container className="nfts">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <select className="nfts__selectBox">
              <option>SOL</option>
              <option>DUST</option>
              <option>FORGE</option>
              <option>JOINTS</option>
            </select>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <select className="nfts__selectBox">
              <option>100X</option>
              <option>50/50</option>
            </select>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          {solanaNftData.map((item, index) => {
            return (
              <Col sm={12} md={4} lg={4} key={index} style={{ paddingBottom: "20px" }}>
                <div className="nfts__container">
                  <img src={item.imageUrl} alt="NFT" className="nfts__container__image" />
                  <div className="nfts__container__footer">
                    <div>
                      <img src={item.token} alt="Solana" width="70" height="70" />
                      <span className="nfts__container__footer__text">{item.price}</span>
                    </div>
                    <button className="nfts__container__footer__btn">SELECT WALLET</button>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
      <h3 className="responsibly">Open Responsibly</h3>
      <h2 className="recent">Recent Opens</h2>
      <Container style={{ paddingBottom: "50px" }}>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div style={{ padding: "12px" }}>
              <div className="infoContainer">
                <div className="infoContainer__info">
                  <img src={NFTs.Lootbox1} width="54" height="54" className="infoContainer__info__img" alt="token" />
                  <h6 className="infoContainer__info__title">5SJ...eQm opened 0.5 SOL and won 0.25 SOL</h6>
                </div>
                <p className="infoContainer__time">x mins ago</p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div style={{ padding: "12px" }}>
              <div className="infoContainer">
                <div className="infoContainer__info">
                  <img src={NFTs.Lootbox1} width="54" height="54" className="infoContainer__info__img" alt="token" />
                  <h6 className="infoContainer__info__title">5SJ...eQm opened 0.5 SOL and won 0.25 SOL</h6>
                </div>
                <p className="infoContainer__time">x mins ago</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
