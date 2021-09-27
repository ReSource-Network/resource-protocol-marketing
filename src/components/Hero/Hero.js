import React from 'react';
import './Hero.css'
import Button from "../Button/Button";

// images
import creditCardsImgSrc from './images/crypto-credit-cards.png'

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
                <img
                    className={'creditCardImg'}
                    src={creditCardsImgSrc}
                    id={'card1'}
                    alt={'crypto credit line card with negative balance'}
                />

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
