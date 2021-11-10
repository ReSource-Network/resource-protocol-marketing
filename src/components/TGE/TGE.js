import React from "react"
import "./TGE.css"
import {getCloudinaryImagePath} from "../App/App";

// data
const daomaker = {
    href: "https://daomaker.com/company/resource-finance/",
    pngSrcName: "doa-maker-logo_e2itef.png",
    webpSrcName: "doa-maker-logo_bno9wi.webp",
    altText: "daomaker logo",
}
const gateio = {
    href: "https://gate.io/",
    pngSrcName: "gateio_x4vsvy_azw11u.png",
    webpSrcName: "gateio_x4vsvy_g3xpb1.webp",
    altText: "gate.io logo",
}
const infinitypad = {
    href: "https://infinitypad.com/",
    pngSrcName: "infinitypad_ujxbeb.png",
    webpSrcName: "infinitypad_ujxbeb.png",
    altText: "infinitypad_ujxbeb.png"
}
const anypad = {
    href: "https://www.anypad.io/",
    pngSrcName: "anypad_mqlekf.png",
    webpSrcName: "anypad_rfh5sr.webp",
    altText: "anypad logo"
}

const tgePads = [daomaker, gateio, infinitypad, anypad]

class TGE extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    renderTGEImages() {
        return tgePads.map((pad) => (
            <a
                key={pad.altText}
                className={"tgeItem"}
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
        ))
    }

    render() {
        return (
            <section id={'tge'}>
                <h4> {"TGE Links & Information"} </h4>
                <p> {"November 17th"} </p>
                <div id={"tgeItemsContainer"}>{this.renderTGEImages()}</div>
            </section>
        )
    }
}

export default TGE
