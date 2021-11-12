import React from "react"
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

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
    }

    this.handleClickNavLink = this.handleClickNavLink.bind(this)
    this.handleClickLogo = this.handleClickLogo.bind(this)
    this.renderLinks = this.renderLinks.bind(this)
  }

  // handle event
  handleClickNavLink(event) {
    this.setState({ selected: event.target.id })
  }

  handleClickLogo(event) {
    event.preventDefault()
    this.setState({ selected: null })
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
      <Link to={"/"} onClick={this.handleClickLogo}>
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
      <nav id={"nav"}>
        {this.renderLogo()}
        <div id={"nav-link-list"}>{this.renderLinks()}</div>
      </nav>
    )
  }
}

export default Nav
