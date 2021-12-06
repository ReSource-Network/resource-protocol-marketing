import React from "react"
import "./Incentives.css"
import { getCloudinaryImagePath } from "../App/App"

// token rewards
const celoToken = {
  pngSrcName: "asset_CELO_h8hu7a.png",
  webpSrcName: "asset_CELO_ljji6c.webp",
  rewardAmount: "8,180 CELO / month",
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

// data
const ubeswap = {
  href: "https://ubeswap.org/",
  pngSrcName: "ubeswap_cqcrvk.png",
  webpSrcName: "ubeswap_tdvjp1.webp",
  altText: "ubeswap logo",
  tokenPair: "SOURCE / mcUSD",
  rewards: [ubeToken, celoToken, sourceToken]
}
const tokensfarm = {
  href: "https://tokensfarm.com/source/lp/1",
  pngSrcName: "tokensfarm_xwpdqg.png",
  webpSrcName: "tokensfarm_ddwqji.webp",
  altText: "tokensfarm logo",
  tokenPair: "SOURCE / BUSD",
  rewards: [sourceToken]
}

const incentives = [ubeswap, tokensfarm]


export const Incentives = () => {

  const renderIncentiveRewards = rewards => {
    return rewards.map((reward) => (
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

  const renderIncentivesRows = () => {
    return incentives.map((incentive) => (
      <div className={"incentives-table-row"}>
        <a
            key={incentive.altText}
            className={"incentives-logo"}
            href={incentive.href}
            target={"_blank"}
            rel={"noreferrer"}
        >
          <picture>
            <source srcSet={getCloudinaryImagePath(incentive.webpSrcName)} type={"image/webp"} />
            <source srcSet={getCloudinaryImagePath(incentive.pngSrcName)} type={"image/png"} />
            <img src={getCloudinaryImagePath(incentive.pngSrcName)} alt={incentive.altText} />
          </picture>
        </a>

        <p>{incentive.tokenPair}</p>

        <div id={"incentives-rewards"}>
          {renderIncentiveRewards(incentive.rewards)}
        </div>
      </div>
    ))
  }

  return (
    <section id={"incentives"}>
      <h4> {"Liquidity Mining Incentives"} </h4>
      <p> {"Thursday, November 25th"} </p>
      <div id={"incentives-table"}>
        <div id={"incentives-table-header"}>
          <p>Venue</p>
          <p>Token Pair</p>
          <p>Incentives</p>
        </div>
        {renderIncentivesRows()}
      </div>
    </section>
  )
}

export default Incentives
