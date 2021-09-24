import React from 'react';
import './ReInventingMoney.css'

// images
import reInventingMoneyImgSrc from './images/reInventingMoney.svg'
import reInventingFinanceImgSrc from './images/reInventingFinance.svg'
import uncollatoralizedImgSrc from './images/uncollateralized.svg'
import intelligentlyInclusiveImgSrc from './images/intelligentlyInclusive.svg'
// section padding img
import containerPaddingImgSrc from './images/container-padding.svg'

// data
const fundingGrowthText =
    { titleText: 'Funding growth together'
    , descriptionText:
              'Hundreds of businesses, SaaS companies and freelancers already rely on '
            + 'ReSource to grow their operations without being dependent on traditional finance.'
    }

const reInventingMoney =
{ titleText: 'ReInventing Money'
, descriptionText:
      'The ReSource Protocol gives rise to a new class of stablecoins, '
    + 'achieving autonomous stability. ReSource stablecoins are not '
    + 'artificially pegged to fiat or other assets, but derive their '
    + 'stable value from the goods and services traded with them.'
, imgSrc: reInventingMoneyImgSrc
, altText: 'person with idea illustrated icon'
}
const reInventingFinance =
{ titleText: 'ReInventing Finance'
, descriptionText:
      'The ReSource Protocol does not only disarm intermediaries and custodians, '
    + 'but decentralizes the logic of credit itself, effectively removing the creditor from the equation.'
    , imgSrc: reInventingFinanceImgSrc
    , altText: 'presentation with charts illustrated icon'
}
const uncollateralized =
{ titleText: 'Uncollateralized, Secure & Decentralized'
, descriptionText:
      'A distributed network of underwriters allows for the issuance of uncollateralized credit'
    + 'without compromising on decentralization and security. '
, imgSrc: uncollatoralizedImgSrc
, altText: 'uncollateralized illustrated icon'
}
const intelligentlyInclusive =
{ titleText: 'Intelligently Inclusive'
, descriptionText:
    'Instead of relying on credit scoring agencies, participants can utilize their social capital, '
    + 'vouch for each other, or use a variety of reputation mechanisms to prove credit worthiness. '
    + 'This isn’t only more fair than traditional credit scores, but also more smart and reliable.'
, imgSrc: intelligentlyInclusiveImgSrc
, altText: 'laptop cloud messages illustrated icon'
}

const reInventingMoneyContent =
    [ reInventingMoney
    , reInventingFinance
    , uncollateralized
    , intelligentlyInclusive
    ]


class ReInventingMoney extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.renderReInventingMoneyContent = this.renderReInventingMoneyContent.bind(this);
    }

    // render

    renderReInventingMoneyContent()
    { return ( reInventingMoneyContent.map ( content =>
        <div
            className =
                { 'reInventingMoneyContentItemContainer'
                }
            key =
                { content.descriptionText.slice(0, 50)
                }
        >
            <img
                src =
                    { content.imgSrc
                    }
                alt =
                    { content.altText
                    }
                key =
                    { content.altText
                    }
                />
            <h6
                key =
                    { content.titleText
                    }
                >
                { content.titleText
                }
            </h6>
            <p
                key =
                    { content.descriptionText.slice(0, 50)
                    }
            >
                { content.descriptionText
                }
            </p>
        </div>
    ) ) }


    render() {
        return (
            <section
                id={'reInventingMoney'}
            >
                <img
                    className={ 'containerPadding' }
                    src={ containerPaddingImgSrc }
                    alt={'fancy container padding'}
                />
                <div
                    id={'reInventingMoneyContent'}
                    >
                    { this.renderReInventingMoneyContent() }
                    <div
                        id={'fundingGrowthTogetherContent'}
                    >
                        <h4>
                            {fundingGrowthText.titleText}
                        </h4>
                        <p>
                            {fundingGrowthText.descriptionText}
                        </p>
                    </div>
                </div>
                <img
                    className={ 'containerPadding' }
                    src={ containerPaddingImgSrc }
                    alt={'fancy container padding'}
                />
            </section>
        )
    }
}

export default ReInventingMoney;
