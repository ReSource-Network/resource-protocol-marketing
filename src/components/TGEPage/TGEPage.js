import React from "react"
import "./TGEPage.css"
import TGE from "../TGE/TGE";
import Tokenomics from "../Tokenomics/Tokenomics";
import SOURCEImg from "./SOURCE.svg"
import DEXES from "../DEXES/DEXES";
import SourceUtility from "../SourceUtility/SourceUtility";

class TGEPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id={'tgePage'}>
                <header>
                    <img src={SOURCEImg} alt="SOURCE token"/>
                    <h1> {"SOURCE"} </h1>
                    <p>(ERC20, Celo)</p>
                    <h2> {"The Fuel of the ReSource Economy"} </h2>
                </header>
                <TGE />
                <DEXES />
                <SourceUtility />
                <Tokenomics />
            </div>
        )
    }
}

export default TGEPage
