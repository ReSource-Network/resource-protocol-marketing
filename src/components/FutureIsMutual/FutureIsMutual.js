import "./FutureIsMutual.css";
import React from "react";
import axios from "axios";
import { customAlphabet } from "nanoid";
import {getCloudinaryImagePath} from "../App/App";

// images
const futureIsMutualImgSrcName = 'future-is-mutual_thynoz.svg'

// for email capture
const nanoid = customAlphabet("1234567890abcdef", 10);
const apiKey = process.env.REACT_APP_CIO_API_KEY;
const siteId = process.env.REACT_APP_CIO_SITE_ID;



class FutureIsMutual extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ email: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { email } = this.state.email;
        return captureFormSubmissionEmail(email);
    }

    render() {
        return (
            <section id={"futureIsMutual"}>
                <img
                    src={getCloudinaryImagePath(futureIsMutualImgSrcName)}
                    id={"futureIsMutualImg"}
                    alt={"person walking through space stepping on planets"}
                />
                <div id={"futureIsMutualContentContainerContainer"}>
                    <div id={"futureIsMutualContentContainer"}>
                        <h4> {"The future is mutual"}
                        </h4>

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
                                value={'Take part'}
                            />
                        </form>
                    </div>
                </div>
            </section>
        );
    }
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

export default FutureIsMutual;
