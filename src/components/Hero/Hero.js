import React from 'react';
import './Hero.css'
import Button from "../Button/Button";

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

                <header>
                    <h1>
                        { 'Credit lines without interest payments'
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
