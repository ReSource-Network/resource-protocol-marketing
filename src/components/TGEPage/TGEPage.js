import React from "react"
import "./TGEPage.css"
import TGENav from "../TGENav/TGENav"
import TGE from "../TGE/TGE"
import Tokenomics from "../Tokenomics/Tokenomics"
import SOURCEImg from "./SOURCE.svg"
import DEXES from "../DEXES/DEXES"
import SourceUtility from "../SourceUtility/SourceUtility"
import Incentives from "../Incentives/Incentives"
import Roadmap from "../Roadmap/Roadmap";

export const TGEPage = () => {
    return (
        <div id={"tgePage"}>
            <TGENav />
            <header>
                <img src={SOURCEImg} alt="SOURCE token" />
                <h1> {"SOURCE"} </h1>
                <p>(ERC20, Celo)</p>
                <div id={"contracts"}>
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
                        <a href="">
                            <span>ETH</span>
                            (coming soon)
                        </a>
                    </div>
                </div>
                <h2> {"The Fuel of the ReSource Economy"} </h2>
            </header>
            <DEXES />
            <Incentives />
            <TGE />
            <SourceUtility />
            <Tokenomics />
            <Roadmap />
        </div>
    )
}

export default TGEPage
