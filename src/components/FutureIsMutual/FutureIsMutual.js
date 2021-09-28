import React from 'react';
import axios from 'axios';
import {authToken} from "../App/App";
import './FutureIsMutual.css'

// images
import futureIsMutualImgSrc from './images/future-is-mutual.svg'

const captureUserEmail = async (email) => {
    const axiosConfig = {
        method: "PUT",
        url: "https://beta-api.customer.io/v1/api/collections/<COLLECTION_ID>",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + authToken,
        },
        data: {
            email: email,
        },
    };

    return axios(axiosConfig);
};


class FutureIsMutual extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    { this.setState({value: event.target.value});
    }

    handleSubmit(event)
    { event.preventDefault()
    ; captureUserEmail();
    // analytics.identify(['email'], ['options'], [callback]);
    }

    render() {
        return (
            <section
                id={'futureIsMutual'}
            >
                <img
                    src={futureIsMutualImgSrc}
                    id={'futureIsMutualImg'}
                    alt={'person walking through space stepping on planets'}
                />
                <div id={'futureIsMutualContentContainerContainer'}>
                    < div id={'futureIsMutualContentContainer'}>
                        <h6> { 'The future is mutual' } </h6>

                        <form
                            action={this.handleSubmit}
                            >
                            <input
                                id={'email'}
                                type={'email'}
                            />
                            <input
                                id={'submit'}
                                type={'submit'}
                            />
                        </form>

                    </div>
                </div>
            </section>
        )
    }
}

export default FutureIsMutual;
