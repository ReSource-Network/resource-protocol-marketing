import React from "react"
import "./Stakeholders.css"

// images
import { getCloudinaryImagePath } from "../App/App"

// data
const celoStarter = {
    href: "https://celostarter.net",
    pngSrcName: "logos/cstarter-w_k9mm7s.png",
    webpSrcName: "logos/cstarter-w_pc8liq.webp",
    altText: "celo starter logo"
}
const futurePerfectVentures = {
    href: "https://www.futureperfectventures.com",
    pngSrcName: "logos/fpv-logo-white_iimkof.png",
    webpSrcName: "logos/fpv-logo-white_cl4ulz.webp",
    altText: "future perfect ventures logo",
}
const followTheSeed = {
    href: "https://followtheseed.vc",
    pngSrcName: "logos/follow-the-seed-white_i26mqu.png",
    webpSrcName: "logos/follow-the-seed-white_rpvtil.webp",
    altText: "follow the seed logo",
}
const davoaCapital = {
    href: "https://www.davoa.capital",
    pngSrcName: "logos/davoa-logo-white_ftd432.png",
    webpSrcName: "logos/davoa-logo-white_ugmtz6.webp",
    altText: "davoa capital logo",
}
const exNetworkCapital = {
    href: "https://exnetworkcapital.com",
    pngSrcName: "logos/exnetwrok-logo-white_tbvq5z.png",
    webpSrcName: "logos/exnetwrok-logo-white_g8gvg8.webp",
    altText: "ex network capital logo",
}
const floriVentures = {
    href: "https://www.floriventures.com",
    pngSrcName: "logos/flori-ventures-logo-white_vuhm9z.png",
    webpSrcName: "logos/flori-ventures-logo-white_uahux2.webp",
    altText: "flori ventures logo",
}
const ngcVentures = {
    href: "https://ngc.fund/home",
    pngSrcName: "logos/ngc-logo-white_bhn4qn.png",
    webpSrcName: "logos/ngc-logo-white_gxfmew.webp",
    altText: "ngc ventures logo",
}
const eutopiaVentures = {
    href: "https://eutopia.vc",
    pngSrcName: "logos/eutopia-vc-logo-white_flwz7a.png",
    webpSrcName: "logos/eutopia-vc-logo-white_tfmjsp.webp",
    altText: "Eutopia Ventures logo",
}
const dsrvLabs = {
    href: "https://www.dsrvlabs.com/",
    pngSrcName: "logos/dsrv-logo-white_dgnffa.png",
    webpSrcName: "logos/dsrv-logo-white_a6ips5.webp",
    altText: "DSRV Labs logo",
}

const stakeholders = [
    futurePerfectVentures,
    followTheSeed,
    davoaCapital,
    exNetworkCapital,
    floriVentures,
    ngcVentures,
    eutopiaVentures,
    dsrvLabs,
    celoStarter
]

export const Stakeholders = () => {
    const renderStakeholderImages = () => {
        return stakeholders.map((stakeholder) => (
            <a
                key={stakeholder.altText}
                className={"stakeholderItem"}
                href={stakeholder.href}
                target={"_blank"}
                rel={"noreferrer"}
            >
                <picture>
                    <source srcSet={getCloudinaryImagePath(stakeholder.webpSrcName)} type={"image/webp"} />
                    <source srcSet={getCloudinaryImagePath(stakeholder.pngSrcName)} type={"image/png"} />
                    <img src={getCloudinaryImagePath(stakeholder.pngSrcName)} alt={stakeholder.altText} />
                </picture>
            </a>
        ))
    }

    return (
        <section id={"stakeholders"}>
            <h4> {"Stakeholders"} </h4>
            <div id={"stakeholdersItemsContainer"}>{renderStakeholderImages()}</div>
        </section>
    )
}

export default Stakeholders
