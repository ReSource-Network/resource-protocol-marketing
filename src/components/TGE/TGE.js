import React from "react"
import "./TGE.css"
import { getCloudinaryImagePath } from "../App/App"

// data
const daomaker = {
  href: "https://daomaker.com/company/resource-finance/",
  pngSrcName: "doa-maker-logo_e2itef.png",
  webpSrcName: "doa-maker-logo_bno9wi.webp",
  altText: "daomaker logo",
  price: "$0.45",
  allocation: "2,722,222",
  requirements: "KYC, non US-person, Stake DAO tokens",
}
const infinitypad = {
  href: "https://infinitypad.com/company/resource-finance-ipad/",
  pngSrcName: "infinitypad_yk1njl.png",
  webpSrcName: "infinitypad_ujxbeb.webp",
  altText: "infinitypad logo",
  price: "$0.45",
  allocation: "222,222",
  requirements: "KYC, non US-person, Stake IPAD tokens",
}
const gateio = {
  href: "https://gate.io/",
  pngSrcName: "gateio_x4vsvy_azw11u.png",
  webpSrcName: "gateio_x4vsvy_g3xpb1.webp",
  altText: "gate.io logo",
  price: "$0.45",
  allocation: "222,222",
  requirements: "KYC, non US-person",
}
const anypad = {
  href: "https://app.anypad.io/#/",
  pngSrcName: "anypad_mqlekf.png",
  webpSrcName: "anypad_rfh5sr.webp",
  altText: "anypad logo",
  price: "$0.45",
  allocation: "166,666",
  requirements: "KYC, non US-person",
}

const tgePads = [daomaker, infinitypad, gateio, anypad]

class TGE extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.renderTGETableRows = this.renderTGETableRows.bind(this)
  }

  renderTGETableRows() {
    return tgePads.map((pad) => (
      <div className={"tge-table-row"}>
        <a
          key={pad.altText}
          className={"launchpad-logo"}
          href={pad.href}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <picture>
            <source srcSet={getCloudinaryImagePath(pad.webpSrcName)} type={"image/webp"} />
            <source srcSet={getCloudinaryImagePath(pad.pngSrcName)} type={"image/png"} />
            <img src={getCloudinaryImagePath(pad.pngSrcName)} alt={pad.altText} />
          </picture>
        </a>
        <p>{pad.price}</p>
        <p>{pad.allocation}</p>
        <p>{pad.requirements}</p>
      </div>
    ))
  }

  render() {
    return (
      <section id={"tge"}>
        <h4> {"TGE Links & Information"} </h4>
        <p> {"November 17th"} </p>
        <div id={"tge-table"}>
          <div id={"tge-table-header"}>
            <p>Venue</p>
            <p>Price on LaunchPad</p>
            <p>Allocation (SOURCE)</p>
            <p>Requirements</p>
          </div>
          {this.renderTGETableRows()}
        </div>
      </section>
    )
  }
}

export default TGE
