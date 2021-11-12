import React from "react"
import "./SourceUtility.css"

// data
let stake = {
  title: "Stake",
  description: "Stake SOURCE to underwrite credit lines and earn rewards",
}
let delegate = {
  title: "Delegate",
  description: "Delegate SOURCE to underwriters to earn rewards passively",
}
let use = {
  title: "Use",
  description: "Use SOURCE to pay transaction fees on ReSource",
}
let govern = {
  title: "Govern",
  description: "Stake or delegate SOURCE to participate in protocol governance",
}

let utilityInfoItems = [stake, delegate, use, govern]

class SourceUtility extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.renderUtilityInfo = this.renderUtilityInfo.bind(this)
  }

  renderUtilityInfo() {
    return utilityInfoItems.map((utilItem) => (
      <div className={"source-utility-info-item"}>
        <h5>{utilItem.title}</h5>
        <p>{utilItem.description}</p>
      </div>
    ))
  }

  render() {
    return (
      <section id={"source-utility"}>
        <h4> {"SOURCE Utility"} </h4>
        <div className={"source-utility-info-items"}>{this.renderUtilityInfo()}</div>
      </section>
    )
  }
}

export default SourceUtility
