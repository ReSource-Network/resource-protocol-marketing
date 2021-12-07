import React from "react"
import "./Background.css"
import { getCloudinaryImagePath } from "../App/App"

// radial gradients
const pink0SrcName = "./gradient-spheres/pink-0_dhajsi.svg"
const purple0SrcName = "./gradient-spheres/purple-0_sgfzis.svg"
const purple1SrcName = "./gradient-spheres/purple-1_m8sgb3.svg"
const purple3SrcName = "./gradient-spheres/purple-3_getywv.svg"
const purple4SrcName = "./gradient-spheres/purple-4_fjddm0.svg"
const yellow0SrcName = "./gradient-spheres/yellow-0_yme947.svg"
const yellow1SrcName = "./gradient-spheres/yellow-1_yohyfj.svg"
const yellow2SrcName = "./gradient-spheres/yellow-2_dyulyb.svg"

// [zPositions , scale]
const zPositions = [
    ["0", 1],
    ["-1", 2],
    ["-2", 3],
]

const gradients = [
    { id: "purple0", srcName: purple0SrcName, zPosition: zPositions[0] },
    { id: "purple1", srcName: purple1SrcName, zPosition: zPositions[1] },
    { id: "purple3", srcName: purple3SrcName, zPosition: zPositions[1] },
    { id: "purple4", srcName: purple4SrcName, zPosition: zPositions[1] },
    { id: "pink0", srcName: pink0SrcName, zPosition: zPositions[2] },
    { id: "yellow0", srcName: yellow0SrcName, zPosition: zPositions[0] },
    { id: "yellow1", srcName: yellow1SrcName, zPosition: zPositions[0] },
    { id: "yellow2", srcName: yellow2SrcName, zPosition: zPositions[1] },
]

export const Background = () => {

    const getTransitionDelay = () => {
        return Math.random() < 0 ? "0.1s" : "0.5s"
    }

    // render
    const renderRadialGradients = () => {
        return gradients.map((gradient) => (
            <img
                key={gradient.id}
                id={gradient.id}
                src={getCloudinaryImagePath(gradient.srcName)}
                style={{
                    transform: `translateZ(${gradient.zPosition[0]}px) scale(${gradient.zPosition[1]})`,
                    WebkitTransform: `translateZ(${gradient.zPosition[0]}px) scale(${gradient.zPosition[1]})`,
                    transitionDelay: `${getTransitionDelay()}s`,
                }}
                alt={"background-radial-gradient"}
            />
        ))
    }

    return <div id={"parallax-container"}>
        {renderRadialGradients()}
    </div>
}

export default Background
