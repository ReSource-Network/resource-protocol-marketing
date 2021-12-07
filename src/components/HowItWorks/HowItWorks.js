import React from "react"
import "./HowItWorks.css"
import { getCloudinaryImagePath } from "../App/App"

// images
const howItWorksIllustratedIconSrcName = "uncollateralized_t9z6ds.svg"
const containerPaddingImgSrcName = "container-padding_ihcaa9.svg"

// data
const howItWorksText = {
    titleText: "How it works",
    descriptionText: [
        "ReSource facilitates credit networks in which businesses extend credit to each other " +
        "- without fiat money.",
        "Instead, the ReSource protocol allows merchants to monetize what they already have: " +
        "unused inventory, free labor time, and all resources comprising their business.",
        "Participating merchants lend these unutilized resources to peers that need them, " +
        "and in return - receive what they need to expand their own business.",
        "This mutual credit system is secured by a distributed network of underwriters, " +
        "who stake to insure credit lines and receive rewards in return.",
    ],
}


export const ProtocolRoles = () => {
    const renderHowItWorksContent = () => {
        return (
            <div id={"howItWorksContent"}>
                <img
                    id={"howItWorksContentImg"}
                    src={getCloudinaryImagePath(howItWorksIllustratedIconSrcName)}
                    alt={"computer dashboard with chairs illustrated icon"}
                />
                <div id={"howItWorksContentTextContainer"}>
                    <h4 id={"howItWorksContentTitleText"}>{howItWorksText.titleText}</h4>
                    <div id={"howItWorksContentDescriptionTextContainer"}>
                        {renderHowItWorksDescriptionText()}
                    </div>
                </div>
            </div>
        )
    }

    const renderHowItWorksDescriptionText = () => {
        return howItWorksText.descriptionText.map((description) => (
            <p key={description.slice(0, 5)}>
                {description}
            </p>
        ))
    }

    return (
        <section id={"howItWorks"}>
            <img
                className={"containerPadding"}
                src={getCloudinaryImagePath(containerPaddingImgSrcName)}
                alt={"wavy container padding"}
            />
            {renderHowItWorksContent()}
            <img
                className={"containerPadding"}
                src={getCloudinaryImagePath(containerPaddingImgSrcName)}
                alt={"wavy container padding"}
            />
        </section>
    )
}

export default ProtocolRoles
