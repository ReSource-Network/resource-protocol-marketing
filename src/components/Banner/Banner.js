import React from "react"
import "./Banner.css"
import { Link } from "react-router-dom"

export const Banner = () => {
    return (
        <div id={'banners-wrap'}>
            <section id={"banner-container"}>
                <div id={"banner"}>
                    <div id={"banner-text"}>
                        <h4> {"SOURCE"} </h4>
                        <p> {"- The Fuel of the ReSource Economy"} </p>
                    </div>
                    <Link to={"/TGE"}>Learn about the TGE</Link>
                </div>
            </section>

            <section id={"contracts"}>
                <p id={'contracts-title'}>Contracts:</p>

                <div className={'contract-item'}>
                    <a
                        href="https://explorer.celo.org/token/0x74c0C58B99b68cF16A717279AC2d056A34ba2bFe/token-transfers"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        <span>Celo</span>
                        (0x74c0...2bFe)
                    </a>
                </div>

                <div className={'contract-item'}>
                    <a
                        href="https://bscscan.com/token/0xea136fc555e695ba96d22e10b7e2151c4c6b2a20"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        <span>BSC</span>
                        (0xea13...2a20)
                    </a>
                </div>

                <div className={'contract-item'}>
                    {/* <a
                    href="https://etherscan.io/token/0x8d2b3350edf2e8a0bf9deee1dd215bcebc772048"
                    target={"_blank"}
                    rel="noreferrer"
                    > */}
                    <a href="" >
                        <span>ETH</span>
                        (coming soon)
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Banner
