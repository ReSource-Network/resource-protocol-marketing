import "./FutureIsMutual.css"
import React from "react"
import axios from "axios"
import { customAlphabet } from "nanoid"
import { getCloudinaryImagePath } from "../App/App"
import { useState } from "react"

// images
const futureIsMutualImgSrcName = "future-is-mutual_thynoz.svg"

// for email capture
const nanoid = customAlphabet("1234567890abcdef", 10)
const apiKey = process.env.REACT_APP_CIO_API_KEY
const siteId = process.env.REACT_APP_CIO_SITE_ID
const writeToken = process.env.REACT_APP_SEGMENT_WRITE_KEY

export const FutureIsMutual = () => {
    const [email, setEmail] = useState()
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { value } = e.target
        const emailState = value.trim().toLowerCase()
        setEmail(emailState)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await captureFormSubmissionEmail(email)
            setSubmitted(true)
            setEmail("")
        } catch (e) {
            console.log("Error capturing email: ", e)
        }
    }

    return (
        <section id={"futureIsMutual"}>
            <img
                src={getCloudinaryImagePath(futureIsMutualImgSrcName)}
                id={"futureIsMutualImg"}
                alt={"person walking through space stepping on planets"}
            />
            <div id={"futureIsMutualContentContainerContainer"}>
                <div id={"futureIsMutualContentContainer"}>
                    <h4> {"The future is mutual"}</h4>

                    <form onSubmit={handleSubmit} onChange={handleChange}>
                        <input id={"email"} type={"email"} value={email} placeholder={"Enter email"} />
                        <input id={"submit"} type={"submit"} value={submitted ? "Submitted!" : "Take part"} />
                    </form>
                </div>
            </div>
        </section>
    )
}

// for email capture
const captureFormSubmissionEmail = async (email) => {
    const customerIOConfig = {
        method: "POST",
        url: "https://track.customer.io/api/v1/forms/resource_protocol_email/submit",
        crossDomain: true,
        mode: "CORS",
        headers: {
            "Content-Type": "text/plain",
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
    }

    const segmentConfig = {
        method: "POST",
        url: "https://api.segment.io/v1/track",
        crossDomain: true,
        mode: "CORS",
        headers: {
            "Content-Type": "application/json",
        },
        auth: {
            username: writeToken,
            password: "",
        },
        data: JSON.stringify({
            userId: nanoid(),
            event: "EmailCapture-ResourceProtocolMarketing",
            properties: {
                email: email,
                tags: "ReSource Protocol Marketing Capture",
            },
        }),
    }

    try {
        return await Promise.all([axios(segmentConfig), axios(customerIOConfig)])
    } catch (e) {
        console.log("Error submitting to segment & customerio: ", e)
    }
}

export default FutureIsMutual
