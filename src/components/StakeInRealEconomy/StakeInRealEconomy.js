import React from 'react';
import './StakeInRealEconomy.css'
import {getCloudinaryImagePath} from "../App/App";

// animation images
const cityImgSrcName = 'city-buildings_i3hjgz.svg'

// text
const paragraphCopy =
      'ReSource staking rewards stem from the activity of real world businesses -'
    + ' Brick and mortar shops, SaaS providers, and utility companies.'
    + ' Even if crypto enters deep winter,'
    + ' Bitcoin goes sideways and the DeFi space contracts,'
    + ' ReSource staking pools remain exposed to real enterprises,'
    + ' with real customers and real products.'


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

                <p>
                    {paragraphCopy}
                </p>

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
