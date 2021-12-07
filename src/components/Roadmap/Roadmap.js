import React from "react"
import "./Roadmap.css"
import { getCloudinaryImagePath } from "../App/App"

// data

let roadmap = {
    webpSrcName: "roadmap_atrftr.webp",
    pngSrcName: "roadmap_mu4nry.png",
    altText: "resource finance roadmap image"
}


export const Roadmap = () => {
    return (
        <section id={"roadmap"}>
            <h4> {"Roadmap"} </h4>
            <picture>
                <source srcSet={getCloudinaryImagePath(roadmap.webpSrcName)} type={"image/webp"} />
                <source srcSet={getCloudinaryImagePath(roadmap.pngSrcName)} type={"image/png"} />
                <img src={getCloudinaryImagePath(roadmap.pngSrcName)} alt={roadmap.altText} />
            </picture>
        </section>
    )
}

export default Roadmap
