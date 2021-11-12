import React from "react"
import "./Stakeholders.css"

// images
import { getCloudinaryImagePath } from "../App/App"

// data
const futurePerfectVentures = {
  href: "https://www.futureperfectventures.com",
  pngSrcName: "stakeholders/future-perfect-ventures_ynfyvv.png",
  webpSrcName: "stakeholders/future-perfect-ventures_wwktot.webp",
  altText: "future perfect ventures logo",
}
const followTheSeed = {
  href: "https://followtheseed.vc",
  pngSrcName: "stakeholders/follow-the-seed_czxcpk.png",
  webpSrcName: "stakeholders/follow-the-seed_bs5xyg.webp",
  altText: "follow the seed logo",
}
const davoaCapital = {
  href: "https://www.davoa.capital",
  pngSrcName: "stakeholders/davoa_jv2heg.png",
  webpSrcName: "stakeholders/davoa_vamszo.webp",
  altText: "davoa capital logo",
}
const exNetworkCapital = {
  href: "https://exnetworkcapital.com",
  pngSrcName: "stakeholders/exnetwrok-capital_y1cbtk.png",
  webpSrcName: "stakeholders/exnetwrok-capital_jqzljc.webp",
  altText: "ex network capital logo",
}
// const floemCapital = {
//   href: "https://www.floem.capital",
//   pngSrcName: "stakeholders/floem-capital_kc9njp.png",
//   webpSrcName: "stakeholders/floem-capital_kdv9ka.webp",
//   altText: "floem capital logo",
// }
const floriVentures = {
  href: "https://www.floriventures.com",
  pngSrcName: "stakeholders/flori-ventures-black_hhccxx.png",
  webpSrcName: "stakeholders/flori-ventures-black_lhevsk.webp",
  altText: "flori ventures logo",
}
const ngcVentures = {
  href: "https://ngc.fund/home",
  pngSrcName: "stakeholders/ngc_tnz9kt.png",
  webpSrcName: "stakeholders/ngc_rt9ib1.webp",
  altText: "davoa capital logo",
}
const eutopiaVentures = {
  href: "https://eutopia.vc",
  pngSrcName: "stakeholders/eutopia-vc-logo_apaxlc.png",
  webpSrcName: "stakeholders/eutopia-vc-logo_wqbypp.webp",
  altText: "Eutopia Ventures logo",
}
const dsrvLabs = {
  href: "https://www.dsrvlabs.com/",
  pngSrcName: "stakeholders/dsrv-logo_veu2n2.png",
  webpSrcName: "stakeholders/dsrv-logo_ogw8pl.webp",
  altText: "DSRV Labs logo",
}

const stakeholders = [
  futurePerfectVentures,
  followTheSeed,
  davoaCapital,
  exNetworkCapital,
  floriVentures,
  ngcVentures,
  eutopiaVentures,
  dsrvLabs,
]

class Stakeholders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.renderStakeholderImages = this.renderStakeholderImages.bind(this)
  }

  renderStakeholderImages() {
    return stakeholders.map((stakeholder) => (
      <a
        key={stakeholder.altText}
        className={"stakeholderItem"}
        href={stakeholder.href}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <picture>
          <source srcSet={getCloudinaryImagePath(stakeholder.webpSrcName)} type={"image/webp"} />
          <source srcSet={getCloudinaryImagePath(stakeholder.pngSrcName)} type={"image/png"} />
          <img src={getCloudinaryImagePath(stakeholder.pngSrcName)} alt={stakeholder.altText} />
        </picture>
      </a>
    ))
  }

  render() {
    return (
      <section id={"stakeholders"}>
        <h4> {"Stakeholders"} </h4>
        <div id={"stakeholdersItemsContainer"}>{this.renderStakeholderImages()}</div>
      </section>
    )
  }
}

export default Stakeholders
