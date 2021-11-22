import React from "react"
import "./Hero.css"
import Button from "../Button/Button"
import { getCloudinaryImagePath } from "../App/App"
import Typical from "react-typical"

// images
const creditCardsPngSrcName = "crypto-credit-cards_iabj40.png"
const creditCardsWebpSrcName = "crypto-credit-cards_smht6f.webp"

class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section id={"hero"}>
        {/* CREDIT CARDS IMAGE */}
        <picture className={"creditCardImg"}>
          <source srcSet={getCloudinaryImagePath(creditCardsWebpSrcName)} type={"image/webp"} />
          <source srcSet={getCloudinaryImagePath(creditCardsPngSrcName)} type={"image/png"} />
          <img
            alt={"crypto credit line card with negative balance"}
            src={getCloudinaryImagePath(creditCardsPngSrcName)}
            className={"creditCardImg"}
          />
        </picture>

        {/* COPY */}
        <header>
          <Typical
            loop={Infinity}
            wrapper={"h1"}
            steps={[
              "Credit without creditors",
              1000,
              "Loans without interest payments",
              1000,
              "Trade without cash",
              1000,
            ]}
          />

          <h2>{"Turn untapped resources into liquidity "}</h2>

          {/* BUTTONS */}
          <div id={"hero-buttons-container"}>
            <Button
              text={"How it works"}
              type={"cta"}
              color={"default"}
              iconName={"youtube"}
              href={"https://www.youtube.com/embed/zPGoLcptHYo"}
              target={"_blank"}
            />

            <Button
              text={"Litepaper"}
              type={"cta"}
              color={"primary"}
              iconName={"externalLink"}
              href={"https://resource-protocol.gitbook.io/resource-litepaper/"}
              target={"_blank"}
            />
          </div>
        </header>
      </section>
    )
  }
}

export default Hero
