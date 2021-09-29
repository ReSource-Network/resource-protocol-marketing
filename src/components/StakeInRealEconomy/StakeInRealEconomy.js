import React from 'react';
import './StakeInRealEconomy.css'
import {getCloudinaryImagePath} from "../App/App";

// animation images
const cityImgSrcName = 'city-buildings_i3hjgz.svg'


class StakeInRealEconomy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <section
                id={'stakeInRealEconomy'}
            >
                <h4>
                    { 'Stake into the real economy' }
                </h4>

                <img
                    src={getCloudinaryImagePath(cityImgSrcName)}
                    alt={'city buildings illustration'}
                    id={'StakeInRealEconomyCityIllustration'}
                />
            </section>
        )
    };

}

export default StakeInRealEconomy;
