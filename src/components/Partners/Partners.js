import React from "react"
import "./Partners.css"

// images
import { getCloudinaryImagePath } from "../App/App"

// data
const celo = {
  href: "https://celo.org/",
  pngSrcName: "celo-logo_ibvhry.png",
  webpSrcName: "celo-logo_jhith4.webp",
  altText: "celo logo",
}
const teller = {
  href: "https://teller.finance/",
  pngSrcName: "teller-logo_lscjwc.png",
  webpSrcName: "teller-logo_qh8gba.webp",
  altText: "teller finance logo",
}
const blockchainAtBerkeley = {
  href: "https://blockchain.berkeley.edu/",
  pngSrcName: "blockchain-at-berkeley-logo_n0s2zi.png",
  webpSrcName: "blockchain-at-berkeley-logo_cp4cy8.webp",
  altText: "blockchain at berkeley logo",
}
const irta = {
  href: "https://irta.com/",
  pngSrcName: "irta-logo_j5fvfq.png",
  webpSrcName: "irta-logo_o1mtsz.webp",
  altText: "irta logo",
}
const doaMaker = {
  href: "https://daomaker.com/",
  pngSrcName: "doa-maker-logo_e2itef.png",
  webpSrcName: "doa-maker-logo_bno9wi.webp",
  altText: "doa maker logo",
}

const partners = [celo, teller, doaMaker, blockchainAtBerkeley, irta]

class Partners extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.renderPartnerImages = this.renderPartnerImages.bind(this)
  }

  renderPartnerImages() {
    return partners.map((partner) => (
      <a
        key={partner.altText}
        className={"partnerItem"}
        href={partner.href}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <picture>
          <source srcSet={getCloudinaryImagePath(partner.webpSrcName)} type={"image/webp"} />
          <source srcSet={getCloudinaryImagePath(partner.pngSrcName)} type={"image/png"} />
          <img src={getCloudinaryImagePath(partner.pngSrcName)} alt={"partner.altText"} />
        </picture>
      </a>
    ))
  }

  render() {
    return (
      <section id={"partners"}>
        <h4> {"Partners"} </h4>
        <div id={"partnersItemsContainer"}>{this.renderPartnerImages()}</div>
      </section>
    )
  }
}

export default Partners
