import React from "react"
import "./Banner.css"
import { Link } from "react-router-dom"

class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div id={'banners-wrap'}>
        <section id={"banner-container"}>
          <div id={"banner"}>
            <div id={"banner-text"}>
              <h4> {"SOURCE"} </h4>
              <p> {"- The Fuel of the ReSource Economy"} </p>
            </div>
            <Link to={"/TGE"}>Learn More about the TGE</Link>
          </div>
        </section>

        <section id={"contracts"}>
          <p id={'contracts-title'}>Contracts:</p>
          <div className={'contract-item'}>
            <a
                href="https://explorer.celo.org/address/0x74c0C58B99b68cF16A717279AC2d056A34ba2bFe/contracts"
                target={"_blank"}
            >
              <span>Celo</span>
              (0x74c0...2bFe)
            </a>
          </div>
          <div className={'contract-item'}>
            <a
                href="https://etherscan.io/token/0x8d2b3350edf2e8a0bf9deee1dd215bcebc772048"
                target={"_blank"}
            >
              <span>ETH</span>
              (0x8d2b...2048)
            </a>
          </div>
          <div className={'contract-item'}>
            <a
                href=""
            >
              <span>BSC</span>
              (coming soon)
            </a>
          </div>
        </section>

      </div>
    )
  }
}

export default Banner
