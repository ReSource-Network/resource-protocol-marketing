import React from "react"
import "./Team.css"

// images
import { getCloudinaryImagePath } from "../App/App"

// data
const david = {
    href: "https://www.linkedin.com/in/davidacasey/",
    name: "David Casey",
    title: "Co-Founder & CEO",
    pngSrcName: "team/_DAVID_ceimua.png",
    webpSrcName: "team/_DAVID_aoyhis.webp",
    altText: "david casey headshot",
}
const ashley = {
    href: "https://www.linkedin.com/in/ashleybtaylor11/",
    name: "Ashley Taylor",
    title: "Co-Founder & COO",
    pngSrcName: "team/_ASHLEY_bpbefd.png",
    webpSrcName: "team/_ASHLEY_jjjs22.webp",
    altText: "ashley taylor headshot",
}
const duke = {
    href: "https://www.linkedin.com/in/dukejones/",
    name: "Duke Jones",
    title: "Co-Founder & CTO",
    pngSrcName: "team/_DUKE_qjyj20.png",
    webpSrcName: "team/_DUKE_h1jzs4.webp",
    altText: "duke jones headshot",
}
const ofir = {
    href: "https://www.linkedin.com/in/ofir-avigad-64888123/",
    name: "Ofir Avigad",
    title: "Co-Founder & CMO",
    pngSrcName: "team/_OFIR_s5eztl.png",
    webpSrcName: "team/_OFIR_wn5wkf.webp",
    altText: "ofir avigad headshot",
}
const sayer = {
    href: "https://www.linkedin.com/in/sayertindall/",
    name: "Sayer Tindall",
    title: "Director of Engineering",
    pngSrcName: "team/_SAYER_mvt6od.png",
    webpSrcName: "team/_SAYER_g3s2f4.webp",
    altText: "sayer tindall headshot",
}
const geoff = {
    href: "https://www.linkedin.com/in/iotus/",
    name: "Geoff Jensen",
    title: "Head of Product & Design",
    pngSrcName: "team/_GEOFF_sdv2vz.png",
    webpSrcName: "team/_GEOFF_ojj4wt.webp",
    altText: "geoff jensen headshot",
}
const joaquin = {
    href: "https://www.linkedin.com/in/joaquinmorenoantuña/",
    name: "Joaquin Moreno",
    title: "Head of Finance",
    pngSrcName: "team/_JOAQUIN_gto6pk.png",
    webpSrcName: "team/_JOAQUIN_pl0nzw.webp",
    altText: "joaquin moreno headshot headshot",
}
const bridger = {
    href: "https://www.linkedin.com/in/bridger-zoske/",
    name: "Bridger Zoske",
    title: "Head of Blockchain",
    pngSrcName: "team/_BRIDGER_xzfjsl.png",
    webpSrcName: "team/_BRIDGER_crikvr.webp",
    altText: "bridger zoske headshot",
}
const julian = {
    href: "https://www.linkedin.com/in/julian-feder-34497a112/",
    name: "Julian Feder",
    title: "Protocol Designer",
    pngSrcName: "team/_JULIAN_nvfb3z.png",
    webpSrcName: "team/_JULIAN_jdlinr.webp",
    altText: "julian feder headshot",
}
const joe = {
    href: "https://www.linkedin.com/in/josephsobrero/",
    name: "Joseph Sobrero",
    title: "Lead Designer",
    pngSrcName: "team/_JOE-1_jk6mne.png",
    webpSrcName: "team/_JOE_z5bekz.webp",
    altText: "joseph sobrero headshot",
}
const anna = {
    href: "https://www.linkedin.com/in/davidacasey/",
    name: "Anna Medina",
    title: "Head of HR",
    pngSrcName: "team/_ANNA_ncuxbz.png",
    webpSrcName: "team/_ANNA_fz5hfp.webp",
    altText: "anna medina headshot",
}
const nate = {
    href: "https://www.linkedin.com/in/nathaniel-furbeyre/",
    name: "Nate Furbeyre",
    title: "Full Stack Developer",
    pngSrcName: "team/_NATE_knnkwa.png",
    webpSrcName: "team/_NATE_jpruah.webp",
    altText: "nate furbeyre headshot",
}
const rachel = {
    href: "https://www.linkedin.com/in/rachel-hinds-5a9a21161/",
    name: "Rachel Hinds",
    title: "Health Benefits Coordinator",
    pngSrcName: "team/_RACHEL_b4nuea.png",
    webpSrcName: "team/_RACHEL_kl3igb.webp",
    altText: "rachel hinds headshot",
}
const nathan = {
    href: "https://www.linkedin.com/in/natephillipsco/",
    name: "Nathan Phillips",
    title: "Success Consultant",
    pngSrcName: "team/_NATHAN_zb5vzq.png",
    webpSrcName: "team/_NATHAN_jm45f2.webp",
    altText: "nathan phillips headshot",
}
const alison = {
    href: "https://www.linkedin.com/in/alisonleasher/",
    name: "Alison Sher",
    title: "Relationship Manager",
    pngSrcName: "team/alison_ned4kz.png",
    webpSrcName: "team/alison_iasuxb.webp",
    altText: "alison sher headshot",
}
const charly = {
    href: "https://www.linkedin.com/in/charlylouise/",
    name: "Charly Louise",
    title: "Creative Content Producer",
    pngSrcName: "team/charly_cilf0c.png",
    webpSrcName: "team/charly_gtsmix.webp",
    altText: "charly louise headshot",
}

const team = [
    david,
    ashley,
    duke,
    ofir,
    sayer,
    joaquin,
    bridger,
    geoff,
    julian,
    anna,
    joe,
    nate,
    rachel,
    alison,
    nathan,
    charly
]

export const Team = () => {

    const renderTeamImages = () => {
        return team.map((member) => (
            <a
                key={member.altText}
                className={"teamItem"}
                href={member.href}
                target={"_blank"}
                rel={"noreferrer"}
            >
                <picture>
                    <source srcSet={getCloudinaryImagePath(member.webpSrcName)} type={"image/webp"} />
                    <source srcSet={getCloudinaryImagePath(member.pngSrcName)} type={"image/png"} />
                    <img src={getCloudinaryImagePath(member.pngSrcName)} alt={member.altText} />
                </picture>
                <h6>{member.name}</h6>
                <p>{member.title}</p>
            </a>
        ))
    }

    return (
        <section id={"team"}>
            <h4> {"Team"} </h4>
            <div id={"teamItemsContainer"}>{renderTeamImages()}</div>
        </section>
    )
}

export default Team
