import React from "react"
import "./Footer.css"
import { getCloudinaryImagePath } from "../App/App"

// images
const logosImgSrcName = "footer-logos_bzcfwy.svg"

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
    }
  }

  render() {
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
            target="_blank"
            style={{ color: "white", textDecoration: "underline" }}
            href="https://resourcenetwork.co/"
          >
            <p>resourcenetwork.co</p>
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
