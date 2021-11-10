import React from "react"
import "./TGEPage.css"
import {getCloudinaryImagePath} from "../App/App";
import TGE from "../TGE/TGE";
import Staking from "../Staking/Staking";
import Tokenomics from "../Tokenomics/Tokenomics";
import CEX from "../CEX/CEX";

class TGEPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id={'tgePage'}>
                <h1> {"SOURCE TGE"} </h1>
                <h2> {"The Fuel of the ReSource Economy"} </h2>
                <TGE />
                <CEX />
                <Staking />
                <Tokenomics />
            </div>
        )
    }
}

export default TGEPage
