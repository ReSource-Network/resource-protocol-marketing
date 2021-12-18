import React from "react"
import "./Partners.css"

// images
import { getCloudinaryImagePath } from "../App/App"

// data
const celo = {
    href: "https://celo.org/",
    pngSrcName: "logos/celo-logo-white_qvxpw3.png",
    webpSrcName: "logos/celo-logo-white_hfsqc8.webp",
    altText: "celo logo",
}
const teller = {
    href: "https://teller.finance/",
    pngSrcName: "logos/teller-logo-white_jp2g3w.png",
    webpSrcName: "logos/teller-logo-white_tqbibw.webp",
    altText: "teller finance logo",
}
const blockchainAtBerkeley = {
    href: "https://blockchain.berkeley.edu/",
    pngSrcName: "logos/bab-logo-white_psk3ux.png",
    webpSrcName: "logos/bab-logo-white_uttkzf.webp",
    altText: "blockchain at berkeley logo",
}
const irta = {
    href: "https://irta.com/",
    pngSrcName: "logos/irta-logo-white_a2waed.png",
    webpSrcName: "logos/irta-logo-white_fzx9jr.webp",
    altText: "irta logo",
}
const doaMaker = {
    href: "https://daomaker.com/",
    pngSrcName: "logos/doa-maker-logo-white_pftz3q.png",
    webpSrcName: "logos/doa-maker-logo-white_dlopms.webp",
    altText: "doa maker logo",
}

const partners = [celo, teller, doaMaker, blockchainAtBerkeley, irta]

export const Partners = () => {
    const renderPartnerImages = () => {
        return partners.map((partner) => (
            <a
                key={partner.altText}
                className={"partnerItem"}
                href={partner.href}
                target={"_blank"}
                rel={"noreferrer"}
            >
                <picture>
                    <source srcSet={getCloudinaryImagePath(partner.webpSrcName)} type={"image/webp"} />
                    <source srcSet={getCloudinaryImagePath(partner.pngSrcName)} type={"image/png"} />
                    <img src={getCloudinaryImagePath(partner.pngSrcName)} alt={partner.altText} />
                </picture>
            </a>
        ))
    }

    return (
        <section id={"partners"}>
            <h4> {"Partners"} </h4>
            <div id={"partnersItemsContainer"}>{renderPartnerImages()}</div>
        </section>
    )
}

export default Partners
