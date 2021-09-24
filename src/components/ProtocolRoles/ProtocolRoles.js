import React from 'react';
import './ProtocolRoles.css'

// animation images
import lineOfBusinessesSrc from './images/line-of-businesses.png'
import animationStillSrc from './images/animation-still.svg'

// card images
import underwritersImgSrc from './images/underwriters.svg'
import merchantsImgSrc from './images/merchants.svg'
import operatorImgSrc from './images/operator.svg'

// card data
const underwriters =
    { titleText: 'underwriters'
    , descriptionText: 'Earn rewards for validating Merchants'
    , imgSrc: underwritersImgSrc
    , imgAltText: 'laptop illustrated icon'
    }
const merchants =
    { titleText: 'merchants'
    , descriptionText: 'Access 0% interest credit lines, collateralized by their own inventory'
    , imgSrc: merchantsImgSrc
    , imgAltText: 'merchants and business owners illustrated icon'
    }
const operator =
    { titleText: 'operators'
    , descriptionText: 'Create new instances of credit networks with the ReSource protocol'
    , imgSrc: operatorImgSrc
    , imgAltText: 'router illustrated icon'
    }

const cardsContent =
    [ underwriters
    , merchants
    , operator
    ]



class ProtocolRoles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        // bind
        this.renderCards = this.renderCards.bind(this)
    }

    // render
    renderCards()
    { return ( cardsContent.map( card =>
        <div
            className =
                {'protocolRolesCard'
                }
            key =
                { card.titleText
                }
            >
            <img
                className =
                    { 'protocolRolesCardImg'
                    }
                src =
                    { card.imgSrc
                    }
                alt=
                    { card.imgAltText
                    }
            />
            <h6>
                { card.titleText
                }
            </h6>
            <p>
                { card.descriptionText
                }
            </p>
        </div>
    ) ) }

    render() {
        return (
            <section
                id={'protocolRoles'}
            >
                <img
                    src={lineOfBusinessesSrc}
                    alt={'line of merchants waiting to join network'}
                    id={'lineOfBusinesses'}
                />
                <img
                    src={animationStillSrc}
                    alt={'line of merchants waiting to join network'}
                    id={'animationStill'}
                />
                <div
                    id={'protocolRolesCards'}
                    >
                    {this.renderCards()}
                </div>
            </section>
        )
    };

}

export default ProtocolRoles;
