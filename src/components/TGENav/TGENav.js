import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons"
import "./TGENav.css"
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

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
    }

    this.handleClickNavLink = this.handleClickNavLink.bind(this)  
    this.renderLinks = this.renderLinks.bind(this)
  }

  // handle event
  handleClickNavLink(event) {
    this.setState({ selected: event.target.id })
  }

  // render
  renderLinks() {
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

  renderLogo() {
    return (
      <Link to={"/"}>
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

  render() {
    return (
      <nav id={"nav"} className={"tgeNav"}>
        {this.renderLogo()}
        <div id={"nav-link-list"}>{this.renderLinks()}</div>
      </nav>
    )
  }
}

export default Nav
