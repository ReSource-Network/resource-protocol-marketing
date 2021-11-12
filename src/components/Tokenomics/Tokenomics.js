import React from "react"
import "./Tokenomics.css"
import {getCloudinaryImagePath} from "../App/App";

// data
const allocation = {
    jpgSrcName: "allocations_oigoz2.png",
    webpSrcName: "allocations_kornsk.webp",
    altText: "allocation image"
}
const distribution = {
    jpgSrcName: "distribution_lklu40.jpg",
    webpSrcName: "distribution_v86pqa.webp",
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
                    <source srcSet={getCloudinaryImagePath(tokenomic.jpgSrcName)} type={"image/jpg"} />
                    <img src={getCloudinaryImagePath(tokenomic.jpgSrcName)} alt={tokenomic.altText} />
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
