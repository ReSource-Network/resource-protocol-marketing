import React from 'react';
import './ProtocolRoles.css'

// animation images
import lineOfBusinessesSrc from './images/line-of-businesses.png'
// import animationStillSrc from './images/animation-still.svg'

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


const animationMpVideoSrc =
    'https://res.cloudinary.com/resource-network/video/upload/v1632894696/resource-protocol/animation-transparent_l25jho.mov'
const animationWebmVideoSrc =
    'https://res.cloudinary.com/resource-network/video/upload/v1632897292/resource-protocol/animation-transparent_fhcx8c.webm'



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

                <video
                    id={'animation'}
                    width={`${window.innerWidth * 0.8}`}
                    height={`${window.innerWidth * 0.8}`}
                    // controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload
                >
                    <source
                        src={animationMpVideoSrc}
                        type={'video/mp4'}
                    />
                    <source
                        src={animationWebmVideoSrc}
                        type={'video/webm'}
                    />
                    Your browser does not support the video tag.
                </video>

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
