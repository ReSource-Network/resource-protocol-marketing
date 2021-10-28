import React from "react"
import Background from "../Background/Background"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProtocolRoles from "../ProtocolRoles/ProtocolRoles"
import HowItWorks from "../HowItWorks/HowItWorks"
import StakeInRealEconomy from "../StakeInRealEconomy/StakeInRealEconomy"
import ReInventingMoney from "../ReInventingMoney/ReInventingMoney"
import SocialLinks from "../SocialLinks/SocialLinks"
import Partners from "../Partners/Partners"
import FutureIsMutual from "../FutureIsMutual/FutureIsMutual"
import Footer from "../Footer/Footer"
import Stakeholders from "../Stakeholders/Stakeholders";

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
    }
  }

  renderMain() {
    return (
      <main
        id={"main"}
        className={"parallax"}
        style={{ height: `${this.height + "px"}`, color: "black" }}
      >
        <Hero />
        <Background />
        <ProtocolRoles />
        <HowItWorks />
        <StakeInRealEconomy />
        <ReInventingMoney />
        <SocialLinks />
        <Partners />
        <Stakeholders />
        <FutureIsMutual />
        <Footer />
      </main>
    )
  }

  render() {
    return this.renderMain()
  }
}

export default Home
