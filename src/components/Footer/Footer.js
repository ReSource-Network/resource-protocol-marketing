import React, {useState} from "react"
import "./Footer.css"
import { getCloudinaryImagePath } from "../App/App"

// images
const logosImgSrcName = "footer-logos_bzcfwy.svg"

export const Footer = () => {

    return (
        <footer id={"footer"}>
            <img
                id={"footer-logos"}
                src={getCloudinaryImagePath(logosImgSrcName)}
                alt={"resource network logos"}
            />
            <div>
                <p>
                    <span>&copy;</span> ReSource Network
                </p>
                <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    style={{ color: "white", textDecoration: "underline" }}
                    href={"https://resourcenetwork.co/"}
                >
                    <p>{"resourcenetwork.co"}</p>
                </a>
            </div>
        </footer>
    )
}

export default Footer
