import React from "react"
import "./Staking.css"
import {getCloudinaryImagePath} from "../App/App";

// data
const uniswap = {
    href: "https://uniswap.org/",
    pngSrcName: "uniswap_hsyxjf.png",
    webpSrcName: "uniswap_zvlhod.webp",
    altText: "uniswap logo",
}
const ubeswap = {
    href: "https://ubeswap.org/",
    pngSrcName: "ubeswap_cqcrvk.png",
    webpSrcName: "ubeswap_tdvjp1.webp",
    altText: "ubeswap logo",
}

const dexes = [uniswap, ubeswap]

class Staking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    renderTGEImages() {
        return dexes.map((dex) => (
            <a
                key={dex.altText}
                className={"dexItem"}
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
        ))
    }

    render() {
        return (
            <section id={'dexes'}>
                <h4> {"Staking & Incentives"} </h4>
                <p> {"November 17th"} </p>
                <div id={"dexesItemsContainer"}>{this.renderTGEImages()}</div>
            </section>
        )
    }
}

export default Staking
