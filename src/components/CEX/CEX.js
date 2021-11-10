import React from "react"
import "./CEX.css"
import {getCloudinaryImagePath} from "../App/App";

// data
const gateio = {
    href: "https://gate.io/",
    pngSrcName: "gateio_x4vsvy_azw11u.png",
    webpSrcName: "gateio_x4vsvy_g3xpb1.webp",
    altText: "gate.io logo",
}

const cexes = [gateio]

class CEX extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    renderTGEImages() {
        return cexes.map((cex) => (
            <a
                key={cex.altText}
                className={"cexItem"}
                href={cex.href}
                target={"_blank"}
                rel={"noreferrer"}
            >
                <picture>
                    <source srcSet={getCloudinaryImagePath(cex.webpSrcName)} type={"image/webp"} />
                    <source srcSet={getCloudinaryImagePath(cex.pngSrcName)} type={"image/png"} />
                    <img src={getCloudinaryImagePath(cex.pngSrcName)} alt={cex.altText} />
                </picture>
            </a>
        ))
    }

    render() {
        return (
            <section id={'cex'}>
                <h4> {"Centralized Exchanges"} </h4>
                <p> {"November 17th"} </p>
                <div id={"cexItemsContainer"}>{this.renderTGEImages()}</div>
            </section>
        )
    }
}

export default CEX
