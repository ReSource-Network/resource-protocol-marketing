import React from 'react';
import './ProtocolRoles.css'
import {getCloudinaryImagePath, getCloudinaryVideoPath} from '../App/App'


// animation video
const animationMpVideoSrcName = 'hiw-animation_lvekag.mov'
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


// check for iOS
let isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

// check for Safari
const agent = navigator.userAgent.toLowerCase();
let isSafari = (agent.indexOf('safari') > -1) && (agent.indexOf('chrome') <= -1)



class ProtocolRoles extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            { width: window.innerWidth
            }

        // bind
        this.renderCards = this.renderCards.bind(this)
    }

    // window resize re-rendering
    updateDimensions = () => {
        this.setState({ width: window.innerWidth });
    };
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
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

                { isIOS && isSafari ?
                    null
                    :
                    <video
                        id={'animation'}
                        width={`${this.state.width * 0.8}`}
                        height={`${this.state.width * 0.8}`}
                        poster={'https://res.cloudinary.com/resource-network/image/upload/v1632976534/resource-protocol/animation-poster_yvjxuo.png'}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload={'true'}
                    >
                        <source
                            src={getCloudinaryVideoPath(animationMpVideoSrcName)}
                            type={'video/mp4'}
                        />
                        <source
                            src={getCloudinaryVideoPath(animationWebmVideoSrcName)}
                            type={'video/webm'}
                        />
                        Your browser does not support the video tag.
                    </video>
                }

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
