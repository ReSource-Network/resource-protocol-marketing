import React from "react"
import "./DEXES.css"
import { getCloudinaryImagePath } from "../App/App"

// data
const uniswap = {
  href: "https://uniswap.org/",
  pngSrcName: "uniswap_hsyxjf.png",
  webpSrcName: "uniswap_zvlhod.webp",
  altText: "uniswap logo",
  price: "Free Floating",
  allocation: "TBD",
}
const pancakeswap = {
  href: "https://pancakeswap.finance/",
  pngSrcName: "pancakeswap_hgsfc5.png",
  webpSrcName: "pancakeswap_c2fbxd.webp",
  altText: "pancake swap logo",
  price: "Free Floating",
  allocation: "TBD",
}
const gateio = {
  href: "https://www.gate.io/",
  pngSrcName: "gateio_x4vsvy_azw11u.png",
  webpSrcName: "gateio_x4vsvy_g3xpb1.webp",
  altText: "gate.io logo",
  price: "Free Floating",
  allocation: "TBD",
}
const ubeswap = {
  href: "https://ubeswap.org/",
  pngSrcName: "ubeswap_cqcrvk.png",
  webpSrcName: "ubeswap_tdvjp1.webp",
  altText: "ubeswap logo",
  price: "Free Floating",
  allocation: "TBD",
}

const dexes = [pancakeswap, gateio, ubeswap]

class DEXES extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.renderDEXESTableRows = this.renderDEXESTableRows.bind(this)
  }

  renderDEXESTableRows() {
    return dexes.map((dex) => (
      <div className={"dex-table-row"}>
        <a
          key={dex.altText}
          className={"dex-logo"}
          href={dex.href}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <picture>
            <source srcSet={getCloudinaryImagePath(dex.webpSrcName)} type={"image/webp"} />
            <source srcSet={getCloudinaryImagePath(dex.pngSrcName)} type={"image/png"} />
            <img src={getCloudinaryImagePath(dex.pngSrcName)} alt={dex.altText} />
          </picture>
        </a>
        {/*<p>{dex.price}</p>*/}
        {/*<p>{dex.allocation}</p>*/}
      </div>
    ))
  }

  render() {
    return (
      <section id={"dex"}>
        <h4> {"Exchanges"} </h4>
        <p> {"Monday, November 22nd - 6am (UTC)"} </p>
        <div id={"dex-table"}>
          {this.renderDEXESTableRows()}
        </div>
      </section>
    )
  }
}

export default DEXES
