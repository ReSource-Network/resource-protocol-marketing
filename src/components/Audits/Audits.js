import React from "react"
import "./Audits.css"

// images
import { getCloudinaryImagePath } from "../App/App"

// data
const hacken = {
  href: "/ReSourceNetwork_Hacken_Audit_Report.pdf",
  pngSrcName: "hacken_rf7deo.png",
  webpSrcName: "hacken_apedrr.webp",
  altText: "hacken logo",
}
const ambisafe = {
  href: "https://ambisafe.com/",
  pngSrcName: "ambisafe_tpa5ap.png",
  webpSrcName: "ambisafe_eesdkv.webp",
  altText: "ambisafe logo",
}

const audits = [hacken, ambisafe]

class Audits extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.renderAuditImages = this.renderAuditImages.bind(this)
  }

  renderAuditImages() {
    return audits.map((audit) => (
      <a
        key={audit.altText}
        className={"auditItem"}
        href={audit.href}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <picture>
          <source srcSet={getCloudinaryImagePath(audit.webpSrcName)} type={"image/webp"} />
          <source srcSet={getCloudinaryImagePath(audit.pngSrcName)} type={"image/png"} />
          <img src={getCloudinaryImagePath(audit.pngSrcName)} alt={audit.altText} />
        </picture>
      </a>
    ))
  }

  render() {
    return (
      <section id={"audits"}>
        <h4> {"Audits"} </h4>
        <div id={"auditsItemsContainer"}>{this.renderAuditImages()}</div>
      </section>
    )
  }
}

export default Audits
