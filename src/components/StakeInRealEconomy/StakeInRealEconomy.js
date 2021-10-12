import React from 'react';
import './StakeInRealEconomy.css';
import axios from "axios";
import { customAlphabet } from 'nanoid';
import { getCloudinaryImagePath } from '../App/App';

// for email capture
const nanoid = customAlphabet("1234567890abcdef", 10);
const apiKey = process.env.REACT_APP_CIO_API_KEY;
const siteId = process.env.REACT_APP_CIO_SITE_ID;

// animation images
const cityImgSrcName = 'city-buildings_i3hjgz.svg'

// text
const paragraphCopy =
      'ReSource staking rewards stem from the activity of real world businesses -'
    + ' Brick and mortar shops, SaaS providers, and utility companies.'
    + ' Even if crypto enters deep winter,'
    + ' Bitcoin goes sideways and the DeFi space contracts,'
    + ' ReSource staking pools remain exposed to real enterprises,'
    + ' with real customers and real products.'


class StakeInRealEconomy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ email: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { email } = this.state;
        return captureFormSubmissionEmail(email);
    }

    render() {
        return (
            <section
                id={'stakeInRealEconomy'}
            >
                <h4>
                    { 'Stake into the real economy' }
                </h4>

                <p>
                    {paragraphCopy}
                </p>

                <form onSubmit={this.handleSubmit}>
                    <input
                        id={'email'}
                        type={'email'}
                        onChange={this.handleChange}
                        placeholder={'Enter email'}
                    />
                    <input
                        id={'submit'}
                        type={'submit'}
                        value={'Get TGE announcements'}
                    />
                </form>

                <img
                    src={getCloudinaryImagePath(cityImgSrcName)}
                    alt={'city buildings illustration'}
                    id={'StakeInRealEconomyCityIllustration'}
                />
            </section>
        )
    };

}

// for email capture
const captureFormSubmissionEmail = async (email) => {
    const axiosConfig = {
        method: "POST",
        url: "https://track.customer.io/api/v1/forms/resource_protocol_email/submit",
        headers: {
            "Content-Type": "application/json",
        },
        auth: {
            username: siteId,
            password: apiKey,
        },
        data: JSON.stringify({
            data: {
                email: email,
                id: nanoid(),
            },
        }),
    };

    return axios(axiosConfig);
};

export default StakeInRealEconomy;
