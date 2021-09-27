import React from 'react';
import './Hero.css'
import Button from "../Button/Button";

// images
import card0ImgSrc from './images/card-0.png'
import card1ImgSrc from './images/card-1.png'

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

                <img
                    className={'creditCardImg'}
                    src={card0ImgSrc}
                    id={'card0'}
                    alt={'crypto credit line card with negative balance'}
                />

                <img
                    className={'creditCardImg'}
                    src={card1ImgSrc}
                    id={'card1'}
                    alt={'crypto credit line card with negative balance'}
                />

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
                </header>

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
            </section>
        )
    };

}

export default Hero;
