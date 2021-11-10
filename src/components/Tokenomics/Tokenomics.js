import React from "react"
import "./Tokenomics.css"
import {getCloudinaryImagePath} from "../App/App";

// data
const allocation = {
    pngSrcName: "allocation_aqo0tl.png",
    webpSrcName: "allocation_sv81wu.png",
    altText: "allocation image"
}
const distribution = {
    pngSrcName: "distribution_ggfcny.png",
    webpSrcName: "distribution_wap4g4.webp",
    altText: "distribution image"
}

const tokenomics = [allocation, distribution]

class Tokenomics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    renderTokenomicsImages() {
        return tokenomics.map((tokenomic) => (
            <div
                key={tokenomic.altText}
                className={"tokenomicsItem"}
                href={tokenomic.href}
                target={"_blank"}
                rel={"noreferrer"}
            >
                <picture>
                    <source srcSet={getCloudinaryImagePath(tokenomic.webpSrcName)} type={"image/webp"} />
                    <source srcSet={getCloudinaryImagePath(tokenomic.pngSrcName)} type={"image/png"} />
                    <img src={getCloudinaryImagePath(tokenomic.pngSrcName)} alt={tokenomic.altText} />
                </picture>
            </div>
        ))
    }

    render() {
        return (
            <section id={'tokenomics'}>
                <h4> {"Tokenomics"} </h4>
                <div id={"tokenomicsItemsContainer"}>{this.renderTokenomicsImages()}</div>
            </section>
        )
    }
}

export default Tokenomics
