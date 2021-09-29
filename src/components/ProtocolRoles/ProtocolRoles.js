import React from 'react';
import './ProtocolRoles.css'
import {getCloudinaryImagePath, getCloudinaryVideoPath} from '../App/App'


// animation video
const animationMpVideoSrcName = 'hiw-animation_w8ckww.mov'
const animationWebmVideoSrcName = 'hiw-animation_i21vlx.webm'

// card data
const underwriters =
    { titleText: 'underwriters'
    , descriptionText: 'Earn rewards for validating Merchants'
    , imgSrcName: 'underwriters_hslvwx.svg'
    , imgAltText: 'laptop illustrated icon'
    }
const merchants =
    { titleText: 'merchants'
    , descriptionText: 'Access 0% interest credit lines, collateralized by their own inventory'
    , imgSrcName: 'merchants_ubguhy.svg'
    , imgAltText: 'merchants and business owners illustrated icon'
    }
const operator =
    { titleText: 'operators'
    , descriptionText: 'Create new instances of credit networks with the ReSource protocol'
    , imgSrcName: 'operator_yl0wgo.svg'
    , imgAltText: 'router illustrated icon'
    }

const cardsContent =
    [ operator
    , merchants
    , underwriters
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
                    { getCloudinaryImagePath(card.imgSrcName)
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
                        src={getCloudinaryVideoPath(animationWebmVideoSrcName)}
                        type={'video/webm'}
                    />
                    <source
                        src={getCloudinaryVideoPath(animationMpVideoSrcName)}
                        type={'video/mp4'}
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
