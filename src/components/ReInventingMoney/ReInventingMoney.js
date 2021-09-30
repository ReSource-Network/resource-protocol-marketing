import React from 'react';
import './ReInventingMoney.css';
import {getCloudinaryImagePath} from "../App/App";

// images
const reInventingMoneyImgSrcName = 'reInventingMoney_nrflaj.svg'
const reInventingFinanceImgSrcName = 'reInventingFinance_o6om23.svg'
const uncollatoralizedImgSrcName = 'uncollateralized_t9z6ds.svg'
const intelligentlyInclusiveImgSrcName = 'intelligentlyInclusive_iep5oo.svg'
// section padding img
const containerPaddingImgSrcName = 'container-padding_ihcaa9.svg'

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
, imgSrcName: reInventingMoneyImgSrcName
, altText: 'person with idea illustrated icon'
}
const reInventingFinance =
{ titleText: 'ReInventing Finance'
, descriptionText:
      'The ReSource Protocol does not only disarm intermediaries and custodians, '
    + 'but decentralizes the logic of credit itself, effectively removing the creditor from the equation.'
    , imgSrcName: reInventingFinanceImgSrcName
    , altText: 'presentation with charts illustrated icon'
}
const uncollateralized =
{ titleText: 'Uncollateralized, Secure & Decentralized'
, descriptionText:
      'A distributed network of underwriters allows for the issuance of uncollateralized credit'
    + 'without compromising on decentralization and security. '
, imgSrcName: uncollatoralizedImgSrcName
, altText: 'uncollateralized illustrated icon'
}
const intelligentlyInclusive =
{ titleText: 'Intelligently Inclusive'
, descriptionText:
    'Instead of relying on credit scoring agencies, participants can utilize their social capital, '
    + 'vouch for each other, or use a variety of reputation mechanisms to prove credit worthiness. '
    + 'This isn’t only more fair than traditional credit scores, but also smarter and more reliable.'
, imgSrcName: intelligentlyInclusiveImgSrcName
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
                    { getCloudinaryImagePath(content.imgSrcName)
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
                    src={ getCloudinaryImagePath(containerPaddingImgSrcName)}
                    alt={'fancy container padding'}
                />
                <div
                    id={'reInventingMoneyContent'}
                    >
                    { this.renderReInventingMoneyContent() }
                </div>
                <div
                    id={'fundingGrowthTogetherContainer'}
                >
                    <div id={'fundingGrowthTogetherTextContainer'}>
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
                    src={ getCloudinaryImagePath(containerPaddingImgSrcName) }
                    alt={'fancy container padding'}
                />
            </section>
        )
    }
}

export default ReInventingMoney;
