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
const ubeswap = {
  href: "https://ubeswap.org/",
  pngSrcName: "ubeswap_cqcrvk.png",
  webpSrcName: "ubeswap_tdvjp1.webp",
  altText: "ubeswap logo",
  price: "Free Floating",
  allocation: "TBD",
}

const dexes = [uniswap, ubeswap]

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
        <p>{dex.price}</p>
        <p>{dex.allocation}</p>
      </div>
    ))
  }

  render() {
    return (
      <section id={"dex"}>
        <h4> {"Decentralized Exchanges"} </h4>
        <p> {"November 19th"} </p>
        <div id={"dex-table"}>
          <div id={"dex-table-header"}>
            <p>Venue</p>
            <p>Price on DEX</p>
            <p>Allocation (SOURCE)</p>
          </div>
          {this.renderDEXESTableRows()}
        </div>
      </section>
    )
  }
}

export default DEXES
