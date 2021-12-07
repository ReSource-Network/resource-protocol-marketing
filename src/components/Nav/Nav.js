import React, {useState} from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons"
import "./Nav.css"
import { getCloudinaryImagePath } from "../App/App"

//images
const logoSrcName = "resource-finance-logo_bts9hl.svg"

// data
const telegram = {
    href: "https://t.me/theresourcenetwork",
    buttonText: "telegram",
    icon: faTelegram,
}
const discord = {
    href: "https://discord.gg/UuTCRuuZMP",
    buttonText: "discord",
    icon: faDiscord,
}
const contact = {
    href: "mailto:contact@resourcenetwork.co",
    buttonText: "contact",
    icon: faEnvelope,
}

const navLinks = [discord, telegram, contact]

export const Nav = () => {

    // handle event
    const handleClickLogo = event => {
        event.preventDefault()
    }

    // render
    const renderLinks = () => {
        return navLinks.map((navLink) => (
            <a
                href={navLink.href}
                target={"_blank"}
                rel={"noreferrer"}
                id={navLink.buttonText}
                key={navLink.buttonText}
            >
                <FontAwesomeIcon icon={navLink.icon} />
            </a>
        ))
    }

    const renderLogo = () => {
        return (
            <Link to={"/"} onClick={handleClickLogo}>
                {
                    <img
                        src={getCloudinaryImagePath(logoSrcName)}
                        alt={"resource finance logo"}
                        id={"logo"}
                    />
                }
            </Link>
        )
    }

    return (
        <nav id={"nav"}>
            {renderLogo()}
            <div id={"nav-link-list"}>
                {renderLinks()}
            </div>
        </nav>
    )
}

export default Nav
