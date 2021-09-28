import React from 'react';
import './StakeInRealEconomy.css'

// animation images
import cityIllustrationSrc from './images/buildings.svg'


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
                    src={cityIllustrationSrc}
                    alt={'city buildings illustration'}
                    id={'StakeInRealEconomyCityIllustration'}
                />
            </section>
        )
    };

}

export default StakeInRealEconomy;
