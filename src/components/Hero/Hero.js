import React from 'react';
import './Hero.css'
import Button from "../Button/Button";
import {getCloudinaryImagePath} from "../App/App";

// images
const creditCardsPngSrcName = 'crypto-credit-cards_iabj40.png'
const creditCardsWebpSrcName = 'crypto-credit-cards_smht6f.webp'

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <section
                id={'hero'}
            >
                {/* CREDIT CARDS IMAGE */}
                <picture
                    className={'creditCardImg'}
                >
                    <source
                        srcSet={getCloudinaryImagePath(creditCardsWebpSrcName)}
                        type={'image/webp'}
                    />
                    <source
                        srcSet={getCloudinaryImagePath(creditCardsPngSrcName)}
                        type={'image/png'}
                    />
                    <img
                        alt={'crypto credit line card with negative balance'}
                        src={getCloudinaryImagePath(creditCardsPngSrcName)}
                        className={'creditCardImg'}
                    />
                </picture>

                {/* COPY */}
                <header>
                    <h1>
                        { 'Loans without interest payments'
                        }
                    </h1>

                    <h2>
                        { 'turn untapped resources into '
                        }
                        <span>
                            { 'liquidity'
                            }
                        </span>
                    </h2>

                    {/* BUTTONS */}
                    <div
                        id =
                            { 'hero-buttons-container'
                            }
                    >
                        <Button
                            text = 'How it works'
                            type = 'cta'
                            color = 'default'
                            iconName = 'arrowDown'
                            href = '#howItWorks'
                        />

                        <Button
                            text = 'Whitepaper'
                            type = 'cta'
                            color = 'primary'
                            iconName = 'externalLink'
                        />
                    </div>
                </header>

            </section>
        )
    };

}

export default Hero;
