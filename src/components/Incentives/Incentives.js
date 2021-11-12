import React from "react"
import "./Incentives.css"
import { getCloudinaryImagePath } from "../App/App"

// data
const ubeswap = {
  href: "https://ubeswap.org/",
  pngSrcName: "ubeswap_cqcrvk.png",
  webpSrcName: "ubeswap_tdvjp1.webp",
  altText: "ubeswap logo",
  tokenPair: "SOURCE / mcUSD",
}

const celoToken = {
  pngSrcName: "asset_CELO_h8hu7a.png",
  webpSrcName: "asset_CELO_ljji6c.webp",
  rewardAmount: "7,700 CELO / month",
  altText: "celo token",
}
const sourceToken = {
  pngSrcName: "SOURCE_64px_lsxj5s.png",
  webpSrcName: "SOURCE_64px_y8e95t.webp",
  rewardAmount: "50,000 SOURCE / month",
  altText: "source token",
}
const ubeToken = {
  pngSrcName: "asset_UBE_yvuy1g.png",
  webpSrcName: "asset_UBE_zyliqj.webp",
  rewardAmount: "26,160 UBE / month",
  altText: "ubeswap token",
}

let incentiveRewards = [sourceToken, ubeToken, celoToken]

class Incentives extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderIncentiveRewards() {
    return incentiveRewards.map((reward) => (
      <div className={"incentives-reward"}>
        <p>{reward.rewardAmount}</p>

        <picture>
          <source srcSet={getCloudinaryImagePath(reward.webpSrcName)} type={"image/webp"} />
          <source srcSet={getCloudinaryImagePath(reward.pngSrcName)} type={"image/png"} />
          <img src={getCloudinaryImagePath(reward.pngSrcName)} alt={reward.altText} />
        </picture>
      </div>
    ))
  }

  render() {
    return (
      <section id={"incentives"}>
        <h4> {"Liquidity Mining Incentives"} </h4>
        <div id={"incentives-table"}>
          <div id={"incentives-table-header"}>
            <p>Venue</p>
            <p>Token Pair</p>
            <p>Incentives</p>
          </div>
          <div className={"incentives-table-row"}>
            <a
              key={ubeswap.altText}
              className={"incentives-logo"}
              href={ubeswap.href}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <picture>
                <source srcSet={getCloudinaryImagePath(ubeswap.webpSrcName)} type={"image/webp"} />
                <source srcSet={getCloudinaryImagePath(ubeswap.pngSrcName)} type={"image/png"} />
                <img src={getCloudinaryImagePath(ubeswap.pngSrcName)} alt={ubeswap.altText} />
              </picture>
            </a>

            <p>{ubeswap.tokenPair}</p>

            <div id={"incentives-rewards"}>{this.renderIncentiveRewards()}</div>
          </div>
        </div>
      </section>
    )
  }
}

export default Incentives
