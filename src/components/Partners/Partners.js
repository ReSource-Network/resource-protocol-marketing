import React from 'react';
import './Partners.css'

// images
import celoImgSrc from './images/celo-logo.png'
import tellerImgSrc from './images/teller-logo.png'
import blockchainAtBerkeleyImgSrc from './images/blockchain-at-berkeley-logo.png'
import irtaImgSrc from './images/irta-logo.png'


// data
const celo =
    { href: 'https://celo.org/'
    , imgSrc: celoImgSrc
    , altText: 'celo logo'
    }
const teller =
    { href: 'https://teller.finance/'
    , imgSrc: tellerImgSrc
    , altText: 'teller finance logo'
    }
const blockchainAtBerkeley =
    { href: 'https://blockchain.berkeley.edu/'
    , imgSrc: blockchainAtBerkeleyImgSrc
    , altText: 'blockchain at berkeley logo'
    }
const irta =
    { href: 'https://irta.com/'
    , imgSrc: irtaImgSrc
    , altText: 'irta logo'
    }

const partners =
    [ celo
    , teller
    , blockchainAtBerkeley
    , irta
    ]



class Partners extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.renderPartnerImages = this.renderPartnerImages.bind(this);
    }

    renderPartnerImages()
    { return ( partners.map (partner =>
        <a
            key={partner.titleText}
            className={'partnerItem'}
            href={partner.href}
            target={'_blank'}
            rel={'noreferrer'}
        >
            <img
                src={partner.imgSrc}
                alt={partner.altText}
            />
        </a>
    ) ) }

    render() {
        return (
            <section
                id={'partners'}
            >
                <h4> { 'Partners' } </h4>
                <div
                    id={'partnersItemsContainer'}
                >
                    {this.renderPartnerImages()}
                </div>
            </section>
        )
    }
}

export default Partners;
